import * as React from 'react';
import { Outlet, createRootRoute } from '@tanstack/react-router';

export const Route = createRootRoute({
  component: RootComponent,
});

/** @type {React.CSSProperties} */
const mainStyle = {
  display: 'grid',
  gridTemplateRows: 'auto 1fr auto',
  overflowY: 'scroll',
  /* scrollbar-color: [thumb] [track] */
//   scrollbarColor: '#888 transparent'
colorScheme: 'dark'
};

function RootComponent() {
  return (
    <React.Fragment>
      <nav>Hello "__root"!</nav>
      <main style={mainStyle}>
        <header>header</header>
        <Outlet />
        <footer>footer</footer>
      </main>
    </React.Fragment>
  );
}
