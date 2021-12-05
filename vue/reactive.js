import observe from './observe'
export const  defineReactiveData = function(data,key,value){
   	observe(value)
	Object.defineProperty(data,key,{
		get(){
			console.log('get:',value)
			return value
		},
		set(newValue){
			console.log('set',newValue)
			if(newValue==value)return
			observe(newValue)	
			value = newValue
		}
	})
}