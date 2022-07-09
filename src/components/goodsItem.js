import { ShopContext } from "./shop";
import { useContext } from "react";

const GoodsItem = (props) => {
  const { id, name, description, full_background, price } = props;
  const { addToCart } = useContext(ShopContext);

  return (
    <div
      id={id}
      className="card"
      style={{ display: "flex", flexDirection: "column" }}
    >
      <div className="card-image">
        <img src={full_background} alt={name} />
      </div>
      <div className="card-content" style={{ flexGrow: 1 }}>
        <span className="card-title" style={{ fontSize: "20px" }}>
          {name}
        </span>
        <p>{description}</p>
      </div>
      <div className="card-action">
        <button className="btn" onClick={() => addToCart(id)}>
          Купить
        </button>
        <span className="right" style={{ fontSize: "20px" }}>
          {price} руб
        </span>
      </div>
    </div>
  );
};

export default GoodsItem;
