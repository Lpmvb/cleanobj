function cleanobj(obj) {
  for (const key of Object.keys(obj)) {
    if (obj[key] === undefined) {
      delete obj[key];
      continue;
    }
    if (obj[key] === null) {
      continue;
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
  }
  return obj;
}

module.exports = cleanobj;
