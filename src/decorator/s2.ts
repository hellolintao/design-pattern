// 方法装饰器
const {log} = console;
function god(name: string) {
    log(name);
    return function(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
        log('执行了')
    }
}

class User1 {
    @god('test')
    test() {

    }
}
var us = new User1();
us.test();
us.test();
us.test();