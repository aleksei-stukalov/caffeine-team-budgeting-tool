interface Params {
  name: string
  cost: number
}

export default function RowEntry(params: Params) {
  const { name, cost } = params

  return (
    <div className="bg-slate-500 text-slate-200 p-4 mb-4 flex justify-between rounded-md">
      <span>{name}</span>
      <span>$ {(cost / 100).toFixed(2)}</span>
    </div>
  )
}
