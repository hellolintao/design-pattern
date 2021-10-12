// Component类
abstract class PersonShow {
	abstract Show(): void;
}
// 是一个具体的可以被实例化的类
class Person extends PersonShow {
	private name: string;
	constructor(name: string = '') {
		super();
		this.name = name;
	}
	Show(): void {
		console.log('谁被装饰了!', this.name);
	};
}

// 装饰类，对PersonShow是弱依赖
class Finery extends PersonShow {
	protected component: PersonShow = null;

	Decorate(component: PersonShow) {
		this.component = component;
	}

	Show(): void {
		if (this.component != null) {
			this.component.Show();
		}
	}
}

// 具体的装饰
class TShirts extends Finery {
	Show(): void {
		super.Show();
		console.log('穿T');
	}
}
class Shoes extends Finery {
	Show(): void {
		super.Show();
		console.log('穿鞋');
	}
}
class Hat extends Finery {
	Show(): void {
		super.Show();
		console.log('戴帽子');
	}
}

var xm:Person = new Person('小明');

var shirts:TShirts = new TShirts();
var shoes:Shoes = new Shoes();
var hat:Hat = new Hat();

// 串联装饰
shirts.Decorate(xm);
shoes.Decorate(shirts);
hat.Decorate(shoes);
hat.Show();


