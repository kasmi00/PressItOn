import React from 'react';

interface ShoppingcartProps {
    items: { id: number; name: string; price: number }[];
}

const Shoppingcart: React.FC<ShoppingcartProps> = ({ items }) => {
    return (
        <div>
            <h2>Shopping Cart</h2>
            <ul>
                {items.map((item, index) => (
                    <li key={index}>
                        {item.name} - ${item.price}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Shoppingcart;