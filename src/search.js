var arr = require('./data')
function (inp){
arr.forEach(function(i){
if(i.includes(inp)){
  console.log(i);
}
});
}
