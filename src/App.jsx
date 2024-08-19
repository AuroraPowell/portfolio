import './App.css'
import Content from './components/content.jsx'
import Header from './components/head.jsx'
// import LoginButton from './components/LoginButton.jsx'
// import { Auth0Provider } from '@auth0/auth0-react'
// import Footer from './components/foot.jsx'

function CountMeIn() {

  // const domain = `https://dev-evxyxfc410y7nkqu.us.auth0.com`
  // const clientId = `l4PqSIgdaNl4eeAZ6QQeR9eZ9PqWJHOu`
  return (
    <div className='flex flex-col bg-cover min-h-screen bg-purple-400 bg-opacity-70'>
      {/* <Auth0Provider
      domain={domain}
      cientId={clientId}
      redirectUri={window.location.origin}>
        <LoginButton /> */}
        <Content />
      {/* </Auth0Provider> */}
    </div>
  )
}

export default CountMeIn

      



