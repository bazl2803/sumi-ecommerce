import {
  Typography,
  Hint,
  Page,
  PageContent,
  PageHeader,
  Stat,
  StatLabel,
  StatValue,
  Tile,
  TileContent,
  TileHeader,
  Toolbar,
  Button,
  Group,
  Stack,
  Avatar,
} from "@/components";
import {
  IconBell,
  IconChartLine,
  IconPackage,
  IconPower,
  IconTag,
  IconUsersGroup,
} from "@tabler/icons-react";
import { css } from "panda/css";
import { flex } from "panda/patterns";

export default function DashboardPage() {
  return (
    <>
      <PageHeader
        className={flex({
          justifyContent: "space-between",
          alignItems: "center",
        })}
      >
        <Toolbar>
          <Stack>
            <Typography role="title1" emphasized>
              ¡Hola Bryan!👋
            </Typography>
          </Stack>

          <Group>
            <Button variant="ghost">
              <IconBell />
            </Button>
            <Button variant="ghost">
              <IconPower />
            </Button>
          </Group>
        </Toolbar>
      </PageHeader>

      <PageContent
        className={css({
          display: "grid",
          gridTemplateColumns: {
            base: "repeat(2, 1fr)",
            md: "repeat(4, 1fr)",
          },
          alignItems: "center",
          gap: 4,
          width: "full",
        })}
      >
        <Tile>
          <TileHeader>
            <StatLabel>Productos</StatLabel>
            <IconPackage />
          </TileHeader>
          <TileContent>
            <Stat>
              <StatValue>2,354</StatValue>
              <Hint>Totales activos</Hint>
            </Stat>
          </TileContent>
        </Tile>
        <Tile>
          <TileHeader>
            <StatLabel>Categorias</StatLabel>
            <IconTag />
          </TileHeader>
          <TileContent>
            <Stat>
              <StatValue>54</StatValue>
              <Hint>En total</Hint>
            </Stat>
          </TileContent>
        </Tile>
        <Tile>
          <TileHeader>
            <StatLabel>Ganacias</StatLabel>
            <IconChartLine />
          </TileHeader>
          <TileContent>
            <Stat>
              <StatValue>$12,974.76</StatValue>
              <Hint>Este mes</Hint>
            </Stat>
          </TileContent>
        </Tile>
        <Tile>
          <TileHeader>
            <StatLabel>Clientes</StatLabel>
            <IconUsersGroup />
          </TileHeader>
          <TileContent>
            <Stat>
              <StatValue>234</StatValue>
              <Hint>Nuevos este mes</Hint>
            </Stat>
          </TileContent>
        </Tile>
      </PageContent>
    </>
  );
}
