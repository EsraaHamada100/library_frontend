import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { router } from './core/route/router';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={router}/>);

// root.render( <App />);