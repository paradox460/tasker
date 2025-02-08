import * as esbuild from 'npm:esbuild';
import { denoPlugins } from "jsr:@luca/esbuild-deno-loader";

await esbuild.build({
  plugins: [...denoPlugins()],
  entryPoints: ['src/index.mts'],
  bundle: true,
  minify: true,
  outfile: 'dist/pluscode.js'
})
