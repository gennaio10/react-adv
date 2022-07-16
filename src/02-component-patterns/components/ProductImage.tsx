import { CSSProperties, useContext } from "react";
import noImage from "../assets/no-image.jpg";
import styles from "../styles/styles.module.css";
import { ProductContext } from "./ProductCard";

export interface Props {
    img?: string;
    className?: string;
    style?: CSSProperties;
}

export const ProductImage = ({ img, className, style }: Props) => {
    // AQUI USAMOS EL CONTEXT QUE NOS COMPARTE EL PADRE "ProductCard"
    const { product } = useContext(ProductContext);

    return <img className={`${styles.productImg} ${className}`} style={style} src={img || product.img || noImage} alt="Product" />;
};
