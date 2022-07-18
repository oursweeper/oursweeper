import { sveltekit } from '@sveltejs/kit/vite';
import wasmPack from 'vite-plugin-wasm-pack';

/** @type {import('vite').UserConfig} */
const config = {
	plugins: [sveltekit(), wasmPack('./backend')]
};

export default config;
