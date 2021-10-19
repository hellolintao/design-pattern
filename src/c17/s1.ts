
interface ITarget { // 想要得到的接口
    Request():void;
}



class Adaptee { // 需要适配的类
    SpecificRequest() {
        console.log('特殊请求')
    }
}

class Adpter implements ITarget { // 适配器
    private _adaptee: Adaptee = new Adaptee();
    Request(): void {
        this._adaptee.SpecificRequest();
    }
}

const target1: ITarget = new Adpter();
target1.Request();