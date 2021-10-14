class SubMethod1 {
	Method1() {
		console.log('SubMethod1 --> Method1');
	}
	Method2() {
		console.log('SubMethod1 --> Method2');
	}
}
class SubMethod2 {
	Method1() {
		console.log('SubMethod2 --> Method1');
	}
	Method2() {
		console.log('SubMethod2 --> Method2');
	}
}
class SubMethod3 {
	Method1() {
		console.log('SubMethod3 --> Method1');
	}
	Method2() {
		console.log('SubMethod3 --> Method2');
	}
}
class Facade {
	private sub1: SubMethod1;
	private sub2: SubMethod2;
	private sub3: SubMethod3;

	constructor() {
		this.sub1 = new SubMethod1();
		this.sub2 = new SubMethod2();
		this.sub3 = new SubMethod3();
	}

	FacadeMethodA() {
		this.sub1.Method1();
		this.sub2.Method1();
		this.sub3.Method1();
	}

	FacadeMethodB() {
		this.sub1.Method2();
		this.sub2.Method2();
		this.sub3.Method2();
	}
}

const f:Facade = new Facade();

f.FacadeMethodA();
f.FacadeMethodB();