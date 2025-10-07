import "./TrackingPage.css";
import Header from "../components/Header";
import TrackingDetails from "../components/TrackingDetails";
function TrackingPage() {
    return(
    <>
        <title>Tracking</title>
        <Header />
        <div className="tracking-page">
            <TrackingDetails />
        </div>
    </>
    )
}

export default TrackingPage;