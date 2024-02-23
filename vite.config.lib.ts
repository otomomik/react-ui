import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'
import { vanillaExtractPlugin } from '@vanilla-extract/vite-plugin'
import { readdirSync } from 'fs'

const COMPONENTS = readdirSync(resolve(__dirname, 'src/components')).filter(
  (c) => !~c.indexOf('.')
)

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), vanillaExtractPlugin()],
  build: {
    lib: {
      entry: [
        resolve(__dirname, 'src/lib.ts'),
        ...COMPONENTS.map((c) =>
          resolve(__dirname, `src/components/${c}/${c}`)
        ),
      ],
      name: 'ReactUI',
      formats: ['es'],
      fileName: (format, entryName) => {
        if (entryName === 'lib') {
          return `react-ui.${format}.js`
        }
        return `${entryName}.${format}.js`
      },
    },
    rollupOptions: {
      external: ['react', 'react-dom'],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
        },
      },
    },
  },
})
