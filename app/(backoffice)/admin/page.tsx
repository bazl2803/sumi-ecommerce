import { Typography } from '@/components';
import { sva } from '@/styled-system/css';

/* ----------------------------------------------------------------------------- */
/* Recipes                                                                       */
/* ----------------------------------------------------------------------------- */

const AdminPageRecipe = sva({
    slots: ['root', 'header', 'greating', 'stats'],
    base: {
        root: {
            display: 'flex',
            flexDirection: 'column',
            gap: 6,
        },
        header: {
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: 2,
        },
        greating: {
            display: 'flex',
            flexDirection: 'column',
        },
        stats: {
            display: 'grid',
            gridTemplateColumns: {
                base: 'repeat(2, minmax(0, 1fr))',
                md: 'repeat(auto-fit, minmax(250px, 1fr))',
            },
            gap: { base: 4, md: 6 },
        },
    },
});

/* ----------------------------------------------------------------------------- */
/* Component                                                                     */
/* ----------------------------------------------------------------------------- */

export default function AdminPage() {
    const styles = AdminPageRecipe();

    return (
        <div className={styles.root}>
            <header className={styles.header}>
                <div className={styles.greating}>
                    <Typography variant="body">
                        👋 Buenos días
                    </Typography>
                    <Typography variant="title-1" emphasized>
                        Bryan
                    </Typography>
                </div>
            </header>

            <main></main>
        </div>
    );
}
