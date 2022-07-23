import { useEffect, useState } from "react";
import { onChangeArgs, Product } from "../interfaces/interfaces";

interface useProductArgs {
    product: Product;
    onChange?: (args: onChangeArgs) => void;
    value?: number;
}

export function useProduct({ product, onChange, value = 0 }: useProductArgs) {
    const [counter, setCounter] = useState(value);

    // no importa si esta controlado o no :)
    // solo se cambia en el useProduct y en el useShoppingCard

    const increaseBy = (value: number) => {
        //   Math.max tomara el valor mayor, en este caso si llega un negativo tomara cero
        const newValue = Math.max(counter + value, 0);
        setCounter(newValue);

        onChange && onChange({ product, count: newValue });
    };

    useEffect(() => {
        setCounter(value);
    }, [value]);

    return {
        counter,
        increaseBy,
    };
}
