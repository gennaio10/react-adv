import styles from "../styles/styles.module.css";
import { useProduct } from "../hooks/useProduct";
import { createContext, CSSProperties, ReactElement } from "react";
import { ProductContextProps, Product, onChangeArgs, InitialValues, ProductCardHandlers } from "../interfaces/interfaces";

// ESTA LA INFORMACION QUE LE VA A COMPARTIR A TODOS SUS HIJOS
// AL PONERLE EL "as ProductContextProps" OBLIGAMOS A QUE EL VALUE DEL CONTEXT TENGA ESA FORMA EN EL OBJETO QUE RECIBE
export const ProductContext = createContext({} as ProductContextProps);

// EXTRAEMOS EL PROVIDER DEL CONTEXT
const { Provider } = ProductContext;

// DEFINIMOS LA FORMA DEL OBJETO DE LAS PROP DE LA CLASE EN LA MISMA
// PODRIA IR EN INTERFACES PERO COMO SON LAS PROPS DE ESTA CLASE LA DEJAMOS AQUI MISMOS
// LA EXPORTAMOS PARA QUE SEA USADA EN LA INTEEFAZ QUE DEFINE COMO SE VE ESTE COMPONENTE "ProductCard"
// DESDE /interfaces.ts
export interface Props {
    product: Product;
    // children?: ReactElement | ReactElement[];
    children: (args: ProductCardHandlers) => JSX.Element;
    className?: string;
    style?: CSSProperties;
    onChange?: (args: onChangeArgs) => void;
    value?: number;
    initialValues?: InitialValues;
}

export const ProductCard = ({ children, product, className, style, onChange, value, initialValues }: Props) => {
    // EL OBJETO { product, onChange, value } ENVIADO ES PARA MANTENER SINCRONIZADA
    // LA CARD AL INTERIOR CON EL EXTERIOR
    const { counter, increaseBy, maxCount, isMaxCountReached, reset } = useProduct({ product, onChange, value, initialValues });

    return (
        // AQUI USAMOS, ASIGNAMOS VALOR Y COMPARTIMOS EL PROVIDER A TODOS SUS HIJOS
        // CON ESTO TODOS PUEDEN USAR LO QUE ESTE EN EL CONTEXT MEDIANTE EL HOOK USECONTEXT
        <Provider value={{ counter, increaseBy, product, maxCount }}>
            {/* LE ASIGNAMOS VARIAS CLASES AL CONTEDOR Y SI VIENE UN STYLE CUSTOM TAMBIEN */}
            <div className={`${styles.productCard} ${className}`} style={style}>
                {children({
                    count: counter,
                    isMaxCountReached,
                    maxCount: initialValues?.maxCount,
                    product,
                    increaseBy,
                    reset,
                })}
            </div>
        </Provider>
    );
};
