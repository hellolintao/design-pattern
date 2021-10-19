abstract class Player { // 用户要的标准接口
    protected name:string;
    constructor(name: string) {
        this.name = name;
    }
    abstract Attack():void;
    abstract Defense(): void;
}

class Forwards extends Player {
    constructor(name: string) {
        super(name);
    }
    Attack(): void {
        console.log('前锋进攻', this.name)
    }
    Defense(): void {
        console.log('前锋防守', this.name)
    }
}

class Center extends Player {
    constructor(name: string) {
        super(name);
    }
    Attack(): void {
        console.log('中锋进攻', this.name)
    }
    Defense(): void {
        console.log('中锋防守', this.name)
    }
}

class  Guards extends Player {
    constructor(name: string) {
        super(name);
    }
    Attack(): void {
        console.log('后卫进攻', this.name)
    }
    Defense(): void {
        console.log('后卫防守', this.name)
    }
}

class ForeignCenter { // 要被适配的，跟player没关系
    private _name:string;
    get name() {
        return this._name;
    }
    set name(name: string) {
        this._name = name;
    }
    Attack(): void {
        console.log('外籍中锋进攻', this.name)
    }
    Defense(): void {
        console.log('外籍中锋防守', this.name)
    }
}

class Translator extends Player { // 适配器
    private wjzf:ForeignCenter = new ForeignCenter();
    constructor(name: string) {
        super(name);
        this.wjzf.name = name;
    }
    Attack(): void {
        this.wjzf.Attack();
    }
    Defense(): void {
        this.wjzf.Defense();
    }
}

var foo:Player = new Forwards('林');
var goo:Player = new Guards('赵');
var coo:Player = new Center('李');
var too:Player = new Translator('李');

foo.Attack();
goo.Defense();
coo.Attack();
too.Attack();
