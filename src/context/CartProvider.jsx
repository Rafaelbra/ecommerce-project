import { useState } from "react";
import { CartContext } from "./CartContext";
import PropTypes from "prop-types";

export function Cartprovider({children}) {
    const [items, setItems] = useState([])

    const addItem = (product) => {
        setItems((currentItems) => {
            const existingItem = currentItems.find(item => item.id === product.id)

            if (existingItem) {
                return currentItems.map((item) => 
                    item.id === product.id ? 
                         {
                         ...item, quantity: item.quantity+1
                    } : item
                );
            };

            return [...currentItems, {...product, quantity: 1}];
        });
    }

    return (
        <CartContext.Provider value={{items, addItem}}>
            {children}
        </CartContext.Provider>
    )
}

Cartprovider.propTypes = {
    children: PropTypes.node.isRequired,


}