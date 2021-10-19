/**
 * 策略模式
 * 策略模式定义了算法家族，分别封装起来，让他们之间可以互相替换
 * 比模式让算法的变化，不会影响到使用算法的客户
 * *这些算法完成的都是相同的工作，只是实现不同
*/

// 抽象算法类
abstract class Strategy {
	constructor() {

	}
	abstract AlorithmInterface(): void;
} 

// 三种算法
class ConcreteStrategyA extends Strategy {
	AlorithmInterface(): void {
		console.log('算法A')
	}
}
class ConcreteStrategyB extends Strategy {
	AlorithmInterface(): void {
		console.log('算法B')
	}
}
class ConcreteStrategyC extends Strategy {
	AlorithmInterface(): void {
		console.log('算法C')
	}
}

// 上下文
class Context{
	strategy: Strategy;
	constructor(strategy: Strategy) {
		this.strategy = strategy;
	}

	ContextInterface() {
		this.strategy.AlorithmInterface();
	}
}

// 应用代码
var context: Context = new Context(new ConcreteStrategyA()); // 实例化策略A

context.ContextInterface();

export default void 0;