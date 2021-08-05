import React from 'react';
import { hot } from 'react-hot-loader/root';

export const App = hot(_App);
export function _App(): JSX.Element | null {
  return (
    <div>
      <p className="text-5xl">Hello world!</p>
    </div>
  );
}
