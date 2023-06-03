import { createContext, useContext } from "react";
// import { useLocalStorage } from '../../components/LocalStorage/useLocalStorage';
import * as useLocalStorage from '../../components/LocalStorage/useLocalStorage'


export const ShoppingCartContext = createContext({})

export function UseShoppingCart () {
    return useContext(ShoppingCartContext)
}

export function CartProvider ({ children }) {
    const [ cartItems, setCartItems ] = useLocalStorage ('Cart', [])

    // Get or fetching all product item in the cart
    function getProduct(productId){
        return cartItems.find(item => item.id === productId)?.quantity || 0
    }

    // Adding product item in the cart
    function addProductAndQnty(productId) {
        setCartItems(currItems => {
            if (currItems.find(item => item.id === productId) == null) {
                return[...currItems,{id, quantity: 1}]
            } else {
                return currItems.map(item => {
                    if (item.id === productId){
                        return {...item, quantity: item.quantity + 1 }
                    } else {
                        return item;
                    }
                })
            }
        })
    }

    // deducting one extra product per item from cart
    function decreaseOneProduct(productId){
        setCartItems(currItems => {
            if (currItems.find(item => item.id === id)?.quantity === 1) { 
                return currItems.filter(item => item.id !== productId)
            } else {
                return currItems.map(item => {
                    if (item.id === productId){
                        return {...item, quantity: item.quantity - 1 }
                    } else {
                        return item;
                    }
                })
            }
        })
    }

    // delete one product from cart
    function removeFromCartItem(productId) {
        setCartItems( currItems => {
            return currItems.filter( item = item.id !== productId)
        })
    }

    // remove all product from cart
    function clear () {
        return setCartItems ([]);
    }

    function totalCost () {
        let totalAmount = 0;
        cartItems.forEach((cartItem) => {
            let productPrice = cartItem.discountedPrice;

            if ( !cartItem.discountedPrice ) {
                productPrice = cartItem.price
            }
            totalAmount += productPrice * cartItem.quantity
        });
        return totalAmount;
    }

    // total quantity in cart bag
    const cartBagQnty = cartItems.reduce (
        (quantityAmount, item) => item.quantity + quantityAmount, 0
    )

    return (
        <ShoppingCartContext.Provider value={{getProduct, addProductAndQnty, totalCost, decreaseOneProduct, removeFromCartItem, clear, cartBagQnty}}>
            { children }
        </ShoppingCartContext.Provider>

    )

}