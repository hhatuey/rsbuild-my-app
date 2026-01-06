import React from 'react';
import ReactDOM from 'react-dom/client';
import { createRouter, RouterProvider } from '@tanstack/react-router';
// Supports font weights 100-900
import '@fontsource-variable/geist-mono';
import '@fontsource-variable/inter';
import './App.css';

// Import the generated route tree
import { routeTree } from './routeTree.gen';
// Create a new router instance
const router = createRouter({ routeTree });

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
