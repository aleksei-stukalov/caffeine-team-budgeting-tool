import React, { useState } from "react";
import PlusButton from "./components/PlusButton.tsx";
import InputField from "./components/InputField.tsx";

interface Entry {
  id: number;
  name: string;
  cost: number;
}

function App() {
  const [entries, setEntries] = useState<Entry[]>([]);
  const [active, setActive] = useState(false);

  const handleClick = () => {
    setActive(true);
  };

  const addExpense = (submittedData: Entry) => {
    const holder = [...entries];
    holder.push(submittedData);
    setEntries(holder);
    setActive(false);
  };

  return (
    <div className="min-h-dvh">
      {entries.map((item) => (
        <div key={item.id}>
          {item.id}: {item.name} {item.cost}
        </div>
      ))}
      {active === true ? <InputField addExpense={addExpense} /> : <PlusButton
        onClick={handleClick}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
      />}
      
    </div>
  );
}

export default App;
