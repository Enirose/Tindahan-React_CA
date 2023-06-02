import { useState } from "react";
import { useContext } from "react";
import { createContext } from "react";



export const ShoppingCartContext = createContext({})

export function UseShoppingCart () {
    return useContext(ShoppingCartContext)
}

export function CartProvider ({ children }) {
    const [ cartItems, setCartItems ] = useState()

    function getProductQnty(productId){
        return cartItems.find(item => item.id === productId)?.quantity || 0
    }

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


}