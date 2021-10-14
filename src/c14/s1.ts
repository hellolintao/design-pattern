/**
 * 抽象类中，Subject保存Observer
 * 具体类中，Observer保存Subject
 */

abstract class Subject { // 抽象被观察者类
	private observers: Set<Observer> = new Set();
	Attach(observer: Observer) { // 添加观察者
		this.observers.add(observer);
	}
	Detach(observer: Observer) { // 删除观察者
		this.observers.delete(observer);
	}
	Notify() { // 通知
		this.observers.forEach(observer => {
			observer.Update();
		});
	}
}
abstract class Observer {
	abstract Update(): void;
}

class ConcreteSubject extends Subject { // 具体的被观察者，被观察者只有一个
	private _subjectState: string; // 被观察者中的一些私有属性
	get subjectState() {
		return this._subjectState;
	}
	set subjectState(value: string) {
		this._subjectState = value;
	}
}

class ConcreteObserver extends Observer { // 具体的观察者
	private name: string; // 观察者的私有属性
	private subject: ConcreteSubject; // 观察的对象
	private observerState: string; // 观察者状态

	constructor(subject: ConcreteSubject, name: string) { // 实例化被观察的对象
		super();
		this.subject = subject;
		this.name = name;
	}

	Update(): void { // 更新状态，执行一系列的操作，并且保存新的观察状态
		console.log('更新状态', this.name);
		this.observerState = this.subject.subjectState; // 将被观察者状态保存到观察者状态中，因为
	}

	get Subject() {
		return this.subject;
	}

	set Subject(subject: ConcreteSubject) {
		this.subject = subject;
	}
}

var s:ConcreteSubject = new ConcreteSubject();
s.Attach(new ConcreteObserver(s, 'X'));
s.Attach(new ConcreteObserver(s, 'Y'));
var z = new ConcreteObserver(s, 'Z');
s.Attach(z);
s.subjectState = "ABC";
s.Notify(); // 所有的观察者都会被触发update
console.log(z.Subject)

s.subjectState = "999";
s.Notify(); // 所有的观察者都会被触发update
console.log(z.Subject)
console.log('--')
console.log(z.Subject.subjectState)

s.Detach(z);
s.Notify();