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

      return;
    case "loading":
      return <Preloader />;
    case "confirmed":
      return <Component goods={data} />;

    default:
      return <h2>Error!</h2>;
  }
};

export default setContent;
