declare module 'markdown-it-sanitizer' {
	export default function sanitizer_plugin(md, options): import('markdown-it').PluginWithOptions<T>;
}
