interface Params {
  name: string
  cost: string
}

export default function RowEntry(params: Params) {
  const { name, cost } = params
  return (
    <div className="bg-slate-500 text-slate-200 w-1/2 p-4 mb-4 flex justify-between rounded-md">
      <span>{name}</span>
      <span>$ {cost}</span>
    </div>
  )
}
