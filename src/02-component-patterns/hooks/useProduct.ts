import { useEffect, useState, useRef } from "react";
import { InitialValues, onChangeArgs, Product } from "../interfaces/interfaces";

interface useProductArgs {
    product: Product;
    onChange?: (args: onChangeArgs) => void;
    value?: number;
    initialValues?: InitialValues;
}

export function useProduct({ product, onChange, value = 0, initialValues }: useProductArgs) {
    // SI LLEGA UN initialValues TOMARA ESE, SI NO TOMA EL VALUE
    // CON useState<number> OBLIGAMOS A QUE EL VALOR INICIAL SEA UN NUMERO
    const [counter, setCounter] = useState<number>(initialValues?.count || value);

    // Con el useRef damos seguimiento cuando esta montado el componente
    // El useRef sobrevive a varios llamados, no muere asi que mantiene el valor
    const isMounted = useRef(false);

    // console.log(initialValues);
    // console.log(initialValues?.count);

    const increaseBy = (value: number) => {
        // console.log("Increase By", counter);

        // Math.max tomara el valor mayor, en este caso si llega un negativo tomara cero
        // con newValue se calcula el nuevo valor y no el viejo.
        let newValue = Math.max(counter + value, 0);

        //Si existe el initialValues y tiene maxCount
        if (initialValues?.maxCount) {
            // Math.min tomara el valor menor, con esto no superar el maximo permitido
            newValue = Math.min(newValue, initialValues.maxCount);
        }

        setCounter(newValue);

        onChange && onChange({ product, count: newValue });
    };

    const reset = () => {
        setCounter(initialValues?.count || value);
    };

    // VALIDA QUE ESTE MONTADO
    useEffect(() => {
        isMounted.current = true;
    }, []);

    // MANTIENE EL ESTADO DENTRO DEL COMPONENTE
    // PARA REDIBUJAR LOS CAMBIOS SOBRE EL COMPONENTE
    // CAMBIA SIEMPRE QUE SE ACTUALIZA EL "value"
    useEffect(() => {
        // SI EL COMPONENTE NO HA SIDO MONTADO NO CAMBIAMOS EL VALOR
        if (isMounted.current) return;
        setCounter(value);
    }, [value]);

    return {
        counter,
        increaseBy,
        maxCount: initialValues?.maxCount,
        isMaxCountReached: !!initialValues?.count && initialValues.maxCount === counter,
        reset,
    };
}
