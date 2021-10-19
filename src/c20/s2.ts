class My {
    private _list:[any, any, any] =['1', '2', '3'];
    [index: number]: any;
    _name: string = 'lin';
    get name() {
        return 'tao'
    }

    get this(): [any, any, any] {
        return this._list;
    }
}

const MyA = new My();

console.log(MyA[0])
console.log(MyA['this'])
console.log(MyA['name'])