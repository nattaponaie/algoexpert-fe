import React, { Suspense } from 'react';
import { hot } from 'react-hot-loader/root';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import routes from './routes';

export const App = hot(_App);
export function _App(): JSX.Element | null {
  return (
    <Router>
      <div>
        <Switch>
          <Suspense fallback={<div>Loading...</div>}>
            {routes.map((route, i) => (
              <Route
                key={i}
                path={route.path}
                render={(props) => <route.component {...props} />}
              />
            ))}
          </Suspense>
        </Switch>
      </div>
    </Router>
  );
}
