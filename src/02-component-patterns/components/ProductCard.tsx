import styles from "../styles/styles.module.css";
import { useProduct } from "../hooks/useProduct";
import { createContext, CSSProperties, ReactElement } from "react";
import { ProductContextProps, Product, onChangeArgs, InitialValues } from "../interfaces/interfaces";

export const ProductContext = createContext({} as ProductContextProps);

const { Provider } = ProductContext;

export interface Props {
    product: Product;
    // children?: ReactElement | ReactElement[];
    children: (mensaje: string) => JSX.Element;
    className?: string;
    style?: CSSProperties;
    onChange?: (args: onChangeArgs) => void;
    value?: number;
    initialValues?: InitialValues;
}

export const ProductCard = ({ children, product, className, style, onChange, value, initialValues }: Props) => {
    const { counter, increaseBy, maxCount } = useProduct({ product, onChange, value, initialValues });

    return (
        <Provider value={{ counter, increaseBy, product, maxCount }}>
            <div className={`${styles.productCard} ${className}`} style={style}>
                {children("My pass argument")}
            </div>
        </Provider>
    );
};
