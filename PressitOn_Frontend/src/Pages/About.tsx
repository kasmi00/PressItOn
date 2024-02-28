
import D2D from "../assets/Aboutusimg/D2D.png"
import Quality from "../assets/Aboutusimg/Quality.png"
import "./About.css";
import Footer from "../components/Footer";
import Navbar from "../components/navbar";

function about() {

    return (
        <>
            <Navbar />

            <div className="about">
                <h2>Welcome to Press It On</h2>
                <div className="box1">
                    <div className="description">
                        <p>
                            Transform Your Nails, Elevate Your Look: Discover Beauty Beyond Limits at Our Nail Extension Boutique!
                            <br />
                        </p>
                    </div>
                    <div className="img">
                        <img src={"https://i.pinimg.com/474x/b9/1d/f6/b91df6dd16e392a93b6ead3b308af9b6.jpg"} alt="" />
                    </div>
                </div>
            </div>
            <div className="ourservices">
                <h2 className="services">Our Services</h2>
                <p>
                    Nail Perfection in Every Extension!
                </p>
                <div className="gridbox">
                    <div className="d2d">
                        <img src={D2D} alt="door2door" width="500" />
                    </div>
                    <div className="quality-product"></div>
                    <img src={Quality} alt="quality" width="500" />
                </div>
            </div>
            <Footer/>
        </>
    );
}
export default about;