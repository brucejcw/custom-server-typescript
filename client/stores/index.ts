import { enableStaticRendering } from 'mobx-react'
import { configure } from 'mobx'

// mobx在严格模式下，不允许在 action 外更改任何状态
configure({ enforceActions: 'observed' })

// To avoid leaking memory, call useStaticRendering(true) when using server side rendering which essentially disables observer.
enableStaticRendering(typeof window === 'undefined')

export * from './global'
export * from './user'
export * from './shopping'
export * from './todo'
export default {}
