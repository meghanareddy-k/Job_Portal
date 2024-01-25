import React, { useContext } from 'react'
import { StateContext } from '../App'

export default function Greeting() {
    const [state, dispatch] = useContext(StateContext)

  return (
    <div>
        <h1> Hello, <span className="username">{state.username}</span></h1>
    </div>
  )
}
