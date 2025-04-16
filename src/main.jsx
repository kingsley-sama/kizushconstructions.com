import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HomeSection from './pages/Homepage';
import Services from './pages/services';
import './index.css';
import Layout from './layout.jsx';
const router = createBrowserRouter([
	{
		path: '/',
		element: <Layout />,
		children: [
			{ index: true, element: <HomeSection /> },
			{ path: 'about', element: <Services /> },
			{ path: 'service', element: <Services /> },
			{ path: 'project', element: <h1>Portfolio</h1> },
			{ path: 'contact', element: <h1>Contact Us</h1> },
		],
	},
]);
createRoot(document.getElementById('root')).render(
	<StrictMode>
		<RouterProvider router={router} />
	</StrictMode>
);
