import 'reflect-metadata';
abstract class fa {

}
@Reflect.metadata('role',new Post())
class Post extends fa{
    a=0;
    b=999;
    static readonly d= 111;
}

class Post2 {
    k=40;
    y=9599;
}

const metadata = Reflect.getMetadata('role', fa);
// metadata.b=120;
console.log(metadata);  // admin\
console.log(Post); 
// const demo = new metadata();
// demo.a = 123;
// console.log(demo.a, demo.b);  // admin