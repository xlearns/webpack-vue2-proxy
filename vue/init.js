
function initData(vm){
 var data = vm.$options.data;
 //不直接操作用户的data
 data = vm._data = typeof data === 'function'?data.call(vm):data||{}
 
}


export const initState = function(vm){
  var options = vm.$options;
  if(options.data){
  	initData(vm)
  }
}

