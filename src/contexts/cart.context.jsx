import { createContext, useState, useEffect, useReducer } from 'react'
import { t } from 'tar'

const addCartItem = (cartItems, productToAdd) => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === productToAdd.id
  )

  if (existingCartItem) {
    return cartItems.map((cartItem) => {
      return cartItem.id === productToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    })
  }

  return [...cartItems, { ...productToAdd, quantity: 1 }]
}

const removeCartItem = (cartItems, productToRemove) => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === productToRemove.id
  )

  if (existingCartItem.quantity === 1) {
    return cartItems.filter((cartItem) => cartItem.id !== productToRemove.id)
  }

  return cartItems.map((cartItem) => {
    return cartItem.id === productToRemove.id
      ? { ...cartItem, quantity: cartItem.quantity - 1 }
      : cartItem
  })
}

const deleteCartItem = (cartItems, deletedItem) => {
  return cartItems.filter((cartItem) => cartItem.id !== deletedItem.id)
}
export const CartContext = createContext({
  isCartOpen: false,
  setIsCartOpen: () => {},
  cartItems: [],
  addItemToCart: () => {},
  removeItemToCart: () => {},
  deleteCartItems: () => {},
  cartCount: 0,
  cartTotal: 0,
})
//Reducer
const INITIAL_STATE = {
  isCartOpen: false,
  cartItems: [],
  cartCount: 0,
  cartTotal: 0,
}

//Reducer
const cartReducer = (state, action) => {
  const { type, payload } = action

  switch(type) {
    case 'SET_CART_ITEMS':
      return { 
        ...state, 
        ...payload
      }



    default: 
      throw new Error(`unhandled type of ${type} in cartReducer`)
  }
}



export const CartProvider = ({ children }) => {
  //Reducer
  const [state, dispatch] = useReducer(cartReducer, INITIAL_STATE)

  const { isCartOpen, cartItems, cartCount, cartTotal } = state

  // const [isCartOpen, setIsCartOpen] = useState(false)
  // const [cartItems, setCartItems] = useState([])
  // const [cartCount, setCartCount] = useState(0)
  // const [cartTotal, setCartTotal] = useState(0)
//Reducer
  const setCartCount = () => {
    dispatch({type: })
  }

  useEffect(() => {
    const newCartCount = cartItems.reduce((acc, curr) => {
      return acc + curr.quantity
    }, 0)
    setCartCount(newCartCount)
  }, [cartItems])

  useEffect(() => {
    const newCartTotal = cartItems.reduce((acc, curr) => {
      return acc + curr.quantity * curr.price
    }, 0)
    setCartTotal(newCartTotal)
  }, [cartItems])

  const addItemToCart = (productToAdd) => {
    setCartItems(addCartItem(cartItems, productToAdd))
  }
  const removeItemToCart = (cartItemToRemove) => {
    setCartItems(removeCartItem(cartItems, cartItemToRemove))
  }
  const deleteCartItems = (itemToDelete) => {
    setCartItems(deleteCartItem(cartItems, itemToDelete))
  }

  const value = {
    isCartOpen,
    setIsCartOpen,
    addItemToCart,
    cartItems,
    cartCount,
    removeItemToCart,
    deleteCartItems,
    cartTotal,
  }

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}
