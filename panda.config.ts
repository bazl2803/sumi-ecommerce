import { defineConfig } from '@pandacss/dev';

export default defineConfig({
    presets: ['@pandacss/preset-base', '@pandacss/preset-panda'],
    preflight: true,
    include: [
        './components/**/*.{ts,tsx,js,jsx}',
        './features/**/*.{ts,tsx,js,jsx}',
        './app/**/*.{ts,tsx,js,jsx}',
    ],
    exclude: [],
    conditions: {
        extend: {
            hover: {
                '@media (hover: hover) and (pointer: fine)': {
                    '&:is(:hover, [data-hover])': '@slot',
                },
            },
        },
    },
    theme: {
        extend: {
            tokens: {
                colors: {
                    primary: {
                        value: '#132B4D',
                    },
                    secondary: {
                        value: '#FDEE01',
                    },
                },
            },
        },
    },
    outdir: 'styled-system',
});
