abstract class Flyweight { // 享元抽象
    // 这里也可以保存内部状态
    abstract Operation(extrinsicstate: number): void; // 这里面的参数实际上是一个外部状态，它还可以传递对象
}

class ConcreteFlyweight extends Flyweight { // 具体的享元,
    Operation(extrinsicstate: number) {
        console.log('具体的享元', extrinsicstate)
    }
}

class UnshareConcreteFlyweight extends Flyweight { // 具体的享元,不强制共享，
    // 这里可以保存内部状态
    Operation(extrinsicstate: number) {
        console.log('具体的享元，不参与共享', extrinsicstate)
    }
}

class FlyweightFactory { // 享元工厂
    private _flyweights = new Set();
    constructor() {
        this._flyweights.add({
            key: 'X',
            instance: new ConcreteFlyweight()
        });
        this._flyweights.add({
            key: 'Y',
            instance: new ConcreteFlyweight()
        });
        this._flyweights.add({
            key: 'Z',
            instance: new ConcreteFlyweight()
        });
    } 

    GetFlyweight(key: string) {
        var result: ConcreteFlyweight = null;
        this._flyweights.forEach((flyweight: any) => {
            flyweight.key == key && (result = flyweight.instance)
        });
        return result;
    }
} 

var extrinsicstate = 22; // 外部状态

var factoryFly = new FlyweightFactory(); // 工厂每次得到的对象都是一个

var fx: Flyweight = factoryFly.GetFlyweight('X');
fx.Operation(--extrinsicstate);
var fx1: Flyweight = factoryFly.GetFlyweight('X'); 
fx.Operation(--extrinsicstate); 
console.log(fx == fx1) 
 
var fy: Flyweight = factoryFly.GetFlyweight('Y');
fy.Operation(--extrinsicstate);

var fz: Flyweight = factoryFly.GetFlyweight('Z');
fz.Operation(--extrinsicstate);

var uf: UnshareConcreteFlyweight = new UnshareConcreteFlyweight();
uf.Operation(--extrinsicstate);