import { persistor, removeToken, store } from 'library'

const logoutHelper = () => {
  store.dispatch(removeToken())
  persistor.purge()
}

export default logoutHelper
