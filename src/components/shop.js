import { useEffect, createContext, useContext } from "react";
import { MainContext } from "../context/context";
import ShopService from "../services/shopService";
import setContent from "../utils/setContent";
import GoodsList from "./goodsList";
import Cart from "./cart";
import Alert from "./alert";

export const ShopContext = createContext();

function Shop() {
  const { getGoods, process, setProcess } = ShopService();

  const { alertName, getGoodies, goodies, cart } = useContext(MainContext);

  useEffect(() => {
    getGoods().then((res) => {
      getGoodies(res.featured);
      setProcess("confirmed");
    });
  }, []);

  const value = {
    setProcess,
    process,
  };

  return (
    <ShopContext.Provider value={value}>
      <main className="container content">
        <Cart
          quantity={cart.length}
          setProcess={setProcess}
          process={process}
        />
        {setContent(process, GoodsList, goodies)}
        {alertName ? <Alert /> : null}
      </main>
    </ShopContext.Provider>
  );
}
export default Shop;
