import { createBrowserRouter, Navigate } from "react-router-dom";
import React from "react";
import MangeUsers from "../../admin/users/MangeUsers";
import App from "../../App";
import LoginPage from "../../shared/pages/login/LoginPage";
import NotFound from "../../shared/pages/not_found/NotFound";
import RegisterPage from "../../shared/pages/register/RegisterPage";
import { setUserData, userData, userRoles } from "../../shared/variables";
import BookDetailsPage from "../../user/book_details_page/BookDetailsPage";
import UserBooksView from "../../user/book_page/UserBooksView";
import UserRequestsPage from "../../user/user_requests_page/UserRequestsPage";
import { getCachedUserData } from "../../utils/auth/localStorage";
import ProtectedRoute from './protectedRoute';
import SearchTermsPage from "../../user/search_terms_page/SearchTermsPage";
import UpdateUser from "../../admin/users/UpdateUser";
import CreatUser from "../../admin/users/CreatUser";
import ManageBooks from "../../admin/books/ManageBooks";
import CreatBook from "../../admin/books/CreatBook";
import UpdateBook from "../../admin/books/UpdateBook";
import ManageRequests from "../../admin/requests/ManageRequests";
import ManageChapters from "../../admin/chapters/ManageChapters";
import CreateChapter from "../../admin/chapters/CreateChapter";
import UpdateChapter from "../../admin/chapters/UpdateChapter";
//! I initialize the userData  here if the user is already logged in before
function initializeUserData() {
  const cachedUserData = getCachedUserData();
  setUserData(cachedUserData);
}
initializeUserData();

const adminRoutes = [
    {
        path: '/manage-users',
        element: <MangeUsers />,
    },
    {
        path: '/creat-user',
        element: <CreatUser />
    },
    {
      path: '/update-user',
      element: <UpdateUser />
    },
    {
      path: '/manage-book',
      element: <ManageBooks />
    },
    {
      path: '/creat-book',
      element: <CreatBook />
    },
    {
      path: '/update-book',
      element: <UpdateBook />
    },
    {
      path: '/book-chapters',
      element: <ManageChapters/>
    },
    {
      path: '/create-chapters',
      element: <CreateChapter />
    },
    {
      path: '/update-chapters',
      element: <UpdateChapter />
    },
    {
      path: '/manage-requests',
      element: <ManageRequests />
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
        element: <ProtectedRoute expectedRole={userRoles.user}>
            <UserRequestsPage />
        </ProtectedRoute>,
    },
    {
        path: '/search-terms',
        element: <ProtectedRoute expectedRole={userRoles.user}>
            <SearchTermsPage />
        </ProtectedRoute>
    },

];

const guestRoutes = [
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/register",
    element: <RegisterPage />,
  },
];

const notFoundRoute = {
  path: "*",
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
                    element: userData ? 
                    userData.type === userRoles.user ?
                     <Navigate to="/books" replace /> : <Navigate to="/manage-users" replace /> 
                     : <Navigate to="/login" replace />,
                },
                ...guestRoutes,
                ...userRoutes,
                ...adminRoutes,


            ]
        },
        notFoundRoute,

    ]


);
