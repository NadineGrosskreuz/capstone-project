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

		bookmarkTrue: id => {
			set(state => ({
				entries: state.entries.map(entry =>
					entry.id === id ? { ...entry, bookmark: true } : entry
				),
			}));
		},
		bookmarkFalse: id => {
			set(state => ({
				entries: state.entries.map(entry =>
					entry.id === id ? { ...entry, bookmark: false } : entry
				),
			}));
		},

		entries: [
			{
				id: '1',
				category: 'Flohmarkt',
				name: 'Faust',
				address: 'Zur Bettfedernfabrik 3, 30451 Hannover',
				products: ['Kleidung', 'Deko', 'Medien', 'Spielsachen'],
				information: 'Stadtteil-Flohmarkt, tolle Atmosphäre',
				visited: 'Ich war schon da',
				rating: 'Mag ich!',
				edit: false,
				bookmark: true,
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
				edit: false,
				bookmark: true,
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
				edit: false,
				bookmark: false,
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
							edit: false,
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

		editEntry: id => {
			set(state => {
				return {
					entries: state.entries.map(entry =>
						entry.id === id
							? {
									...entry,
									edit: !entry.edit,
							  }
							: entry
					),
				};
			});
		},

		controlEntry: (id, data) => {
			set(state => {
				return {
					entries: state.entries.map(entry =>
						entry.id === id
							? {
									...entry,
									...data,
							  }
							: entry
					),
				};
			});
		},

		fetchAddressData: async addressValue => {
			const url = `https://geocode.maps.co/search?q={address}`;
			try {
				const response = await fetch(url);
				const data = await response.json();
				set(state => {
					return {
						entries: [...state.entries, { data, addressValue }],
					};
				});
			} catch (error) {
				console.error(`Ooops we had an error: ${error}`);
			}
		},
	}))
);

export default useStore;
