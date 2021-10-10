/**
 * 简单工厂模式
*/


// 属性的抽象，但是这不是一个抽象类
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

class OperationFactory {
	static createOpereate(operate: string) {
		var operation: Operation = null;
		switch (operate) {
			case "+":
				operation = new OperationAdd();
				break;
			case "-":
				operation = new OperationSub();
				break;
			case "*":
				operation = new OperationMul();
				break;
			case "/":
				operation = new OperationDiv();
				break;
		}
		return operation;
	}
}

const oper: Operation = OperationFactory.createOpereate('+');
oper.numberA = 1;
oper.numberB = 4;
console.log(oper.GetResult());



