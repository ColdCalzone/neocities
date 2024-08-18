import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import wasmPack from 'vite-plugin-wasm-pack';

export default defineConfig({
	plugins: [
		// wasmPack('./misc-terminal'),
		sveltekit()
	],
	assetsInclude: ['**/*.md', '**/*.json']
});
