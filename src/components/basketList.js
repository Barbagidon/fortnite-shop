import BasketItem from "./basketItem";
import { useContext } from "react";
import { ShopContext } from "./shop";

const BasketList = () => {
  const { cart, setProcess } = useContext(ShopContext);

  const getTotalCost = () => {
    let counter = 0;

    cart.forEach((item) => {
      counter += item.good.price * item.quantity;
    });
    return counter;
  };

  return (
    <ul className="collection basket-list">
      <li className="collection-item active">Корзина</li>

      {cart.map((item) => {
        const { good, quantity } = item;
        return (
          <BasketItem
            {...good}
            key={good.id}
            id={good.id}
            quantity={quantity}
          />
        );
      })}

      <li className="collection-item active">
        Общая стоимость: {getTotalCost()}
      </li>
      <i
        className="material-icons basket-close"
        onClick={() => setProcess("confirmed")}
      >
        close
      </i>
    </ul>
  );
};

export default BasketList;
