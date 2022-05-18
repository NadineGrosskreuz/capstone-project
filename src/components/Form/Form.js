/* eslint-disable react/jsx-child-element-spacing */
import React from 'react';
import { useForm } from 'react-hook-form';

export default function Form({ onAddEntry }) {
	const onSubmit = (data, event) => {
		onAddEntry(data);
		event.target.reset();
	};

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();

	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<fieldset>
				<legend>Kategorie</legend>
				<input
					type="radio"
					value="Flohmarkt"
					name="category"
					id="kategorie_flohmarkt"
					{...register('category')}
				/>
				<label htmlFor="kategorie_flohmarkt">Flohmarkt</label>
				<input
					type="radio"
					value="Laden"
					name="category"
					id="kategorie_laden"
					{...register('category')}
				/>
				<label htmlFor="kategorie_laden">Laden</label>
			</fieldset>

			<fieldset>
				<label htmlFor="name">Name (erforderlich)</label>
				<input
					aria-invalid={errors.name ? 'true' : 'false'}
					type="text"
					name="name"
					id="name"
					{...register('name', { required: true, maxLength: 50 })}
				/>
				{errors.name && errors.name.type === 'required' && (
					<span>Bitte trage einen Namen ein</span>
				)}
				{errors.name && errors.name.type === 'maxLength' && (
					<span>Bitte verwende weniger Zeichen</span>
				)}
			</fieldset>

			<fieldset>
				<label htmlFor="adresse">Adresse</label>
				<input
					type="text"
					name="address"
					id="adresse"
					{...register('address', { maxLength: 150 })}
				/>
				{errors.name && errors.name.type === 'maxLength' && (
					<span>Bitte verwende weniger Zeichen</span>
				)}
			</fieldset>

			<fieldset>
				<legend>Produkte</legend>
				<input
					type="checkbox"
					value="Kleidung"
					name="products"
					id="produkte_kleidung"
					{...register('products')}
				/>
				<label htmlFor="produkte_kleidung">Kleidung</label>
				<input
					type="checkbox"
					value="Deko"
					name="products"
					id="produkte_deko"
					{...register('products')}
				/>
				<label htmlFor="produkte_deko">Deko</label>
				<input
					type="checkbox"
					value="Haushaltswaren"
					name="product_haushaltswaren"
					id="produkte_haushaltswaren"
					{...register('products')}
				/>
				<label htmlFor="produkte_haushaltswaren">Haushaltswaren</label>
				<input
					type="checkbox"
					value="Medien"
					name="product_medien"
					id="produkte_medien"
					{...register('products')}
				/>
				<label htmlFor="produkte_medien">Medien</label>
				<input
					type="checkbox"
					value="Antiquitäten"
					name="products"
					id="produkte_antiquitäten"
					{...register('products')}
				/>
				<label htmlFor="produkte_antiquitäten">Antiquitäten</label>
				<input
					type="checkbox"
					value="Spielsachen"
					name="products"
					id="produkte_spielsachen"
					{...register('products')}
				/>
				<label htmlFor="produkte_spielsachen">Spielsachen</label>
			</fieldset>

			<fieldset>
				<legend>Weitere Infos</legend>
				<label htmlFor="information">Weitere Infos</label>
				<input
					type="text"
					name="information"
					id="information"
					{...register('information', { maxLength: 300 })}
				/>
				{errors.name && errors.name.type === 'maxLength' && (
					<span>Bitte verwende weniger Zeichen</span>
				)}
			</fieldset>

			<fieldset>
				<legend>Schon besucht?</legend>
				<input
					type="radio"
					value="ja"
					name="visited"
					id="besucht_ja"
					{...register('visited')}
				/>
				<label htmlFor="besucht_ja">Ich war schon da</label>
				<input
					type="radio"
					value="nein"
					name="visited"
					id="besucht_nein"
					{...register('visited')}
				/>
				<label htmlFor="besucht_nein">Ich war noch nicht da</label>
			</fieldset>

			<fieldset>
				<legend>Bewertung</legend>
				<input
					type="radio"
					value="mag ich"
					name="rating"
					id="bewertung_gut"
					{...register('rating')}
				/>
				<label htmlFor="bewertung_gut">Mag ich!</label>
				<input
					type="radio"
					value="nicht mein Fall"
					name="rating"
					id="bewertung_schlecht"
					{...register('rating')}
				/>
				<label htmlFor="bewertung_schlecht">Nicht mein Fall!</label>
			</fieldset>

			<button type="submit">Eintrag hinzufügen</button>
		</form>
	);
}
