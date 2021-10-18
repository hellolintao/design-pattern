import 'reflect-metadata';

type Constructor<T = any> = new (...args: any[]) => T; // 声明一个构造函数

const Injectable = ():ClassDecorator => target => {};

class OtherServes {
    a=1;
}
class OtherServes2 {
    b=1;
}

@Injectable()
class TestService {
    constructor(public readonly otherServes: OtherServes,public name:string) {
    }
    testMethod() {
        console.log(this)
        console.log(this.name)
    }
}
// target是参数，是这个类的本身
const Factory = <T>(target: Constructor<T>, argsR:any[]): T => {
    // design:paramtypes，获取这个类本身的（构造函数的参数类型）
    const providers = Reflect.getMetadata('design:paramtypes', target);

    // 遍历providers，获取到具体参数数组
    const args = providers.map((provider: Constructor, index: number) => {
        return new provider()
    });

    console.log('-------providers---------');
    console.log(providers);
    console.log('-------target---------');
    console.log(target) // 获取到构造函数
    console.log('-------args---------');
    console.log(args);
    console.log(...args);
    return new target(...args);
}

Factory(TestService, [null, '21']).testMethod(); // 1
// console.log(new TestService(new OtherServes(), '123'));
// Factory(TestService2).testMethod(); // 1