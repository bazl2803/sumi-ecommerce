import {
  Button,
  Group,
  Hint,
  Input,
  PageContent,
  PageHeader,
  Stat,
  StatLabel,
  StatValue,
  Tile,
  TileContent,
  TileHeader,
  Toolbar,
  Typography,
} from "@/components";
import {
  IconArrowsSort,
  IconFilter,
  IconPackage,
  IconPlus,
} from "@tabler/icons-react";
import { css } from "panda/css";
import { flex } from "panda/patterns";

export default function ProductsPage() {
  return (
    <>
      <PageHeader className={flex({ direction: "column", gap: 4 })}>
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
      </PageHeader>

      <PageContent>
        <div
          className={css({
            display: "grid",
            gridTemplateColumns: {
              base: "repeat(auto-fit, minmax(min(300px, 100%), 1fr))",
              lg: "repeat(4, 1fr)",
            },
            gap: 4,
          })}
        >
          <Tile surface="outline">
            <TileHeader>
              <StatLabel>Productos</StatLabel>
              <IconPackage />
            </TileHeader>
            <TileContent>
              <Stat>
                <StatValue>2,934</StatValue>
                <Hint>Totales Activos</Hint>
              </Stat>
            </TileContent>
          </Tile>

          <Tile surface="outline">
            <TileHeader>
              <StatLabel>Productos</StatLabel>
              <IconPackage />
            </TileHeader>
            <TileContent>
              <Stat>
                <StatValue>2,934</StatValue>
                <Hint>Totales Activos</Hint>
              </Stat>
            </TileContent>
          </Tile>

          <Tile surface="outline">
            <TileHeader>
              <StatLabel>Productos</StatLabel>
              <IconPackage />
            </TileHeader>
            <TileContent>
              <Stat>
                <StatValue>2,934</StatValue>
                <Hint>Totales Activos</Hint>
              </Stat>
            </TileContent>
          </Tile>

          <Tile surface="outline">
            <TileHeader>
              <StatLabel>Productos</StatLabel>
              <IconPackage />
            </TileHeader>
            <TileContent>
              <Stat>
                <StatValue>2,934</StatValue>
                <Hint>Totales Activos</Hint>
              </Stat>
            </TileContent>
          </Tile>
        </div>

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
      </PageContent>
    </>
  );
}
