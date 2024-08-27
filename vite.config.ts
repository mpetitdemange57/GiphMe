import { defineConfig } from 'vite'
import {resolve} from "path"

const root = resolve(__dirname, 'src');
const assetsDir = resolve(root, 'assets');
const outDir = resolve(__dirname, 'dist');
const publicDir = resolve(__dirname, 'public');

export default defineConfig({
  build:{
    target:"esnext",
    rollupOptions:{
      input:{
        main: "./src/main.ts"
      },
      output:{
        entryFileNames: "[name].js"
      }
    },
  },
})