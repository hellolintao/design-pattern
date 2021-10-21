abstract class Vistor { // 访问者，可以访问元素A、元素B
    abstract VisitConcreteElementA(concreteElementA: ConcreteElementA): void;
    abstract VisitConcreteElementB(concreteElementB: ConcreteElementB): void;
}

class ConcerteVistr1 extends Vistor {
    VisitConcreteElementA(concreteElementA: ConcreteElementA): void {
        console.log(this.constructor.name, '访问', concreteElementA.constructor.name);
    }
    VisitConcreteElementB(concreteElementB: ConcreteElementB): void {
        console.log(this.constructor.name, '访问', concreteElementB.constructor.name);
    }
}
class ConcerteVistr2 extends Vistor {
    VisitConcreteElementA(concreteElementA: ConcreteElementA): void { // 这个方法是被元素调用的
        console.log(this.constructor.name, '访问', concreteElementA.constructor.name);
    }
    VisitConcreteElementB(concreteElementB: ConcreteElementB): void {
        console.log(this.constructor.name, '访问', concreteElementB.constructor.name);
    }
}


abstract class ElementC28 { // 元素抽象，包括Accept
    abstract Accept(vistor: Vistor): void;
}

class ConcreteElementA extends ElementC28 { // 具体元素A
    Accept(vistor: Vistor): void { // 访问者
       vistor.VisitConcreteElementA(this);
    }
    OperationA() {

    }
}
class ConcreteElementB extends ElementC28 { // 具体元素B
    Accept(vistor: Vistor): void {
       vistor.VisitConcreteElementB(this);
    }
    OperationB() {
        
    }
}

class ObjectStruct {
    private _list: Set<ElementC28> = new Set(); // 元素列表
    Attact(element: ElementC28) {
        this._list.add(element);
    }
    Detach(element: ElementC28) {
        this._list.delete(element);
    }
    Accept(vistor: Vistor) {
        this._list.forEach((ele) => {
            ele.Accept(vistor);
        })
    }
}

var o:ObjectStruct = new ObjectStruct();
o.Attact(new ConcreteElementA());
o.Attact(new ConcreteElementB());

var v1 = new ConcerteVistr1();
var v2 = new ConcerteVistr2();
o.Accept(v1);
o.Accept(v2);