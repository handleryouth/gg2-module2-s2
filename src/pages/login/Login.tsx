import { Button, Seo } from 'components';
import { motion } from 'framer-motion';
import { slideLeftEntrance } from 'library';
import { SPOTIFY_URL } from 'utils';

function Login() {
  return (
    <motion.div
      className=" prose-h1:text-white prose-p:text-white w-screen min-h-screen flex flex-col items-center justify-center"
      variants={slideLeftEntrance}
      initial="hidden"
      animate="visible"
      transition={{
        duration: 0.2,
        delay: 0.5
      }}>
      <Seo title="Login" description="Grant access to Spotify" />
      <h1 className="my-0">Hi there 👋</h1>
      <p>Please grant access to your spotify</p>
      <Button toggleFunction={() => (window.location.href = SPOTIFY_URL)}>Click here</Button>
    </motion.div>
  );
}
export default Login;
