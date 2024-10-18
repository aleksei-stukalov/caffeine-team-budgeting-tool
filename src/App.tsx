import { useState } from 'react'
import PlusButton from './components/PlusButton.tsx'
import InputField from './components/InputField.tsx'
import RowEntry from './components/RowEntry.tsx'
import DisplayTotal from './components/DisplayTotal.tsx'
import ResetButton from './components/ResetButton.tsx'
import { AltProducts } from './components/AltProducts.tsx'

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

  const addExpense = (submittedData: Entry | null) => {
    if (submittedData === null) return setActive(false)

    const holder = [...entries]
    holder.push(submittedData)
    setEntries(holder)
    setActive(false)
  }

  const removeLastExpense = () => {
    const holder = [...entries]
    holder.pop()
    setEntries(holder)
    setActive(false)
  }

  return (
    <div className="min-h-dvh w-96 flex flex-col justify-start items-stretch mx-auto py-12">
      <p className="text-2xl font-semibold mb-8 text-center">
        Coffee Expenses calculator
      </p>
      <div className="text-slate-200">
        {entries.map((item) => (
          <RowEntry key={item.id} name={item.name} cost={item.cost} />
        ))}
      </div>

      {entries.length > 0 && (
        <>
          <DisplayTotal expenses={entries} />
          <div className="mb-8">
            <AltProducts expenses={entries} />
          </div>
        </>
      )}

      {active === true ? (
        <InputField addExpense={addExpense} />
      ) : (
        <>
          <PlusButton onClick={handleClick} />
          <ResetButton
            disabled={entries.length === 0}
            onRemove={removeLastExpense}
          />
        </>
      )}
    </div>
  )
}

export default App
