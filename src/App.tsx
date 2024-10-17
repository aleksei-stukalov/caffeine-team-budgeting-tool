import { useState } from 'react'
import PlusButton from './components/PlusButton.tsx'
import InputField from './components/InputField.tsx'
import RowEntry from './components/RowEntry.tsx'

interface Entry {
  id: number
  name: string
  cost: number
}

function App() {
  const [entries, setEntries] = useState<Entry[]>([])
  const [active, setActive] = useState(false)

  const handleClick = () => {
    setActive(true)
  }

  const addExpense = (submittedData: Entry) => {
    const holder = [...entries]
    holder.push(submittedData)
    setEntries(holder)
    setActive(false)
  }

  return (
    <div className="min-h-dvh flex flex-col justify-start items-center container mx-auto py-12">
      {entries.map((item) => (
        <RowEntry key={item.id} name={item.name} cost={item.cost} />
      ))}
      {active === true ? (
        <InputField addExpense={addExpense} />
      ) : (
        <PlusButton
          main
          onClick={handleClick}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
        />
      )}
    </div>
  )
}

export default App
