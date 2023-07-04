// 数字操作
/**
 * 
 * @param {number} min 最小值
 * @param {number} max 最大值
 * @returns 返回区间内的随机整数
 */
const randomNum = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

/**
 * 
 * @param {number} n 需要被千分位分隔的数字
 * @returns 被千分位分隔的数字字符串
 */
const format = (n) => {
    let num = n.toString();
    let len = num.length;
    if (len <= 3) {
        return num;
    } else {
        let temp = '';
        let remainder = len % 3;
        if (remainder > 0) {
            return num.slice(0, remainder) + ',' + num.slice(remainder, len).match(/\d{3}/g).join(',') + temp;
        } else {
            return num.slice(0, len).match(/\d{3}/g).join(',') + temp;
        }
    }
}

// 数组操作
/**
 * 
 * @param {Array} arr 数组
 * @returns 被乱序后的数组
 */
const arrScrambling = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        const randomIndex = Math.round(Math.random() * (arr.length - 1 - i)) + i;
        [arr[i], arr[randomIndex]] = [arr[randomIndex], arr[i]];
    }
    return arr;
}

/**
 * 
 * @param {Array} arr 数组
 * @returns 扁平化的数组
 */
const flatten = (arr) => {
    let result = [];

    for (let i = 0; i < arr.length; i++) {
        if (Array.isArray(arr[i])) {
            result = result.concat(flatten(arr[i]));
        } else {
            result.push(arr[i]);
        }
    }
    return result;
}

/**
 * 
 * @param {Array} arr 数组
 * @returns 数组中获取随机数
 */
const sample = arr => arr[Math.floor(Math.random() * arr.length)];

// 字符串操作
/**
 * 
 * @param {string} name 姓名
 * @returns 姓名加* 两字最后一个加星，三字以上保留首尾
 */
const maskName = (name) => {
    if (name.length <= 2) {
        return name.replace(/.$/, '*');
    } else {
        return name.replace(/^([\u4e00-\u9fa5])([\u4e00-\u9fa5]*)([\u4e00-\u9fa5])$/, (match, p1, p2, p3) => {
            return p1 + p2.replace(/./g, '*') + p3;
        });
    }
}

/**
 * 
 * @param {number} len 字符串长度
 * @returns 生成随机字符串
 */
const randomString = (len) => {
    let chars = 'ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz123456789';
    let strLen = chars.length;
    let randomStr = '';
    for (let i = 0; i < len; i++) {
        randomStr += chars.charAt(Math.floor(Math.random() * strLen));
    }
    return randomStr;
};

/**
 * 
 * @param {string} str 字符串
 * @returns 字符串首字母大写
 */
const fistLetterUpper = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
};

/**
 * 
 * @param {number} tel 中国手机号
 * @returns 手机号中间四位变成*
 */
const cnTelFormat = (tel) => {
    tel = String(tel);
    return tel.substr(0, 3) + "****" + tel.substr(7);
};

/**
 * 
 * @param {string} str 字符串
 * @returns 驼峰命名转换成短横线命名
 */
const getKebabCase = (str) => {
    return str.replace(/[A-Z]/g, (item) => '-' + item.toLowerCase())
}

/**
 * 
 * @param {string} str 字符串
 * @returns 短横线命名转换成驼峰命名
 */
const getCamelCase = (str) => {
    return str.replace(/-([a-z])/g, (i, item) => item.toUpperCase())
}

// 格式转换
/**
 * 
 * @param {number} n 数字
 * @returns 数字转化为大写金额
 */
const digitUppercase = (n) => {
    const fraction = ['角', '分'];
    const digit = [
        '零', '壹', '贰', '叁', '肆',
        '伍', '陆', '柒', '捌', '玖'
    ];
    const unit = [
        ['元', '万', '亿'],
        ['', '拾', '佰', '仟']
    ];
    n = Math.abs(n);
    let s = '';
    for (let i = 0; i < fraction.length; i++) {
        s += (digit[Math.floor(n * 10 * Math.pow(10, i)) % 10] + fraction[i]).replace(/零./, '');
    }
    s = s || '整';
    n = Math.floor(n);
    for (let i = 0; i < unit[0].length && n > 0; i++) {
        let p = '';
        for (let j = 0; j < unit[1].length && n > 0; j++) {
            p = digit[n % 10] + unit[1][j] + p;
            n = Math.floor(n / 10);
        }
        s = p.replace(/(零.)*零$/, '').replace(/^$/, '零') + unit[0][i] + s;
    }
    return s.replace(/(零.)*零元/, '元')
        .replace(/(零.)+/g, '零')
        .replace(/^整$/, '零元整');
};

/**
 * 
 * @param {number} value 数字
 * @returns 数字转化为中文数字
 */
const intToChinese = (value) => {
    const str = String(value);
    const len = str.length - 1;
    const idxs = ['', '十', '百', '千', '万', '十', '百', '千', '亿', '十', '百', '千', '万', '十', '百', '千', '亿'];
    const num = ['零', '一', '二', '三', '四', '五', '六', '七', '八', '九'];
    return str.replace(/([1-9]|0+)/g, ($, $1, idx, full) => {
        let pos = 0;
        if ($1[0] !== '0') {
            pos = len - idx;
            if (idx == 0 && $1[0] == 1 && idxs[len - idx] == '十') {
                return idxs[len - idx];
            }
            return num[$1[0]] + idxs[len - idx];
        } else {
            let left = len - idx;
            let right = len - idx + $1.length;
            if (Math.floor(right / 4) - Math.floor(left / 4) > 0) {
                pos = left - left % 4;
            }
            if (pos) {
                return idxs[pos] + num[$1[0]];
            } else if (idx + $1.length >= len) {
                return '';
            } else {
                return num[$1[0]]
            }
        }
    });
}

// 操作存储
/**
 * 
 * @param {string} key 键名
 * @param {string} value 值
 * @returns 存储loalStorage
 */
const loalStorageSet = (key, value) => {
    if (!key) return;
    if (typeof value !== 'string') {
        value = JSON.stringify(value);
    }
    window.localStorage.setItem(key, value);
};

/**
 * 
 * @param {string} key 键名
 * @returns 获取localStorage
 */
const loalStorageGet = (key) => {
    if (!key) return;
    return window.localStorage.getItem(key);
};

/**
 * 
 * @param {string} key 键
 * @returns 删除localStorage
 */
const loalStorageRemove = (key) => {
    if (!key) return;
    window.localStorage.removeItem(key);
};

/**
 * 
 * @param {string} key 键名
 * @param {string} value 值
 * @returns 存储sessionStorage
 */
const sessionStorageSet = (key, value) => {
    if (!key) return;
    if (typeof value !== 'string') {
        value = JSON.stringify(value);
    }
    window.sessionStorage.setItem(key, value)
};

/**
 * 
 * @param {string} key 键名
 * @returns 获取sessionStorage
 */
const sessionStorageGet = (key) => {
    if (!key) return;
    return window.sessionStorage.getItem(key)
};

/**
 * 
 * @param {string} key 键名
 * @returns 删除sessionStorage
 */
const sessionStorageRemove = (key) => {
    if (!key) return;
    window.sessionStorage.removeItem(key)
};

// 操作Cookie
/**
 * 设置cookie
 * @param {string} key 键名
 * @param {string} value 值
 * @param {*} expire 过期时间
 */
const setCookie = (key, value, expire) => {
    const d = new Date();
    d.setDate(d.getDate() + expire);
    document.cookie = `${key}=${value};expires=${d.toUTCString()}`
};

/**
 * 
 * @param {string} key 键名
 * @returns 读取cookie
 */
const getCookie = (key) => {
    const cookieStr = unescape(document.cookie);
    const arr = cookieStr.split('; ');
    let cookieValue = '';
    for (let i = 0; i < arr.length; i++) {
        const temp = arr[i].split('=');
        if (temp[0] === key) {
            cookieValue = temp[1];
            break
        }
    }
    return cookieValue
};

/**
 * 删除cookie
 * @param {string} key 键名
 */
const delCookie = (key) => {
    document.cookie = `${encodeURIComponent(key)}=;expires=${new Date()}`
};

// 格式校验
/**
 * 
 * @param {string,number} value 身份证
 * @returns 检验是否符合身份证号规范
 */
const checkCardNo = (value) => {
    let reg = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/;
    return reg.test(value);
};

/**
 * 
 * @param {string} value 字符串
 * @returns 校验是否包含中文
 */
const haveCNChars = (value) => {
    return /[\u4e00-\u9fa5]/.test(value);
}

/**
 * 
 * @param {string,number} value 
 * @returns 校验是否为中国大陆的邮政编码
 */
const isPostCode = (value) => {
    return /^[1-9][0-9]{5}$/.test(value.toString());
}

/**
 * 
 * @param {string} str ip地址
 * @returns 校验是否为IPv6地址
 */
const isIPv6 = (str) => {
    return Boolean(str.match(/:/g) ? str.match(/:/g).length <= 7 : false && /::/.test(str) ? /^([\da-f]{1,4}(:|::)){1,6}[\da-f]{1,4}$/i.test(str) : /^([\da-f]{1,4}:){7}[\da-f]{1,4}$/i.test(str));
}

/**
 * 
 * @param {string} value 邮箱
 * @returns 校验是否为邮箱地址
 */
const isEmail = (value) => {
    return /^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/.test(value);
}

/**
 * 
 * @param {string,number} value 手机号
 * @returns 校验是否为中国大陆手机号
 */
const isTel = (value) => {
    return /^1[3,4,5,6,7,8,9][0-9]{9}$/.test(value.toString());
}


// 操作URL
/**
 * 
 * @param {string} url url参数非必填，可从url读取
 * @returns url后面拼接的参数
 */
const GetRequest = (url) => {
    if (!url) url = location.search;
    try {
        const paramsStr = /.+\?(.+)$/.exec(url)[1]; // 将 ? 后面的字符串取出来
        const paramsArr = paramsStr.split('&'); // 将字符串以 & 分割后存到数组中
        let paramsObj = {};
        // 将 params 存到对象中
        paramsArr.forEach(param => {
            if (/=/.test(param)) { // 处理有 value 的参数
                let [key, val] = param.split('='); // 分割 key 和 value
                val = decodeURIComponent(val); // 解码
                val = /^\d+$/.test(val) ? parseFloat(val) : val; // 判断是否转为数字
                if (paramsObj.hasOwnProperty(key)) { // 如果对象有 key，则添加一个值
                    paramsObj[key] = [].concat(paramsObj[key], val);
                } else { // 如果对象没有这个 key，创建 key 并设置值
                    paramsObj[key] = val;
                }
            } else { // 处理没有 value 的参数
                paramsObj[param] = true;
            }
        })
        return paramsObj;
    } catch (error) {
        return {}
    }

};

/**
 * 
 * @param {object} params 参数
 * @returns 键值对拼接成URL参数
 */
const stringifyParams = (params) => {
    const queryString = Object.keys(params).map(key => {
        const value = params[key];
        if (value === null || value === undefined) {
            return '';
        }
        if (Array.isArray(value)) {
            return value.map(val => `${encodeURIComponent(key)}=${encodeURIComponent(val)}`).join('&');
        }
        return `${encodeURIComponent(key)}=${encodeURIComponent(value)}`;
    }).filter(Boolean).join('&');
    return queryString ? `?${queryString}` : '';
}

/**
 * 
 * @param {string} url 需要修改参数的URL
 * @param {string} paramName 需要修改的参数名
 * @param {string} paramValue 需要修改的参数值
 * @returns 返回修改后的url
 */
const updateUrlParam = (url, paramName, paramValue) => {
    const urlObj = new URL(url);
    urlObj.searchParams.set(paramName, paramValue);
    return urlObj.toString();
}

/**
 * 
 * @param {string} url 要删除参数的 URL
 * @param {string} paramName 需要删除的参数名
 * @returns 修改后的url
 */
const removeUrlParam = (url, paramName) => {
    const urlObj = new URL(url);
    urlObj.searchParams.delete(paramName);
    return urlObj.toString();
}

// 设备判断
/**
 * 
 * @returns mobile=>手机 desktop=>pc设备
 */
const isMobile = () => {
    if ((navigator.userAgent.match(/(iPhone|iPod|Android|ios|iOS|iPad|Backerry|WebOS|Symbian|Windows Phone|Phone)/i))) {
        return 'mobile';
    }
    return 'desktop';
}

/**
 * 
 * @returns 判断是苹果设备还是安卓设备
 */
const isAppleMobileDevice = () => {
    let reg = /iphone|ipod|ipad|Macintosh/i;
    return reg.test(navigator.userAgent.toLowerCase());
}

/**
 * 
 * @returns 浏览器型号和版本
 */
const getExplorerInfo = () => {
    let t = navigator.userAgent.toLowerCase();
    return 0 <= t.indexOf("msie") ? { //ie < 11
        type: "IE",
        version: Number(t.match(/msie ([\d]+)/)[1])
    } : !!t.match(/trident\/.+?rv:(([\d.]+))/) ? { // ie 11
        type: "IE",
        version: 11
    } : 0 <= t.indexOf("edge") ? {
        type: "Edge",
        version: Number(t.match(/edge\/([\d]+)/)[1])
    } : 0 <= t.indexOf("firefox") ? {
        type: "Firefox",
        version: Number(t.match(/firefox\/([\d]+)/)[1])
    } : 0 <= t.indexOf("chrome") ? {
        type: "Chrome",
        version: Number(t.match(/chrome\/([\d]+)/)[1])
    } : 0 <= t.indexOf("opera") ? {
        type: "Opera",
        version: Number(t.match(/opera.([\d]+)/)[1])
    } : 0 <= t.indexOf("Safari") ? {
        type: "Safari",
        version: Number(t.match(/version\/([\d]+)/)[1])
    } : {
        type: t,
        version: -1
    }
}

// 浏览器操作
/**
 * 滚动到页面顶部
 */
const scrollToTop = () => {
    const height = document.documentElement.scrollTop || document.body.scrollTop;
    if (height > 0) {
        window.requestAnimationFrame(scrollToTop);
        window.scrollTo(0, height - height / 8);
    }
}

/**
 * 滚动到页面底部
 */
const scrollToBottom = () => {
    window.scrollTo(0, document.documentElement.clientHeight);
}

/**
 * 滚动到指定元素区域
 * @param {string} element css选择器
 */
const smoothScroll = (element) => {
    document.querySelector(element).scrollIntoView({
        behavior: 'smooth'
    });
};

/**
 * 
 * @returns 获取可视窗口高度
 */
const getClientHeight = () => {
    let clientHeight = 0;
    if (document.body.clientHeight && document.documentElement.clientHeight) {
        clientHeight = (document.body.clientHeight < document.documentElement.clientHeight) ? document.body.clientHeight : document.documentElement.clientHeight;
    }
    else {
        clientHeight = (document.body.clientHeight > document.documentElement.clientHeight) ? document.body.clientHeight : document.documentElement.clientHeight;
    }
    return clientHeight;
}

/**
 * 
 * @returns 获取可视窗口宽度
 */
const getPageViewWidth = () => {
    return (document.compatMode == "BackCompat" ? document.body : document.documentElement).clientWidth;
}

/**
 * 打开浏览器全屏
 */
const toFullScreen = () => {
    let element = document.body;
    if (element.requestFullscreen) {
        element.requestFullscreen()
    } else if (element.mozRequestFullScreen) {
        element.mozRequestFullScreen()
    } else if (element.msRequestFullscreen) {
        element.msRequestFullscreen()
    } else if (element.webkitRequestFullscreen) {
        element.webkitRequestFullScreen()
    }
}

/**
 * 退出浏览器全屏
 */
const exitFullscreen = () => {
    if (document.exitFullscreen) {
        document.exitFullscreen()
    } else if (document.msExitFullscreen) {
        document.msExitFullscreen()
    } else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen()
    } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen()
    }
}

// 时间操作
/**
 * 
 * @returns 当前时间
 */
const nowTime = () => {
    const now = new Date();
    const year = now.getFullYear();
    const month = now.getMonth();
    const date = now.getDate() >= 10 ? now.getDate() : ('0' + now.getDate());
    const hour = now.getHours() >= 10 ? now.getHours() : ('0' + now.getHours());
    const miu = now.getMinutes() >= 10 ? now.getMinutes() : ('0' + now.getMinutes());
    const sec = now.getSeconds() >= 10 ? now.getSeconds() : ('0' + now.getSeconds());
    return +year + "年" + (month + 1) + "月" + date + "日 " + hour + ":" + miu + ":" + sec;
}


// JavaScript操作
/**
 * 阻止冒泡
 * @param {ele} e css选择器
 */
const stopPropagation = (e) => {
    e = e || window.event;
    if (e.stopPropagation) {    // W3C阻止冒泡方法 
        e.stopPropagation();
    } else {
        e.cancelBubble = true; // IE阻止冒泡方法 
    }
}

/**
 * 防抖函数
 * @param {Function} fn 方法名
 * @param {number} wait 时间
 * @returns 防抖后函数
 */
const debounce = (fn, wait) => {
    let timer = null;

    return function () {
        let context = this,
            args = arguments;

        if (timer) {
            clearTimeout(timer);
            timer = null;
        }

        timer = setTimeout(() => {
            fn.apply(context, args);
        }, wait);
    };
}

/**
 * 
 * @param {Function} fn 方法名
 * @param {number} delay 延迟时间
 * @returns 节流函数
 */
const throttle = (fn, delay) => {
    let curTime = Date.now();

    return function () {
        let context = this,
            args = arguments,
            nowTime = Date.now();

        if (nowTime - curTime >= delay) {
            curTime = Date.now();
            return fn.apply(context, args);
        }
    };
}

/**
 * 
 * @param {object} obj 对象
 * @param {*} hash 
 * @returns 对象深拷贝
 */
const deepClone = (obj, hash = new WeakMap()) => {
    // 日期对象直接返回一个新的日期对象
    if (obj instanceof Date) {
        return new Date(obj);
    }
    //正则对象直接返回一个新的正则对象     
    if (obj instanceof RegExp) {
        return new RegExp(obj);
    }
    //如果循环引用,就用 weakMap 来解决
    if (hash.has(obj)) {
        return hash.get(obj);
    }
    // 获取对象所有自身属性的描述
    let allDesc = Object.getOwnPropertyDescriptors(obj);
    // 遍历传入参数所有键的特性
    let cloneObj = Object.create(Object.getPrototypeOf(obj), allDesc)

    hash.set(obj, cloneObj)
    for (let key of Reflect.ownKeys(obj)) {
        if (typeof obj[key] === 'object' && obj[key] !== null) {
            cloneObj[key] = deepClone(obj[key], hash);
        } else {
            cloneObj[key] = obj[key];
        }
    }
    return cloneObj
}

// 导出函数
module.exports = {
    randomNum,
    format,
    arrScrambling,
    flatten,
    sample,
    maskName,
    randomString,
    fistLetterUpper,
    cnTelFormat,
    getKebabCase,
    getCamelCase,
    digitUppercase,
    intToChinese,
    loalStorageSet,
    loalStorageGet,
    loalStorageRemove,
    sessionStorageSet,
    sessionStorageGet,
    sessionStorageRemove,
    setCookie,
    getCookie,
    delCookie,
    checkCardNo,
    haveCNChars,
    isPostCode,
    isIPv6,
    isEmail,
    isTel,
    GetRequest,
    stringifyParams,
    updateUrlParam,
    removeUrlParam,
    isMobile,
    isAppleMobileDevice,
    getExplorerInfo,
    scrollToTop,
    scrollToBottom,
    smoothScroll,
    getClientHeight,
    getPageViewWidth,
    toFullScreen,
    exitFullscreen,
    nowTime,
    stopPropagation,
    debounce,
    throttle,
    deepClone
};
