import { Hint, Stack, Table, Typography } from '@/components'
import { css } from 'panda/css'
import { grid } from 'panda/patterns'
import Image from 'next/image'

export const ProductsTable = () => {
	return (
		<Table>
			<tbody>
				<tr className={css({ userSelect: 'none' })}>
					<td>
						<div
							className={css({
								display: 'grid',
								gridTemplateColumns: 'auto 1fr',
								gridTemplateRows: '1fr auto',
								justifyItems: 'start',
								gap: 4,
							})}
						>
							<div
								className={css({
									backgroundColor: 'white',
									justifySelf: 'center',
									gridColumn: '1/2',
									gridRow: '1/3',
									aspectRatio: 1,
									borderRadius: 'lg',
									overflow: 'hidden',
									padding: 4,
									border: '1px solid',
									borderColor: { base: 'neutral.200', _osDark: 'neutral.700' },
								})}
							>
								<Image
									className={css({
										width: '100%',
										height: '100%',
										objectFit: 'cover',
										marginInline: 'auto',
									})}
									src="/8d7ae1c9-b155-4876-a567-8f83ff8ebc69.jpg"
									alt=""
									width={50}
									height={50}
								/>
							</div>
							<div className={css({ gridColumn: '2/3', gridRow: '1/2' })}>
								<Stack>
									<Typography role="callout">Breaker 120V</Typography>
									<Hint>GE</Hint>
								</Stack>
							</div>
							<div className={css({ gridColumn: '2/3', gridRow: '2/3' })}>
								<Stack>
									<Hint>Precio</Hint>
									<Typography role="callout">$13.50 - $18.70</Typography>
								</Stack>
							</div>
						</div>
					</td>
					<td>
						<div
							className={grid({
								display: 'grid',
								gridTemplateColumns: 'auto auto',
								gridTemplateRows: 'auto auto',
								justifyItems: 'start',
								rowGap: 4,
								columnGap: 12,
							})}
						>
							<Stack>
								<Typography role="callout">56 unidades</Typography>
								<Hint>Existencia</Hint>
							</Stack>

							<Stack>
								<Typography role="callout">GE6135120</Typography>
								<Hint>SKU</Hint>
							</Stack>
							<Stack>
								<Typography role="callout">$723.00</Typography>
								<Hint>Valor total</Hint>
							</Stack>
						</div>
					</td>
					<td>
						<Stack>
							<Typography role="callout">Breakers</Typography>
							<Hint>Categoría</Hint>
						</Stack>
					</td>
					<td>
						<Stack>
							<Typography role="callout">12</Typography>
							<Hint>Vendidos esta semana</Hint>

							<Typography role="callout">2536</Typography>
							<Hint>Vendidos Totales</Hint>
						</Stack>
					</td>
				</tr>
			</tbody>
		</Table>
	)
}
