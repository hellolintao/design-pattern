

class Hanbao { // 产品
	mian: string;
	rou: string;
	shucai: string;
	name: string;

	constructor(name: string) {
		this.name = name;
	}

	SetMian(mian: string) {
		this.mian = mian;
	}

	SetRou(rou: string) {
		this.rou = rou;
	}

	SetShucai(shucai: string) {
		this.shucai = shucai;
	}

	Show() {
		console.log(this.name, this.mian, this.rou, this.shucai)
	}
}

abstract class Builder {
	abstract BuildMian(): void;
	abstract BuildRou(): void;
	abstract BuildShucai(): void;
	abstract GetResult(): Hanbao;
}

class MeishiHanbaoBuilder extends Builder {
	private hanbao: Hanbao = new Hanbao('美式汉堡');;
	BuildMian(): void {
		this.hanbao.SetMian('黑面包');
	}
	BuildRou(): void {
		this.hanbao.SetRou('红烧肉');
	};
	BuildShucai(): void {
		this.hanbao.SetShucai('香菜');
	};
	GetResult(): Hanbao {
		return this.hanbao;
	};	
}

class RibrnHanbaoBuilder extends Builder {
	private hanbao: Hanbao = new Hanbao('日本汉堡');;
	BuildMian(): void {
		this.hanbao.SetMian('吐司');
	}
	BuildRou(): void {
		this.hanbao.SetRou('三文鱼');
	};
	BuildShucai(): void {
		this.hanbao.SetShucai('白菜');
	};
	GetResult(): Hanbao {
		return this.hanbao;
	};	
}

class Director {
	Construct(builder: Builder) {
		builder.BuildMian();
		builder.BuildRou();
		builder.BuildShucai();
	}
}

var director: Director = new Director();

var meishihanbaoBuilder = new MeishiHanbaoBuilder();
var ribenhanbaoBuilder = new RibrnHanbaoBuilder();

director.Construct(meishihanbaoBuilder);
var meishihanbao = meishihanbaoBuilder.GetResult();
meishihanbao.Show();

director.Construct(ribenhanbaoBuilder);
var ribenhanbao = ribenhanbaoBuilder.GetResult();
ribenhanbao.Show();

// export default void 0;