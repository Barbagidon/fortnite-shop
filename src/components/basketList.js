import BasketItem from "./basketItem";
import { useContext } from "react";
import { ShopContext } from "./shop";
import { MainContext } from "../context/context";

const BasketList = () => {
  const { setProcess } = useContext(ShopContext);

  const { cart } = useContext(MainContext);

  const getTotalCost = () => {
    let counter = 0;

    cart.forEach((item) => {
      counter += item.good.price * item.quantity;
    });
    return counter;
  };

  console.log(cart);

  return (
    <ul className="collection basket-list">
      <li className="collection-item active">Корзина</li>

      {cart.length > 0 ? (
        cart.map((item) => {
          const { good, quantity } = item;
          return (
            <BasketItem
              {...good}
              key={good.id}
              id={good.id}
              quantity={quantity}
            />
          );
        })
      ) : (
        <li className="collection-item">Корзина пуста:(</li>
      )}

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
