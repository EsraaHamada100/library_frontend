import { createBrowserRouter, Navigate } from "react-router-dom";
import App from '../../App';
import NotFound from "../../shared/pages/not_found/NotFound";
import UserBooksView from "../../user/book_page/UserBooksView";
import LoginPage from "../../shared/pages/login/LoginPage";
import RegisterPage from "../../shared/pages/register/RegisterPage";
import { setUserData, userData, userRoles } from "../../shared/variables";
import { getCachedUserData } from "../../utils/localStorage";
import ProtectedRoute from './protectedRoute';
import BookDetailsPage from "../../user/book_details_page/BookDetailsPage";
import UserRequestsPage from "../../user/user_requests_page/UserRequestsPage";
//! I initialize the userData  here if the user is already logged in before
function initializeUserData() {
    const cachedUserData = getCachedUserData();
    setUserData(cachedUserData);
}
initializeUserData();

const adminRoutes = [
    {
        path: '/admin-books',
        element: <UserBooksView />,
    },

];

const userRoutes = [

    {
        path: '/books',
        element: <ProtectedRoute expectedRole={userRoles.user}>
            <UserBooksView />
        </ProtectedRoute>,
    },
    {
        path: '/book-details',
        element: <ProtectedRoute expectedRole={userRoles.user}>
            <BookDetailsPage />
        </ProtectedRoute>,
    },
    {
        path: '/user-requests',
        element : <ProtectedRoute expectedRole={userRoles.user}>
        <UserRequestsPage />
    </ProtectedRoute>,
    }
];

const guestRoutes = [

    {
        path: '/login',
        element: <LoginPage />,
    },
    {
        path: '/register',
        element: <RegisterPage />,
    }
];

const notFoundRoute = {
    path: '*',
    element: <NotFound />,
};


export const router = createBrowserRouter(

    [
        {
            path: "/",
            element: <App />,
            children: [
                {
                    path: '/',
                    element: userData ? <Navigate to="/books" replace /> : <Navigate to="/login" replace />,
                },
                ...guestRoutes,
                ...userRoutes,
                ...adminRoutes,


            ]
        },
        notFoundRoute,

    ]


);

