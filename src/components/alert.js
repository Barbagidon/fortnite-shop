import { useEffect } from "react";
import { useContext } from "react";
import { MainContext } from "../context/context";

const Alert = () => {
  const { closeAlert, alertName } = useContext(MainContext);

  useEffect(() => {
    const timerId = setTimeout(closeAlert, 1500);

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
