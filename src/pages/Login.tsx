import { SPOTIFY_URL } from 'util/spotify'
import { Button } from 'components'

function Login() {
  return (
    <div className=" prose-h1:text-white prose-p:text-white w-screen min-h-screen flex flex-col items-center justify-center">
      <h1 className="my-0">Hi there 👋</h1>
      <p>Please grant access to your spotify</p>
      <Button title="Click here" toggleFunction={() => (window.location.href = SPOTIFY_URL)} />
    </div>
  )
}
export default Login
