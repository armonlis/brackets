module.exports = function check(str, bracketsConfig) {
  bracketsConfig.forEach(val => {while (str.includes(val.join(''))) {
                                 str = str.replace(val.join(''), '')}});
  return str.length ? false : true;
}