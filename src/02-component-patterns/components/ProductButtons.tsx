import { CSSProperties, useCallback, useContext } from "react";
import { ProductContext } from "./ProductCard";
import styles from "../styles/styles.module.css";

export interface Props {
    className?: string;
    style?: CSSProperties;
}

export const ProductButtons = ({ className, style }: Props) => {
    const { counter, increaseBy, maxCount } = useContext(ProductContext);

    console.log(counter);

    // FORMA CORTA
    const isMaxReached = useCallback(() => !!maxCount && maxCount === counter, [counter, maxCount]);

    // FORMA TRADICIONAL
    // const isMaxReached = useCallback(() => {
    //     if (maxCount === counter) {
    //         return true;
    //     }
    //     return false;
    // }, [counter, maxCount]);

    return (
        <div className={`${styles.buttonsContainer} ${className}`} style={style}>
            <button onClick={() => increaseBy(-1)} className={styles.buttonMinus}>
                -
            </button>

            <div className={styles.countLabel}>{counter}</div>

            <button onClick={() => increaseBy(1)} className={`${styles.buttonAdd} ${isMaxReached() && styles.disable} `}>
                +
            </button>
        </div>
    );
};
