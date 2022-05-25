import React from 'react'
import { UserStore, ShoppingStore, TodoStore } from '@client/stores'

export const storesContext = React.createContext({
    user: new UserStore(),
    shopping: new ShoppingStore(),
    todo: new TodoStore(),
})
