import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { resolve } from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': resolve(__dirname, './src')
    },
    extensions: ['.vue','.ts','.js','.json']
  },
  // 支持 less 语法
  css: {
    preprocessorOptions: {
      less: {
        javascriptEnabled: true,
      }
    }
  },
  server: {
    port: 8192,
    cors: true, // 允许跨域
    open: true, // 项目启动时自动打开浏览器
    // 远程服务器代理
    proxy: {
      // 用户模块
      '/user-api': {
        target: 'http://localhost:7001/campusUser/',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/user-api/, '')
      },
      // 消息模块
      '/message-api': {
        target: 'http://localhost:7002/campusMessage/',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/message-api/, '')
      },
      // 动态模块
      '/contact-api': {
        target: 'http://localhost:7003/campusContact/',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/contact-api/, '')
      },
      // 交易模块
      '/trade-api': {
        target: 'http://localhost:7004/campusTrade/',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/trade-api/, '')
      },
      // oss模块 (文件上传与下载)
      '/oss-api': {
        target: 'http://localhost:7005/campusOss/',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/oss-api/, '')
      },
      // 兼职模块
      '/parttime-api': {
        target: 'http://localhost:7006/campusParttime/',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/parttime-api/, '')
      },
      // 招募模块
      '/recruit-api': {
        target: 'http://localhost:7007/campusRecruit/',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/recruit-api/, '')
      },
    }
  }
})
