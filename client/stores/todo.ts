import { makeAutoObservable, runInAction } from 'mobx'
import { TodoItem } from '@client/components/Todo/types/TodoItem'
import axios from 'axios'
import request from '@client/lib/request'

export class TodoStore {
    list: TodoItem[] = []

    constructor() {
        makeAutoObservable(this, {})
    }

    setList(items: TodoItem[]) {
        this.list = items
    }

    addItemAsync(item: TodoItem) {
        axios.post('/bff/todo/add').then(() => {
            runInAction(() => {
                this.list.push(item)
            })
        })
    }

    getListAsync() {
        request
            .get('/todo/list')
            .then((res) => {
                this.setList(res.data.list)
            })
            .catch((err) => {
                console.log(err)
            })
    }
}
