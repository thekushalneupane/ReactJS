import React, { useEffect, useState } from 'react'
//useEffect helps for multiple tasks/processes to work
const App = () => {

  // function random(){
  //   const a = math.random()
  //   console.log(a)
  // }

  //whenever I render the site the function automatically generates a random number
  //which is the wrong way to do it

  const [num, setNum] = useState(0)
  const [num2, setNum2] = useState(100)

  useEffect(function(){
    console.log('useeffect is running'); 
  },[num2])

  //Using dependency the useEffect hook gets dependent on that thing
  //for blank dependency it wont depend on anything so the function will run only one time
  //if the dependency is added as num, the function will be dependent on num and run when mouse 
  // is enter bcoz it is for num
  //and if the dependency is added as num2, the function will be dependent on num2
  return (
    <div>
      <h1>num : {num}</h1>
      <h1>num2 : {num2} </h1>
      <button onMouseEnter={()=>{
        setNum(num+1)
      }}
      onMouseLeave={()=>{
        setNum2(num2+100);
      }}

      >Hover</button>
    </div>
  )
}

export default App
