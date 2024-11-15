import React from 'react';
import { createRoot } from 'react-dom/client';  // Update import
import './index.css';
import App from './App.jsx';
import History from './Components/History';
import Profile from './Components/Profile';
import Tarifs from './Components/Tarifs';
import Payment from './Components/Payment';
import LikePart from './Components/LikePart';
import Chat from  './Components/Chat';
import Chat2 from  './Components/ChatZero';

import MainTinder from './Components/mainTinder'

import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import { Group } from 'lucide-react';

const router = createBrowserRouter([
    {
        path: "/reactjs-js-template",
        element: <App />,
    },
    {
        path: "/history",
        element: <History />,
    },
    {
        path: "/profile",
        element: <Profile />,
    },
    {
        path: "/tarifs",
        element: <Tarifs />,
    },
    {
        path: "/payment",
        element: <Payment/>,
    },
    {
        path: "/heart",
        // element: <LikePart tab="likes"/>,
        element: <MainTinder/>,
        // element: <DatingApp/>,
    },
    {
        path: "/guests",
        element: <LikePart tab="guests"/>,
    },
    {
        path: "/chat",
        element: <Chat2 />,
    },

  
    

 
]);

const container = document.getElementById('root');
const root = createRoot(container);  
root.render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>

);

