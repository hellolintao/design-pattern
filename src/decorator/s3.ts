function required(target: any, propertyKey: string, parameterIndex: number) {
    console.log(target)
    console.log(propertyKey)
    console.log(parameterIndex)
}
class User3 {
    name: string;
    constructor(name: string) {
        this.name = name;
    }
    test(@required name: string) {
        this.name = name;
    }
}

// 类
// 方法
// 属性
// 访问器
// 参数

var us3:User3 = new User3('lintao');
us3.test('beijing');