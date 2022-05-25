import { useState } from "react";
import { Product, ProductInCart } from "../interfaces/interfaces";

export function useShoppingCart() {
  const [shoppingCart, setShoppingCart] = useState<{
    [key: string]: ProductInCart;
  }>({});

  const onProductCountChange = ({
    product,
    count,
  }: {
    product: Product;
    count: number;
  }) => {
    // console.log(count, product);
    // console.log(count);

    setShoppingCart((oldShoppingCard) => {
      const productInCart: ProductInCart = oldShoppingCard[product.id] || {
        ...product,
        count: 0,
      };

      // agregar producto
      if (Math.max(productInCart.count + count, 0) > 0) {
        productInCart.count += count;

        return {
          ...oldShoppingCard,
          [product.id]: productInCart,
        };
      }

      // borrar producto
      const { [product.id]: toDelete, ...rest } = oldShoppingCard;
      return rest;

      //   if (count === 0) {
      //     // Mezcla entre desestructuracion, propiedades computadas y el operador rest
      //     // Busca el elemento a retirar y devuelve el resto
      //     const { [product.id]: toDelete, ...rest } = oldShoppingCard;
      //     return rest;
      //   }

      //   return {
      //     ...oldShoppingCard,
      //     [product.id]: { ...product, count },
      //   };
    });
  };

  return {
    shoppingCart,
    onProductCountChange,
  };
}
