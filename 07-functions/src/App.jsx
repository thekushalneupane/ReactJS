import React from 'react'

const App = () => {

  // function btnClicked(){
  //   console.log("Button is clicked!")
  // }

  function inputChanging(val){
    console.log(val)
  }

  function mouseOver(elem){
    console.log(elem);
    
  }

  return (
    <div>
      <button onClick={()=>{
        console.log("Button Clicked!")
      }}>Change User</button>


      <input onChange={function(elem){
          inputChanging(elem.target.value)
      }}   type="text" placeholder='Enter your name' />

      <div className='box' onMouseMove={(elem)=>{
        console.log(elem.clientY);
        
      }}>
      </div>

          
      <button onMouseOver={(elem)=>{
        mouseOver(elem)
        
      }}>Click</button>
      
    </div>
  )
}

export default App
