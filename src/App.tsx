import React from 'react'
import { useOnline } from './hooks/use-online'
import Test from './components/Test'

const App = () => {
    const { isOnline } = useOnline()
    return (
        <div>
            <h1>Network Status: {isOnline ? 'Online' : 'Offline'}</h1>
            <Test />
        </div>
    )
}

export default App