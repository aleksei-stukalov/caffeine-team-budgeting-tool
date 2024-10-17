import React from 'react'

// Interface called Expense that sets out teh coffee cost in cents
interface Expense {
  cost: number
}

// Props interface that defines the expected DisplayTotal and creates the array
interface Props {
  expenses: Expense[]
}

// Functional DisplayTotal component
const DisplayTotal: React.FunctionComponent<Props> = ({ expenses }) => {
  const totalCost = expenses.reduce((total, { cost }) => total + cost, 0) // Sum the costs directly - utilises the reduce method

  return <h3>Total: ${(totalCost / 100).toFixed(2)}</h3> // Returns the total cost and converts from cents to dollars
}

// Export statement to otherfiles e.g., parent App.tsx
export default DisplayTotal
