import { useEffect } from "react";
import { useContext } from "react";
import { ShopContext } from "./shop";

const Alert = (props) => {
  const { closeAlert, alertName } = useContext(ShopContext);

  useEffect(() => {
    const timerId = setTimeout(closeAlert, 3000);

    return () => {
      clearTimeout(timerId);
    };
  }, [alertName]);

  return (
    <div id="toast-container">
      <div className="toast"> {alertName} добавлен в корзину</div>
    </div>
  );
};

export default Alert;
