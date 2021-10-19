abstract class WorkState {
    abstract WriteProgram(work:Work): void;
}

class ForenoonState extends WorkState { // 上午工作状态
    WriteProgram(work: Work): void {
        if (work.hour < 12) {
            console.log(`当前时间：${work.hour}，上午工作，精神百倍`)
        } else {
            work.setState(new NoonState());
            work.WriteProgram();
        }
    }
}
class NoonState extends WorkState { // 中午工作状态
    WriteProgram(work: Work): void {
        if (work.hour < 13) {
            console.log(`当前时间：${work.hour}，午休中。。。`)
        } else {
            work.setState(new AfternoonState());
            work.WriteProgram();
        }
    }
}
class AfternoonState extends WorkState { // 下午工作状态
    WriteProgram(work: Work): void {
        if (work.hour < 17) {
            console.log(`当前时间：${work.hour}，下午工作中。。。`)
        } else {
            work.setState(new EveningState());
            work.WriteProgram();
        }
    }
}
class EveningState extends WorkState { // 傍晚工作状态
    WriteProgram(work: Work): void {
        if (work.finish) {
            work.setState(new RestState());
            work.WriteProgram();
        } else {
            if (work.hour < 21) {
                console.log(`当前时间：${work.hour}，加班`)
            } else {
                work.setState(new SleepState());
                work.WriteProgram();
            }
        }
    }
}

class RestState extends WorkState { // 下班状态
    WriteProgram(work: Work): void {
        console.log(`当前时间：${work.hour}，下班了`)
    }
}

class SleepState extends WorkState { // 睡觉了状态
    WriteProgram(work: Work): void {
        console.log(`当前时间：${work.hour}，睡觉了`)
    }
}

class Work {
    private _state: WorkState;
    private _hour: number;
    private _finish: boolean;
    constructor() {
        this._state = new ForenoonState();
    }

    get hour() {
        return this._hour;
    }

    get finish() {
        return this._finish;
    }
    
    setState(state: WorkState) {
        this._state = state;
    }

    set hour(hour: number) {
        this._hour = hour;
    }

    set finish(finish: boolean) {
        this._finish = finish;
    }

    WriteProgram() {
        this._state.WriteProgram(this);
    }
}

const ep = new Work();
ep.hour = 9;
ep.WriteProgram();
ep.hour = 10;
ep.WriteProgram();
ep.hour = 12;
ep.WriteProgram();
ep.hour = 13;
ep.WriteProgram();
ep.hour = 14;
ep.WriteProgram();
ep.hour = 17;
ep.WriteProgram();
ep.hour = 19;
ep.WriteProgram();
ep.hour = 22;
ep.WriteProgram();
