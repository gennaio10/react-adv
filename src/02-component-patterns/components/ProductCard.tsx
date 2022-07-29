import styles from "../styles/styles.module.css";
import { useProduct } from "../hooks/useProduct";
import { createContext } from "react";
import { ProductContextProps, ProductCardProps } from "../interfaces/interfaces";

// ESTA LA INFORMACION QUE LE VA A COMPARTIR A TODOS SUS HIJOS
// AL PONERLE EL "as ProductContextProps" OBLIGAMOS A QUE EL VALUE DEL CONTEXT TENGA ESA FORMA EN EL OBJETO QUE RECIBE
export const ProductContext = createContext({} as ProductContextProps);

// EXTRAEMOS EL PROVIDER DEL CONTEXT
const { Provider } = ProductContext;

export const ProductCard = ({ children, product }: ProductCardProps) => {
    const { counter, increaseBy } = useProduct();
    return (
        // AQUI USAMOS, ASIGNAMOS VALOR Y COMPARTIMOS EL PROVIDER A TODOS SUS HIJOS
        // CON ESTO TODOS PUEDEN USAR LO QUE ESTE EN EL CONTEXT MEDIANTE EL HOOK USECONTEXT
        <Provider value={{ counter, increaseBy, product }}>
            <div className={styles.productCard}>
                {/* HIJOS  */}
                {children}
            </div>
        </Provider>
    );
};
