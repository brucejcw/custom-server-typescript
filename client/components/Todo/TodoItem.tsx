import { TodoItem } from '@client/components/Todo/types/TodoItem'

export default ({ item }: { item: TodoItem }) => {
    return (
        <div>
            <input checked={item.checked} type="checkbox" />
            {item.title}
        </div>
    )
}
