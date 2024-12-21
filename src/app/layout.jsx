import './globals.scss';

export const metadata = {
	title: 'Resume',
	description: 'Resume',
};

export default function RootLayout({ children }) {
	return (
		<html lang='en'>
			<body>{children}</body>
		</html>
	);
}
