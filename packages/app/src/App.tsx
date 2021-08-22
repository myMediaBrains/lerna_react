import React, { useState } from 'react';
import { Button } from "@mymediabrains/components";
import "./App.css";
import logo from "./logo.svg"



function App() {
  const [count, setCount] = useState(0);

  console.log(Button);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        + Your count is {count}
        + <Button onClick={() => setCount((prev) => ++prev)} />
     </header>
   </div>
 );
}

export default App;