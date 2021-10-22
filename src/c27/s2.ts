class PlayContext {
    private _text: string;
    get PlayText() {
        return this._text;
    }
    set PlayText(text: string) {
        this._text = text;
    }
}

abstract class AbstractExpressionPlay { // 抽象表达式
    Interpret(context: PlayContext) {
        if (context.PlayText.length == 0) {
            return;
        } else {
            var playInfo: string = context.PlayText.substring(0, 2);
            context.PlayText = context.PlayText.substring(3);
            this.Excute(playInfo[0], playInfo[1]);
        }
    }
    abstract Excute(key: string, value: string):void;
}
// 音符
class Note extends AbstractExpressionPlay {
    Excute(key: string, value: string): void {
        var note:string = '';
        switch(key) {
            case 'C':
                note = '1';
                break;
            case 'D':
                note = '2';
                break;
            case 'E':
                note = '3';
                break;
            case 'F':
                note = '4';
                break;
            case 'G':
                note = '5';
                break;
            case 'H':
                note = '6';
                break;
            case 'I':
                note = '7';
                break;
        }
        console.log(note);
    } 
}
// 音调

class Scale extends AbstractExpressionPlay {
    Excute(key: string, value: string): void {
        var scale:string='';
        switch(parseInt(value, 10)) {
            case 1:
                scale = 'low';
                break;
            case 2:
                scale = 'middle';
                break;
            case 3:
                scale = 'high';
                break;
        }
        console.log(scale);
    }
}

var context: PlayContext = new PlayContext();
context.PlayText = 'O2E3D1';

var express: AbstractExpressionPlay = null;
try {
    while(context.PlayText.length > 0) {
        var str = context.PlayText.substring(0, 1);
        switch(str) {
            case 'O':
                express = new Scale();
                break;
            case 'C':
            case 'D':
            case 'E':
            case 'F':
            case 'G':
            case 'A':
            case 'B':
            case 'P':
                express = new Note();
                break;
        }
        express.Interpret(context)
    }
} catch (error) {
    
}
// 写得有点乱，不写了
 