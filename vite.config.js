import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
    build: {
        rollupOptions: {
            input: {
                main: resolve(__dirname, 'index.html'),
                ejercicio1: resolve(__dirname, 'src/html/ejercicio_1.html'),
                ejercicio2: resolve(__dirname, 'src/html/ejercicio_2.html'),
                ejercicio3: resolve(__dirname, 'src/html/ejercicio_3.html'),
                ejercicio4: resolve(__dirname, 'src/html/ejercicio_4.html'),
                ejercicio5: resolve(__dirname, 'src/html/ejercicio_5.html'),
                ejercicio6: resolve(__dirname, 'src/html/ejercicio_6.html'),
                ejercicio7: resolve(__dirname, 'src/html/ejercicio_7.html'),
                ejercicio8: resolve(__dirname, 'src/html/ejercicio_8.html'),
                ejercicio9: resolve(__dirname, 'src/html/ejercicio_9.html'),
            }
        }
    } 
});