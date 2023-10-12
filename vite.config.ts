import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'

// utools打包plugin
// https://www.npmjs.com/package/vite-plugin-utools-helper
import {createPreloadPlugin, createUpxPlugin} from 'vite-plugin-utools-helper';

// ElementPlus按需导入
// https://element-plus.org/zh-CN/guide/quickstart.html
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import {ElementPlusResolver} from 'unplugin-vue-components/resolvers'

// https://vitejs.dev/config/
export default defineConfig({
    // 此处与Plugin.json中配置保持一致
    server: {
        host: '127.0.0.1',
        port: 7990
    },
    plugins: [
        vue(),
        createPreloadPlugin({
            // preload挂载方式
            // https://www.u.tools/docs/developer/preload.html
            name: 'window.preload',
            // preload打包内容
            path: 'src/preload/index.ts',
        }),
        createUpxPlugin({
            // 打包输出目录
            outDir: 'upx',
            // 打包名称格式，取决自plugin.json
            // https://www.u.tools/docs/developer/config.html
            outFileName: '[pluginName]-[version].upx'
        }),
        AutoImport({
            resolvers: [ElementPlusResolver()],
        }),
        Components({
            resolvers: [ElementPlusResolver()],
        })
    ],
})
