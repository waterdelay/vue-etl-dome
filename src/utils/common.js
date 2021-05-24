/*
 * @Author       : daiwei
 * @Date         : 2021-05-22 16:46:49
 * @LastEditors  : daiwei
 * @LastEditTime : 2021-05-24 10:38:18
 * @FilePath     : \vue-etl-dome\src\utils\common.js
 */
export default {
    /**树的检索 */
    getReturnNode(node,_array,value,defaultProps) {
        let isPass = node.data && node.data[defaultProps.label] && node.data[defaultProps.label].indexOf(value) !== -1;
        isPass ? _array.push(isPass) : '';
        this.index++;
        console.log(this.index)
        if (!isPass && node.level != 1 && node.parent) {
            this.getReturnNode(node.parent, _array, value,defaultProps);
        }
    },
    /** 数组深度拷贝  
     * params obj是数组 
     * newobj 是返回的新数组
     * */
    copy(obj){
        let newobj = obj.constructor === Array ? [] : {};
        if(typeof obj !== 'object'){
            return;
        }
        for(var i in obj){
            newobj[i] = typeof obj[i] === 'object' ? this.copy(obj[i]) : obj[i];
        }
        return newobj
    },
    /** 数组深度拷贝  
     * params obj是对象 
     * newobj 是返回的新对象
     * */
    clone(obj) { 
        if(obj === null) return null 
        if(typeof obj !== 'object') return obj;
        if(obj.constructor===Date) return new Date(obj); 
        if(obj.constructor === RegExp) return new RegExp(obj);
        let newObj = new obj.constructor ();  //保持继承链
        for (let key in obj) {
            if (obj.hasOwnProperty(key)) {   //不遍历其原型链上的属性
                let val = obj[key];
                newObj[key] = typeof val === 'object' ? arguments.callee(val) : val; // 使用arguments.callee解除与函数名的耦合
            }
        }  
        return newObj;  
    },
}