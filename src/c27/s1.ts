abstract class AbstractExpression { // 抽象表达式
    abstract Interpret(context: Context1): void;
} 

class TerminalExpress extends AbstractExpression { // 终结符表达式
    Interpret(context: Context1): void {
        console.log('终端解释器')
    }
}

class NonterminalExpress extends AbstractExpression { // 非终结符表达式
    Interpret(context: Context1): void {
        console.log('非终端解释器')
    }
}
 

class Context1 { // 包含解释器之外的一些全局信息
    private _input: string;
    private _output: string;
    get input() {
        return this._input;
    }
    set input(input: string) {
        this._input = input;
    }
    get output() {
        return this._output;
    }
    set output(output: string) {
        this._output = output;
    }
}

var con: Context1 = new Context1();

var list: Set<AbstractExpression> = new Set();
list.add(new TerminalExpress());
list.add(new NonterminalExpress());
list.add(new TerminalExpress());
list.add(new TerminalExpress());

list.forEach((expression) => {
    expression.Interpret(con);
}) 