import { createBrowserRouter, RouterProvider } from 'react-router'
import MainLayout from '../layout/MainLayout.jsx'
import Homepage from '../pages/homepage/Homepage.jsx'
import Books from '../pages/books/Books.jsx'
import ErrorPage from '../pages/ErrorPage/ErrorPage.jsx';

export const router = createBrowserRouter([
	{
		path: '/',
		element: <MainLayout></MainLayout>,
		children: [
			{
				index: true,
				element: <Homepage />
			},
			{
				path: '/books',
				element: <Books />
			},
		],
        errorElement: <ErrorPage />
	},
]);