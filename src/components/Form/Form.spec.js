import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Form from '../Form/Form';

describe('Form', () => {
	it('renders six radio buttons, three input fields and one button', () => {
		render(<Form />);
		const fleaMarket = screen.getByLabelText(/flohmarkt/i);
		const shop = screen.getByLabelText(/laden/i);
		const name = screen.getByLabelText(/name/i);
		const address = screen.getByLabelText(/adresse/i);
		const information = screen.getByLabelText(/weitere infos/i);
		const visited = screen.getByLabelText(/ich war schon da/i);
		const notVisited = screen.getByLabelText(/ich war noch nicht da/i);
		const like = screen.getByLabelText(/mag ich!/i);
		const dislike = screen.getByLabelText(/nicht mein fall!/i);
		const button = screen.getByRole('button', { name: /Eintrag hinzufügen/i });

		expect(fleaMarket).toBeInTheDocument();
		expect(shop).toBeInTheDocument();
		expect(name).toBeInTheDocument();
		expect(address).toBeInTheDocument();
		expect(information).toBeInTheDocument();
		expect(visited).toBeInTheDocument();
		expect(notVisited).toBeInTheDocument();
		expect(like).toBeInTheDocument();
		expect(dislike).toBeInTheDocument();
		expect(button).toBeInTheDocument();
	});
});
