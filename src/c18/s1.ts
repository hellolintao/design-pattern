import { ppid } from "process";

class Originator { // 发起人，也就是要被保存的人，他必须有创建备忘录和恢复备忘录的功能
    private _state: string;
    get state() {
        return this._state;
    }
    set state(state: string) {
        this._state = state;
    }

    CreateMemento(): Memento { // 创建备忘录
        return new Memento(this._state);
    }

    SetMemento(memento: Memento) { // 恢复备忘录
        this._state = memento.state
    }

    Show() {
        console.log('state=', this._state);
    }
}

class Memento { // 备忘录，有具体备忘的所有字段
    private _state: string;
    get state() {
        return this._state;
    }
    constructor(state: string) {
        this._state = state;
    }
}

class Caretaker { // 管理者，也就是说他是来保存备忘录的 
    private _memento: Memento;
    get memento() {
        return this._memento;
    }
    set memento(memento: Memento) {
        this._memento = memento;
    }
}

var oo: Originator = new Originator();
oo.state = '状态1';
oo.Show();

var cc: Caretaker = new Caretaker(); // 管理者创建了一个备忘录
cc.memento = oo.CreateMemento();

oo.state = '状态2';
oo.Show();

oo.SetMemento(cc.memento);
oo.Show();