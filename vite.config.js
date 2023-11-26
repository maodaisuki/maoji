import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  // 对应 Github Page 仓库
  base: '/maoji',
  plugins: [
    vue(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  devServer: {
    https: false,
    prot: 5173,
    proxy: {
        '/api': {
            target: 'http://localhost:2018', //接口域名
            changeOrigin: true,             //是否跨域
            ws: true,                       //是否代理 websockets
            secure: false,                   //是否https接口
            pathRewrite: {                  //路径重置
                '^/api': ''
            }
        }
    }
  }
})
