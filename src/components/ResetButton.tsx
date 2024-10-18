import React from 'react'

// Props interface for the RemoveLastEntryButton component
interface Props {
  onRemove: () => void // Function to call when the button is clicked
  disabled: boolean // Prop to determine if the button should be disabled
}

// Functional component for removing the last entry
const RemoveLastEntryButton: React.FunctionComponent<Props> = ({
  onRemove,
  disabled,
}) => {
  const handleRemove = () => {
    if (window.confirm('Are you sure you want to remove the last coffee?')) {
      onRemove() // Call the onRemove function if the user confirms
    }
  }

  return (
    <button
      type="button"
      className={`mt-4 bg-red-500 hover:bg-red-700 text-slate-100 font-bold py-4 px-4 rounded ${
        disabled ? 'opacity-50 cursor-not-allowed' : ''
      }`} // Style adjustments for disabled state
      onClick={handleRemove}
      disabled={disabled} // Disable the button if there are no entries
    >
      Remove last coffee!
    </button>
  )
}

export default RemoveLastEntryButton
