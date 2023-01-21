import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import About from './components/About';
import AppLayout from './App';
import Error from './components/Error';
import Contact from './components/Contact';
import Body from './components/Body';
import RestrauntMenu from './components/RestrauntMenu';
import Profile from './components/ProfileClass';

const root = ReactDOM.createRoot(document.getElementById('root'));

const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: '/',
        element: <Body />,
      },
      {
        path: '/about',
        element: <About />,
        children: [
          {
            path: 'profile',
            element: <Profile />,
          },
        ],
      },
      {
        path: '/contact',
        element: <Contact />,
      },
      {
        path: '/restaurant/:id',
        element: <RestrauntMenu />,
      },
    ],
  },
]);

root.render(<RouterProvider router={appRouter} />);
reportWebVitals();
