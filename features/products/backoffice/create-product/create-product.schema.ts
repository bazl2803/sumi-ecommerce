import { z } from 'zod';

const imageSchema = z.object({
    id: z.string().min(1), // nanoid/uuid estable
    url: z.url(),
    key: z.string().optional(), // key de S3/UploadThing para poder borrarla
    alt: z.string().max(200).optional(),
});

const optionSchema = z.object({
    name: z.string().min(1), // "Color", "Talla"
    values: z
        .array(
            z.object({
                value: z.string().min(1), // "Rojo", "M"
                imageId: z.string().optional(), // referencia a images[].id
            }),
        )
        .min(1),
});

const variantSchema = z.object({
    sku: z.string().min(1),
    attributes: z.record(z.string(), z.string()), // { Color: "Rojo", Talla: "M" }
    imageId: z.string().optional(), // override opcional
    price: z.number().int().min(0).optional(), // en centavos; si no hay, usa el del producto
    stock: z.number().int().min(0),
});

export const createProductSchema = z
    .object({
        name: z.string().min(1),
        description: z.string().optional(),
        slug: z.string().regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/),
        price: z.number().int().min(0), // precio base en centavos
        images: z.array(imageSchema).min(1),
        options: z.array(optionSchema).default([]),
        variants: z.array(variantSchema).default([]),
    })
    .superRefine((data, ctx) => {
        const imageIds = new Set(data.images.map((i) => i.id));
        const issue = (path: (string | number)[], message: string) =>
            ctx.addIssue({ code: 'custom', path, message });

        // IDs de imagen únicos
        if (imageIds.size !== data.images.length) {
            issue(['images'], 'Hay IDs de imagen duplicados');
        }

        // imageId de las opciones debe existir en la galería
        data.options.forEach((opt, i) =>
            opt.values.forEach((v, j) => {
                if (v.imageId && !imageIds.has(v.imageId)) {
                    issue(
                        ['options', i, 'values', j, 'imageId'],
                        'La imagen no existe en la galería',
                    );
                }
            }),
        );

        const seenSkus = new Set<string>();
        const seenCombos = new Set<string>();

        data.variants.forEach((variant, i) => {
            // SKU único
            if (seenSkus.has(variant.sku))
                issue(['variants', i, 'sku'], 'SKU duplicado');
            seenSkus.add(variant.sku);

            // imageId override válido
            if (variant.imageId && !imageIds.has(variant.imageId)) {
                issue(
                    ['variants', i, 'imageId'],
                    'La imagen no existe en la galería',
                );
            }

            // attributes deben coincidir exactamente con las options definidas
            for (const opt of data.options) {
                const val = variant.attributes[opt.name];
                if (!val || !opt.values.some((v) => v.value === val)) {
                    issue(
                        ['variants', i, 'attributes', opt.name],
                        `Valor inválido para "${opt.name}"`,
                    );
                }
            }
            if (
                Object.keys(variant.attributes).length !== data.options.length
            ) {
                issue(
                    ['variants', i, 'attributes'],
                    'Los atributos no coinciden con las opciones',
                );
            }

            // combinación única
            const combo = data.options
                .map((o) => variant.attributes[o.name])
                .join('|');
            if (seenCombos.has(combo))
                issue(['variants', i, 'attributes'], 'Combinación duplicada');
            seenCombos.add(combo);
        });
    });
