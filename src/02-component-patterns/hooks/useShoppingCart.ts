import { log } from "console";
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
        // conunt "1" si incremente y "-1" si decrementa
        // console.log(count, product);
        // console.log(count);

        setShoppingCart((oldShoppingCard) => {
            // creamos un nuevo objeto basados en el estado actual useShoppingCart "oldShoppingCard"
            const productInCart: ProductInCart = oldShoppingCard[product.id] || {
                ...product,
                count: 0,
            };

            // SI EL COUNT ES MAYOR A CERO ACTUALIZAMOS, ESTA AGREGANDO CANTIDAD AL PRODUCTO
            if (Math.max(productInCart.count + count, 0) > 0) {
                productInCart.count += count;

                return {
                    ...oldShoppingCard,
                    [product.id]: productInCart,
                };
            }

            // SI NO SE CUMPLE LA CONDICION ANTERIOR SIGNIFICA QUE EL COUNT ES CERO Y LO
            // RETIRAMOS Y ASI TAMPOCO SALE EN LAS MINIATURAS
            // ES NECESARIO BORRAR EL PRODUCTO
            // Mezcla entre desestructuracion, propiedades computadas y el operador rest
            // Busca el elemento a retirar, no lo tienen en cuenta y devuelve el resto
            const { [product.id]: toDelete, ...rest } = oldShoppingCard;
            return rest;

            //   if (count === 0) {
            //     // Mezcla entre desestructuracion, propiedades computadas y el operador rest
            //     // Busca el elemento a retirar y devuelve el resto
            //     const { [product.id]: toDelete, ...rest } = oldShoppingCard;
            //     console.log({toDelete});
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
