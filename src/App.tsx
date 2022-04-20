import { useEffect, useCallback } from 'react';
import { Layout } from 'components';
import { addToken, addUserProfile, RootState, routesDirectory } from 'library';
import { Login } from 'pages';
import { useSelector, useDispatch } from 'react-redux';
import { Switch, Route, Redirect } from 'react-router-dom';
import { requestHelper } from 'utils';

const App = () => {
  const dispatch = useDispatch();
  const token = useSelector((state: RootState) => state.token);

  const handleGetUserProfile = useCallback(
    async (value) => {
      await requestHelper
        .get('/me', {
          headers: {
            Authorization: `Bearer ${value}`
          }
        })
        .then((res) => dispatch(addUserProfile(res.data)));
    },
    [dispatch]
  );

  const tokenValue =
    window.location.hash &&
    window.location.hash
      .substring(1)
      .split('&')
      .find((elem) => elem.startsWith('access_token'))!
      .replace('access_token=', '');

  useEffect(() => {
    if (tokenValue) {
      handleGetUserProfile(tokenValue).then(() => dispatch(addToken(tokenValue)));
    }
  }, [dispatch, handleGetUserProfile, tokenValue]);

  return (
    <div className="prose !min-w-[320px] !max-w-none bg-[#1c1b22]">
      <>
        {token || tokenValue ? (
          <Switch>
            <Layout>
              {routesDirectory.map((route, index) => (
                <Route
                  key={index}
                  path={route.path}
                  component={route.component}
                  exact={route.exact}
                />
              ))}
              <Redirect from="*" to="/create-playlist" />
            </Layout>
          </Switch>
        ) : (
          <Switch>
            <Route path="/" component={Login} exact />
            <Redirect from="*" to="/" />
          </Switch>
        )}
      </>
    </div>
  );
};

export default App;
