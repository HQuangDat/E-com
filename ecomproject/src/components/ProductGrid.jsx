
import Product from "./Product";
function ProductGrid({ products, fetchInitialData}) {
    return (
        <div className="products-grid">
            {products.map((product) => {
                return (
                    <Product key={product.id} product={product} fetchInitialData={fetchInitialData}/>
                )
            })}
        </div>
    )
}

export default ProductGrid;
