abstract class Mediator { // 抽象中介
    abstract Send(message: string, colleague: Colleague): void;
}

abstract class Colleague { // 抽象同事
    protected mediator: Mediator;
    constructor(mediator: Mediator) {
        this.mediator = mediator;
    }
}
class ConcreteColleague1 extends Colleague { // 同事1
    constructor(mediator: Mediator) {
        super(mediator)
    }
    Send(message: string) {
        this.mediator.Send(message, this);
    }
    Notify(message: string) {
        console.log('同事1得到信息', message)
    }
}
class ConcreteColleague2 extends Colleague { // 同事2
    constructor(mediator: Mediator) {
        super(mediator)
    }
    Send(message: string) {
        this.mediator.Send(message, this);
    }
    Notify(message: string) {
        console.log('同事2得到信息', message)
    }
}

class ConcreteMediator extends Mediator { // 具体中介
   private _colleague1: ConcreteColleague1;
   private _colleague2: ConcreteColleague2;

   set colleague1(colleague1: ConcreteColleague1) {
       this._colleague1 = colleague1;
   }

   set colleague2(colleague2: ConcreteColleague2) {
        this._colleague2 = colleague2;
    }
    
    Send(message: string, colleague: Colleague) {
        if (colleague == this._colleague1) {
            this._colleague2.Notify(message)
        } else {
            this._colleague1.Notify(message)
        }
    }
}

var mm = new ConcreteMediator(); // 具体中介

var ca1 = new ConcreteColleague1(mm); // 将具体中介保存起来，利用中介转发
var ca2 = new ConcreteColleague2(mm);

mm.colleague1 = ca1; // 在中介中保存实例
mm.colleague2 = ca2;

ca1.Send('你吃饭了吗');
ca2.Send('我没吃呢');