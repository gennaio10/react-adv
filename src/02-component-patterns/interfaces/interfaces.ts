import { Props as ProductCardProps, ProductCard } from "../components/ProductCard";
import { Props as ProductImageProps } from "../components/ProductImage";
import { Props as ProductTitleProps } from "../components/ProductTitle";
import { Props as ProductButtonsProps } from "../components/ProductButtons";

export interface Product {
    id: string;
    title: string;
    img?: string;
}

export interface ProductContextProps {
    counter: number;
    increaseBy: (value: number) => void;
    product: Product;
    maxCount?: number;
}

// ESTA ES LA FORMA QUE SE ESPERA QUE TENGA PARA SOPORTAR AMBOS USOS con y sin punto .
// AQUI USAMOS LA FORMA DE LAS PROPS QUE ENTREGA CADA UNO D ELOS OMPONENTES QUE DEFINEN "ProductCard"
export interface ProductCardHOCProps {
    (Props: ProductCardProps): JSX.Element;
    Image: (Props: ProductImageProps) => JSX.Element;
    Title: (Props: ProductTitleProps) => JSX.Element;
    Buttons: (Props: ProductButtonsProps) => JSX.Element;
}

// TIENE LA FORMA DE LOS ARGUMENTOS EL onChange "funcion"
// PARA MANTENER LAS CARD'S SINCRONIZADAS
export interface onChangeArgs {
    product: Product;
    count: number;
}

export interface ProductInCart extends Product {
    count: number;
}

// TIENE LA FORMA DEL initialValues
export interface InitialValues {
    count?: number;
    maxCount?: number;
}

// TIENE LA FORMA DEL initialValues
export interface ProductCardHandlers {
    count: number;
    isMaxCountReached: boolean;
    maxCount?: number;
    product: Product;
    increaseBy: (value: number) => void;
    reset: () => void;
}
