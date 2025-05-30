import * as esbuild from 'npm:esbuild';
import { denoPlugins } from "jsr:@luca/esbuild-deno-loader";


await esbuild.build({
  plugins: [...denoPlugins()],
  entryPoints: ['src/index.mjs'],
  bundle: true,
  minify: true,
  outfile: 'dist/sunset.js'
})
