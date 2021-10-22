abstract class ComponentA { // 抽象组件，首先组件是一个树
    protected name: string;
    constructor(name: string) {
        this.name = name;
    }
    abstract Add(component: ComponentA): void; // 叶子结点没有add和remove，但是还是放在了这里，因为要Leaf和Composite有相同的行为，这种叫做【透明方式】
    abstract Remove(component: ComponentA): void; // 可以将add和remove放到Composite类中，这种叫做【安全方式】
    abstract Display(depth: number): void;
}

class Leaf extends ComponentA { // 叶子组件（也就是最末端的组件）
    constructor(name: string) {
        super(name);
    }
    Add(component: ComponentA): void {
        console.log('cannot add to a leaf');
    }
    Remove(component: ComponentA): void {
        console.log('cannot remove to a leaf');
    }
    Display(depth: number): void {
        let i = Array(depth).fill('-'); 
        console.log(i.join(''), this.name);
    }

}

class Composite extends ComponentA { // 分支组件，可以添加若干“叶子”，既然是树，那就可以添加Composite，也可以添加Leaf
    private list: Set<ComponentA> = new Set();

    constructor(name: string) {
        super(name);
    }

    Add(component: ComponentA): void {
        this.list.add(component);
    }
    Remove(component: ComponentA): void {
        this.list.delete(component);
    }
    Display(depth: number): void {
        let i = Array(depth).fill('-');
        console.log(i.join(''), this.name);
        this.list.forEach((component) => {
            component.Display(depth + 2); 
        })
    }
}

const root: Composite = new Composite('root'); // 根结点
root.Add(new Leaf('leaf A'));
root.Add(new Leaf('leaf B'));

const comp: Composite = new Composite('Composite X'); // 子节点1
comp.Add(new Leaf('leaf XA'));
comp.Add(new Leaf('leaf XB'));

root.Add(comp);

const comp2: Composite = new Composite('Composite XY'); // 子节点2
comp2.Add(new Leaf('leaf XYA'));
comp2.Add(new Leaf('leaf XYB'));

comp.Add(comp2);
root.Add(new Leaf('leaf C'));

var leaf: Leaf = new Leaf('leaf D');
root.Add(leaf);

root.Display(1);

console.log('删除leaf D')
root.Remove(leaf);

root.Display(1);
