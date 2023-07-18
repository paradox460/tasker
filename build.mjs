import * as esbuild from 'esbuild';

await esbuild.build({
  entryPoints: ['src/index.mjs'],
  bundle: true,
  minify: true,
  outfile: 'dist/sunset.js'
})
