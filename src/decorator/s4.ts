import 'reflect-metadata'
@Reflect.metadata('demo', new User4())
class User4 {
    // @meta
    name: string = 'beijing';
    say (myName: string): string {
      return `hello, ${myName}`
    }
}

console.log(Object.keys(Reflect))
Reflect.getMetadata('design:type', User4);
// Reflect.getMetadataKeys();
// Reflect.getOwnMetadataKeys();
// Reflect.getOwnPropertyDescriptor();
// Reflect.getPrototypeOf();
// console.log(Reflect.metadata('demo', 'hello'));

const a1 = Reflect.getMetadata('demo', User4);
const a2 = Reflect.getMetadata('demo', User4);
console.log(a1)
a1.name = 'lin'
console.log(a2)



// function meta(target: any, propertyKey: string) {
//     // 获取成员类型
//   let type = Reflect.getMetadata('design:type', target, propertyKey)
//   // 获取成员参数类型
//   let paramtypes = Reflect.getMetadata('design:paramtypes', target, propertyKey)
//   // 获取成员返回类型
//   let returntype = Reflect.getMetadata('design:returntype', target, propertyKey)
//   // 获取所有元数据 key (由 TypeScript 注入)
//   let keys = Reflect.getMetadataKeys(target, propertyKey)


//   console.log(keys) // [ 'design:returntype', 'design:paramtypes', 'design:type' ]
//   // 成员类型
//   console.log(type) // Function
//   // 参数类型
//   console.log(paramtypes) // [String]
//   // 成员返回类型
//   console.log(returntype) // String
// }