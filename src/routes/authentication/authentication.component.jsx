import SignUpForm from '../../components/sign-up/sign-up.component.jsx'
import SignIn from '../../components/sign-in/sign-in.component'

import { AuthenticationContainer } from './authentication.styles.jsx'

const Authentication = () => {
  return (
    <AuthenticationContainer>
      <SignIn />
      <SignUpForm />
    </AuthenticationContainer>
  )
}

export default Authentication
