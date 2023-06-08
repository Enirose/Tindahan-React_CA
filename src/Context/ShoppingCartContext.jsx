import { createContext } from "react";
import useLocalStorage from '../Hooks/useLocalStorage';


export const ShoppingCartContext = createContext({})

export function ShoppingCartProvider ({ children }) {
    const [ cart, setCart ] = useLocalStorage ('Cart', []);

    const totalItems = cart.reduce ((count, item) => count + item.quantity, null);
    const totalPrice = cart.reduce((total, item) => total + item.price * item.quantity, 0);

    // Adding product item in the cart
    const addToCart = (item) => {
        setCart((prevCart) => {
            const existingItem = prevCart.find((cartItem) => cartItem.id === item.id);

            if (existingItem) {
                return prevCart.map((cartItem) => (cartItem.id === item.id ? {...cartItem, quantity: cartItem.quantity + 1 } : cartItem));
            }
            return [...prevCart, { ...item, quantity:1}];
        });
    };

    // delete product from cart
    const removeFromCart = (itemID) => {
        setCart ((prevCart) => prevCart.filter((item) => item.id !== itemID));
    };

    const increaseQuantity = (itemID) => {
        setCart((prevCart) => prevCart.map((item) => (item.id === itemID ? {...item, quantity: item.quantity + 1 } : item)));
    }
    
    const decreaseQuantity = (itemID) => {
        setCart((prevCart) => {

            // We find item that should be decrease
            const itemToDecrease = prevCart.find((item) => item.id === itemID);

            // If the item's quantity is more than 1, decrease it
            if (itemToDecrease.quantity > 1) {
                return prevCart.map((item) => (item.id === itemID ? {...item, quantity: item.quantity - 1} : item))
            }

            // If the item's quantity is 1, remove it from the cart
            return prevCart.filter((item) => item.id !== itemID);
        });
    }

    const discountPercentage = (discountedPrice, price) => {
        if (discountedPrice) {

            const discount = price - discountedPrice;
            const discountPercent = Math.round((discount/price) * 100);

            return discountPercent;
        }
        return 0;
    };

    const clear = () => {
        return setCart ([]);
    }

    return (
        <ShoppingCartContext.Provider value={{addToCart, removeFromCart, cart, increaseQuantity, decreaseQuantity, totalItems, totalPrice, discountPercentage, clear}}>
            { children }
        </ShoppingCartContext.Provider>

    )

}