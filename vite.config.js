import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// manually copy formtest.html on build
import { viteStaticCopy } from 'vite-plugin-static-copy';

export default defineConfig({
  plugins: [
    react(),
    viteStaticCopy({
      targets: [
        {
          src: 'public/formtest.html', // force it into dist/
          dest: ''                     // root of dist
        }
      ]
    })
  ]
});
