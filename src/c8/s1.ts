/**
 * 工厂方法模式，这个模式符合开放，封闭原则，对修改封闭，对拓展开放
 * 增加一个新的计算方法，只要增加一个Operation和实现一个IFactory
*/


// 运算类
abstract class Operation {
	private _numberA: number;
	private _numberB: number;
	get numberA(): number {
		return this._numberA;
	}
	set numberA(numberA: number) {
		this._numberA = numberA;
	}
	get numberB(): number {
		return this._numberB;
	}
	set numberB(numberB: number) {
		this._numberB = numberB;
	}
	abstract GetResult():number;
}

// 具体运算
class OperationAdd extends Operation {
	GetResult():number {
		console.log('加法', this.numberA, this.numberB);
		return this.numberA + this.numberB;
	}
}
class OperationSub extends Operation {
	GetResult():number {
		console.log('减法');
		return this.numberA - this.numberB;
	}
}
class OperationMul extends Operation {
	GetResult():number {
		console.log('乘法');
		return this.numberA * this.numberB;
	}
}
class OperationDiv extends Operation {
	GetResult():number {
		console.log('除法');
		if (this.numberB == 0) {
			console.log('除数不能为0');
		}
		return this.numberA / this.numberB;
	}
}

interface IFactory {
	createOperation(): Operation;
}

class AddFactory implements IFactory {
	createOperation() {
		return new OperationAdd();
	}
} 
class SubFactory implements IFactory {
	createOperation() {
		return new OperationSub();
	}
} 
class MulFactory implements IFactory {
	createOperation() {
		return new OperationMul();
	}
} 
class DivFactory implements IFactory {
	createOperation() {
		return new OperationDiv();
	}
} 

var openFactory: IFactory = new AddFactory();
var oper: Operation = openFactory.createOperation();
oper.numberA = 1;
oper.numberB = 3;
console.log(oper.GetResult());

export default void 0;


