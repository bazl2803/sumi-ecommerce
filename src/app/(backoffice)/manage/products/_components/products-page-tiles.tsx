import { Hint, Stat, StatLabel, StatValue, Tile, TileContent, TileHeader } from '@/components'
import { IconPackage } from '@tabler/icons-react'
import { css } from 'panda/css'

export const ProductsPageTiles = () => {
	return (
		<>
			<div
				className={css({
					display: 'grid',
					gridTemplateColumns: {
						base: 'repeat(1, 1fr)',
						sm: 'repeat(2, 1fr)',
						lg: 'repeat(4, 1fr)',
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
						<StatLabel>Inventario</StatLabel>
						<IconPackage />
					</TileHeader>
					<TileContent>
						<Stat>
							<StatValue>$24,934</StatValue>
							<Hint>Valor total</Hint>
						</Stat>
					</TileContent>
				</Tile>
				<Tile surface="outline">
					<TileHeader>
						<StatLabel>Productos Vendidos</StatLabel>
						<IconPackage />
					</TileHeader>
					<TileContent>
						<Stat>
							<StatValue>65M</StatValue>
							<Hint>Artículos vendidos</Hint>
						</Stat>
					</TileContent>
				</Tile>
				<Tile surface="outline">
					<TileHeader>
						<StatLabel>Valor Total</StatLabel>
						<IconPackage />
					</TileHeader>
					<TileContent>
						<Stat>
							<StatValue>$24,934</StatValue>
							<Hint>Valor total</Hint>
						</Stat>
					</TileContent>
				</Tile>
			</div>
		</>
	)
}
