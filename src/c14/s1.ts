abstract class Subject {
	private observers: Set<Observer> = new Set();
	Attach(observer: Observer) {
		this.observers.add(observer);
	}
	Detach(observer: Observer) {
		this.observers.delete(observer);
	}
	Notify() {
		this.observers.forEach(observer => {
			observer.Update();
		});
	}
}
abstract class Observer {
	abstract Update(): void;
}

class ConcreteSubject extends Subject { // 具体的被观察者，被观察者只有一个
	private _subjectState: string;
	get subjectState() {
		return this._subjectState;
	}
	set subjectState(value: string) {
		this._subjectState = value;
	}
}

class ConcreteObserver extends Observer { // 具体的观察者

}