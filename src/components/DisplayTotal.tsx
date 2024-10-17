import React from 'react'
import InputField from './InputField'

// Interface called CostTotal that sets out the structure
interface CostTotal {
  id: number
  name: string
  cost: number
}

// Props interface that defines the expected DisplayTotal
interface Props {
  expenses: Expense[]
}
