import adapter from '@sveltejs/adapter-static';
import preprocess from 'svelte-preprocess';

const dev = process.env.NODE_ENV === 'dev';

/** @type {import('@sveltejs/kit').Config} */
const config = {
    // Consult https://github.com/sveltejs/svelte-preprocess
    // for more information about preprocessors
    preprocess: [
        preprocess({
            postcss: true,
        }),
    ],

    kit: {
        adapter: adapter({
            pages: 'docs',
            assets: 'docs'
        }),
        paths: {
            base: dev ? '' : '',
        },
    }
};

export default config;
