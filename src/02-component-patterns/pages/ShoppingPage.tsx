import { ProductButtons, ProductCard, ProductImage, ProductTitle } from "../components";

const product = {
    id: "0",
    title: "Coffee Mug",
    img: "./coffee-mug.png",
};

export const ShoppingPage = () => {
    return (
        <div>
            <h1>Shopping Store</h1>
            <hr />
            <div
                style={{
                    display: "flex",
                    flexDirection: "row",
                    flexWrap: "wrap",
                }}
            >
                <ProductCard product={product}>
                    <ProductImage />
                    <ProductTitle />
                    <ProductButtons />
                </ProductCard>

                <ProductCard product={product}>
                    <ProductImage img="./coffee-mug.png" />
                    <ProductTitle />
                    <ProductButtons />
                </ProductCard>

                <ProductCard product={product}>
                    <ProductCard.Image img="./coffee-mug.png" />
                    <ProductCard.Title title={"Hola mi pez"} />
                    <ProductCard.Buttons />
                </ProductCard>
            </div>
        </div>
    );
};
