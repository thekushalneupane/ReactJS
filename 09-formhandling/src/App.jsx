import React, { useState } from "react";
//form submit handler and two way binding, when we submit the form the page is reloaded in default so we need to prevent the default action



const App = () => {

  const [title, setTitle] = useState('')

  function submitHandler(e){
    e.preventDefault()
    console.log('Form submitted by',title)
    setTitle('')  //empty the input section
  }


  return <div>
    <form onSubmit={(e)=>{
      submitHandler(e)
     }}>
      <input 
       type="text" 
       placeholder="Enter your name" 
       value={title} 
       onChange={(e)=>{
        setTitle(e.target.value) //setting the title written in input section
       }}
      />

      <button>Submit</button>
    </form>
  </div>;
};

export default App;
