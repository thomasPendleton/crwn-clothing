import SignUpForm from '../../components/sign-up/sign-up.component.jsx'
import SignIn from '../../components/sign-in/sign-in.component'
import './authentication.styles.scss'

const Authentication = () => {
  return (
    <div className="authentication-container">
      <SignIn />
      <SignUpForm />
    </div>
  )
}

export default Authentication
