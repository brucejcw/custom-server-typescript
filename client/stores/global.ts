import { makeAutoObservable } from 'mobx'

export class GlobalStore {
    constructor() {
        // https://zh.mobx.js.org/observable-state.html#makeautoobservable
        makeAutoObservable(this, {})
    }
}
