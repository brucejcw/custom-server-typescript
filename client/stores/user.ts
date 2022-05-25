import { makeAutoObservable } from 'mobx'

export class UserStore {
    name = 'Tony'

    constructor() {
        // https://zh.mobx.js.org/observable-state.html#makeautoobservable
        makeAutoObservable(this, {})
    }

    setName() {
        this.name = Math.random() + ''
    }
}
