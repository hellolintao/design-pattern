abstract class TemplateClass {
	abstract main1(): void;
	abstract main2(): void;

	Mehtods() {
		this.main1();
		this.main2();
	}
}

class ConcreteClassA extends TemplateClass {
	main1(): void {
		console.log('ConcreteClassA main1的具体实现');
	}
	main2(): void {
		console.log('ConcreteClassA main2的具体实现');
	}
}

class ConcreteClassB extends TemplateClass {
	main1(): void {
		console.log('ConcreteClassB main1的具体实现');
	}
	main2(): void {
		console.log('ConcreteClassB main2的具体实现');
	}
}

const ccA: TemplateClass = new ConcreteClassA();
const ccB: TemplateClass = new ConcreteClassB();

ccA.Mehtods();
ccB.Mehtods();
