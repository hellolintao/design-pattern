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


interface IFactory { // 工厂[只有要有2套工厂]
    CreateUser(): IUser;
}

interface IUser { // 用户表行为[有两套实现]
    Insert(user: User): void;
    GetUser(id: string): User;
}


class SqlserverFactory implements IFactory { // sqlserver工厂
    CreateUser(): IUser {
        return new SqlserverUser()
    }
}

class AccessFactory implements IFactory { // access工厂
    CreateUser(): IUser {
        return new AccessUser()
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

var user: User = new User();
user.ID = 'user9';

// var factory: IFactory = new AccessFactory();
var factory: IFactory = new SqlserverFactory();

var iu:IUser = factory.CreateUser();
iu.Insert(user);
iu.GetUser('1');

export default void 0;