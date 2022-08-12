import { log } from "console";
import { useEffect, useRef, useState } from "react";
import { onChangeArgs, Product } from "../interfaces/interfaces";

interface useProductArgs {
    product: Product;
    onChange?: (args: onChangeArgs) => void;
    value?: number;
}

export function useProduct({ product, onChange, value = 0 }: useProductArgs) {
    const [counter, setCounter] = useState(value);

    // EN ESTE PUNTO EL state lo esta controlando el useProduct
    // PARA QUE LAS PROPIEDADES CONTROLEN EL ESTADO DEL COMPOENTE "patron control props"
    // NECESITAMOS QUE SE ENECUTE EL CAMBIO DEL ESTADO DESDE AFUERA "onChange"
    // EL "onChange" es el "onProductCountChange" del "useShoppingCart" EL CUAL
    // EJECUTA EL "setShoppingCart" DE ESE useState "[key: string]: ProductInCart"
    // ACTUALIZANDO LOS VALORES DEL ARRAY DEL PRODUCTOS Y SU CANTIDAD DESDE EL EXTERIOR
    // PARA COMPARTIR EL ESTADO A LOS QUE LO USEN
    // se usa el "isControlled" para saber si y asi sabemos si esta siendo controlado desde afuera
    // ! = Si no existe (false)
    // !! = Si existe (true)
    const isControlled = useRef(!!onChange);

    const increaseBy = (value: number) => {
        // console.log("isControlled", isControlled.current);

        if (isControlled.current) {
            // AGREGARMOS EL "!" YA QUE EL onChange, LO ESTAMSO VALIDANDO ARRIBA PERO ARROJA EL ERROR Y/O WARNING
            // CON ESTE "!" LE DECIMOS A typescript "confia en mi" :)
            return onChange!({ product, count: value });
        }

        // Math.max tomara el valor mayor, en este caso si llega un negativo tomara cero
        // con newValue se calcula el nuevo valor y no el viejo.
        const newValue = Math.max(counter + value, 0);
        setCounter(newValue);

        // COMO EL "onChange" PUEDE VENIR NULO VALIDAMOS QUE SE SOLO DE EJECUTE SOLO SI NO ES NULO
        // PARA ESTO SIRVE EL "&&" ES COMO
        // if (onChange) {
        //   onChange({ product, count: newValue });
        // }
        onChange && onChange({ product, count: newValue });
    };

    // SEA O NO CONTROLADO IGUAL TAMBIEN SE MANTIENE EL ESTADO DENTRO DEL COMPONENTE
    // PARA REDIBUJAR LOS CAMBIOS SOBRE EL COMPONENTE
    // CAMBIA SIEMPRE QUE SE ACTUALIZA EL "value"
    useEffect(() => {
        setCounter(value);
    }, [value]);

    return {
        counter,
        increaseBy,
    };
}
