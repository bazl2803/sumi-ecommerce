import { css, sva } from 'panda/css'

export const NavbarRecipe = css({
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(60px, 1fr))',
    gridGap: 1,
    padding: 2,
    margin: 1,
    borderRadius: 'full',
    outline: '1px solid',
    outlineColor: { base: 'neutral.200/10', _osDark: 'neutral.800/10' },
    backgroundColor: { base: 'neutral.50/10', _osDark: 'neutral.950/10' },
    backdropFilter: 'auto',
    backdropBlur: 'sm'
})

export const NavbarItemRecipe = sva({
    slots: ['root', 'label'],
    base: {
        root: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            rowGap: 1,
            padding: 1,
            borderRadius: '4xl',
            _hover: {
                bg: { base: 'neutral.100/30', _osDark: 'neutral.900/30' },
            }
        },
        label: {
            fontSize: 'xs',
            fontWeight: '500',
            color: { base: 'neutral.500', _osDark: 'neutral.400' },
            textOverflow: 'ellipsis',
            whiteSpace: 'nowrap',
            overflow: 'hidden',
            maxWidth: '100%',
        }
    }
})