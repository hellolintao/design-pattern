abstract class Handler {
    protected successor: Handler = null;

    setSuccessor(successor: Handler) {
        this.successor = successor;
    }
    
    abstract HandleRequest(request: number):void;
}

class ConcreteHandler1 extends Handler {
    HandleRequest(request: number): void {
        if (request >=0 && request < 10) {
            console.log(ConcreteHandler1.name, '处理请求', request);
        } else if (this.successor != null){
            this.successor.HandleRequest(request);
        }
    }
}
class ConcreteHandler2 extends Handler {
    HandleRequest(request: number): void {
        if (request >=10 && request < 20) {
            console.log(ConcreteHandler2.name, '处理请求', request);
        } else if (this.successor != null){
            this.successor.HandleRequest(request);
        }
    }
}
class ConcreteHandler3 extends Handler {
    HandleRequest(request: number): void {
        if (request >=20 && request < 30) {
            console.log(ConcreteHandler3.name, '处理请求', request);
        } else if (this.successor != null){
            this.successor.HandleRequest(request);
        }
    }
}

var h1: Handler = new ConcreteHandler1();
var h2: Handler = new ConcreteHandler2();
var h3: Handler = new ConcreteHandler3();
h1.setSuccessor(h2);
h2.setSuccessor(h3);

var requ: number[] = [1,10,15,20,25,30,40];

requ.forEach((item) => {
    h1.HandleRequest(item);
});