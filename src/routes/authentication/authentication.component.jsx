import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
} from '../../utils/firebase.utils'

import SignUpForm from '../../components/sign-up/sign-up.component.jsx'
import SignIn from '../../components/sign-in/sign-in.component'

const Authentication = () => {
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup()
    const userDocRef = await createUserDocumentFromAuth(user)
  }

  return (
    <div>
      <h1>Sign In Page</h1>
      <SignIn />
      <SignUpForm />
    </div>
  )
}

export default Authentication
