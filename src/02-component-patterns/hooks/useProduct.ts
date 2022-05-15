import { useState } from "react";

export function useProduct() {
  const [counter, setCounter] = useState(0);

  const increaseBy = (value: number) => {
    //   Math.max tomara el valor mayor, en este caso si llega un negativo tomara cero
    setCounter((prev) => Math.max(prev + value, 0));
  };

  return {
    counter,
    increaseBy,
  };
}
