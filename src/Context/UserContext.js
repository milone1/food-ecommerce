import { createContext, useState } from "react";
export const UserContext = createContext();

export const UserProvider = (props) => {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")));

  const [basket, setBasket] = useState(
    JSON.parse(localStorage.getItem("basket")) ?? []
  );

  const storeUser = (dataUser) => {
    localStorage.setItem("user", JSON.stringify(dataUser));
    setUser(dataUser);
  };

  const storeBasket = (product) => {
    product.quantity = 1;
    setBasket([...basket, product]);
    localStorage.setItem("basket", JSON.stringify([...basket, product]));
  };

  const deleteElementFromBasket = (id) => {
    const products = basket.filter((bas) => bas.id !== id);
    setBasket(products);
    localStorage.setItem("basket", JSON.stringify(products));
  };

  const addOrRemoveProduct = (id, add) => {
    const products = basket.map((product) => {
     
      if (product.id === id) {
        if (add) {
          product.quantity += 1;
        } else {
          if (product.quantity > 1) {
            product.quantity -= 1;
          }
        }
      }
      return {
        ...product,
      };
    });
    setBasket(products);
    localStorage.setItem("basket", JSON.stringify(products));
  };

  return (
    <UserContext.Provider
      value={{ user, storeUser, basket, storeBasket, deleteElementFromBasket, addOrRemoveProduct }}>
      {props.children}
    </UserContext.Provider>
  );
};