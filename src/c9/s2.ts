interface ICloneable {
	Clone(): any;
}

class Resume {
	private name:string;
	private sex:string;
	private age:string;
	private timeArea:string;
	private compony:string;

	constructor(name: string) {
		this.name = name;
	}

	SetPersonnalInfo(sex: string, age: string) {
		this.sex = sex;
		this.age = age;
	}

	SetWorkExperience(timeArea: string, compony: string) {
		this.timeArea = timeArea;
		this.compony = compony;
	}

	Display() {
		console.log(`RESUME: ${this.name}/${this.sex}/${this.age}/${this.timeArea}/${this.compony}`);
	}

	Clone() {
		return Object.create(this);
	}
}

var r1 = new Resume('林涛');
r1.SetPersonnalInfo('男', '20');
r1.SetWorkExperience('2021', 'bili');

var r2 = r1.Clone();

r1.Display();

r2.SetWorkExperience('2012', 'ck');
r2.Display();