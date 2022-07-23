import { useState } from "react";
import { Product, ProductInCart } from "../interfaces/interfaces";

export function useShoppingCart() {
    const [shoppingCart, setShoppingCart] = useState<{
        [key: string]: ProductInCart;
    }>({});

    const onProductCountChange = ({ product, count }: { product: Product; count: number }) => {
        // LA ALTERNATIVA ES QUE EN EL COUNT LLEGUE 1,2,3,4 Y NO "1" o "-1"
        // y no necesitamso saber is esta controlado o no
        // solo se cambia en el useProduct y en el useShoppingCard

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
