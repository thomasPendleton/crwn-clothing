import './button.styles.scss'

const buttonTypes = {
  google: 'google-sign-in',
  inverted: 'inverted',
}

const Button = ({ children, buttonType, ...otherProps }) => {
  return (
    <button
      className={`button-container ${buttonTypes[buttonType]}`}
      {...otherProps}
    >
      {children}
    </button>
  )
}

export default Button
