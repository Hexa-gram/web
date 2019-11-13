import dva from 'dva';
import { Component } from 'react';
import createLoading from 'dva-loading';
import history from '@tmp/history';

let app = null;

export function _onCreate() {
  const plugins = require('umi/_runtimePlugin');
  const runtimeDva = plugins.mergeConfig('dva');
  app = dva({
    history,
    
    ...(runtimeDva.config || {}),
    ...(window.g_useSSR ? { initialState: window.g_initialData } : {}),
  });
  
  app.use(createLoading());
  (runtimeDva.plugins || []).forEach(plugin => {
    app.use(plugin);
  });
  
  app.model({ namespace: 'Base', ...(require('/Users/jiminglu/jml/hulk_server/cluster/web_server_new/src/models/Base.js').default) });
app.model({ namespace: 'DeviceList', ...(require('/Users/jiminglu/jml/hulk_server/cluster/web_server_new/src/models/DeviceList.js').default) });
app.model({ namespace: 'Login', ...(require('/Users/jiminglu/jml/hulk_server/cluster/web_server_new/src/models/Login.js').default) });
app.model({ namespace: 'Overview', ...(require('/Users/jiminglu/jml/hulk_server/cluster/web_server_new/src/models/Overview.js').default) });
app.model({ namespace: 'file', ...(require('/Users/jiminglu/jml/hulk_server/cluster/web_server_new/src/models/Sensitive/file.js').default) });
app.model({ namespace: 'picture', ...(require('/Users/jiminglu/jml/hulk_server/cluster/web_server_new/src/models/Sensitive/picture.js').default) });
  return app;
}

export function getApp() {
  return app;
}

export class _DvaContainer extends Component {
  render() {
    const app = getApp();
    app.router(() => this.props.children);
    return app.start()();
  }
}
