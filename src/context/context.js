import { useReducer } from "react";
import { createContext } from "react";
import reducer from "../reducer/reducer";
import ShopService from "../services/shopService";

export const MainContext = createContext();

const initialState = {
  goodies: [],
  cart: [],
  alertName: "",
};

export const ContextProvider = ({ children }) => {
  const [value, dispatch] = useReducer(reducer, initialState);
  

  const { setProcess, process } = ShopService();

  value.process = process;

  value.setProcess = setProcess;

  value.closeAlert = () => {
    dispatch({ type: "CLOSE_ALERT" });
  };
  value.addAlert = (name) => {
    dispatch({ type: "ADD_ALERT_NAME", payload: name });
  };

  value.getGoodies = (item) => {
    dispatch({ type: "GET_GOODS", payload: item });
  };

  value.addToBasket = (id) => {
    dispatch({ type: "ADD_TO_BASKET", payload: id });
  };

  value.removeItemFromCart = (id) => {
    dispatch({ type: "REMOVE_FROM_BASKET", payload: id });
  };

  value.removeOneItem = (id) => {
    dispatch({ type: "REMOVE_ONE_ITEM", payload: id });
  };

  return (
    <MainContext.Provider value={value}> {children} </MainContext.Provider>
  );
};
