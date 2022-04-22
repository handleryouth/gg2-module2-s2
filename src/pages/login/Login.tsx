import { Button, Seo } from 'components'
import { motion } from 'framer-motion'
import { slideLeftEntrance } from 'library'
import { SPOTIFY_URL } from 'utils'

function Login() {
  return (
    <motion.div
      className=" prose max-w-none w-screen flex flex-col items-center justify-center min-h-screen"
      variants={slideLeftEntrance}
      initial="hidden"
      animate="visible"
      transition={{
        duration: 0.2,
        delay: 0.5
      }}>
      <Seo title="Login" description="Grant access to Spotify" />
      <h1 className="my-0 text-white">Hi there 👋</h1>
      <p className="text-white">Please grant access to your spotify</p>
      <Button toggleFunction={() => (window.location.href = SPOTIFY_URL)}>Click here</Button>
    </motion.div>
  )
}
export default Login
