import { ProductButtons, ProductCard, ProductImage, ProductTitle } from "../components";
import { products } from "../data/products";

import "../styles/custom-styles.css";

const product = products[0];

// const initialValues;

export const ShoppingPage = () => {
    return (
        <div>
            <h1>Shopping Store</h1>
            <hr />
            <div>
                <ProductCard
                    key={product.id}
                    product={product}
                    className="bg-dark text-white"
                    initialValues={{
                        count: 4,
                        maxCount: 10,
                    }}
                >
                    {(mensaje) => (
                        <>
                            <ProductImage className="custom-image" />
                            <ProductTitle className="text-bold" />
                            <ProductButtons className="custom-button" />
                            <h1>{mensaje}</h1>
                        </>
                    )}
                </ProductCard>
            </div>
        </div>
    );
};
