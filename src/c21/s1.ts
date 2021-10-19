class Singleton {
    private static singleton: Singleton = new Singleton();

    private constructor() {}

    public static GetInstance(): Singleton {
        return this.singleton;
    }
}

// const s11:Singleton = Singleton.GetInstance();
// const s22:Singleton = Singleton.GetInstance();
// console.log(s11 == s22);

var b11: Singleton;
var b22: Singleton;
setTimeout(() => {
    b11 = Singleton.GetInstance();
}, 100)
setTimeout(() => {
    b22 = Singleton.GetInstance();
}, 100)
setTimeout(() => {
    console.log(b11 == b22);
}, 200)