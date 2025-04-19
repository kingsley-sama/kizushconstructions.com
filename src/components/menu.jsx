'use client';

import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { motion, AnimatePresence } from 'framer-motion';
import TrendingFlatIcon from '@mui/icons-material/TrendingFlat';
import { cn } from '../lib/utils';

const featuresDropdown = [
	{ title: 'Design', to: '/features/search' },
	{ title: 'Whole Home Renovations', to: '/features/listings' },
	{ title: 'Additions', to: '/features/market-analysis' },
	{ title: 'Kitchens', to: '/features/agents' },
	{ title: 'Bathrooms', to: '/features/agents' },
	{ title: 'Basements', to: '/features/agents' },
	{ title: 'Second Floor', to: '/features/agents' },
	{ title: 'Exterior Upgrades', to: '/features/agents' },
	{ title: 'Accessibilty Improvements', to: '/features/agents' },
];

const blogDropdown = [
	{ title: 'Mission & Vision', to: '/blog' },
	{ title: 'Our Values', to: '/blog/market-trends' },
	{ title: 'Our Team', to: '/blog/buying-tips' },
	{ title: 'The Kizush Difference', to: '/blog/selling-tips' },
	{ title: 'Testimonials', to: '/blog/selling-tips' },
	{ title: 'Careers', to: '/blog/selling-tips' },
];

export default function Navbar() {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const [activeDropdown, setActiveDropdown] = useState(null);

	// Refs for the dropdown containers
	const featuresRef = useRef(null);
	const blogRef = useRef(null);

	// Function to handle mouse enter for desktop dropdowns
	const handleMouseEnter = (dropdown) => {
		setActiveDropdown(dropdown);
	};

	// Function to handle mouse leave for desktop dropdowns
	const handleMouseLeave = () => {
		setActiveDropdown(null);
	};

	const toggleDropdown = (dropdown) => {
		if (activeDropdown === dropdown) {
			setActiveDropdown(null);
		} else {
			setActiveDropdown(dropdown);
		}
	};

	const topLineVariants = {
		closed: { rotate: 0, translateY: 0 },
		open: { rotate: 45, translateY: 10 },
	};

	const middleLineVariants = {
		closed: { opacity: 1 },
		open: { opacity: 0 },
	};

	const bottomLineVariants = {
		closed: { rotate: 0, translateY: 0 },
		open: { rotate: -45, translateY: -10 },
	};

	// Handle click outside to close dropdown
	useEffect(() => {
		function handleClickOutside(event) {
			if (
				featuresRef.current &&
				!featuresRef.current.contains(event.target) &&
				blogRef.current &&
				!blogRef.current.contains(event.target)
			) {
				setActiveDropdown(null);
			}
		}

		document.addEventListener('mousedown', handleClickOutside);
		return () => {
			document.removeEventListener('mousedown', handleClickOutside);
		};
	}, []);

	return (
		<nav className='sticky top-0 border-b bg-white z-50'>
			<div className='mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8'>
				{/* Logo */}
				<Link
					path='/'
					className='gap-2'>
					<div className='w-40 bg-red-950'>
						<img
							src='/medias/logo.jpeg'
							alt='kizush_logo'
							className='w-full h-auto'></img>
					</div>
				</Link>

				{/* Desktop Navigation */}
				<div className='hidden items-center gap-8 md:flex'>
					<Link
						to='/'
						className='text-sm font-medium text-gray-700 hover:text-orange-600'>
						Home
					</Link>
					{/* Features Dropdown */}
					<div
						ref={featuresRef}
						className='relative'
						onMouseEnter={() => handleMouseEnter('features')}
						onMouseLeave={handleMouseLeave}>
						<button
							onClick={() => toggleDropdown('features')}
							className='flex items-center gap-1 text-sm font-medium text-gray-700 hover:text-orange-600 transition-colors'>
							Our Services
							<KeyboardArrowDownIcon
								className={cn(
									'transition-transform duration-300',
									activeDropdown === 'features' ? 'rotate-180' : ''
								)}
								style={{ fontSize: 18 }}
							/>
						</button>
						<AnimatePresence>
							{activeDropdown === 'features' && (
								<motion.div
									className='absolute left-0 top-full z-[100] mt-2 w-56 rounded-md bg-white py-4 shadow-lg ring-1 ring-black ring-opacity-5'
									initial={{ opacity: 0, y: -10 }}
									animate={{ opacity: 1, y: 0 }}
									exit={{ opacity: 0, y: -10 }}
									transition={{ duration: 0.2 }}>
									{featuresDropdown.map((item) => (
										<Link
											key={item.to}
											to={item.to}
											className='block px-4 py-2 text-sm mt-2 text-gray-700 hover:bg-orange-50 hover:text-orange-600 transition-colors'
											onClick={() => setActiveDropdown(null)}>
											{item.title}
										</Link>
									))}
								</motion.div>
							)}
						</AnimatePresence>
					</div>
					<Link
						to='/project'
						className='text-sm font-medium text-gray-700 hover:text-orange-600'>
						Projects
					</Link>
					<Link
						to='/process'
						className='text-sm font-medium text-gray-700 hover:text-orange-600'>
						Our Process
					</Link>

					{/* Blog Dropdown */}
					<div
						ref={blogRef}
						className='relative'
						onMouseEnter={() => handleMouseEnter('blog')}
						onMouseLeave={handleMouseLeave}>
						<button
							onClick={() => toggleDropdown('blog')}
							className='flex items-center gap-1 text-sm font-medium text-gray-700 hover:text-orange-600 transition-colors'>
							About Us
							<KeyboardArrowDownIcon
								className={cn(
									'transition-transform duration-300',
									activeDropdown === 'blog' ? 'rotate-180' : ''
								)}
								style={{ fontSize: 18 }}
							/>
						</button>
						<AnimatePresence>
							{activeDropdown === 'blog' && (
								<motion.div
									className='absolute left-0 top-full z-[100] mt-2 w-48 rounded-md bg-white py-2 shadow-lg ring-1 ring-black ring-opacity-5'
									initial={{ opacity: 0, y: -10 }}
									animate={{ opacity: 1, y: 0 }}
									exit={{ opacity: 0, y: -10 }}
									transition={{ duration: 0.2 }}>
									{blogDropdown.map((item) => (
										<Link
											key={item.to}
											to={item.to}
											className='block px-4 py-2 text-sm text-gray-700 hover:bg-orange-50 hover:text-orange-600 transition-colors'
											onClick={() => setActiveDropdown(null)}>
											{item.title}
										</Link>
									))}
								</motion.div>
							)}
						</AnimatePresence>
					</div>

					<Link
						to='/resource'
						className='text-sm font-medium text-gray-700 hover:text-orange-600'>
						Resources
					</Link>
				</div>

				{/* Auth Buttons */}
				<div className='hidden items-center gap-4 md:flex'>
					<Link
						to='/login'
						className='text-sm font-medium text-orange-600 hover:text-orange-700 transition-colors'>
						Log in
					</Link>
					<Link
						to='/contact'
						className='rounded-md bg-primary px-4 py-2 text-sm font-medium text-white hover:bg-orange-700 transition-colors'>
						Contact Us
					</Link>
				</div>

				{/* Mobile menu button */}
				<MenuButton
					isMenuOpen={isMenuOpen}
					setIsMenuOpen={setIsMenuOpen}
					topLineVariants={topLineVariants}
					middleLineVariants={middleLineVariants}
					bottomLineVariants={bottomLineVariants}
				/>
			</div>

			{/* Mobile Navigation */}
			<AnimatePresence>
				{isMenuOpen && (
					<motion.div
						className='fixed left-0 right-0 top-[72px] z-[90] bg-white px-4 pb-6 shadow-lg md:hidden'
						initial={{ opacity: 0, height: 0 }}
						animate={{ opacity: 1, height: 'auto' }}
						exit={{ opacity: 0, height: 0 }}
						transition={{ duration: 0.3 }}>
						<div className='flex flex-col space-y-4 pt-4'>
							<Link
								to='/'
								className='text-base font-medium text-gray-700 hover:text-orange-600 transition-colors'
								onClick={() => setIsMenuOpen(false)}>
								Home
							</Link>

							{/* Mobile Features Dropdown */}
							<div>
								<button
									onClick={() => toggleDropdown('features-mobile')}
									className='flex w-full items-center justify-between text-base font-medium text-gray-700 hover:text-orange-600 transition-colors'>
									Features
									<KeyboardArrowDownIcon
										className={cn(
											'transition-transform duration-300',
											activeDropdown === 'features-mobile' ? 'rotate-180' : ''
										)}
									/>
								</button>
								<AnimatePresence>
									{activeDropdown === 'features-mobile' && (
										<motion.div
											className='mt-2 space-y-2 pl-4'
											initial={{ opacity: 0, height: 0 }}
											animate={{ opacity: 1, height: 'auto' }}
											exit={{ opacity: 0, height: 0 }}
											transition={{ duration: 0.2 }}>
											{featuresDropdown.map((item) => (
												<Link
													key={item.to}
													to={item.to}
													className='block py-2 text-sm text-gray-600 hover:text-orange-600 transition-colors'
													onClick={() => setIsMenuOpen(false)}>
													{item.title}
												</Link>
											))}
										</motion.div>
									)}
								</AnimatePresence>
							</div>

							{/* Mobile Blog Dropdown */}
							<div>
								<button
									onClick={() => toggleDropdown('blog-mobile')}
									className='flex w-full items-center justify-between text-base font-medium text-gray-700 hover:text-orange-600 transition-colors'>
									Blog
									<KeyboardArrowDownIcon
										className={cn(
											'transition-transform duration-300',
											activeDropdown === 'blog-mobile' ? 'rotate-180' : ''
										)}
									/>
								</button>
								<AnimatePresence>
									{activeDropdown === 'blog-mobile' && (
										<motion.div
											className='mt-2 space-y-2 pl-4'
											initial={{ opacity: 0, height: 0 }}
											animate={{ opacity: 1, height: 'auto' }}
											exit={{ opacity: 0, height: 0 }}
											transition={{ duration: 0.2 }}>
											{blogDropdown.map((item) => (
												<Link
													key={item.to}
													to={item.to}
													className='block py-2 text-sm text-gray-600 hover:text-orange-600 transition-colors'
													onClick={() => setIsMenuOpen(false)}>
													{item.title}
												</Link>
											))}
										</motion.div>
									)}
								</AnimatePresence>
							</div>

							<Link
								to='/contact'
								className='text-base font-medium text-gray-700 hover:text-orange-600 transition-colors'
								onClick={() => setIsMenuOpen(false)}>
								Contact Us
							</Link>

							<div className='flex flex-col space-y-3 pt-4'>
								<Link
									to='/login'
									className='text-center text-lg font-medium text-orange-600 hover:text-orange-700 transition-colors'
									onClick={() => setIsMenuOpen(false)}>
									Log in
								</Link>
								<Link
									to='/signup'
									className='rounded-md bg-primary px-4 py-2 text-center text-base font-medium text-white hover:bg-orange-700 transition-colors'
									onClick={() => setIsMenuOpen(false)}>
									Sign up
								</Link>
							</div>
						</div>
					</motion.div>
				)}
			</AnimatePresence>
		</nav>
	);
}

const MenuButton = ({
	isMenuOpen,
	setIsMenuOpen,
	topLineVariants,
	middleLineVariants,
	bottomLineVariants,
}) => {
	return (
		<motion.button
			className='md:hidden relative right-0 z-50 w-12 h-12 bg-white rounded-full shadow-lg focus:outline-none focus:ring-2 focus:ring-orange-600 focus:ring-opacity-50'
			onClick={() => setIsMenuOpen(!isMenuOpen)}
			aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
			whileTap={{ scale: 0.95 }}
			whileHover={{ scale: 1.05 }}>
			<motion.span
				className='absolute w-6 h-0.5 bg-gray-600 rounded-full left-3 top-4'
				variants={topLineVariants}
				animate={isMenuOpen ? 'open' : 'closed'}
				transition={{ duration: 0.3 }}
			/>
			<motion.span
				className='absolute w-5 h-0.5 bg-gray-600 rounded-full left-3 top-6'
				variants={middleLineVariants}
				animate={isMenuOpen ? 'open' : 'closed'}
				transition={{ duration: 0.3 }}
			/>
			<motion.span
				className='absolute w-6 h-0.5 bg-gray-600 rounded-full left-3 bottom-4'
				variants={bottomLineVariants}
				animate={isMenuOpen ? 'open' : 'closed'}
				transition={{ duration: 0.3 }}
			/>
			<motion.div
				className='absolute inset-0 bg-blue-500 rounded-full'
				initial={{ scale: 0, opacity: 0 }}
				animate={
					isMenuOpen ? { scale: 1, opacity: 0.1 } : { scale: 0, opacity: 0 }
				}
				transition={{ duration: 0.3 }}
			/>
		</motion.button>
	);
};
