import { createBrowserRouter } from "react-router-dom";
import App from './App';
import NotFound from "./shared/NotFound";
import UserBooksView from "./user/book_page/UserBooksView";
export const router = createBrowserRouter(


    // If the user is admin he will go there
    userIsLoggedIn && userIsAdmin ? [
        {
            path: "/",
            element: <App />,
            children: adminRoutes,
        },
        notFoundRoute,

    ]
        // If the user is Logged in and he is a normal user 
        : userIsLoggedIn ? [
            {
                path: "/",
                element: <App />,
                children: userRoutes,
            },
            notFoundRoute,
        ]
            // If the user is not logged in 
            : [
                {
                    path: "/",
                    element: <App />,
                    children: guestRoutes,
                },
                {
                    path: '*',
                    element: <Login />,
                }
            ],

);

const adminRoutes = [
    {
        path: '/',
        element: <NotFound />,
    },
    {
        path: '/books',
        element: <UserBooksView />,
    },
    {
        path: '/about',
        element: <AboutPage />,
    },
    {
        path: '/contact',
        element: <ContactPage />,
    },
];

const userRoutes = [
    {
        path: '/',
        element: <NotFound />,
    },
    {
        path: '/books',
        element: <UserBooksView />,
    },
    {
        path: '/about',
        element: <AboutPage />,
    },
    {
        path: '/contact',
        element: <ContactPage />,
    },
];

const guestRoutes = [
    {
        path: '/',
        element: <NotFound />,
    },
    {
        path: '/books',
        element: <UserBooksView />,
    },
    {
        path: '/about',
        element: <AboutPage />,
    },
    {
        path: '/contact',
        element: <ContactPage />,
    },
];

const notFoundRoute = {
    path: '*',
    element: <NotFound />,
};