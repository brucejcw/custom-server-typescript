import TodoHeader from './TodoHeader'
import TodoList from './TodoList'
import { observer } from 'mobx-react'
import { useEffect } from 'react'
import { useStores } from '@client/hooks/useStores'

const Todo = () => {
    const { todo } = useStores()
    useEffect(() => {
        todo.getListAsync()
    }, [todo])
    return (
        <>
            <div>
                <TodoHeader />
                <TodoList arr={todo.list} />
            </div>
        </>
    )
}

export default observer(Todo)
