import { useState, useEffect, createContext } from "react";
import ShopService from "../services/shopService";
import setContent from "../utils/setContent";
import GoodsList from "./goodsList";
import Cart from "./cart";
import Alert from "./alert";

export const ShopContext = createContext();

function Shop() {
  const [goods, setGoods] = useState([]);
  const [cart, setCart] = useState([]);
  const [alertName, setAlertName] = useState("");
  const { getGoods, setProcess, process } = ShopService();

  useEffect(() => {
    getGoods().then((res) => {
      setProcess("confirmed");
      setGoods(res.featured);
    });
  }, []);

  const closeAlert = () => {
    setAlertName("");
  };

  const addToCart = (id) => {
    console.log(111);
    const elementInArr = cart.findIndex((item) => item.good.id === id);
    const chooseItem = goods.filter((item) => item.id === id);
    const [good] = chooseItem;

    setAlertName(good.name);

    if (elementInArr < 0) {
      const objForCart = {
        good,
        quantity: 1,
      };
      setCart([...cart, objForCart]);
    } else {
      const addQuantity = cart.map((item) => {
        if (item.good.id === id) {
          return {
            ...item,
            quantity: item.quantity + 1,
          };
        } else {
          return item;
        }
      });

      setCart(addQuantity);
    }
  };

  const removeItemFromCart = (id) => {
    const withoutDeleteItemsArr = cart.filter((item) => item.good.id !== id);

    setCart(withoutDeleteItemsArr);
  };

  const removeOneItem = (id) => {
    const deleteIndex = cart.findIndex((item) => item.good.id === id);

    const decQuantityChooseItem = cart.map((item, i) => {
      if (cart[deleteIndex] === item) {
        return {
          ...item,
          quantity: item.quantity - 1,
        };
      } else {
        return item;
      }
    });

    setCart(decQuantityChooseItem);
  };

  const value = {
    addToCart,
    cart,
    setProcess,
    process,
    removeItemFromCart,
    removeOneItem,
    closeAlert,
    alertName,
  };

  return (
    <ShopContext.Provider value={value}>
      <main className="container content">
        <Cart
          quantity={cart.length}
          setProcess={setProcess}
          process={process}
        />
        {setContent(process, GoodsList, goods)}
        {alertName ? <Alert /> : null}
      </main>
    </ShopContext.Provider>
  );
}
export default Shop;
