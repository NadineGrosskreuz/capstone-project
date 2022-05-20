/* eslint-disable react/jsx-child-element-spacing */
import React from 'react';
import useStore from '../useStore';
import { useForm } from 'react-hook-form';
import { FormStyled } from '../UI/Form/Form.styled';
import { Fieldset } from '../UI/Form/Fieldset.styled';
import { Legend } from '../UI/Form/Legend.styled';
import { Input } from '../UI/Form/Input.styled';
import { Label } from '../UI/Form/Label.styled';
import { Button } from '../UI/Button.styled';
import { Error } from '../UI/Form/Error.styled';

export default function Form() {
	const addEntry = useStore(state => state.addEntry);
	const modalShow = useStore(state => state.modalShow);
	const onSubmit = (data, event) => {
		addEntry(data);
		event.target.reset();
		modalShow();
	};

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();

	return (
		<FormStyled onSubmit={handleSubmit(onSubmit)}>
			<Fieldset>
				<Legend>Kategorie</Legend>
				<Input
					type="radio"
					value="Flohmarkt"
					id="kategorie_flohmarkt"
					{...register('category')}
				/>
				<Label htmlFor="kategorie_flohmarkt" variant="radio">
					Flohmarkt
				</Label>
				<Input type="radio" value="Laden" id="kategorie_laden" {...register('category')} />
				<Label htmlFor="kategorie_laden" variant="radio">
					Laden
				</Label>
			</Fieldset>

			<Fieldset>
				<Label htmlFor="name" variant="bold">
					Name (erforderlich)
				</Label>
				<Input
					aria-invalid={errors.name ? 'true' : 'false'}
					type="text"
					id="name"
					variant="text"
					{...register('name', { required: true, maxLength: 50 })}
				/>
				{errors.name && errors.name.type === 'required' && (
					<Error>Bitte trage einen Namen ein!</Error>
				)}
				{errors.name && errors.name.type === 'maxLength' && (
					<Error>Bitte verwende weniger Zeichen!</Error>
				)}
			</Fieldset>

			<Fieldset>
				<Label htmlFor="adresse" variant="bold">
					Adresse
				</Label>
				<Input
					aria-invalid={errors.name ? 'true' : 'false'}
					type="text"
					id="adresse"
					variant="text"
					{...register('address', { maxLength: 150 })}
				/>
				{errors.name && errors.name.type === 'maxLength' && (
					<Error>Bitte verwende weniger Zeichen</Error>
				)}
			</Fieldset>

			<Fieldset>
				<Legend>Produkte</Legend>
				<Input
					type="checkbox"
					value="Kleidung"
					id="produkte_kleidung"
					{...register('products')}
				/>
				<Label htmlFor="produkte_kleidung" variant="checkbox">
					Kleidung
				</Label>
				<Input type="checkbox" value="Deko" id="produkte_deko" {...register('products')} />
				<Label htmlFor="produkte_deko" variant="checkbox">
					Deko
				</Label>
				<Input
					type="checkbox"
					value="Haushaltswaren"
					id="produkte_haushaltswaren"
					{...register('products')}
				/>
				<Label htmlFor="produkte_haushaltswaren" variant="checkbox">
					Haushaltswaren
				</Label>
				<Input
					type="checkbox"
					value="Medien"
					id="produkte_medien"
					{...register('products')}
				/>
				<Label htmlFor="produkte_medien" variant="checkbox">
					Medien
				</Label>
				<Input
					type="checkbox"
					value="Antiquitäten"
					id="produkte_antiquitäten"
					{...register('products')}
				/>
				<Label htmlFor="produkte_antiquitäten" variant="checkbox">
					Antiquitäten
				</Label>
				<Input
					type="checkbox"
					value="Spielsachen"
					id="produkte_spielsachen"
					{...register('products')}
				/>
				<Label htmlFor="produkte_spielsachen" variant="checkbox">
					Spielsachen
				</Label>
			</Fieldset>

			<Fieldset>
				<Label htmlFor="information" variant="bold">
					Weitere Infos
				</Label>
				<Input
					aria-invalid={errors.name ? 'true' : 'false'}
					type="text"
					id="information"
					variant="text"
					{...register('information', { maxLength: 300 })}
				/>
				{errors.name && errors.name.type === 'maxLength' && (
					<Error>Bitte verwende weniger Zeichen!</Error>
				)}
			</Fieldset>

			<Fieldset>
				<Legend>Schon besucht?</Legend>
				<Input type="radio" value="ja" id="besucht_ja" {...register('visited')} />
				<Label htmlFor="besucht_ja" variant="radio">
					Ich war schon da
				</Label>
				<Input type="radio" value="nein" id="besucht_nein" {...register('visited')} />
				<Label htmlFor="besucht_nein" variant="radio">
					Ich war noch nicht da
				</Label>
			</Fieldset>

			<Fieldset>
				<Legend>Bewertung</Legend>
				<Input type="radio" value="mag ich" id="bewertung_gut" {...register('rating')} />
				<Label htmlFor="bewertung_gut" variant="radio">
					Mag ich!
				</Label>
				<Input
					type="radio"
					value="nicht mein Fall"
					id="bewertung_schlecht"
					{...register('rating')}
				/>
				<Label htmlFor="bewertung_schlecht" variant="radio">
					Nicht mein Fall!
				</Label>
			</Fieldset>

			<Button type="submit" variant="addentry">
				Eintrag hinzufügen
			</Button>
		</FormStyled>
	);
}
