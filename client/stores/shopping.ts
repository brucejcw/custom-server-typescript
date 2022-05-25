import { makeAutoObservable } from 'mobx'

export class ShoppingStore {
    list: any = []

    constructor() {
        makeAutoObservable(this, {})
    }

    add() {
        this.list.push(Math.random() + 'aaaf')
    }
}
