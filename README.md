## Getting Started

```bash
# Install
$ yarn # OR npm install

# Start dev server
$ yarn start #OR npm start

# Build and deploy
$ yarn build #OR npm build
```

## 项目结构

项目使用umi搭建包含antd和dva

```
.
├── dist/                          // 默认的 build 输出目录
├── mock/                          // mock 文件所在目录，基于 express
├── config/
    ├── config.js                  // umi 配置
    ├── config.prod.js             // 线上配置
    ├── config.test.js             // 测试配置
    ├── plugin.config.js           // webpack插件配置
    └── router.config.js           // 页面路由配置
└── src/                           // 源码目录，可选
    ├── layouts/index.js           // 全局布局
    ├── assets                     // 图片
    ├── pages/                     // 页面目录，里面的文件即路由
        ├── .umi/                  // dev 临时目录，需添加到 .gitignore
        ├── .umi-production/       // build 临时目录，会自动删除
        ├── document.ejs           // HTML 模板
        ├── 404.js                 // 404 页面
        ├── page1.js               // 页面 1，任意命名，导出 react 组件
        ├── page1.test.js          // 用例文件，umi test 会匹配所有 .test.js 和 .e2e.js 结尾的文件
        └── page2.js               // 页面 2，任意命名
    ├── global.css                 // 约定的全局样式文件，自动引入，也可以用 global.less
    ├── global.js                  // 可以在这里加入 polyfill
    ├── app.js                     // 运行时配置文件
├── .env                           // 环境变量
└── package.json
```  
