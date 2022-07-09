import GoodsItem from "./goodsItem";
import { useContext } from "react";
import { ShopContext } from "./shop";

const GoodsList = (props) => {
  const value = useContext(ShopContext);
  const { goods = [] } = props;

  if (!goods.length) {
    return <h3>Nothing here</h3>;
  }

  return (
    <div className="goods">
      {goods.map((item) => {
        return <GoodsItem key={item.id} {...item} />;
      })}
    </div>
  );
};

export default GoodsList;
