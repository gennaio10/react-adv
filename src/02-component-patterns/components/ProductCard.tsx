import styles from "../styles/styles.module.css";
import { useProduct } from "../hooks/useProduct";
import { createContext, CSSProperties, ReactElement } from "react";
import { ProductContextProps, Product } from "../interfaces/interfaces";

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
    children: ReactElement | ReactElement[];
    className?: string;
    style?: CSSProperties;
}

export const ProductCard = ({ children, product, className, style }: Props) => {
    const { counter, increaseBy } = useProduct();
    return (
        // AQUI USAMOS, ASIGNAMOS VALOR Y COMPARTIMOS EL PROVIDER A TODOS SUS HIJOS
        // CON ESTO TODOS PUEDEN USAR LO QUE ESTE EN EL CONTEXT MEDIANTE EL HOOK USECONTEXT
        <Provider value={{ counter, increaseBy, product }}>
            {/* LE ASIGNAMOS VARIAS CLASES AL CONTEDOR Y SI VIENE UN STYLE CUSTOM TAMBIEN */}
            <div className={`${styles.productCard} ${className}`} style={style}>
                {children}
                {/* <ProductImage img={product.img} />
      <ProductTitle title={product.title} />
      <ProductButtons counter={counter} increaseBy={increaseBy} /> */}
            </div>
        </Provider>
    );
};
