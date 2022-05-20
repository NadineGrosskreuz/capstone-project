import create from 'zustand';
import { persist } from 'zustand/middleware';
import { nanoid } from 'nanoid';

const useStore = create(
	persist(set => ({
		modalState: false,
		modalHide: () => {
			set({ modalState: false });
		},
		modalShow: () => {
			set({ modalState: true });
		},
		entries: [
			{
				id: '1',
				category: 'Flohmarkt',
				name: 'Faust',
				address: 'Zur Bettfedernfabrik 3, 30451 Hannover',
				products: 'Kleidung, Deko, Medien, Spielsachen',
				information: 'Stadtteil-Flohmarkt, tolle Atmosphäre',
				visited: 'Ich war schon da',
				rating: 'Mag ich!',
			},

			{
				id: '2',
				category: 'Laden',
				name: 'Frau Schröder',
				address: 'Kötnerholzweg 33A, 30451 Hannover',
				products: 'Kleidung',
				information:
					'Tolle Beratung durch die nette Inhaberin, viele schöne Vintage-Teile zu moderaten Preisen',
				visited: 'Ich war schon da',
				rating: 'Mag ich!',
			},

			{
				id: '3',
				category: 'Flohmarkt',
				name: 'Altstadt',
				address: 'Am Hohen Ufer 3, 30159 Hannover',
				products: 'Deko, Medien, Antiquitäten',
				information:
					'Der bekannteste Flohmarkt Hannovers, von der Auswahl her aber leider nicht meins',
				visited: 'Ich war schon da',
				rating: 'Nicht mein Fall!',
			},
		],

		addEntry: entry => {
			set(state => {
				return {
					entries: [
						...state.entries,
						{
							id: nanoid(),
							category: entry.category,
							name: entry.name,
							address: entry.address,
							products: entry.products,
							information: entry.information,
							visited: entry.visited,
							rating: entry.rating,
						},
					],
				};
			});
		},

		deleteEntry: id => {
			set(state => {
				return {
					entries: state.entries.filter(entry => entry.id !== id),
				};
			});
		},
	}))
);
export default useStore;
