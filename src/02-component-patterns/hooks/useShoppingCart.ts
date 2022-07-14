import { useState } from "react";
import { Product, ProductInCart } from "../interfaces/interfaces";

export function useShoppingCart() {
    const [shoppingCart, setShoppingCart] = useState<{
        [key: string]: ProductInCart;
    }>({});

    const onProductCountChange = ({ product, count }: { product: Product; count: number }) => {
        // console.log(count, product);
        // console.log(count);

        setShoppingCart((oldShoppingCard) => {
            if (count === 0) {
                // Mezcla entre desestructuracion, propiedades computadas y el operador rest
                // Busca el elemento a retirar y devuelve el resto
                const { [product.id]: toDelete, ...rest } = oldShoppingCard;
                return rest;
            }

            return {
                ...oldShoppingCard,
                [product.id]: { ...product, count },
            };
        });
    };

    return {
        shoppingCart,
        onProductCountChange,
    };
}
