
import Product from "./Product";
function ProductGrid({ products}) {
    return (
        <div className="products-grid">
            {products.map((product) => {
                return (
                    <Product key={product.id} product={product}/>
                )
            })}
        </div>
    )
}

export default ProductGrid;
