import "./Homepage.css"
import Header from "../components/Header";
import ProductGrid from "../components/ProductGrid";
function Homepage({products, cartItems, fetchInitialData}) {
    return (
        <>
            <title>Ecommerce Website</title>

            <Header cart={cartItems}/>

            <div className="home-page">
                <ProductGrid products={products} fetchInitialData={fetchInitialData} />
            </div>
        </>
    )
}

export default Homepage