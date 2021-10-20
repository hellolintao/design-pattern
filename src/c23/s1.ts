abstract class Command {
    protected receiver: Receiver;
    constructor(receiver: Receiver) {
        this.receiver = receiver;
    }
    abstract Excute(): void;
}

class ConcreteCommand extends Command {
    constructor(receiver: Receiver) {
        super(receiver);
    }
    Excute(): void {
        this.receiver.Action('命令1');
    }
}

class ConcreteCommand2 extends Command {
    constructor(receiver: Receiver) {
        super(receiver);
    }
    Excute(): void {
        this.receiver.Action('命令2');
    }
}
class Receiver { // 最后执行细节的
    Action(name: string) {
        console.log('执行请求', name)
    }
}
class Invoker {
    private _command: Command;
    setCommand(command: Command) {
        this._command = command;
    }
    ExcuteCommand() {
        this._command.Excute();
    }
}

var rec: Receiver = new Receiver();
var comm: Command = new ConcreteCommand(rec);
var comm2: Command = new ConcreteCommand2(rec);
var inv: Invoker = new Invoker();
inv.setCommand(comm);
inv.ExcuteCommand();
inv.setCommand(comm2);
inv.ExcuteCommand();
