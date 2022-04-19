import { Button } from 'components'
import { SPOTIFY_URL } from 'utils'

function Login() {
  return (
    <div className=" prose-h1:text-white prose-p:text-white w-screen min-h-screen flex flex-col items-center justify-center">
      <h1 className="my-0">Hi there 👋</h1>
      <p>Please grant access to your spotify</p>
      <Button toggleFunction={() => (window.location.href = SPOTIFY_URL)}>Click here</Button>
    </div>
  )
}
export default Login
