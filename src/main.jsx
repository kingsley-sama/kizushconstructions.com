import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HomeSection, { Blogs } from './pages/Homepage';
import AboutPage from './pages/aboutPage.jsx';
import Services from './pages/services';
import Projects from './pages/Projects';
import './index.css';
import Layout from './layout.jsx';
const router = createBrowserRouter([
	{
		path: '/',
		element: <Layout />,
		children: [
			{ index: true, element: <HomeSection /> },
			{ path: 'about', element: <AboutPage /> },
			{ path: 'service', element: <Services /> },
			{ path: 'project', element: <Projects /> },
			{ path: 'contact', element: <h1>Contact Us</h1> },
			{ path: 'resource', element: <Blogs /> },

		],
	},
]);
createRoot(document.getElementById('root')).render(
	<StrictMode>
		<RouterProvider router={router} />
	</StrictMode>
);
