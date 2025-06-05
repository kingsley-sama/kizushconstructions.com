import React from 'react';
import { Box, Typography, Grid, Container, useTheme } from '@mui/material';
import {
	Accessibility,
	SupportAgent,
	Shield,
	Balance,
	TrendingUp,
	Security,
	Warning,
	AccountBalance,
} from '@mui/icons-material';

const ValueCard = ({ icon, title, description }) => {
	const theme = useTheme();

	return (
		<Box
			bgcolor=''
			textAlign='center'
			sx={{ mb: 4 }}>
			<Box
				sx={{
					display: 'flex',
					justifyContent: 'center',
					mb: 2,
				}}>
				{icon}
			</Box>
			<Typography
				variant='h5'
				className='text-primary'
				component='h3'
				gutterBottom
				sx={{
					fontWeight: 500,
					color: theme.palette.text.primary,
					mb: 2,
				}}>
				{title}
			</Typography>
			<Typography
				className='text-primary'
				variant='body1'
				color='text.secondary'
				sx={{
					lineHeight: 1.6,
					px: 2,
				}}>
				{description}
			</Typography>
		</Box>
	);
};

const KizushValues = () => {
	const iconStyle = { fontSize: 50, color: 'primary' };

	const valuesData = [
		{
			icon: <Accessibility sx={iconStyle} />,
			title: 'Character',
			description:
				'Great people start with great character. We seek to partner with people who are humble, respectful, motivated, positive, caring, team players and have high integrity.',
		},
		{
			icon: <SupportAgent sx={iconStyle} />,
			title: 'Customer Service',
			description:
				'We are dedicated to providing exceptional customer experience, building trust and confidence while persevering in every effort to achieve the "wow" factor.',
		},
		{
			icon: <Shield sx={iconStyle} />,
			title: 'Excellence',
			description:
				'We aspire to exceed the ordinary, communicate effectively, diligently track and measure performance, and work together for a common goal of excellence.',
		},
		{
			icon: <Balance sx={iconStyle} />,
			title: 'Balance',
			description:
				'We recognize the importance of family, encouraging and accommodating a healthy balance for all staff between hard work and their home life.',
		},
		{
			icon: <TrendingUp sx={iconStyle} />,
			title: 'Betterment',
			description:
				'We encourage team members to set goals and continuously pursue self-improvement through education, training, and professional development.',
		},
		{
			icon: <Security sx={iconStyle} />,
			title: 'Safety',
			description:
				'We encourage, enable, and support a safe work environment prioritizing the health, care and safety of every individual on our projects.',
		},
		{
			icon: <Warning sx={iconStyle} />,
			title: 'Risk Management',
			description:
				'We approach all actions and decisions with a perspective to minimize and manage risks, ensuring the protection of all stakeholders.',
		},
		{
			icon: <AccountBalance sx={iconStyle} />,
			title: 'Fiscally Responsible',
			description:
				'We provide sound governance and adhere to effective systems, goal setting, and sound financial decision making.',
		},
	];

	return (
		<Container
			maxWidth='lg'
			sx={{ py: 8 }}>
			<Typography
				className='text-[var(--primary)]'
				variant='h2'
				component='h1'
				align='center'
				gutterBottom
				sx={{
					mb: 8,

					fontWeight: 500,
				}}>
				Our Values
			</Typography>

			<Grid
				container
				spacing={4}>
				{valuesData.map((value, index) => (
					<Grid
						item
						xs={12}
						sm={6}
						md={3}
						key={index}>
						<ValueCard
							icon={value.icon}
							title={value.title}
							description={value.description}
						/>
					</Grid>
				))}
			</Grid>
		</Container>
	);
};

export default KizushValues;
