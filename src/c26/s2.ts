abstract class Website {
    abstract Use(): void;
}

class ConcreteWebsite extends Website {
    private _name: string;
    constructor(name: string) {
        super();
        this._name = name
    }
    Use():void {
        console.log('网站分类', this._name);
    }
}

class WebsiteFactory {
    private _flyweights = new Set();

    GetWebsitCategory(key: string) {
        const keys: string[] = [];
        this._flyweights.forEach((flyweight: any) => {
            keys.push(flyweight.key)
        });
        if (keys.includes(key)) {
            var result;
            this._flyweights.forEach((flyweight: any) => {
                flyweight.key == key && (result = flyweight)
            });
            return result;
        } else {
            this._flyweights.add({
                key,
                instanceo: new ConcreteWebsite('key')
            });
        }
    }

    GetWebsiteCount() {
        return this._flyweights.size;
    }

}