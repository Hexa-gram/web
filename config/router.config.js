export default [
  // login
  { path: '/login', name: 'login', component: './Login/index', title: '登录' },


  //app
  {
    path: '/',
    name: 'defalut',
    component: '../layouts/Base',
    // Routes: ['src/pages/Authorized'],
    routes: [
      { path: '/', redirect: '/os/devicelist' },

      // os
      {
        path: '/os',
        name: 'os',
        component: '../layouts/OsBasic',
        authority: ['admin', 'user'],
        routes: [
          { path: '/os', redirect: '/os/devicelist' },
          {
            path: '/os/devicelist',
            title: '设备列表',
            // authority: ['admin', 'user'],
            component: './DeviceList/index',
          },
          {
            path: '/os/record',
            title: '登录记录',
            authority: ['admin', 'user'],
            component: './LoginRecord/index',
          },
          {
            path: '/os/map',
            title: '设备地图',
            authority: ['admin', 'user'],
            component: './Map/index',
          },
        ]
      },
      // detail
      {
        path: '/detail',
        name: 'detail',
        authority: ['admin', 'user'],
        component: '../layouts/DetailBasic',
        routes: [
          { path: '/detail', redirect: '/detail/index' },
          {
            path: '/detail/index',
            title: '设备首页',
            authority: ['admin', 'user'],
            component: './Overview/index',
          },
          {
            path: '/detail/file',
            title: '文件系统',
            authority: ['admin', 'user'],
            component: './FileSystem/File',
          },
          {
            path: '/detail/monitor',
            title: '性能监控',
            authority: ['admin', 'user'],
            component: './FileSystem/index'
          },
          {
            path: '/detail/terminal',
            title: '终端',
            authority: ['admin', 'user'],
            component: './FileSystem/index',
          },
          {
            path: '/detail/VNC',
            title: 'VNC',
            authority: ['admin', 'user'],
            component: './FileSystem/VNC',
          },
          {
            path: '/detail/sensitive',
            authority: ['admin', 'user'],
            title: '样本分析',
            component: '../layouts/SensitiveSide.js',
            routes: [
              { path: '/detail/sensitive', redirect: '/detail/sensitive/file' },
              {
                path: '/detail/sensitive/file',
                title: '样本文件',
                authority: ['admin', 'user'],
                component: './Sensitive/file',
              },
              {
                path: '/detail/sensitive/pic',
                title: '样本截图',
                authority: ['admin', 'user'],
                component: './Sensitive/picture',
              },
            ]
          },

        ]
      },

      // else
      { path: '/404', component: './404/index', title: '404' },
      { path: "*", component: './404/index', title: "Unfound" },
    ],
  },

];
