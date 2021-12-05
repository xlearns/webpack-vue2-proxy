import {ARR_METHODS} from './config'
import observeArr from "./observeArr";

var originArrMethods = Array.prototype,
arrMethods = Object.create(originArrMethods)

ARR_METHODS.map(function(m){
    arrMethods[m] = function(){

        var args = Array.prototype.slice.call(arguments),
            res = originArrMethods[m].call(this,args);
        var newArr;
        //对于新增加的每一个值添加监听
        switch(m){
            case 'push':
            case 'unshift':
            newArr = args;
            break;
            case 'splice':
            newArr = args.slice(2);
            break;
            default:
            break;
        }
        
        // 观察新插入的值是否为数组
        newArr && observeArr(newArr)

        return res;
    }
})
export {
    arrMethods
}