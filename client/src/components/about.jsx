import { motion } from 'framer-motion';

export default function AboutSection({
	title,
	subtitle,
	description,
	containerClass = '',
}) {
	return (
		<section className={`py-16 md:py-24 bg-[#f5f5f5] ${containerClass}`}>
			<div className='container mx-auto px-4 max-w-4xl text-center'>
				<motion.h1
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5, delay: 0.2 }}
					className='text-4xl md:text-5xl lg:text-6xl font-serif text-primary mb-6'>
					{title}
				</motion.h1>
				<motion.p
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5 }}
					className='text-sm tracking-[0.2em] uppercase text-primary mb-4'>
					{subtitle}
				</motion.p>
				<motion.p
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5, delay: 0.4 }}
					className='text-lg md:text-xl text-primary leading-relaxed max-w-3xl mx-auto'>
					{description}
				</motion.p>
			</div>
		</section>
	);
}
