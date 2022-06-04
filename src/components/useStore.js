import create from 'zustand';
import { persist } from 'zustand/middleware';
import { nanoid } from 'nanoid';

const useStore = create(
	persist(set => ({
		modalState: null,
		modalMessages: {
			sent: 'Dein Eintrag wurde hinzugefügt',
			delete: 'Dein Eintrag wurde gelöscht',
			updated: 'Deine Änderungen wurden gespeichert',
		},
		setModalState: modalState => {
			set({ modalState });
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
				information: 'Stadtteil-Flohmarkt, tolle Atmosphäre',
				visited: 'Ich war schon da',
				rating: 'Mag ich!',
				edit: false,
				bookmark: true,
				position: [52.3760437, 9.7104938],
			},

			{
				id: '2',
				category: 'Laden',
				name: 'Frau Schröder',
				address: 'Kötnerholzweg 33A, 30451 Hannover',
				information:
					'Tolle Beratung durch die nette Inhaberin, viele schöne Vintage-Teile zu moderaten Preisen',
				visited: 'Ich war schon da',
				rating: 'Mag ich!',
				edit: false,
				bookmark: true,
				position: [52.3732052, 9.7051511],
			},

			{
				id: '3',
				category: 'Flohmarkt',
				name: 'Altstadt',
				address: 'Am Hohen Ufer 3, 30159 Hannover',
				information:
					'Der bekannteste Flohmarkt Hannovers, von der Auswahl her aber leider nicht meins',
				visited: 'Ich war schon da',
				rating: 'Nicht mein Fall!',
				edit: false,
				bookmark: false,
				position: [52.372612, 9.7308621],
			},
		],

		addEntry: entry => {
			set(state => {
				return {
					entries: [
						...state.entries,
						{
							id: nanoid(),
							edit: false,
							...entry,
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
			const url = `https://geocode.maps.co/search?q=${addressValue}`;
			try {
				const response = await fetch(url);
				const data = await response.json();
				return data;
			} catch (error) {
				console.error(`Ooops we had an error: ${error}`);
			}
		},
	}))
);

export default useStore;
