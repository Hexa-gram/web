//格式化日期
export function Format(fmt, date) {
  date = date ? new Date(date) : new Date();
  var o = {
    "M+": date.getMonth() + 1,
    "d+": date.getDate(),
    "h+": date.getHours(),
    "m+": date.getMinutes(),
    "s+": date.getSeconds(),
    "q+": Math.floor((date.getMonth() + 3) / 3),
    "S": date.getMilliseconds()
  };
  if (/(y+)/.test(fmt)) {
    fmt = fmt.replace(RegExp.$1, (date.getFullYear() + "")
      .substr(4 - RegExp.$1.length));
  }
  for (var k in o) {
    if (new RegExp("(" + k + ")").test(fmt)) {
      fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ?
        (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
    }
  }
  return fmt;
}


//转化为对应的单位
export function bytesToSize(limit) {
  var size = "";
  if (limit < 1024) { //如果小于0.1KB转化成B  
    size = limit.toFixed(2) + "B";
  } else if (limit < 1024 * 1024) { //如果小于0.1MB转化成KB  
    size = (limit / 1024).toFixed(2) + "KB";
  } else if (limit < 1024 * 1024 * 1024) { //如果小于0.1GB转化成MB  
    size = (limit / (1024 * 1024)).toFixed(2) + "MB";
  } else { //其他转化成GB  
    size = (limit / (1024 * 1024 * 1024)).toFixed(2) + "GB";
  }
  return size;
}

//威胁等级颜色
export function checkLevel(num) {
  if (num >= 90) { return '#E64037' }
  if (num < 90 && num >= 60) { return '#FF9000' }
  if (num < 60 && num >= 30) { return '#FFC701' }
  if (num < 30) { return '#5AD669' }
}

export function setSession(key, value) {
  if (typeof (Storage) !== "undefined" || typeof key != "string") {
    sessionStorage.setItem(key, value);
    return true;
  } else {
    return false;
  }
}

export function getSession(key) {
  if (typeof (Storage) !== "undefined" || typeof key != "string") {
    var value = sessionStorage.getItem(key);
    return value;
  } else {
    return false;
  }
}


export function parseQueryString(url) {
  url = url == null ? window.location.href : url
  var search = url.substring(url.lastIndexOf('?') + 1)
  if (!search) {
    return {}
  }
  return JSON.parse('{"' + decodeURIComponent(search).replace(/"/g, '\\"').replace(/&/g, '","').replace(/=/g, '":"') + '"}')
}


export function getQueryString(name) {
  var reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)', 'i');
  var r = window.location.search.substr(1).match(reg);
  if (r != null) {
    return unescape(r[2]);
  }
  return null;
}


// 写入cookie
export function setCookie(name, value) {
  return document.cookie = name + ' = ' + escape(value);
}

/**
 * 
 * @desc 根据name读取cookie
 * @param  {String} name 
 * @return {String}
 */
export function getCookie(name) {
  var arr = document.cookie.replace(/\s/g, "").split(';');
  for (var i = 0; i < arr.length; i++) {
    var tempArr = arr[i].split('=');
    if (tempArr[0] === name) {
      return decodeURIComponent(tempArr[1]);
    }
  }
  return '';
}


