import React from 'react'
import { useOnline } from '../hooks/use-online'

const Test = () => {
  const { isOnline } = useOnline()
  return (<div>
    {isOnline ? "Online" : "Offline"}
  </div>)
}

export default Test