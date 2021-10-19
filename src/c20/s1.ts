/**
 * ts实现这个迭代器有点困难
 */

abstract class MyIterator { // 迭代器抽象类
    abstract First(): object;
    abstract Next(): object;
    abstract IsDone(): Boolean;
    abstract CurrentItem(): object;
}

abstract class Aggregate {  //聚合抽象类
    abstract CreateIterator(): MyIterator;
}


class ConcereAggregate extends Aggregate { // 具体的聚合
    private _list: Set<object> = new Set();
    [index: number]: any;
    CreateIterator(): MyIterator {
        return new ConcreteIterator(this);
    }
    get count() {
        return this._list.size;
    }
    get this (): Set<object> {
        return this._list;
    }
}

class ConcreteIterator extends MyIterator {
    private _aggregate: ConcereAggregate;
    
    private _current: number = 0;

    constructor(aggregate: ConcereAggregate) {
        super();
        this._aggregate = aggregate;
    }
    First(): object {
        return this._aggregate[0];
    }
    Next(): object {
        throw new Error("Method not implemented.");
    }
    IsDone(): Boolean {
        throw new Error("Method not implemented.");
    }
    CurrentItem(): object {
        throw new Error("Method not implemented.");
    }

}