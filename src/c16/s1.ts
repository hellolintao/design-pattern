/**
 * 抽象决定性行为
 * 具体类决定细节
 */

class Context { // 是状态模式的一个起点，
    private _state: State; // 保存状态
    constructor(state: State) { // 初始化状态
        this._state = state
    }

    set state(state: State) { // 设置状态
        this._state = state
        console.log('设置当前状态', this)
    }

    get state() { // 获取状态
        return this._state;
    }

    Request() { // 触发状态的改变
        this._state.Handle(this);
    }
}


abstract class State { // 状态类，封装抽象的状态修改器，传入上下文，因为真正的状态是保存在上下文中的
    abstract Handle(context:Context): void;
}

class ConcreteStateA extends State { // 具体的状态
    Handle(context: Context) {
        console.log('A to B');
        context.state = new ConcreteStateB();
    }
}
class ConcreteStateB extends State {
    Handle(context: Context) {
        console.log('B to A');
        context.state = new ConcreteStateA();
    }
}

var c1: Context = new Context(new ConcreteStateA());
c1.Request();
c1.Request();
c1.Request();

