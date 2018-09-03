/* eslint no-param-reassign: */
function cleanobj(obj) {
  Object.keys(obj).forEach(key => {
    if (obj[key] === undefined) {
      delete obj[key];
      return;
    }
    if (obj[key] === null) {
      return;
    }
    const type = Object.prototype.toString.call(obj[key]);
    if (type === '[object Array]') {
      cleanobj(obj[key]);
      obj[key] = obj[key].filter(item => item !== undefined);
      if (obj[key].length === 0) {
        delete obj[key];
      }
    }
    if (type === '[object Object]') {
      cleanobj(obj[key]);
      if (
        Object.keys(obj[key]).length === 0 &&
        Object.getOwnPropertySymbols(obj[key]).length === 0
      ) {
        delete obj[key];
      }
    }
  });
  return obj;
}

module.exports = cleanobj;
