import React, { useState } from "react";
import { X } from 'lucide-react';



const App = () => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [task, setTask] = useState([])

  const formHandler = (e) => {
    e.preventDefault();
    setTitle("");
    setDesc("");

    const copyTask = [...task]

    copyTask.push({title,desc});

    // console.log(copyTask);
    
    setTask(copyTask)

  }

  const deleteNote = (idx) =>{
    const copyTask = [...task];

    copyTask.splice(idx,1);

    setTask(copyTask)
  }

  return (
    <div className="h-screen lg:flex bg-black text-white">
      <form
        onSubmit={(e) => {
          formHandler(e);
        }}
        className="flex gap-3 flex-col lg:w-1/2  items-start p-10"
      >
        <h1 className="text-3xl font-bold">Add Notes</h1>
        <input
          className="px-5 py-2 w-full border-2 rounded outline-none"
          type="text"
          placeholder="Enter task"
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />

        <textarea
          className="px-5 py-2 w-full h-32 border-2 rounded outline-none"
          type="text"
          placeholder="Enter task details"
          value={desc}
          onChange={(e) => {
            setDesc(e.target.value);
          }}
        />

        <button className="w-full bg-white text-black px-5 py-2 rounded outline-none active:scale-95">
          Add Task
        </button>
      </form>
      <div className="lg:w-1/2 lg:border-l-2 p-10">
        <h1 className="text-3xl font-bold">Your Notes</h1>
        <div className="flex items-start justify-start flex-wrap gap-5 mt-5 h-full overflow-auto">
          {task.map(function(elem,idx){
            return <div key={idx} className=" relative h-52 w-40 bg-white text-black rounded-xl px-3 py-3">
              <h3 onClick={()=>{
                deleteNote(idx)
              }} className="absolute top-0 right-0 rounded-full cursor-pointer active:scale-95"><X size={20} color="#111111"/></h3>
              
              <h3 className=" text-xl font-bold border-b-1" >{elem.title}</h3>
              <p className=" mt-2 text-gray-700 font-medium" >- {elem.desc}</p>
            </div>
          })}
        </div>
      </div>
    </div>
  );
};

export default App;
