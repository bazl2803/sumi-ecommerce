import { Button, Group, Input, PageHeader, Toolbar, Typography } from "@/components";
import { IconArrowsSort, IconFilter, IconPlus } from "@tabler/icons-react";

export default function ProductsPage() {
  return (
    <>
      <PageHeader>
        <Toolbar>
          <Typography role="title1" emphasized>
            Productos
          </Typography>

          <Group>
            <Button>
              <IconPlus size={20} />
              Crear
            </Button>
          </Group>
        </Toolbar>
        <Toolbar>
          <Input placeholder="Buscar" type="search" />

          <Group>
            <Button variant="outline">
              <IconFilter size={20} /> Filtrar
            </Button>
            <Button variant="outline">
              <IconArrowsSort size={20} /> Ordenar
            </Button>
          </Group>
        </Toolbar>
      </PageHeader>
    </>
  );
}
