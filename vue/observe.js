import Observer from './observer'
export default function(data){
	if(typeof data !== 'object' || data==null) return 
    return new Observer(data)
}