interface GiveGift {
	GiveDolls(): void;
	GiveFlowers(): void;
	GiveChocolate(): void;
}
class SchoolGirl {
	constructor(public name: string) {
		this.name = name;
	}
	resviced(type: string) {
		console.log(this.name, '收到了', type);
	}
}

class Pursuit implements GiveGift {
	mm: SchoolGirl;
	constructor(mm: SchoolGirl) {
		this.mm = mm;
	}
	GiveDolls(): void {
		console.log('送娃娃');
		this.mm.resviced('娃娃');
	}
	GiveFlowers(): void {
		console.log('送花');
		this.mm.resviced('花');
	}
	GiveChocolate(): void {
		console.log('送巧克力');
		this.mm.resviced('巧克力');
	}
}

class Proxy implements GiveGift {
	gg: Pursuit;
	constructor(mm: SchoolGirl) {
		this.gg = new Pursuit(mm);
	}
	GiveDolls(): void {
		this.gg.GiveDolls()
	}
	GiveFlowers(): void {
		this.gg.GiveFlowers()
	}
	GiveChocolate(): void {
		this.gg.GiveChocolate()
	}
}

var jiao: SchoolGirl = new SchoolGirl('白白');

var proxy: Proxy = new Proxy(jiao);

proxy.GiveChocolate();
proxy.GiveFlowers();
proxy.GiveDolls();
export default void 0;