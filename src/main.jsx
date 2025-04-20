import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HomeSection, { Resources } from './pages/Homepage';
import AboutPage from './pages/aboutPage.jsx';
import Services from './pages/services';
import Projects from './pages/Projects';
import Process from './pages/Process';
import Contact from './pages/contact';
import './index.css';
import Layout from './layout.jsx';

const router = createBrowserRouter([
	{
		path: '/',
		element: <Layout />,
		children: [
			{ index: true, element: <HomeSection /> },
			{ path: 'about', element: <AboutPage /> },
			{ path: 'services', element: <Services /> },
			{ path: 'projects', element: <Projects /> },
			{ path: 'contact', element: <Contact /> },
			{ path: 'resources', element: <Resources /> },
			{ path: 'process', element: <Process /> },
		],
	},
]);

createRoot(document.getElementById('root')).render(
	<StrictMode>
		<RouterProvider router={router} />
	</StrictMode>
);
