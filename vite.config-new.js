// vite.config.js
import { defineConfig } from 'vite'
import glob from "glob";
import { resolve } from 'path'
import handlebars from 'vite-plugin-handlebars';

 
export default defineConfig({
  // ...
  base: './',
  root: resolve(__dirname, 'src'),

  // Server https://vitejs.dev/config/server-options.html
  server:{
    host:true,
    port:3000, // you can specify which IP addresses the server should listen on.
    hot: true,
    open:true
  },

  build:{
    outDir: "../dist",
    sourcemap: true,
    emptyOutDir: true,
    rollupOptions: {
      //input: glob.sync(resolve(__dirname, "src", "*.html")),
      input: {
        main: resolve(__dirname, 'src/*.html'),
        js: resolve(__dirname, 'src/asstes/js/*.js'),
      },
      
      
      output: {
          chunkFileNames: 'assets/js/[name].js',
          entryFileNames: 'assets/js/[name].js',
          
          assetFileNames: ({name}) => {
            if (/\.(gif|jpe?g|png|svg)$/.test(name ?? '')){
                return 'assets/images/[name][extname]';
            }
            
            if (/\.css$/.test(name ?? '')) {
                return 'assets/css/[name][extname]';   
            }
   
            // default value
            // ref: https://rollupjs.org/guide/en/#outputassetfilenames
            return 'assets/[name][extname]';
          },
        },
        watch: {
          exclude: 'src/partials/**'
        },
        
      }
  },
  plugins: [
    handlebars({
      partialDirectory: resolve(__dirname, "src", 'partials', ),
      // reloadOnPartialChange: true,
      
    }),
  ],
})
