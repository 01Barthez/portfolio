import { createBrowserRouter, Outlet } from 'react-router-dom'
import ScrollToTop from '@/components/custom/ScrollToTop'
import PageError from '@/pages/error/PageError'

/**
 * Creates a router with specified routes and elements for each route.
 * @param {Array} routes - An array of route objects containing path and element information.
 * @returns None
 */

const Router = createBrowserRouter([
	{
		path: '/',
		element: (
			<>
				<Outlet />

				{/* To scroll to top each time that we change routes */}
				<ScrollToTop />
			</>
		),

		// Page erreur
		errorElement: (
			<>
				<PageError />
			</>
		),

		children: [
			{
				path: '',
				element: 'hello',
			},
		],
	},
])

export default Router
