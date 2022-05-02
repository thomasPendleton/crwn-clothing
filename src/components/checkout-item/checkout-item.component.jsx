import './checkout-item.style.scss'
import { CartContext } from '../../contexts/cart.context'
import { useContext } from 'react'

const CheckoutItem = ({ cartItem }) => {
  const { name, imageUrl, price, quantity } = cartItem
  const { deleteCartItems, removeItemToCart, addItemToCart } =
    useContext(CartContext)

  const decrementItemHandler = () => {
    removeItemToCart(cartItem)
  }
  const incrementItemHandler = () => {
    addItemToCart(cartItem)
  }

  return (
    <div className="checkout-item-container">
      <div className="image-container">
        <img src={imageUrl} alt={`${name}`} />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">
        <div className="arrow" onClick={decrementItemHandler}>
          &#10094;
        </div>
        <span className="value"> {quantity}</span>

        <div className="arrow" onClick={incrementItemHandler}>
          &#10095;
        </div>
      </span>
      <span className="price">{price}</span>
      <div className="remove-button" onClick={() => deleteCartItems(cartItem)}>
        &#10005;
      </div>
    </div>
  )
}

export default CheckoutItem
