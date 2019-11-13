
// ref: https://umijs.org/config/
import pageRoutes from './router.config';
import webpackPlugin from './plugin.config';
const path = require('path');
const plugins = [
  // ref: https://umijs.org/plugin/umi-plugin-react.html
  ['umi-plugin-react', {
    antd: true,
    dva: true,
    dynamicImport: false,
    title: 'umi_new',
    dll: true,
    locale: {
      enable: true,
      default: 'en-US',
    },
    routes: {
      exclude: [
        /models\//,
        /services\//,
        /model\.(t|j)sx?$/,
        /service\.(t|j)sx?$/,
        /components\//,
      ],
    },
  }],
]

export default {
  alias: {
    "@": path.resolve("src"),
    "@config": path.resolve("config"),
  },
  treeShaking: true,
  plugins: plugins,
  // 路由配置
  routes: pageRoutes,
  chainWebpack: webpackPlugin,
  proxy: {
    "/api": {
      "target": "http://148.70.24.188:4231/",
      "changeOrigin": true,
      "pathRewrite": { "^/api": "" }
    },
    "/web": {
      "target": "http://jsonplaceholder.typicode.com/",
      "changeOrigin": true,
      "pathRewrite": { "^/web": "" }
    }

    // "/api": {
    //   "target": "http://jsonplaceholder.typicode.com/",
    //   "changeOrigin": true,
    //   "pathRewrite": { "^/api": "" }
    // }
  },
}
