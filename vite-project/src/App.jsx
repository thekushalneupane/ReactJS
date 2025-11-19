//using arrow function we can pass multiple items to the app
//we can add multiple div's inside a div
// we can use empty tags too
import React from "react";

const App = () => {
  return (
    <>
      <div id="parent">
        <h1 id="child1">Hello!</h1>
        <h2 id="child2">Hi!</h2>
      </div>
      <div>
        <h3>Heyyyy!</h3>
      </div>
    </>
  );
};

export default App;
