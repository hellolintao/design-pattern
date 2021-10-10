/*
 * 当前的策略模式中的一个缺点就是，选择一种策略的时候，还是要用switch进行判断，
 * 书中介绍了可以使用“抽象工厂模式中的反射进行解决”
*/

abstract class CashSuper {
	abstract acceptCash(money: number): number;
}

// 普通模式
class CashNormal extends CashSuper {
	acceptCash(money: number): number {
		return money;
	}
}

// 打折
class CashRebate extends CashSuper {
	private _moneyRebate: number = 1;
	constructor(moneyRebate: number) {
		super();
		this._moneyRebate = moneyRebate;
	}
	acceptCash(money: number): number {
		return money * this._moneyRebate;
	}
}

// 满减
class CashReturn extends CashSuper {
	private _moneyCondition: number = 0;
	private _moneyReturn: number = 0;
	constructor(moneyCondition: number, moneyReturn: number) {
		super();
		this._moneyCondition = moneyCondition;
		this._moneyReturn= moneyReturn;
	}
	acceptCash(money: number): number {
		let {_moneyCondition, _moneyReturn} = this;
		return money >= _moneyCondition ? money - Math.floor(_moneyReturn) : money;
	}
}

// 上下文
class CashContext {
	cs: CashSuper;
	constructor(cs: CashSuper) {
		this.cs = cs;
	}
	GetResult(money: number): number {
		return this.cs.acceptCash(money);
	}
}


// 策略模式结合工厂模式
class CashContextFactory {
	cs: CashSuper;
	constructor(type: string) {
		switch (type) {
			case '正常收费':
				this.cs = new CashNormal();
				break;
			case '8折':
				this.cs = new CashRebate(.8);
				break;
			case '满300返100':
				this.cs = new CashReturn(300, 100);
				break;
		}
	}
	GetResult(money: number): number {
		return this.cs.acceptCash(money);
	}
}

let ccf = new CashContextFactory('满300返100')
console.log(ccf.GetResult(299));
