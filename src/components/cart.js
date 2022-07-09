import ShopService from "../services/shopService";

const Cart = (props) => {
  const { quantity, setProcess, process } = props;

  return (
    <div
      className="cart blue darken-4 white-text"
      onClick={() =>
        setProcess(process === "confirmed" ? "isBasketShow" : "confirmed")
      }
    >
      <i className="material-icons">shopping_basket</i>
      <span className="cart-quantity">{quantity}</span>
    </div>
  );
};

export default Cart;
