export abstract class Operation {
	constructor(public numberA: number, public numberB: number) {
		this.numberA = numberA;
		this.numberB = numberB;
	}

	abstract GetResult(): number;
}
