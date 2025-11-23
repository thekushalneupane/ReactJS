import React, { useState } from 'react'

const App = () => {

  // const [num, setNum] = useState(100)

  // function changeNum(){
  //   setNum(10);
  // }

  // const [count, setCount] = useState(0)
  // function incCount(){
  //   setCount(count+1 )
  // }

  const [num, setNum] = useState({user:'Kushal', age:'20',})

  function changeNum(){
    let newNum = {...num} //referencing the num object
    newNum.user = 'Messi'
    setNum(newNum);
  }

  return (
    <div>
      {/* <h1>Value of a is {num}</h1>
      <button onClick={changeNum}>Click to change a</button> */}

      {/* <button onClick={incCount}>Count:{count}</button> */}

      <h1>{num.user},{num.age}</h1>
      <button onClick={changeNum}>Click</button>
    </div>
  )
}

export default App
