class Auth {
  /**
   * 获取session storage的键值
   * @method getSessionStorageKey
   * @author ChenXiao
   * @date   2017-9-13
   * @return {String} appName-token
   */
  getSessionStorageKey() {
    return 'numbers-session';
  }

  getSessionStorage(key) {
    const skey = this.getSessionStorageKey();
    const obj = JSON.parse(sessionStorage.getItem(skey));
    if (obj) {
      return obj[key];
    }
    return null;
  }

  setSessionStorage(key, value) {
    const skey = this.getSessionStorageKey();
    const obj = JSON.parse(sessionStorage.getItem(skey)) || {};
    obj[key] = value;
    sessionStorage.setItem(skey, JSON.stringify(obj));
  }

  removeSessionStorage(key) {
    const skey = this.getSessionStorageKey();
    const obj = JSON.parse(sessionStorage.getItem(skey));
    if (obj) {
      delete obj[key];
      sessionStorage.setItem(skey, JSON.stringify(obj));
    }
  }

  /**
   * 删除存储在session storage中的对象
   * @method removeSessionStorageObject
   * @author ChenXiao
   * @date   2017-9-13
   * @return {Undefined} 无返回值
   */
  removeSessionStorageObject() {
    const skey = this.getSessionStorageKey();
    sessionStorage.removeItem(skey);
  }

  /**
   * 获取local storage的键值
   * @method getLocalStorageKey
   * @author ChenXiao
   * @date   2017-9-13
   * @return {String}  appName-userId
   */
  getLocalStorageKey(user) {
    return user ? user : 'numbers-local';
  }

  /**
   * 获取存储在local storage中的对象
   * @method getLocalStorageObject
   * @author ChenXiao
   * @date   2017-9-13
   * @return {Object}  存储对象
   */
  getLocalStorageObject(user) {
    const lkey = this.getLocalStorageKey(user);
    return JSON.parse(localStorage.getItem(lkey));
  }

  /**
   * 删除存储在local storage中的对象
   * @method removeLocalStorageObject
   * @author ChenXiao
   * @date   2017-9-13
   * @return {Undefined} 无返回值
   */
  removeLocalStorageObject(user) {
    const lkey = this.getLocalStorageKey(user);
    localStorage.removeItem(lkey);
  }

  /**
   * 设置存储在local storage中的对象的键值
   * @method setLocalStorage
   * @author ChenXiao
   * @date   2017-9-13
   * @param  {String} key   键
   * @param  {Any}    value 值
   * @return {Undefined} 无返回值
   */
  setLocalStorage(key, value, user) {
    const lkey = this.getLocalStorageKey(user);
    const obj = JSON.parse(localStorage.getItem(lkey)) || {};
    obj[key] = value;
    localStorage.setItem(lkey, JSON.stringify(obj));
  }

  /**
   * 从存储在local storage中的对象中获取一个键对应的值
   * @method getLocalStorage
   * @author ChenXiao
   * @date   2017-9-13
   * @param  {String} key 键
   * @return {Any}        值
   */
  getLocalStorage(key, user) {
    const obj = this.getLocalStorageObject(user);

    if (obj) {
      return obj[key];
    }
    return null;
  }

  /**
   * 从存储在local storage中的对象中删除一个键值对
   * @method removeLocalStorage
   * @author ChenXiao
   * @date   2017-9-13
   * @param  {String} key 键
   * @return {Undefined} 无返回值
   */
  removeLocalStorage(key, user) {
    const lkey = this.getLocalStorageKey(user);
    const obj = JSON.parse(localStorage.getItem(lkey));
    if (obj) {
      delete obj[key];
      localStorage.setItem(lkey, JSON.stringify(obj));
    }
  }

  /**
   * 获取webapp的根目录
   * @author  ChenXiao
   * @date    2017-09-13
   * @return  {String} app根目录
   */
  getAppPath() {
    return window.location.pathname.substr(0, window.location.pathname.indexOf('/apps'));
  }

  /**
   * 获取App应用的根目录
   * @author  ChenXiao
   * @date    2017-09-13
   * @return  {String} App应用根目录
   */
  getBasePath() {
    return window.location.origin + window.location.pathname;
  }

  /**
   * 从url地址中获取拼接的参数值
   * @method  getUrlParam
   * @author  ChenXiao
   * @date    2017-09-13
   * @param   {String}    paramName 参数名称
   * @return  {String}    参数值
   */
  getUrlParam(paramName) {
    const reg = new RegExp(`(^|&)${paramName}=([^&]*)(&|$)`);
    let str = window.location.search;
    let ret;
    if (!str) {
      str = window.location.hash;
    }
    if (str) {
      ret = str.substr(str.indexOf('?') + 1).match(reg);
    }
    if (ret) {
      return unescape(ret[2]);
    }
    return null;
  }

  /**
   * 退出系统
   * @method logout
   * @author ChenXiao
   * @date   2017-9-13
   * @return {Undefined} 无返回值
   */
  logout() {
    window.location.href = '#/login';
  }

  getBrowserName() {
    const {
      userAgent
    } = navigator;
    const isOpera = userAgent.indexOf('Opera') >= 0;
    if (isOpera) {
      return userAgent.match(/Opera\/\d+/)[0];
    }
    if (userAgent.indexOf('Firefox') >= 0) {
      return userAgent.match(/Firefox\/\d+/)[0];
    }
    if (userAgent.indexOf('Chrome') >= 0) {
      return userAgent.match(/Chrome\/\d+/)[0];
    }
    if (userAgent.indexOf('Safari') >= 0) {
      return userAgent.match(/Safari\/\d+/)[0];
    }
    if (userAgent.indexOf('compatible') >= 0 && userAgent.indexOf('MSIE') >= 0 && !isOpera) {
      return userAgent.match(/MSIE\/\d+/)[0];
    }
    return 'Unknown';
  }

  /**
   * 检测用户使用的浏览器客户端是否在指定的浏览器列表中
   * @method testBrowser
   * @author ChenXiao
   * @date   2017-9-13
   * @param  {Array} browserList 浏览器列表（name/大版本）
   * @return {Boolean} 是否在指定的浏览器列表中
   */
  testBrowser(browserList) {
    let f = false;
    const ub = this.getBrowserName().split('/');

    let cb;
    for (let i = 0; i < browserList.length; i++) {
      cb = browserList[i].split('/');
      if (cb[0] === ub[0]) {
        if (cb.length > 1) {
          if (parseInt(ub[1], 10) >= parseInt(cb[1], 10)) {
            f = true;
          }
        } else {
          f = true;
        }
        break;
      }
    }

    return f;
  }
  // sd道路要素的渲染地址分流
  getSDObjSourceUrl(host, isBiztype) {
    let api = '/obj/getByTileWithGap';
    if (isBiztype) {
      api = '/obj/biztype/getByTileWithGap';
    }
    const url = host + api;

    return url;
  }

  /**
   * @description: 
   * @param {*} power
   * @param {*} code
   * @return {*} 返回查询到的code节点
   * @author: Sule
   */
  _findCode(power, code) {
    if (power.code === code) {
      return power;
    }
    for (let i = 0; i < power.children.length; i++) {
      const ele = power.children[i];
      const f = this._findCode(ele, code);
      if (f) {
        return f;
      }
    }
    return null;
  }

  /**
   * @description: 
   * @param {*} power 传入的改库配置的权限
   * @param {*} code
   * @return {*}
   * @author: Sule 权限平台配置菜单时的code不可重复
   */
  byCodeFindMenu(power, code) {
    if (!power || !code) {
      return null;
    }
    return this._findCode(power, code);
  }

  /**
   * @description: 
   * @param {*} power 传入权限菜单(目标按钮的菜单)
   * @param {*} code
   * @return {*} true有 false无
   * @author: Sule 权限平台配置菜单时的code不可重复 同菜单下的按钮code不可重复
   */
  byCodeFindBTN(power, code) {
    if (!power || !code) {
      return false;
    }
    if (!power.resources.length) {
      return false;
    }
    const rs = power.resources.map(r => r.code);
    return rs.includes(code);
  }

  /**
   * @description: 讲传入的菜单按钮 数据格式化为对象 key为code 
   * @param {*} power 传入权限菜单(目标按钮的菜单)
   * @return {*}
   * @author: Sule 权限平台配置菜单时的code不可重复 同菜单下的按钮code不可重复
   */
  byPowerToObjResources(power) {
    const obj = {};
    if (!power || !power.resources.length) {
      return obj;
    }
    for (let i = 0; i < power.resources.length; i++) {
      const r = power.resources[i];
      obj[r.code] = r;
    }
    return obj;
  }
}
export default new Auth();
