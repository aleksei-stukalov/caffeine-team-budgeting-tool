import React, { useState } from 'react'
import PlusButton from './components/PlusButton.tsx'
import RowEntry from './components/RowEntry.tsx'

function App() {
  // HELLO
  const [entires, setEntries] = useState([])

  const [active, setActive] = useState(false)

  const handleClick = () => {
    setActive(true)
  }

  return (
    <div className="min-h-dvh flex flex-col justify-start items-center container mx-auto py-12">
      <RowEntry name={'Flat White'} cost={'5.50'} />
      {entires.map((item) => item)}
      {active === true ? 'Hello World' : ''}
      <PlusButton
        onClick={handleClick}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
      />
    </div>
  )
}

export default App
