import './checkout-item.style.jsx'
import { CartContext } from '../../contexts/cart.context'
import { useContext } from 'react'
import {
  CheckoutItemContainer,
  ImageContainer,
  Name,
  Quantity,
  Arrow,
  Value,
  Price,
  RemoveButton,
} from './checkout-item.style.jsx'

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
    <CheckoutItemContainer>
      <ImageContainer>
        <img src={imageUrl} alt={`${name}`} />
      </ImageContainer>
      <Name>{name}</Name>
      <Quantity>
        <Arrow onClick={decrementItemHandler}>&#10094;</Arrow>
        <Value> {quantity}</Value>

        <Arrow onClick={incrementItemHandler}>&#10095;</Arrow>
      </Quantity>
      <Price>{price}</Price>
      <RemoveButton onClick={() => deleteCartItems(cartItem)}>
        &#10005;
      </RemoveButton>
    </CheckoutItemContainer>
  )
}

export default CheckoutItem
