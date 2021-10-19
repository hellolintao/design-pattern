abstract class Company {
    protected name: string;
    constructor(name: string) {
        this.name = name;
    }
    abstract Add(company: Company): void;
    abstract Remove(company: Company): void;
    abstract Display(depth: number): void;
    abstract LineOfDuty():void;
}

class ConcreteCompany extends Company {
    constructor(name: string) {
        super(name);
    }
    private _list: Set<Company> = new Set();
    Add(company: Company): void {
        this._list.add(company)
    }
    Remove(company: Company): void {
        this._list.delete(company)
    }
    Display(depth: number): void {
        let i = Array(depth).fill('-');
        console.log(i.join(''), this.name);
        this._list.forEach((company) => {
            company.Display(depth + 2);
        })
    }
    LineOfDuty(): void {
        this._list.forEach((company) => {
            company.LineOfDuty();
        })
    }
}

class HRDepaetment extends Company {
    constructor(name: string) {
        super(name);
    }
    Add(company: Company): void {}
    Remove(company: Company): void {}
    Display(depth: number): void {
        let i = Array(depth).fill('-');
        console.log(i.join(''), this.name);
    }
    LineOfDuty(): void {
        console.log(`${this.name}: 员工培训管理`)
    }
}
class FinanceDepaetment extends Company {
    constructor(name: string) {
        super(name);
    }
    Add(company: Company): void {}
    Remove(company: Company): void {}
    Display(depth: number): void {
        let i = Array(depth).fill('-');
        console.log(i.join(''), this.name);
    }
    LineOfDuty(): void {
        console.log(`${this.name}: 公司收支管理`)
    }
}

const root1 = new ConcreteCompany('总公司');
root1.Add(new HRDepaetment('总公司人力'));
root1.Add(new FinanceDepaetment('总公司财务'));

const comp1 = new ConcreteCompany('上海分公司');
comp1.Add(new HRDepaetment('上海分公司人力'));
comp1.Add(new FinanceDepaetment('上海分公司财务'));

const comp3 = new ConcreteCompany('北京分公司');
comp3.Add(new HRDepaetment('北京分公司人力'));
comp3.Add(new FinanceDepaetment('北京分公司财务'));

const comp4 = new ConcreteCompany('北京海淀分公司');
comp4.Add(new HRDepaetment('北京海淀分公司人力'));
comp4.Add(new FinanceDepaetment('北京海淀分公司财务'));

comp3.Add(comp4);

root1.Add(comp1);
root1.Add(comp3);
root1.LineOfDuty();
root1.Display(1);