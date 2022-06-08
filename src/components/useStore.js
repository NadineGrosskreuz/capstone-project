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
				information: 'Mein liebster Stadtteil-Flohmarkt mit einer tollen Atmosphäre!',
				visited: 'Ich war schon da',
				rating: 'Mag ich!',
				edit: false,
				bookmark: true,
				position: [52.3760437, 9.7104938],
			},
			{
				id: '2',
				category: 'Laden',
				name: 'Humana',
				address: 'Friedrichstraße 148, 10117 Berlin',
				information: 'Humana ist meistens super. Hier muss ich unbedingt noch hin!',
				visited: 'Ich war noch nicht da',
				rating: '',
				edit: false,
				bookmark: false,
				position: [52.5195079, 13.3881322],
			},
			{
				id: '3',
				category: 'Laden',
				name: 'Frau Schröder',
				address: 'Kötnerholzweg 33A, 30451 Hannover',
				information:
					'Tolle Beratung durch die nette Inhaberin, viele schöne Vintage-Teile zu moderaten Preisen.',
				visited: 'Ich war schon da',
				rating: 'Mag ich!',
				edit: false,
				bookmark: true,
				position: [52.3732052, 9.7051511],
			},
			{
				id: '4',
				category: 'Laden',
				name: 'Pick & Weight',
				address: 'Ehrenstraße 60-64, 50672 Köln',
				information:
					'Schon öfter von gehört, muss ich mir mal anschauen beim nächsten Besuch in Köln.',
				visited: 'Ich war noch nicht da',
				rating: '',
				edit: false,
				bookmark: false,
				position: [50.9384025, 6.9422052],
			},
			{
				id: '5',
				category: 'Flohmarkt',
				name: 'Altstadt',
				address: 'Am Hohen Ufer 3, 30159 Hannover',
				information:
					'Der bekannteste Flohmarkt Hannovers, von der Auswahl her aber leider nicht mein Fall.',
				visited: 'Ich war schon da',
				rating: 'Nicht mein Fall!',
				edit: false,
				bookmark: false,
				position: [52.372612, 9.7308621],
			},
			{
				id: '6',
				category: 'Flohmarkt',
				name: 'Flohschanze',
				address: 'Neuer Kamp 30, 20357 Hamburg',
				information:
					'Ein schöner Flohmarkt mitten im Kiez. Immer wieder einen Besuch wert!',
				visited: 'Ich war schon da',
				rating: 'Mag ich!',
				edit: false,
				bookmark: true,
				position: [53.5581388, 9.9679333],
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
