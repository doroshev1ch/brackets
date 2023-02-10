module.exports = function check(str, bracketsConfig) {
  // your solution
    // bracketsConfig.replace(/\s.,+/g,'');
    // if (typeof bracketsConfig === 'object' && bracketsConfig.length % 2 == 0 && str.length % 2 == 0){
    //   return true;
    // } else {
    //   return false
    // }
  
  if (str.length % 2 == 0 ) {
    return true;
  } else {
    return false;
  }
}
// for (let i = 0; i < bracketsConfig.length; i++){
        
      // }