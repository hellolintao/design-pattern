class Product { // 产品，是要被“建造”出来的，产品的细节是可以被定制的，但是产品的框架还是一致的！
	parts:string[] = [];
	Add(part: string) {
		this.parts.push(part);
	}
	Show() {
		console.log('产品', this.parts.join(','));
	}
}

abstract class Builder { // 抽象建造器，定义了建造产品所必须的步骤【抽象构造者】
	abstract BuildPartA(): void;
	abstract BuildPartB(): void;
	abstract GetResult(): Product;
}

class ConcerteBuilder1 extends Builder { // 真实的构造器，包含了产品的具体细节【具体构造者】
	private product:Product = new Product();

	BuildPartA() {
		this.product.Add('部件A1');
	}
	BuildPartB() {
		this.product.Add('部件B1');
	}
	GetResult() {
		return this.product;
	}
}
class ConcerteBuilder2 extends Builder {
	private product:Product = new Product();

	BuildPartA() {
		this.product.Add('部件A2');
	}
	BuildPartB() {
		this.product.Add('部件B2');
	}
	GetResult() {
		return this.product;
	}
}

class Director { // 指挥官，运行构造器的，也就是说，命令构造者去构造对象
	Construct(builder: Builder) {
		builder.BuildPartA();
		builder.BuildPartB();
	}
}


var director: Director = new Director(); // 操作人

var builder1: Builder = new ConcerteBuilder1(); // 具体构造者
var builder2: Builder = new ConcerteBuilder2();

director.Construct(builder1); // 操作人利用构造器去构造一个产品
var p1:Product = builder1.GetResult(); // 产出产品
p1.Show(); // 产品展示

console.log('--------')

director.Construct(builder2);
var p2:Product = builder2.GetResult();
p2.Show();

export default void 0;