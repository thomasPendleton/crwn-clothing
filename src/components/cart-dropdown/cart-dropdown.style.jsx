import styled from 'styled-components'

export const CartDropdownContainer = styled.div`
  position: absolute;
  width: 240px;
  height: 340px;
  display: flex;
  flex-direction: column;
  padding: 20px;
  border: 1px solid black;
  background-color: white;
  top: 90px;
  right: 40px;
  z-index: 5;
`
export const CartItems = styled.div`
height: 240px;
     display: flex;
     flex-direction: column;
     overflow: auto;
`

// .cart-dropdown-container {
// position: absolute;
// width: 240px;
// height: 340px;
// display: flex;
// flex-direction: column;
// padding: 20px;
// border: 1px solid black;
// background-color: white;
// top: 90px;
// right: 40px;
// z-index: 5;

//   .empty-message {
//     font-size: 18px;
//     margin: 50px auto;
//   }

//   .cart-items {
//     height: 240px;
//     display: flex;
//     flex-direction: column;
//     overflow: auto;
//   }

//   button {
//     font-size: 14px;
//     margin-top: auto;
//     //   letter-spacing: 0;
//   }
// }
