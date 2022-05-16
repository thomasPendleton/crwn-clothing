import CheckoutItem from '../../components/checkout-item/checkout-item.component'
import { CartContext } from '../../contexts/cart.context'
import { useContext } from 'react'
import {
  CheckoutContainer,
  CheckoutHeader,
  HeaderBlock,
  Total,
} from './checkout.style'

const Checkout = () => {
  const { cartItems, cartTotal } = useContext(CartContext)

  return (
    <CheckoutContainer>
      <CheckoutHeader>
        <HeaderBlock>
          <span>Product</span>
        </HeaderBlock>
        <div className="header-block">
          <span>Description</span>
        </div>
        <div className="header-block">
          <span>Quantity</span>
        </div>
        <div className="header-block">
          <span>Price</span>
        </div>
        <div className="header-block">
          <span>Remove</span>
        </div>
      </CheckoutHeader>
      <hr></hr>

      {cartItems.map((item) => {
        return <CheckoutItem key={item.id} cartItem={item} />
      })}
      <Total>Total: ${cartTotal}</Total>
    </CheckoutContainer>
  )
}

export default Checkout
