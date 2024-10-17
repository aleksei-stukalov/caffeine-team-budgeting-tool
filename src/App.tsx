import React, { useState } from 'react';
import PlusButton  from "./components/PlusButton.tsx"


function App() {

  const [entires, setEntries] = useState([]); 
  
  const [active, setActive] = useState(false); 

  const handleClick = () => {

   setActive(true)
  }

  return <div className="min-h-dvh">
    {entires.map(item => item)}
    {active === true ? "Hello World" : ""}
    <PlusButton onClick={handleClick} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"/>

  </div>
}

export default App
