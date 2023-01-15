import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import About from './components/About';
import AppLayout from './App';
import Error from './components/Error';

const root = ReactDOM.createRoot(document.getElementById('root'));

const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    errorElement: <Error />,
  },

  {
    path: '/about',
    element: <About />,
  },
]);

root.render(<RouterProvider router={appRouter} />);
reportWebVitals();
