import { productDataPack } from '../data/alt-products-dataPack'

interface Expense {
  cost: number
}

interface Props {
  expenses: Expense[]
}

export const AltProducts: React.FunctionComponent<Props> = ({ expenses }) => {
  const total = expenses.reduce((total, { cost }) => total + cost, 0)

  if (1000 < total && total < 2000) {
    return (
      <div>
        <div>
          For the same price you could have got: {productDataPack[0].name}
        </div>
        <a href={productDataPack[0].link}>Click Here</a>
      </div>
    )
  }

  if (2000 < total && total < 3000) {
    return (
      <div>
        <div>
          For the same price you could have got: {productDataPack[1].name}
        </div>
        <a href={productDataPack[1].link}>Click Here</a>
      </div>
    )
  }

  if (3000 < total && total < 4000) {
    return (
      <div>
        <div>
          For the same price you could have got: {productDataPack[2].name}
        </div>
        <a href={productDataPack[2].link}>Click Here</a>
      </div>
    )
  }

  if (4000 < total && total < 5000) {
    return (
      <div>
        <div>
          For the same price you could have got: {productDataPack[3].name}
        </div>
        <a href={productDataPack[3].link}>Click Here</a>
      </div>
    )
  }

  if (5000 < total && total < 6000) {
    return (
      <div>
        <div>
          For the same price you could have got: {productDataPack[4].name}
        </div>
        <a href={productDataPack[4].link}>Click Here</a>
      </div>
    )
  }

  if (6000 < total && total < 7000) {
    return (
      <div>
        <div>
          For the same price you could have got: {productDataPack[5].name}
        </div>
        <a href={productDataPack[5].link}>Click Here</a>
      </div>
    )
  }

  if (7000 < total && total < 8000) {
    return (
      <div>
        <div>
          For the same price you could have got: {productDataPack[6].name}
        </div>
        <a href={productDataPack[6].link}>Click Here</a>
      </div>
    )
  }

  if (8000 < total && total < 9000) {
    return (
      <div>
        <div>
          For the same price you could have got: {productDataPack[7].name}
        </div>
        <a href={productDataPack[7].link}>Click Here</a>
      </div>
    )
  }

  if (9000 < total && total < 1000) {
    return (
      <div>
        <div>
          For the same price you could have got: {productDataPack[8].name}
        </div>
        <a href={productDataPack[8].link}>Click Here</a>
      </div>
    )
  }

  if (1000 < total) {
    return (
      <div>
        <div>
          For the same price you could have got: {productDataPack[9].name}
        </div>
        <a href={productDataPack[9].link}>Click Here</a>
      </div>
    )
  } else return
}
