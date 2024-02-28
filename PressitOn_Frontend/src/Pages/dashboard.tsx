import Navbar from "../components/navbar";
import Footer from "../components/Footer";
import "./Dashboard.css";

function Dashboard () {
    return (
        <>
            <div className="Top">
                <Navbar/>
            </div>

            <div className="bodyheight">
                <div className="bodytoaddproduct">
                </div>

            </div>

            <div className="Bottom">
                <Footer/>
            </div>


        </>
    );
}

export default Dashboard;