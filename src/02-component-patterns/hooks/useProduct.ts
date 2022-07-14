import { useEffect, useState, useRef } from "react";
import { InitialValues, onChangeArgs, Product } from "../interfaces/interfaces";

interface useProductArgs {
    product: Product;
    onChange?: (args: onChangeArgs) => void;
    value?: number;
    initialValues?: InitialValues;
}

export function useProduct({ product, onChange, value = 0, initialValues }: useProductArgs) {
    const [counter, setCounter] = useState<number>(initialValues?.count || value);
    const maxCount = initialValues?.maxCount;

    // Con el useRef damos seguimiento cuando esta montado el componente
    // El useRef sobrevive a varios llamados, no muere asi que mantiene el valor
    const isMounted = useRef(false);

    // console.log(initialValues);
    // console.log(initialValues?.count);

    const increaseBy = (value: number) => {
        //   Math.max tomara el valor mayor, en este caso si llega un negativo tomara cero

        // console.log("Increase By", counter);

        let newValue = Math.max(counter + value, 0);
        //Si existe el initialValues y tiene maxCount
        if (initialValues?.maxCount) {
            newValue = Math.min(newValue, initialValues.maxCount);
        }

        setCounter(newValue);

        onChange && onChange({ product, count: newValue });
    };

    useEffect(() => {
        isMounted.current = true;
    }, []);

    useEffect(() => {
        if (isMounted.current) return;
        setCounter(value);
    }, [value]);

    return {
        counter,
        increaseBy,
        maxCount,
    };
}
