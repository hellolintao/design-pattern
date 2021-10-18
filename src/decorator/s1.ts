/**
 * 
 * @param target 类本身
 * @param propertyKey 被装饰的字段的key
 * @param descriptor 被描述的字段的“数据属性”
 */

function validate(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    console.log(target);
    console.log(propertyKey);
    console.log(descriptor);
    let method = descriptor.value;
    descriptor.value = function (newValue: string) {
        console.log('shiwoma')
        if (newValue) {
            console.log('AAAAAAAAAA', newValue)
            console.log(this)
            method.call(this, newValue)
        } else {
            console.log(' BBBBBB')
            throw Error('name is invalid');
        }
    }
}
class User {
    name: string;
    id: number;

    constructor(name: string, id: number) {
        this.name = name;
        this.id = id;
    }

    @validate
    changeName(name: string) {
        console.log('wuyu', name)
        console.log(this)
        this.name = name;
    }
}

var us1 = new User('lin', 20)
us1.changeName('lintao');
console.log(us1);