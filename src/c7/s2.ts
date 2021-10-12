abstract class Subject {
	abstract Request(): void;
}

// 被代理真实实体
class RealSubject extends Subject {
	Request() {
		console.log('Request')
	}
}

// 代理类，这里要保存真实的要被代理的
class Proxy extends Subject {
	realSubject: RealSubject = null;
	Request() {
		if (this.realSubject == null) {
			this.realSubject = new RealSubject();
		}
		this.realSubject.Request();
	}
}

var proxy:Proxy = new Proxy();
proxy.Request();
export default void 0;