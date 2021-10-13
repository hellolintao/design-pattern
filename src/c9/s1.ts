interface Info {
	name: string,
	age: number
};
abstract class Prototype {
	static key:number = 0;
	private id: string;
	private num: number;
	private info: Info;

	set Id(id: string) {
		this.id = id;
	}

	get Id() {
		return this.id;
	}

	set Num(num: number) {
		this.num = num;
	}

	get Num() {
		return this.num;
	}

	get Info() {
		return this.info;
	}

	constructor(id: string, num: number, name: string, age: number) {
		this.id = id;
		this.num = num;
		this.info = {
			name,
			age
		};
	}
	abstract Clone(): Prototype;
}

class ConcretePrototype extends Prototype {
	constructor(id: string, num: number, name: string, age: number) {
		super(id, num, name, age);
	}
	Clone(): Prototype {
		return Object.create(this);
	}
}

var p1:ConcretePrototype = new ConcretePrototype('1', 2,'lin', 20);
var c1:ConcretePrototype = p1.Clone();
// 此时，p1的原型是Prototype
// c1的原型是p1
console.log(p1)
console.log(c1)


export default void 0;