import React from 'react';
import { Router as DefaultRouter, Route, Switch } from 'react-router-dom';
import dynamic from 'umi/dynamic';
import renderRoutes from 'umi/lib/renderRoutes';
import history from '@tmp/history';
import RendererWrapper0 from '/Users/jiminglu/jml/hulk_server/cluster/web_server_new/src/pages/.umi/LocaleWrapper.jsx';
import { routerRedux } from 'dva';

const Router = routerRedux.ConnectedRouter;

const routes = [
  {
    path: '/os',
    redirect: '/os/devicelist',
    exact: true,
    _title: 'umi_new',
    _title_default: 'umi_new',
  },
  {
    path: '/detail/sensitive',
    redirect: '/detail/sensitive/file',
    exact: true,
    _title: 'umi_new',
    _title_default: 'umi_new',
  },
  {
    path: '/detail',
    redirect: '/detail/index',
    exact: true,
    _title: 'umi_new',
    _title_default: 'umi_new',
  },
  {
    path: '/',
    redirect: '/os/devicelist',
    exact: true,
    _title: 'umi_new',
    _title_default: 'umi_new',
  },
  {
    path: '/login',
    name: 'login',
    component: require('../Login/index').default,
    title: '登录',
    exact: true,
    Routes: [require('./TitleWrapper.jsx').default],
    _title: '登录',
    _title_default: 'umi_new',
  },
  {
    path: '/',
    name: 'defalut',
    component: require('../../layouts/Base').default,
    routes: [
      {
        path: '/os',
        name: 'os',
        component: require('../../layouts/OsBasic').default,
        authority: ['admin', 'user'],
        routes: [
          {
            path: '/os/devicelist',
            title: '设备列表',
            component: require('../DeviceList/index').default,
            exact: true,
            Routes: [require('./TitleWrapper.jsx').default],
            _title: '设备列表',
            _title_default: 'umi_new',
          },
          {
            path: '/os/record',
            title: '登录记录',
            authority: ['admin', 'user'],
            component: require('../LoginRecord/index').default,
            exact: true,
            Routes: [require('./TitleWrapper.jsx').default],
            _title: '登录记录',
            _title_default: 'umi_new',
          },
          {
            path: '/os/map',
            title: '设备地图',
            authority: ['admin', 'user'],
            component: require('../Map/index').default,
            exact: true,
            Routes: [require('./TitleWrapper.jsx').default],
            _title: '设备地图',
            _title_default: 'umi_new',
          },
          {
            component: () =>
              React.createElement(
                require('/Users/jiminglu/jml/hulk_server/cluster/web_server_new/node_modules/umi-build-dev/lib/plugins/404/NotFound.js')
                  .default,
                { pagesPath: 'src/pages', hasRoutesInConfig: true },
              ),
            _title: 'umi_new',
            _title_default: 'umi_new',
          },
        ],
        _title: 'umi_new',
        _title_default: 'umi_new',
      },
      {
        path: '/detail',
        name: 'detail',
        authority: ['admin', 'user'],
        component: require('../../layouts/DetailBasic').default,
        routes: [
          {
            path: '/detail/index',
            title: '设备首页',
            authority: ['admin', 'user'],
            component: require('../Overview/index').default,
            exact: true,
            Routes: [require('./TitleWrapper.jsx').default],
            _title: '设备首页',
            _title_default: 'umi_new',
          },
          {
            path: '/detail/file',
            title: '文件系统',
            authority: ['admin', 'user'],
            component: require('../FileSystem/File').default,
            exact: true,
            Routes: [require('./TitleWrapper.jsx').default],
            _title: '文件系统',
            _title_default: 'umi_new',
          },
          {
            path: '/detail/monitor',
            title: '性能监控',
            authority: ['admin', 'user'],
            component: require('../FileSystem/index').default,
            exact: true,
            Routes: [require('./TitleWrapper.jsx').default],
            _title: '性能监控',
            _title_default: 'umi_new',
          },
          {
            path: '/detail/terminal',
            title: '终端',
            authority: ['admin', 'user'],
            component: require('../FileSystem/index').default,
            exact: true,
            Routes: [require('./TitleWrapper.jsx').default],
            _title: '终端',
            _title_default: 'umi_new',
          },
          {
            path: '/detail/VNC',
            title: 'VNC',
            authority: ['admin', 'user'],
            component: require('../FileSystem/VNC').default,
            exact: true,
            Routes: [require('./TitleWrapper.jsx').default],
            _title: 'VNC',
            _title_default: 'umi_new',
          },
          {
            path: '/detail/sensitive',
            authority: ['admin', 'user'],
            title: '样本分析',
            component: require('../../layouts/SensitiveSide.js').default,
            routes: [
              {
                path: '/detail/sensitive/file',
                title: '样本文件',
                authority: ['admin', 'user'],
                component: require('../Sensitive/file').default,
                exact: true,
                Routes: [require('./TitleWrapper.jsx').default],
                _title: '样本分析 - 样本文件',
                _title_default: 'umi_new',
              },
              {
                path: '/detail/sensitive/pic',
                title: '样本截图',
                authority: ['admin', 'user'],
                component: require('../Sensitive/picture').default,
                exact: true,
                Routes: [require('./TitleWrapper.jsx').default],
                _title: '样本分析 - 样本截图',
                _title_default: 'umi_new',
              },
              {
                component: () =>
                  React.createElement(
                    require('/Users/jiminglu/jml/hulk_server/cluster/web_server_new/node_modules/umi-build-dev/lib/plugins/404/NotFound.js')
                      .default,
                    { pagesPath: 'src/pages', hasRoutesInConfig: true },
                  ),
                _title: 'umi_new',
                _title_default: 'umi_new',
              },
            ],
            _title: '样本分析',
            _title_default: 'umi_new',
          },
          {
            component: () =>
              React.createElement(
                require('/Users/jiminglu/jml/hulk_server/cluster/web_server_new/node_modules/umi-build-dev/lib/plugins/404/NotFound.js')
                  .default,
                { pagesPath: 'src/pages', hasRoutesInConfig: true },
              ),
            _title: 'umi_new',
            _title_default: 'umi_new',
          },
        ],
        _title: 'umi_new',
        _title_default: 'umi_new',
      },
      {
        path: '/404',
        component: require('../404/index').default,
        title: '404',
        exact: true,
        Routes: [require('./TitleWrapper.jsx').default],
        _title: '404',
        _title_default: 'umi_new',
      },
      {
        path: '/*',
        component: require('../404/index').default,
        title: 'Unfound',
        exact: true,
        Routes: [require('./TitleWrapper.jsx').default],
        _title: 'Unfound',
        _title_default: 'umi_new',
      },
      {
        component: () =>
          React.createElement(
            require('/Users/jiminglu/jml/hulk_server/cluster/web_server_new/node_modules/umi-build-dev/lib/plugins/404/NotFound.js')
              .default,
            { pagesPath: 'src/pages', hasRoutesInConfig: true },
          ),
        _title: 'umi_new',
        _title_default: 'umi_new',
      },
    ],
    _title: 'umi_new',
    _title_default: 'umi_new',
  },
  {
    component: () =>
      React.createElement(
        require('/Users/jiminglu/jml/hulk_server/cluster/web_server_new/node_modules/umi-build-dev/lib/plugins/404/NotFound.js')
          .default,
        { pagesPath: 'src/pages', hasRoutesInConfig: true },
      ),
    _title: 'umi_new',
    _title_default: 'umi_new',
  },
];
window.g_routes = routes;
const plugins = require('umi/_runtimePlugin');
plugins.applyForEach('patchRoutes', { initialValue: routes });

export { routes };

export default class RouterWrapper extends React.Component {
  unListen() {}

  constructor(props) {
    super(props);

    // route change handler
    function routeChangeHandler(location, action) {
      plugins.applyForEach('onRouteChange', {
        initialValue: {
          routes,
          location,
          action,
        },
      });
    }
    this.unListen = history.listen(routeChangeHandler);
    // dva 中 history.listen 会初始执行一次
    // 这里排除掉 dva 的场景，可以避免 onRouteChange 在启用 dva 后的初始加载时被多执行一次
    const isDva =
      history.listen
        .toString()
        .indexOf('callback(history.location, history.action)') > -1;
    if (!isDva) {
      routeChangeHandler(history.location);
    }
  }

  componentWillUnmount() {
    this.unListen();
  }

  render() {
    const props = this.props || {};
    return (
      <RendererWrapper0>
        <Router history={history}>{renderRoutes(routes, props)}</Router>
      </RendererWrapper0>
    );
  }
}
