import React, {useEffect, useState} from 'react';
// import './css/bootstrap.min.css';
// import './css/font-awesome.min.css';
// import './css/elegant-icons.css';
// import './css/magnific-popup.css';
// import './css/nice-select.css';
// import './css/owl.carousel.min.css';
// import './css/slicknav.min.css';
import './css/style.css';
import {useNavigate} from "react-router-dom";




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
const Shop = () => {
    const [products, setProducts] = useState<Product[]>([]);
    const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
    const [selectedProductId, setSelectedProductId] = useState<number | null>(null);
    const [searchQuery, setSearchQuery] = useState<string>('');
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

    function filterProducts() {
        let filteredProducts = products;

        if (selectedCategory) {
            filteredProducts = filteredProducts.filter((product) => product.category === selectedCategory);
        }

        if (searchQuery) {
            filteredProducts = filteredProducts.filter((product) =>
                product.productName.toLowerCase().includes(searchQuery.toLowerCase())
            );
        }

        return filteredProducts;
    }

    const handleViewClick = (data: { productId: number; quantity: number }) => {
        const selectedProduct = products.find((product) => product.id === data.productId);

        if (selectedProduct) {
            setSelectedProductId(data.productId);
            navigate(`/review/${data.productId}`);
        }
    };

    // Use useEffect to navigate after state update
    useEffect(() => {
        // Navigate to the review page when selectedProductId changes
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
                                    <a href="/dashboard">
                                        Home
                                    </a>
                                </li>
                                <li>
                                    <a className="active" href="/shop">Shop</a>
                                </li>
                                <li>
                                    <a href="/admin">Admin</a>
                                </li>

                            </ul>
                        </nav>
                    </div>
                </div>
            </header>

            <div className="bg-pro">
                <div className="categories">
                    <button className="cteg-btn" onClick={() => setSelectedCategory('OPI')}>OPI</button>
                    <button className="cteg-btn" onClick={() => setSelectedCategory('Gelish')}>Gelish</button>
                    <button className="cteg-btn" onClick={() => setSelectedCategory('Zoya')}>Zoya</button>
                    <button className="cteg-btn" onClick={() => setSelectedCategory('Manucurist')}>Manucurist</button>
                    <button className="cteg-btn" onClick={() => setSelectedCategory('Zoya')}>Zoya</button>
                    <button className="cteg-btn" onClick={() => setSelectedCategory('Olivia')}>Olivia</button>
                    <button className="cteg-btn" onClick={() => setSelectedCategory(null)}>All</button>
                </div>

                <input
                    type="text"
                    placeholder="Search products..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="search-inp"/>

                <div className="pro-dis" style={{display: 'flex', flexWrap: 'wrap', color: 'black'}}>
                    {filterProducts().map((product) => (
                        <ProductCard key={product.id} product={product} onViewClick={handleViewClick}/>
                    ))}
                </div>
            </div>
</>
    );
};

export default Shop;
