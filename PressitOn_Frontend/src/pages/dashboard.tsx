import React, { useEffect, useState } from 'react';
import './css/bootstrap.min.css';
import './css/font-awesome.min.css';
import './css/nice-select.css';
import './css/owl.carousel.min.css';
import './css/magnific-popup.css';
import './css/slicknav.min.css';
import './css/style.css';
import { useNavigate } from "react-router-dom";

interface Product {
    id: number;
    productName: string;
    price: number;
    category: string;
    imageUrl: string;
}

interface ProductCardProps {
    product: Product;
    onViewClick: (data: { productId: number; quantity: number }) => void;
}
// @ts-ignore
const ProductCard: React.FC<ProductCardProps> = ({ product, onViewClick }) => {

    const navigate = useNavigate();
// @ts-ignore
    const handleBuyClick = async (product) => {
        try {
            console.log(product)
            navigate(`/review/${product.productId}`);
        } catch (error) {
            console.error('Error handling buy click:', error);
        }
    };


    return (
        <div key={product.id} className="product-card">
            <img src={product.imageUrl} alt={product.productName} className="product-image" />
            <p className="product-name">{product.productName}</p>
            <p className="product-price">Price: Rs.{product.price}</p>
            <p className="product-category">Category: {product.category}</p>
            <button className="view-button" onClick={() => handleBuyClick(product)}>View</button>
        </div>
    );
};
const Dashboard: React.FC = () => {
    const [products, setProducts] = useState<Product[]>([]);
    const [selectedProductId, setSelectedProductId] = useState<number | null>(null);
    const navigate = useNavigate();

    useEffect(() => {
        fetch('http://localhost:8080/item/getAll')
            .then((response) => response.json())
            .then((data: Product[]) => {
                console.log(data);  // Log the data to the console
                setProducts(data);
            })
            .catch((error) => console.error('Error fetching data:', error));
    }, []);

    const handleViewClick = (data: { productId: number; quantity: number }) => {
        const selectedProduct = products.find((product) => product.id === data.productId);

        if (selectedProduct) {
            setSelectedProductId(data.productId);
            navigate(`/review/${data.productId}`);
        }
    };

    useEffect(() => {
        if (selectedProductId !== null) {
            navigate(`/review/${selectedProductId}`);
        }
    }, [selectedProductId]);

    return (
        <>
            <header className="header-section">
                <div className="container-fluid">
                    <div className="inner-header">
                        <div className="logo">
                            <a href="/dashboard">
                                <img src="img/logo.png" alt="" />
                            </a>
                        </div>

                        <nav className="main-menu mobile-menu">
                            <ul>
                                <li>
                                    <a className="active" href="/dashboard">Home</a>
                                </li>
                                <li>
                                    <a href="/shop">Shop</a>
                                </li>
                                <li>
                                    <a href="/admin">Admin</a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </header>

            <section className="hero-slider">
                <h1>Browse the finest Nail product</h1>
                <a href="/shop" className="primary-btn">See More</a>
            </section>

            <section className="product spad">
                <h2>Our latest Products:</h2>
                <br/><br/>
                <div className="pro-dis" style={{ display: 'flex', justifyContent: 'center',gap: '50px' }}>
                    {products.slice(0, 4).map((product) => (
                        <ProductCard key={product.id} product={product} onViewClick={handleViewClick} />
                    ))}
                </div>
            </section>

            <footer className="footer-section spad">
                <div className="container text-center pt-5">
                    <p>Copyright © All rights reserved</p>
                </div>
            </footer>
        </>
    );
};

export default Dashboard;
