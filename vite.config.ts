import react from '@vitejs/plugin-react-swc'
import path from 'path'
import { defineConfig } from 'vite'

const root = (yourPath: string) => path.resolve(__dirname, yourPath)

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': root('src'),
      '@components': root('src/components/index.ts'),
      '@store': root('src/store'),
      '@types': root('src/types'),
    },
  },
})
