import { useState } from 'react'
import PlusButton from './components/PlusButton.tsx'
import InputField from './components/InputField.tsx'
import RowEntry from './components/RowEntry.tsx'
import DisplayTotal from './components/DisplayTotal.tsx'

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
    <div className="min-h-dvh w-96 flex flex-col justify-start items-stretch w-1/2 mx-auto py-12">
      <p className="text-2xl font-semibold mb-8 text-center">
        Coffee Expenses calculator
      </p>
      {entries.map((item) => (
        <RowEntry key={item.id} name={item.name} cost={item.cost} />
      ))}
      <DisplayTotal expenses={entries} />
      {active === true ? (
        <InputField addExpense={addExpense} />
      ) : (
        <PlusButton main onClick={handleClick} />
      )}
    </div>
  )
}

export default App
