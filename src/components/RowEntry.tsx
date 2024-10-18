interface Params {
  name: string
  cost: number
}

export default function RowEntry(params: Params) {
  const { name, cost } = params

  return (
    <div className="odd:bg-slate-600 even:bg-slate-700 p-4 first:rounded-t-md last:rounded-b-md flex justify-between">
      <span>{name}</span>
      <span>$ {(cost / 100).toFixed(2)}</span>
    </div>
  )
}
