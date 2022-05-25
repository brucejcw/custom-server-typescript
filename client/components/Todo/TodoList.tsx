import TodoItem from './TodoItem'
import { TodoItem as ITodoItem } from '@client/components/Todo/types/TodoItem'
import { observer } from 'mobx-react'

const TodoList = ({ arr }: { arr: ITodoItem[] }) => {
    return (
        <div>
            {arr.map((item) => {
                return (
                    <div key={item.title}>
                        <TodoItem item={item} />
                    </div>
                )
            })}
        </div>
    )
}

export default observer(TodoList)
