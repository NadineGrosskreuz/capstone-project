import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Footer from './Footer';

jest.mock('next/router', () => ({
	useRouter() {
		return {
			route: '/',
			pathname: '',
			query: '',
			asPath: '',
		};
	},
}));

describe('Footer', () => {
	it('renders four a-tags', () => {
		render(<Footer />);
		const navElement = screen.getAllByRole('link');
		expect(navElement.length).toBe(4);
	});
});
