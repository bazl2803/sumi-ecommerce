'use client'
import {
	Button,
	ButtonIcon,
	ButtonLabel,
	Dropdown,
	DropdownContent,
	DropdownTrigger,
	Group,
	Input,
	PageContent,
	PageHeader,
	Segment,
	Toolbar,
	Typography,
} from '@/components'
import { IconArrowsSort, IconCloudDownload, IconFilter, IconPlus } from '@tabler/icons-react'
import { css } from 'panda/css'
import { flex } from 'panda/patterns'
import { ProductsTable } from './_components/products-table'
import { useState } from 'react'
import { ProductsPageTiles } from './_components/products-page-tiles'

export default function ProductsPage() {
	const [status, setStatus] = useState('all')

	return (
		<>
			<PageHeader className={flex({ direction: 'column', gap: 4 })}>
				<Toolbar>
					<Typography
						role="title1"
						emphasized
					>
						Productos
					</Typography>

					<Group>
						<Dropdown>
							<DropdownTrigger>
								<Button variant="outline">
									<ButtonIcon icon={IconCloudDownload} />
									<ButtonLabel>Exportar CSV</ButtonLabel>
								</Button>
							</DropdownTrigger>
							<DropdownContent>Something</DropdownContent>
						</Dropdown>
						<Button>
							<ButtonIcon icon={IconPlus} />
							<ButtonLabel>Crear</ButtonLabel>
						</Button>
					</Group>
				</Toolbar>
			</PageHeader>

			<PageContent>
				<ProductsPageTiles />

				<Segment
					options={[
						{ label: 'Todos', value: 'all' },
						{ label: 'Activos', value: 'active' },
						{ label: 'Inactivos', value: 'inactive' },
					]}
					value={status}
					onChange={setStatus}
				/>

				<Toolbar>
					<Input
						className={css({
							width: 'min(360px, 100%)',
						})}
						placeholder="Buscar"
						type="search"
					/>

					<Group>
						<Button variant="outline">
							<ButtonIcon icon={IconFilter} />
							<ButtonLabel>Filtrar</ButtonLabel>
						</Button>
						<Button variant="outline">
							<ButtonIcon icon={IconArrowsSort} />
							<ButtonLabel>Ordenar</ButtonLabel>
						</Button>
					</Group>
				</Toolbar>

				<ProductsTable />
			</PageContent>
		</>
	)
}
