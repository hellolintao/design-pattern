@des('hello', 'world')
class demo {
    age:number;
    constructor(age:number) {
        this.age=age;
        console.log('我呢')
    }
}

// 装饰器是对类进行处理的函数！第一参数是要装饰的目标类！
function des(s1: string, s2: string) {
    return function(target: Function) { // 真正的装饰器
        target.prototype.toy = 'lin';
        console.log('装饰器调用了', target, s1, s2);
    }
}

var target = new demo(20);
console.log(target)
// console.log(target.toy);
// console.log(demo.toy);


