import { ButtonHTMLAttributes } from 'react'

export default function PlusButton(
  props: ButtonHTMLAttributes<HTMLButtonElement>
) {
  return (
    <button
      className="bg-blue-500 hover:bg-blue-700 text-slate-100 font-bold py-4 px-4 rounded-md"
      {...props}
    >
      +
    </button>
  )
}
