import { createContext, useContext } from "react";
import { useLocalStorage } from '../../components/LocalStorage';



export const ShoppingCartContext = createContext({})

export function UseShoppingCart () {
    return useContext(ShoppingCartContext)
}

export function CartProvider ({ children }) {
    const [ cartItems, setCartItems ] = useLocalStorage('Cart', [])

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

    function removeFromCartItem(productId) {
        setCartItems( currItems => {
            return currItems.filter( item = item.id !== productId)
        })
    }

    function clear () {
        return setCartItems ([]);
    }

    const cartBagQnty = cartItems.reduce (
        (quantityAmount, item) => item.quantity + quantityAmount, 0
    )

    return (
        <ShoppingCartContext.Provider value={{getProductQnty, addProductAndQnty, decreaseOneProduct, removeFromCartItem, clear, cartBagQnty}}>
            { children }
        </ShoppingCartContext.Provider>

    )

}