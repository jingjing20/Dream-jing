const jsonp = ({ url, params, callbackName }) => {
  const handleURL = () => {
    let dataStr = '';
    // 拼参数 使用for-in 因为参数一般都是object形式
    for (let key in params) {
      dataStr += `${key}=${params[key]}&`;
    }
    dataStr += `callback=${callbackName}`
    return `${url}?${dataStr}`;
  }
  return new Promise((resolve,reject) => {
    // 创建 script 元素并添加到当前文档中
    let scriptElement = document.createElement('script');
    scriptElement.src = handleURL();
    document.body.appendChild(scriptElement);
    window[callbackName] = (data) => {
      resolve(data);
      document.body.removeChild(scriptElement);
    }
  })
}