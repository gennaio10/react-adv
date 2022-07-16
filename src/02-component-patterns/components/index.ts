import { ProductImage } from "./ProductImage";
import { ProductTitle } from "./ProductTitle";
import { ProductButtons } from "./ProductButtons";
import { ProductCard as ProductCardHOC } from "./ProductCard";
import { ProductCardHOCProps } from "../interfaces/interfaces";

export { ProductImage } from "./ProductImage";
export { ProductTitle } from "./ProductTitle";
export { ProductButtons } from "./ProductButtons";

// ESTE ES LA QUE SE EXPORTA Y VA A USAR QUIEN USE EL COMPONENTE "ProductCard"
// Y VA A DARLE LA FUNCIONALIDAD DE USARLO DE DOS FORMAS
//FORMA UNO "default"
// <ProductCard product={product}>
//     <ProductImage />
// </ProductCard>
//FORMA DOS "con punto ."
// <ProductCard product={product}>
//  <ProductCard.Image />
// </ProductCard>
// EL "Object.assign" PERMITE USAR EL OBJETO ORGINAL Y ADICIONAR NUEVAS PROPIEDADES
// EN ESTE CASO LE AGREGAMOS "Image, Title y Buttons" PARA USARLAS CON UN PUNTO .
export const ProductCard: ProductCardHOCProps = Object.assign(ProductCardHOC, {
    Image: ProductImage,
    Title: ProductTitle,
    Buttons: ProductButtons,
});

export default ProductCardHOC;
