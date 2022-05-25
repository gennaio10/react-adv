import { useEffect, useRef, useState } from "react";
import { onChangeArgs, Product } from "../interfaces/interfaces";

interface useProductArgs {
  product: Product;
  onChange?: (args: onChangeArgs) => void;
  value?: number;
}

export function useProduct({ product, onChange, value = 0 }: useProductArgs) {
  const [counter, setCounter] = useState(value);

  //   ! = Si no existe (false)
  //   !! = Si existe (true)
  const isControlled = useRef(!!onChange);

  const increaseBy = (value: number) => {
    // console.log("isControlled", isControlled.current);

    if (isControlled.current) {
      return onChange!({ product, count: value });
    }

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
