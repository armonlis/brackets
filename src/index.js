module.exports = function check(str, bracketsConfig) {
  while (search()) del();
    
  
  function search() {
    for (i = 0; i < bracketsConfig.length; i++) if (str.includes(bracketsConfig[i].join(''))) return true;
    return false;
  }
  
  function del() {
  bracketsConfig.forEach(val => {while (str.includes(val.join(''))) 
                                 str = str.replace(val.join(''), '')}); console.log(str)}
  
  return str.length ? false : true;
}