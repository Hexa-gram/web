import { fetch } from 'dva';

function checkStatus(response) {
  if (response.status >= 200 && response.status < 300) {
    return response;
  }

  const error = new Error(response.statusText);
  error.response = response;
  throw error;
}



/**
 * Requests a URL, returning a promise.
 *
 * @param  {string} url       The URL we want to request
 * @param  {object} [options] The options we want to pass to "fetch"
 * @return {object}           An object containing either "data" or "err"
 */
export default async function request(url, options) {
  if (options && options.query) {
    let query = options.query;
    let paramsArray = [];
    // get形式拼接参数  
    Object.keys(query).forEach(key => paramsArray.push(key + '=' + query[key]))
    if (url.search(/\?/) === -1) {
      url += '?' + paramsArray.join('&')
    } else {
      url += '&' + paramsArray.join('&')
    }
  }

  if (options.body) {
    options.headers = { 'Content-Type': 'application/json' };
  }

  const response = await fetch(url, options);

  checkStatus(response);

  const data = await response.json();

  const ret = {
    data,
    headers: {},
  };

  if (response.headers.get('x-total-count')) {
    ret.headers['x-total-count'] = response.headers.get('x-total-count');
  }

  // if (ret.data.code !== 200) { //错误拦截,也可以根据code在页面级自定义弹窗
  //   window.location.href = '/404';
  // }

  return ret;
}

