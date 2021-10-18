/**
 * 逐渐的领悟到了
 * 用抽象定义行为
 * 用具体类完成实现细节
 * 抽象工厂，有工厂，工厂产出产品，产品是多样的，
 * 假设有两类产品，那就是两套工厂+两套实现
 */
import {config} from './config';
import 'reflect-metadata';
type Constructor<T = any> = new (...args: any[]) => T; // 声明一个构造函数

const Injectable = ():ClassDecorator => target => {};

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

interface IUser { // 用户表行为
    Insert(user: User): void;
    GetUser(id: string): User;
}

interface IDepartment { // 部门表行为
    Insert(department: Department): void;
    GetDepartment(id: string): Department;
}

// @Injectable()
@Reflect.metadata('SqlserverUser', SqlserverUser)
class SqlserverUser implements IUser { // sql server对user接口的实现
    Insert(user: User): void {
        console.log('使用sql server保存User表', user);
    }
    GetUser(id: string): User {
        console.log('使用sql server检索用户表');
        return null;
    }
}

// @Injectable()
@Reflect.metadata('AccessUser', AccessUser)
class AccessUser implements IUser { // access对user接口的实现
    Insert(user: User): void {
        console.log('使用Access保存User表', user);
    }
    GetUser(id: string): User {
        console.log('使用Access检索用户表');
        return null;
    }

}

// @Injectable()
@Reflect.metadata('SqlserverDepartment', SqlserverDepartment)
class SqlserverDepartment implements IDepartment { // sql server对department接口的实现
    Insert(department: Department): void {
        console.log('使用department保存User表', department);
    }
    GetDepartment(id: string): Department {
        console.log('使用department检索User表');
        return null;
    }
}

// @Injectable()
@Reflect.metadata('AccessDepartment', AccessDepartment)
class AccessDepartment implements IDepartment { // access对department接口的实现
    Insert(department: Department): void {
        console.log('使用Access保存department表', department);
    }
    GetDepartment(id: string): Department {
        console.log('使用Access检索department表');
        return null;
    }
}


class DataAccess {
    private static readonly db: string = config.ab;
    static createUser():IUser {
        // ad=Sqlserver
        var result: IUser;
        console.log(`${this.db}User`);
        Reflect.getMetadata(`${this.db}User`, result);
        console.log(result)
        return result;
    }

    static creatDepartment(): IDepartment {
        var result: IDepartment = null;
        switch(this.db) {
            case 'Sqlserver':
                result = new SqlserverDepartment();
                break;
            case 'Access':
                result = new AccessDepartment();
                break;
        }
        return result;
    }
}
var user: User = new User();
user.ID = 'user9';
var department: Department = new Department();
department.ID = 'department6';

const iu: IUser = DataAccess.createUser();
// iu.Insert(user);
// iu.GetUser('1');

// const de: IDepartment = DataAccess.creatDepartment();
// de.Insert(department);
// de.GetDepartment('2');