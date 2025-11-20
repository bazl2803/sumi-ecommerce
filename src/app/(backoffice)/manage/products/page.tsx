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
              <IconPlus />
              Crear
            </Button>
          </Group>
        </Toolbar>
        <Toolbar>
          <Input placeholder="Buscar" type="search" />

          <Group>
            <Button variant="secondary">
              <IconFilter /> Filtrar
            </Button>
            <Button variant="secondary">
              <IconArrowsSort /> Ordenar
            </Button>
          </Group>
        </Toolbar>
      </PageHeader>
    </>
  );
}
