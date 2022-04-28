const CheckoutItem = () => {
  const decriment = () => {
    console.log('clickarrow left')
  }
  const increment = () => {
    console.log('clickarrow right')
  }
  return (
    <div
      style={{
        backgroundColor: 'lightGrey',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingRight: '10px'
      }}
    >
      <img
        style={{ maxWidth: '100px' }}
        src="https://i.ibb.co/RjBLWxB/grey-brim.png"
        alt="hat"
      />
      <span>Shoes</span>
      <div>
        <span style={{ fontWeight: 'bold', cursor: 'pointer' }} onClick={decriment}>
          &lt;
        </span>
        <span> 0 </span>
        <span style={{ fontWeight: 'bold', cursor: 'pointer' }} onClick={increment}>&gt;</span>
      </div>

      <span>110</span>
      <span>X</span>
    </div>
  )
}

export default CheckoutItem
