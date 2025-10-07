import "./OrderPage.css";
import  axios from "axios";
import Header from "../components/Header";
import { useEffect, useState } from "react";
import OrderGrid from "../components/OrderGrid";
function OrderPage({ cartItems }) {
    const [orders, setOrder] = useState([]);
    useEffect(() => {
        const fetchOrdersData = async () => {
            const response = await axios.get('/api/orders?expand=products')
            setOrder(response.data)
        }
        fetchOrdersData()
    }, []);
    return (
        <>
            <title>Orders</title>
            <Header cart={cartItems} />
            <div className="orders-page">
                <div className="page-title">Your Orders</div>

                <OrderGrid orders={orders} />
            </div>
        </>
    )
}
export default OrderPage;