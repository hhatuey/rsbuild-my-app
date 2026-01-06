import * as React from 'react'
import { Outlet, createRootRoute } from '@tanstack/react-router'

export const Route = createRootRoute({
  component: RootComponent,
})

/**
 * @type {React.CSSProperties}
 */
const headerStyle = {
  backgroundColor: 'AccentColor'
};
/**
 * @type {React.CSSProperties}
 */
const navStyle = {
  backgroundColor: 'AccentColorText',
  width: true? '32px': 'auto',
  transition: 'width 0.5s ease-in-out' 
};
/**
 * @type {React.CSSProperties}
 */
const mainStyle = {
  display: 'grid',
  gridTemplateRows: 'auto 1fr auto',
  backgroundColor: 'ActiveBorder',
};
/**
 * @type {React.CSSProperties}
 */
const footerStyle = {
  backgroundColor: 'ActiveCaption'
};

function RootComponent() {
  return (
    <React.Fragment>
      <nav style={navStyle}>navigator navigator</nav>
      <main style={mainStyle}>
        <header style={headerStyle}>Hello "__root"!</header>
        <Outlet />
        <footer style={footerStyle}>footer</footer>
      </main>
    </React.Fragment>
  )
}
