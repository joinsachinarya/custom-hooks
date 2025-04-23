import React from 'react'
import { createRoot } from "react-dom/client"
import App  from './App'

const Main = () => {
    const root = document.getElementById('root')
    if (!root) {
        throw new Error("Error in finding the root")
    }
    const container = createRoot(root)

    container.render(<App /> as any)
}

export default Main