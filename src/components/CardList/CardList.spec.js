import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import CardList from './CardList';

describe('CardList', () => {
	it('renders three entries each with the category, the name and the address', () => {
		render(
			<CardList
				entries={[
					{
						id: '1',
						category: 'Flohmarkt',
						name: 'Faust',
						address: 'Zur Bettfedernfabrik 3, 30451 Hannover',
					},

					{
						id: '2',
						category: 'Laden',
						name: 'Frau Schröder',
						address: 'Kötnerholzweg 33A, 30451 Hannover',
					},

					{
						id: '3',
						category: 'Flohmarkt',
						name: 'Altstadt',
						address: 'Am Hohen Ufer 3, 30159 Hannover',
					},
				]}
			/>
		);

		const category = screen.getAllByText(/Flohmarkt|Laden/i);

		const name = screen.getAllByRole('heading', { level: 2 });

		const address1 = screen.getByText(/Zur Bettfedernfabrik 3, 30451 Hannover/i);
		const address2 = screen.getByText(/Kötnerholzweg 33A, 30451 Hannover/i);
		const address3 = screen.getByText(/Am Hohen Ufer 3, 30159 Hannover/i);

		expect(category.length).toBe(3);

		expect(name[0]).toBeInTheDocument();
		expect(name[1]).toBeInTheDocument();
		expect(name[2]).toBeInTheDocument();

		expect(address1).toBeInTheDocument();
		expect(address2).toBeInTheDocument();
		expect(address3).toBeInTheDocument();
	});
});
