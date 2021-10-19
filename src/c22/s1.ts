abstract class Implementor {  // 实现
    abstract Operation():void; 
}

class ConcreteImplementorA extends Implementor { // 具体实现A
    Operation(): void {
        console.log('具体实现A')
    }
}
class ConcreteImplementorB extends Implementor { // 具体实现B
    Operation(): void {
        console.log('具体实现B')
    }
}

abstract class Abstraction { // 抽象
    protected implementor: Implementor; // 所谓的桥接，就是通过这里，将抽象和行为桥接在一起
    SetImplementor(implementor: Implementor) {
        this.implementor = implementor;
    }
    Operation() {
        this.implementor.Operation()
    }
}

class RefinedAbstraction extends Abstraction { // 提炼一个抽象
    Operation() {
        console.log('ovvewrite')
        this.implementor.Operation()
    }
}

const ab: Abstraction = new RefinedAbstraction();
ab.SetImplementor(new ConcreteImplementorA());
ab.Operation();

ab.SetImplementor(new ConcreteImplementorB());
ab.Operation();