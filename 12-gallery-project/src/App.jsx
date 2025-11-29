import{ useEffect, useState } from "react";
import axios from "axios";
import Card from './components/Card'

const App = () => {
  const [data, setData] = useState([]);

  const [index, setIndex] = useState(1)     

  const getData = async () => {
    const response = await axios.get(
      `https://picsum.photos/v2/list?page=${index}&limit=12`
    );

    setData(response.data);
  };

  useEffect(function () {
    getData();
  }, [index]);  //whenever is index state is changed getData() function will be changed

  let userData = (
    <h3 className="text-gray-500 text-sm top-1/2 left-1/2 absolute -translate-x-1/2 -translate-y-1/2 ">Loading...</h3>
  );

  if (data.length > 0) {
    userData = data.map(function (elem, idx) {
      return (
        <div key={idx}>
          <Card elem={elem}/>
        </div>
      );
    });
  }

  return (
    <div className="bg-black h-screen text-white overflow-auto p-4">

      
      <div className="flex flex-wrap gap-4 h-[80%]">{userData}</div>

      <div className="flex flex-wrap items-center justify-center gap-20 mt-5">
        <button 
          onClick={()=>{
            if(index>1){
              setIndex(index-1)
              setData([])
            }
          }}
          className="bg-amber-500  text-black px-2 py-1 rounded font-semibold cursor-pointer active:scale-95">
          Prev
        </button>
        <h1 className="text-m fixed font-medium">Page {index}</h1>
        <button 
          onClick={()=>{
            setData([])
            setIndex(index+1)
          }}
          className="bg-amber-500 text-black px-2 py-1 rounded font-semibold cursor-pointer active:scale-95">
          Next
        </button>
      </div>
    </div>
  );
};

export default App;
