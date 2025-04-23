import React from 'react'
import { useOnline } from './hooks/use-online'
import Test from './components/Test'

const App = () => {
    const { } = useOnline()
    return (<>
        <Test />
    </>)
}

export default App