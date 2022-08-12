import { ProductButtons, ProductCard, ProductImage, ProductTitle } from "../components";
import { products } from "../data/products";

import "../styles/custom-styles.css";
import { useShoppingCart } from "../hooks/useShoppingCart";

export const ShoppingPage = () => {
    //   const [shoppingCart, setShoppingCart] = useState<{
    //     [key: string]: ProductInCart;
    //   }>({});

    const { shoppingCart, onProductCountChange } = useShoppingCart();

    return (
        <div>
            <h1>Shopping Store</h1>
            <hr />
            {/* TARJETAS GRANDES */}
            <div
                style={{
                    display: "flex",
                    flexDirection: "row",
                    flexWrap: "wrap",
                }}
            >
                {products.map((product) => (
                    <ProductCard
                        key={product.id}
                        product={product}
                        className="bg-dark text-white"
                        //  CONTROL PROPS
                        // "onProductCountChange" ES LA FUNCION QUE CAMBIA EL STATE
                        onChange={onProductCountChange}
                        // SI EL PRODUCTO EXISTE "?" USA EL "count" de lo contrario "0"
                        value={shoppingCart[product.id]?.count || 0}
                    >
                        <ProductImage className="custom-image" />
                        <ProductTitle className="text-bold" />
                        <ProductButtons className="custom-button" />
                    </ProductCard>
                ))}
            </div>

            {/* TARJETAS MINIATURA */}
            <div className="shopping-card">
                {/* Object.entries permite tomar las entradas de un objeto
          , al tenerlo asi podemos pasarlo por un mapa */}
                {/* Estamos iterando sobre el estado del useShoppingCard que tiene la lista de producto
              Tener en cuenta que si la cantidad es cero no lo guardamos en el objeto */}
                {Object.entries(shoppingCart).map(([key, product]) => (
                    <ProductCard
                        key={key}
                        product={product}
                        className="bg-dark text-white"
                        style={{ width: "100px" }}
                        //  CONTROL PROPS
                        // SI SE PONE AQUI LE ENVIAMOS LA FUNCION QUE CAMBIA EL STATE
                        // "onProductCountChange" ES LA FUNCION QUE CAMBIA EL STATE
                        onChange={onProductCountChange}
                        value={product.count}
                    >
                        <ProductCard.Image className="custom-image" />
                        <ProductCard.Buttons
                            className="custom-button"
                            style={{
                                display: "flex",
                                justifyContent: "center",
                            }}
                        />
                    </ProductCard>
                ))}
            </div>

            {/* <div>
        <code>{JSON.stringify(shoppingCart, null, 5)}</code>
      </div> */}
        </div>
    );
};
