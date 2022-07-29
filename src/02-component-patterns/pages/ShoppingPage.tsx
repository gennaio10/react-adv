// import { collapseTextChangeRangesAcrossMultipleVersions, createLogicalOr } from "typescript";
import { ProductButtons, ProductCard, ProductImage, ProductTitle } from "../components";

import "../styles/custom-styles.css";

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
                {/* <ProductCard product={product}>
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

                <ProductCard product={product} className="bg-dark text-white">
                    <ProductCard.Image className="custom-image" />
                    <ProductCard.Title className="text-bold" />
                    <ProductCard.Buttons className="custom-button" />
                </ProductCard> */}

                <ProductCard product={product} className="bg-dark text-white">
                    <ProductImage className="custom-image" />
                    <ProductTitle className="text-bold" />
                    <ProductButtons className="custom-button" />
                </ProductCard>

                <ProductCard product={product} style={{ backgroundColor: "#70D1F8" }}>
                    <ProductImage
                        style={{
                            boxShadow: "10px 10px 10px rgba(0,0,0,0.2)",
                            borderRadius: "130px",
                        }}
                    />
                    <ProductTitle style={{ fontWeight: "bold" }} />
                    <ProductButtons
                        style={{
                            display: "flex",
                            justifyContent: "end",
                        }}
                    />
                </ProductCard>
            </div>
        </div>
    );
};
