import { productDataPack } from "../data/alt-products-dataPack";

interface Expense {
  cost: number;
}

interface Props {
  expenses: Expense[];
}

export const AltProducts: React.FunctionComponent<Props> = ({ expenses }) => {
  const total = expenses.reduce((total, { cost }) => total + cost, 0);
  const totalRound = Math.floor(total / 10) * 10;
  console.log(totalRound);
  //    const alternateProduct = productDataPack.find((element) => element.cost === totalRound);

  //    console.log(alternateProduct)

  return <></>;

  return (
    <div>
      <div>For the same price you could have got: {alternateProduct.name}</div>
      <div>{alternateProduct.link}</div>
    </div>
  );
};
