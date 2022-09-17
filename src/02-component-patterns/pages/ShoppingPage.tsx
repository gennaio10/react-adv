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
                    {({ reset, count, increaseBy, isMaxCountReached, maxCount }) => (
                        <>
                            <ProductImage className="custom-image" />
                            <ProductTitle className="text-bold" />
                            <ProductButtons className="custom-button" />

                            {/* RESET DEL STATE */}
                            <button onClick={reset}>Reset</button>

                            <button onClick={() => increaseBy(-2)}>-2</button>

                            {/* MOSTRAR SOLO SI SE PUEDE INCREMENTAR */}
                            {!isMaxCountReached && <button onClick={() => increaseBy(2)}>+2</button>}
                            <br />
                            <span>
                                {count} / {maxCount}
                            </span>
                        </>
                    )}
                </ProductCard>
            </div>
        </div>
    );
};
