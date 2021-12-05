
import proxyData from './proxy'
import observe from './observe'
function initData(vm){
 var data = vm.$options.data;
 //不直接操作用户的data
 data = vm._data = typeof data === 'function'?data.call(vm):data||{}
 for(var key in data){
   proxyData(vm,'_data',key)
 }
 observe(vm._data)
}


export const initState = function(vm){
  var options = vm.$options;
  if(options.data){
  	initData(vm)
  }
}

