/**
 * 逐渐的领悟到了
 * 用抽象定义行为
 * 用具体类完成实现细节
 * 抽象工厂，有工厂，工厂产出产品，产品是多样的，
 * 假设有两类产品，那就是两套工厂+两套实现
 */

class User { // 用户表
    private _id: string;
    private _name: string;
    set ID(id: string) {
        this._id = id;
    }
    get ID() {
        return this._id;
    }
    set Name(name: string) {
        this._name = name;
    }
    get Name() {
        return this._name;
    }
}
class Department { // 部门表
    private _id: string;
    private _name: string;
    set ID(id: string) {
        this._id = id;
    }
    get ID() {
        return this._id;
    }
    set Name(name: string) {
        this._name = name;
    }
    get Name() {
        return this._name;
    }
}


interface IFactory { // 工厂
    CreateUser(): IUser;
    CreateDepartment(): IDepartment;
}

interface IUser { // 用户表行为
    Insert(user: User): void;
    GetUser(id: string): User;
}

interface IDepartment { // 部门表行为
    Insert(department: Department): void;
    GetDepartment(id: string): Department;
}

class SqlserverFactory implements IFactory { // sqlserver工厂
    CreateUser(): IUser {
        return new SqlserverUser()
    }
    CreateDepartment(): IDepartment {
        return new SqlserverDepartment()
    }
}

class AccessFactory implements IFactory { // access工厂
    CreateUser(): IUser {
        return new AccessUser()
    }
    CreateDepartment(): IDepartment {
        return new AccessDepartment();
    }
}

class SqlserverUser implements IUser { // sql server对user接口的实现
    Insert(user: User): void {
        console.log('使用sql server保存User表', user);
    }
    GetUser(id: string): User {
        console.log('使用sql server检索用户表');
        return null;
    }

}

class AccessUser implements IUser { // access对user接口的实现
    Insert(user: User): void {
        console.log('使用Access保存User表', user);
    }
    GetUser(id: string): User {
        console.log('使用Access检索用户表');
        return null;
    }

}

class SqlserverDepartment implements IDepartment { // sql server对department接口的实现
    Insert(department: Department): void {
        console.log('使用department保存User表', department);
    }
    GetDepartment(id: string): Department {
        console.log('使用department检索User表');
        return null;
    }


}
class AccessDepartment implements IDepartment { // access对department接口的实现
    Insert(department: Department): void {
        console.log('使用Access保存department表', department);
    }
    GetDepartment(id: string): Department {
        console.log('使用Access检索department表');
        return null;
    }
}

var user: User = new User();
user.ID = 'user9';
var department: Department = new Department();
department.ID = 'department6';

var factory: IFactory = new AccessFactory();

var iu:IUser = factory.CreateUser();
iu.Insert(user);
iu.GetUser('1');

var de:IDepartment = factory.CreateDepartment();
de.Insert(department);
de.GetDepartment('2');


export default void 0;