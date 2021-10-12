// Component类(抽象)
abstract class Component {
	abstract Operation(): void;
}

// 实际
class ConcreteComponent extends Component {
	Operation(): void {
		console.log('ConcreteComponent')
	}
}

// 装饰类，与Component弱关联
abstract class Decorator extends Component {
	protected component: Component = null;

	SetComponent(component: Component) {
		this.component = component;
	}

	Operation(): void {
		if (this.component != null) { // 调用装饰的
			this.component.Operation();
		}
	}
}

// 装饰A
class ConcreteDecoratorA extends Decorator {
	private addedState:string;
	Operation(): void {
		super.Operation(); // 调用super的Operation
		this.addedState = 'new state';
		console.log('具体装饰对象A的操作')
	}
}

// 装饰B
class ConcreteDecoratorB extends Decorator {
	Operation(): void {
		super.Operation();
		this.AddedBehavior();
		
	}
	private AddedBehavior(): void {
		console.log('AddedBehavior');
	}
}


var c: ConcreteComponent = new ConcreteComponent();
var d1: ConcreteDecoratorA = new ConcreteDecoratorA();
var d2: ConcreteDecoratorB = new ConcreteDecoratorB();

d1.SetComponent(c);
d2.SetComponent(d1);


// console.log('C-----')
// c.Operation();
// console.log('d1-----')
// d1.Operation();
// console.log('d2-----')
d2.Operation();