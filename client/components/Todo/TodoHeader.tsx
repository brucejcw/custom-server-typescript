import React, { KeyboardEvent, useState } from 'react'
import { useStores } from '@client/hooks/useStores'

export default () => {
    const [title, setTitle] = useState('')
    const { todo } = useStores()
    const onKeyDown = (e: KeyboardEvent) => {
        if (e.keyCode === 13) {
            todo.addItemAsync({
                title,
            })
        }
    }
    const onchange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTitle(e.target.value)
    }
    return (
        <div>
            <input type="text" onKeyDown={onKeyDown} onChange={onchange} />
        </div>
    )
}
