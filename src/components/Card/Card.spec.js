import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Card from './Card';
import { userEvent } from '@storybook/testing-library';

describe('Card', () => {
	it('renders category, name, address, the "Mehr anzeigen" and the heart icon button only', () => {
		render(
			<Card
				id="1"
				category="Flohmarkt"
				name="Faust"
				address="Zur Bettfedernfabrik 3, 30451 Hannover"
			/>
		);

		const category = screen.getByText(/Flohmarkt/i);
		const name = screen.getByRole('heading', { name: /Faust/i });
		const address = screen.getByText(/Zur Bettfedernfabrik 3, 30451 Hannover/i);
		const buttonShowMore = screen.getByRole('button', { name: /Mehr anzeigen/i });
		const buttonHeart = screen.getByLabelText(/zu favoriten hinzufügen/i);

		expect(category).toBeInTheDocument();
		expect(name).toBeInTheDocument();
		expect(address).toBeInTheDocument();
		expect(buttonShowMore).toBeInTheDocument();
		expect(buttonHeart).toBeInTheDocument();
	});

	it('renders the missing information and the "Löschen" and "Ändern" button after button click', () => {
		render(
			<Card
				id="1"
				category="Flohmarkt"
				name="Faust"
				address="Zur Bettfedernfabrik 3, 30451 Hannover"
				information="Stadtteil-Flohmarkt, tolle Atmosphäre"
				visited="Ich war schon da"
				rating="Mag ich!"
			/>
		);

		const noInformation = screen.queryByText(/Stadtteil-Flohmarkt, tolle Atmosphäre/i);
		const noVisited = screen.queryByText(/Ich war schon da/i);
		const noRating = screen.queryByText(/Mag ich!/i);

		expect(noInformation).not.toBeInTheDocument();
		expect(noVisited).not.toBeInTheDocument();
		expect(noRating).not.toBeInTheDocument();

		const button2 = screen.getByRole('button', { name: /Mehr anzeigen/ });
		userEvent.click(button2);

		const information = screen.getByText(/Stadtteil-Flohmarkt, tolle Atmosphäre/i);
		const visited = screen.getByText(/Ich war schon da/i);
		const rating = screen.getByText(/Mag ich!/i);
		const deleteButton = screen.getByRole('button', { name: /Löschen/i });
		const changeButton = screen.getByRole('button', { name: /Ändern/ });

		expect(information).toBeInTheDocument();
		expect(visited).toBeInTheDocument();
		expect(rating).toBeInTheDocument();
		expect(deleteButton).toBeInTheDocument();
		expect(changeButton).toBeInTheDocument();
	});
});
