import { useContext, useEffect } from "react";
import { MainContext } from "../context/context";

const BasketItem = (props) => {
  const { name, price, id, quantity } = props;
  const { removeItemFromCart, removeOneItem, addToBasket } =
    useContext(MainContext);
  if (!name) {
    console.log("jopa");
  }
  useEffect(() => {
    if (quantity < 1) {
      removeItemFromCart(id);
    }
  }, [quantity]);
  return (
    <li className="collection-item" id={id}>
      {name} x {quantity} = {price * quantity}
      <span className="secondary-content">
        <i
          className="material-icons 
        "
          onClick={() => removeOneItem(id)}
        >
          exposure_neg_1
        </i>

        <i
          className="material-icons 
        "
          onClick={() => addToBasket(id)}
        >
          exposure_plus_1
        </i>
        <i
          className="material-icons close"
          onClick={() => removeItemFromCart(id)}
        >
          close
        </i>
      </span>
    </li>
  );
};

export default BasketItem;
