import React, { useState } from 'react'

interface Props {
  addExpense: (expense: { id: number; name: string; cost: number }) => void
}

const InputField: React.FunctionComponent<Props> = ({ addExpense }) => {
  const [name, setName] = useState('')
  const [cost, setCost] = useState('')
  const [idCounter, setIdCounter] = useState(1)

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault()

    if (name && cost) {
      const parsedCost = Math.round(parseFloat(cost) * 100)

      if (!isNaN(parsedCost) && parsedCost >= 0) {
        addExpense({ id: idCounter, name, cost: parsedCost })
        setIdCounter(idCounter + 1)
        setName('')
        setCost('')
      } else {
        alert('Please enter a valid cost') // parsedCost is invalid, an alert to enter a valid cost
      }
    } else {
      alert('Please enter a coffee name and cost') // Name or cost is missing, an alert to enter both values
    }
  }
}

export default InputField

// const coffeeList = [
//   { id: 1, name: 'short black', amount: null },
//   { id: 2, name: 'long black', amount: null },
//   { id: 3, name: 'americano', amount: null },
//   { id: 4, name: 'macchiato', amount: null },
//   { id: 5, name: 'cortado', amount: null },
//   { id: 6, name: 'piccolo', amount: null },
//   { id: 7, name: 'flat white', amount: null },
//   { id: 8, name: 'cappuccino', amount: null },
//   { id: 9, name: 'latte', amount: null },
//   { id: 7, name: 'chai latte', amount: null },
//   { id: 8, name: 'mochaccino', amount: null },
//   { id: 9, name: 'extra shot', amount: null },
//   { id: 10, name: 'alternative milk', amount: null },
// ]
