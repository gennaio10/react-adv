import { useState } from "react";
import { Product, ProductInCart } from "../interfaces/interfaces";

export function useShoppingCart() {
    // Define el estado inicial, e este caso el arreglo representa los id's de productos
    // y apunta a un objeto "Producto"
    // Usamos <{}> para decirle que es un arreglo de id's que apuntan aun objeto que luce como "ProductInCart"
    // Le indicamos como va a lucir "shoppingCart"
    // y que inicialmente esta vacio
    // esto dice que [key: string] tenemos un arreglo de keys que son string y los valores de ese objeto son tipo "ProductInCart"
    // ESTO ES LO QUE VAMOS A COMPARTIR DENTRO DE LAS DOS CARDS (CARRITO Y GRILLA DE PRODUCTOS)
    // AMBAS MUESTRAN EL MISMO PRODUCTOS PERO EL ESTADO LO TIENE LA PAGINAM NO EL COMPONENTE
    const [shoppingCart, setShoppingCart] = useState<{
        [key: string]: ProductInCart;
    }>({});

    // DEL EVENTO QUE ENTRA {[key: string]: ProductInCart} DESESTRUCTURAMOS
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
