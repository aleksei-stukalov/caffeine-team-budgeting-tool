import React, { useState } from 'react'

// Typeface interface named Props
interface Props {
  addExpense: (expense: { id: number; name: string; cost: number }) => void
}

// Functional component with name, cost and idCounter state variables
const InputField: React.FunctionComponent<Props> = ({ addExpense }) => {
  const [name, setName] = useState('')
  const [cost, setCost] = useState('')
  const [idCounter, setIdCounter] = useState(1)

  // handleSubmit to look after form submission
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault()

    // Checks name and cost have values
    if (name && cost) {
      const parsedCost = Math.round(parseFloat(cost) * 100) // The cost string  parsed into a float and then multiplied by 100 (to convert dollars to cents)

      // Checks if parsedCost is a valid number and is non-negative
      if (!isNaN(parsedCost) && parsedCost >= 0) {
        addExpense({ id: idCounter, name, cost: parsedCost }) // Calls the addExpense function containing these props
        setIdCounter(idCounter + 1) // Unique id
        setName('') // name and cost states are reset to empty strings after submission
        setCost('')
      } else {
        alert('Please enter a valid cost') // parsedCost is invalid, an alert to enter a valid cost
      }
    } else {
      alert('Please enter a coffee name and cost') // Name or cost is missing, an alert to enter both values
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Coffee name:</label>
        <input // Input field for the coffee name
          id="name"
          type="text"
          value={name}
          onChange={(event) => setName(event.target.value)}
          placeholder="Enter coffee (e.g., Flat white)"
          required // Boolean attribute that specifies that the input field must be filled out before the form can be submitted
          style={{ width: '180px' }} // Added a style element to allow for placeholder text
        />
      </div>
      <div>
        <label htmlFor="cost">Coffee cost:</label>
        <input // Input field for the coffee cost
          id="cost"
          type="number"
          value={cost}
          onChange={(event) => setCost(event.target.value)}
          placeholder="Enter coffee cost ($)"
          required
          style={{ width: '180px' }}
        />
      </div>
      <button type="submit">Add coffee cost</button>{' '}
      {/*Submit button is added to the form for users to submit coffee costs*/}
    </form>
  )
}

export default InputField

// const coffeeList = [
//   { name: 'short black', cost: null },
//   { name: 'long black', cost: null },
//   { name: 'americano', cost: null },
//   { name: 'macchiato', cost: null },
//   { name: 'cortado', cost: null },
//   { name: 'piccolo', cost: null },
//   { name: 'flat white', cost: null },
//   { name: 'cappuccino', cost: null },
//   { name: 'latte', cost: null },
//   { name: 'chai latte', cost: null },
//   { name: 'mochaccino', cost: null },
//   { name: 'extra shot', cost: null },
//   { name: 'alternative milk', cost: null },
// ]
