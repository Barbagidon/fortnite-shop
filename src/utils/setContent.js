import Preloader from "../components/preloader";
import BasketList from "../components/basketList";

const setContent = (process, Component, data) => {
  switch (process) {
    case "isBasketShow":
      return (
        <>
          <Component goods={data} />
          <BasketList style={{ display: "block" }} />
        </>
      );

    case "loading":
      return <Preloader />;
    case "confirmed":
      return <Component goods={data} />;

    default:
      return data;
  }
};

export default setContent;
