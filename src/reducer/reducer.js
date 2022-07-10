function reducer(state, { type, payload }) {
  switch (type) {
    case "GET_GOODS": {
      return {
        ...state,
        goodies: payload,
      };
    }

    case "ADD_TO_BASKET": {
      const { cart, goodies } = state;

      const elementInArr = cart.findIndex((item) => item.good.id === payload);
      const chooseItem = goodies.filter((item) => item.id === payload);
      const [good] = chooseItem;
      if (elementInArr < 0) {
        const objForCart = {
          good,
          quantity: 1,
        };
        return {
          ...state,
          cart: [...cart, objForCart],
        };
      } else {
        const addQuantity = cart.map((item) => {
          if (item.good.id === payload) {
            return {
              ...item,
              quantity: item.quantity + 1,
            };
          } else {
            return item;
          }
        });

        return {
          ...state,
          cart: addQuantity,
        };
      }
    }

    case "REMOVE_FROM_BASKET": {
      const { cart } = state;
      const withoutDeleteItemsArr = cart.filter(
        (item) => item.good.id !== payload
      );

      return {
        ...state,
        cart: withoutDeleteItemsArr,
      };
    }

    case "REMOVE_ONE_ITEM": {
      const { cart } = state;
      const deleteIndex = cart.findIndex((item) => item.good.id === payload);
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

      return {
        ...state,
        cart: decQuantityChooseItem,
      };
    }

    case "CLOSE_ALERT":
      return {
        ...state,
        alertName: "",
      };
    case "ADD_ALERT_NAME":
      return {
        ...state,
        alertName: payload,
      };

    default:
      return state;
  }
}

export default reducer;
