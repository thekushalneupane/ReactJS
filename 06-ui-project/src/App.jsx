import React from "react";
import Section1 from "./components/Section1/Section1";
import Section2 from "./components/Section2/Section2";

const App = () => {
  const users = [
    {
      img: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      intro: "",
      color:'royalblue',
      tag: "Satisfied",
    },
    {
      img: "https://images.unsplash.com/photo-1589832486202-cf43d3c2547b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE4fHx8ZW58MHx8fHx8",
      intro: "",
      color:'lightseagreen',
      tag: "Underserved",
    },
    {
      img: "https://images.unsplash.com/photo-1622131526860-72dee89ff68b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDM3fHx8ZW58MHx8fHx8",
      intro: "",
      color:'lightpink',
      tag: "Underbanked",
    },
  ];

  return (
    <div>
      <Section1 users={users}/>
          <Section2 />
    </div>
  );
};

export default App;
