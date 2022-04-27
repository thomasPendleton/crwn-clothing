import { createContext, useState } from 'react'

const addCartItem = (cartItems, productToAdd) => {
  
    
// if(!cartItems.contains(productToAdd)){
//   return [{...productToAdd, quantity: 1}]
// } else {
//   quantity++
//   return [{...productToAdd, quantity}]
// }

const existingCartItem = cartItems.find(
  (cartItem) => cartItem.id === productToAdd.id
)

return [...cartItems, {...productToAdd, quantity: 1}]





}


export const CartContext = createContext({
  isCartOpen: false,
  setIsCartOpen: () => {},
  cartItems: [],
  addItemToCart: () => {}
})





export const CartProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false)
  const [cartItems, setCartItems] = useState([])

  const addItemToCart = (productToAdd) => {
    setCartItems
  }

  const value = {isCartOpen, setIsCartOpen}

  return (
      <CartContext.Provider value={value}>
          {children}
      </CartContext.Provider>
  )
}
