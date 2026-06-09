import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import fs from 'fs';

// https://vite.dev/config/
export default defineConfig({
    server: {
        https: {
            key: fs.readFileSync(`./ssl/vitoroyeca_me.key`),
            cert: fs.readFileSync(`./ssl/vitoroyeca_me.crt`),
        },
        // Make sure the server is accessible over the local network
        host: '0.0.0.0',
        port: 2443,
    },
    plugins: [react()],
})
