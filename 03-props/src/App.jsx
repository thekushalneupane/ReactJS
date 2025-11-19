import React from 'react'
import Card from './Components/card'

const App = () => {
  return (
    <div className='parent'>
      <Card user='Kushal' age={20} img='https://images.unsplash.com/photo-1761669973922-3e4107cf1136?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'/>
      <Card user='Sachin' age={21} img='https://images.unsplash.com/photo-1759505041005-6c75a1399f4c?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'/>
    </div>
  )
}

export default App
