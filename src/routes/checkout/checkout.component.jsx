import CheckoutItem from '../../components/checkout-item/checkout-item.component'
import { CartContext } from '../../contexts/cart.context'
import { useContext } from 'react'
import './checkout.style.scss'

const Checkout = () => {
  const { cartItems, addItemToCart, removeItemFromCart } = useContext(CartContext)

  return (
    <div>
      <span>Product</span>
      <span>Description</span>
      <span>Quantity</span>
      <span>Price</span>
      <span>Remove</span>
      <hr></hr>
      {cartItems.map((item) => {
          const {id, name, quantity} = item
        return (
          <div key={id}>
            <h2>{name}</h2>
            <span onClick={() => removeItemFromCart(item)}>decrement </span>
            <span> {quantity} </span>
            <span onClick={() => addItemToCart(item)}> increment</span>
          </div>
        )
      })}
      {/* <CheckoutItem /> */}
    </div>
  )
}

export default Checkout
