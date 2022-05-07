import { BaseButton, GoogleSignInButton, InvertedButton } from './button.styles'

export const ButtonTypes = {
  base: 'base',
  google: 'google-sign-in',
  inverted: 'inverted',
}

const getButton = (buttonType = ButtonTypes.base) =>
  ({
    [ButtonTypes.base]: BaseButton,
    [ButtonTypes.google]: GoogleSignInButton,
    [ButtonTypes.inverted]: InvertedButton,
  }[buttonType])

const Button = ({ children, buttonType, ...otherProps }) => {
  const CustomButton = getButton(buttonType)
  return <CustomButton {...otherProps}>{children}</CustomButton>;
}

export default Button
