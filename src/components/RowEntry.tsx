interface Params {
  name: string
  cost: number
}

export default function RowEntry(params: Params) {
  const { name, cost } = params
  const strCost = String(cost)

  const dollars = strCost.split('').splice(0, strCost.length - 2)
  const cents = strCost.split('').splice(strCost.length - 2, 2)

  return (
    <div className="bg-slate-500 text-slate-200 w-1/2 p-4 mb-4 flex justify-between rounded-md">
      <span>{name}</span>
      <span>
        $ {dollars}.{cents}
      </span>
    </div>
  )
}
