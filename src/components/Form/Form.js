/* eslint-disable react/jsx-child-element-spacing */
import React, { useEffect } from 'react';
import useStore from '../useStore';
import { useRouter } from 'next/router';
import { useForm } from 'react-hook-form';
import { FormStyled } from '../UI/Form/Form.styled';
import { Fieldset } from '../UI/Form/Fieldset.styled';
import { Legend } from '../UI/Form/Legend.styled';
import { Input } from '../UI/Form/Input.styled';
import { Label } from '../UI/Form/Label.styled';
import { Button } from '../UI/Button/Button.styled';
import { Error } from '../UI/Message/Error.styled';
import { Textarea } from '../UI/Form/Textarea.styled';

export default function Form({ id }) {
	const router = useRouter();
	const addEntry = useStore(state => state.addEntry);
	const setModalState = useStore(state => state.setModalState);
	const controlEntry = useStore(state => state.controlEntry);
	const entries = useStore(state => state.entries);
	const entryToUpdate = entries.find(entry => entry.id === id);
	const editEntry = useStore(state => state.editEntry);
	const fetchAddressData = useStore(state => state.fetchAddressData);
	const {
		register,
		handleSubmit,
		setValue,
		watch,
		reset,
		formState: { errors },
	} = useForm();

	useEffect(() => {
		if (entryToUpdate) {
			setValue('category', entryToUpdate.category);
			setValue('name', entryToUpdate.name);
			setValue('address', entryToUpdate.address);
			setValue('information', entryToUpdate.information);
			setValue('visited', entryToUpdate.visited);
			setValue('rating', entryToUpdate.rating);
			setValue('edit', entryToUpdate.edit);
		}
	}, [entryToUpdate, setValue]);

	const onSubmit = async (data, event) => {
		if (entryToUpdate) {
			const geoData = await fetchAddressData(watch('address'));
			controlEntry(id, {
				...data,
				position: [Number(geoData[0].lat), Number(geoData[0].lon)],
			});
			editEntry(id);
			setModalState('updated');
		} else {
			const geoData = await fetchAddressData(watch('address'));
			addEntry({ ...data, position: [Number(geoData[0].lat), Number(geoData[0].lon)] });
			event.target.reset();
			setModalState('sent');
			reset();
			router.push('/');
		}
	};

	return (
		<FormStyled onSubmit={handleSubmit(onSubmit)}>
			<Fieldset {...register('category')}>
				<Legend>Kategorie</Legend>
				<Input
					type="radio"
					value="Flohmarkt"
					id="kategorie_flohmarkt"
					variant="radio"
					{...register('category')}
				/>
				<Label htmlFor="kategorie_flohmarkt" variant="padding">
					Flohmarkt
				</Label>
				<Input
					type="radio"
					value="Laden"
					id="kategorie_laden"
					variant="radio"
					{...register('category')}
				/>
				<Label htmlFor="kategorie_laden" variant="padding">
					Laden
				</Label>
			</Fieldset>
			<Fieldset
				{...register('name', { required: true, maxLength: 50, pattern: /\S(.*\S)?/ })}
			>
				<Label htmlFor="name" variant="bold">
					Name (erforderlich)
				</Label>
				<Input
					aria-invalid={errors.name ? 'true' : 'false'}
					type="text"
					id="name"
					variant="text"
					{...register('name', { required: true, maxLength: 50, pattern: /\S(.*\S)?/ })}
				/>
				{errors.name && errors.name.type === 'required' && (
					<Error>Bitte trage einen Namen ein!</Error>
				)}
				{errors.name && errors.name.type === 'maxLength' && (
					<Error>Bitte verwende weniger Zeichen!</Error>
				)}
			</Fieldset>
			<Fieldset {...register('address', { maxLength: 150, pattern: /\S(.*\S)?/ })}>
				<Label htmlFor="adresse" variant="bold">
					Adresse (erforderlich)
				</Label>
				<Input
					aria-invalid={errors.name ? 'true' : 'false'}
					type="text"
					id="adresse"
					variant="text"
					{...register('address', {
						required: true,
						maxLength: 150,
						pattern: /\S(.*\S)?/,
					})}
				/>
				{errors.name && errors.name.type === 'required' && (
					<Error>
						Bitte trage eine Adresse ein! Nur die jeweilige Stadt reicht auch aus.
					</Error>
				)}
				{errors.name && errors.name.type === 'maxLength' && (
					<Error>Bitte verwende weniger Zeichen</Error>
				)}
			</Fieldset>

			<Fieldset {...register('information', { maxLength: 300, pattern: /\S(.*\S)?/ })}>
				<Label htmlFor="information" variant="bold">
					Weitere Infos
				</Label>
				<Textarea
					aria-invalid={errors.name ? 'true' : 'false'}
					id="information"
					{...register('information', { maxLength: 700, pattern: /\S(.*\S)?/ })}
				/>
				{errors.name && errors.name.type === 'maxLength' && (
					<Error>Bitte verwende weniger Zeichen!</Error>
				)}
			</Fieldset>
			<Fieldset {...register('visited')}>
				<Legend>Schon besucht?</Legend>
				<Input
					type="radio"
					value="Ich war schon da"
					id="besucht_ja"
					variant="radio"
					{...register('visited')}
				/>
				<Label htmlFor="besucht_ja" variant="padding">
					Ich war schon da
				</Label>
				<Input
					type="radio"
					value="Ich war noch nicht da"
					id="besucht_nein"
					variant="radio"
					{...register('visited')}
				/>
				<Label htmlFor="besucht_nein" variant="padding">
					Ich war noch nicht da
				</Label>
			</Fieldset>
			<Fieldset {...register('rating')}>
				<Legend>Bewertung</Legend>
				<Input
					type="radio"
					value="Mag ich!"
					id="bewertung_gut"
					variant="radio"
					{...register('rating')}
				/>
				<Label htmlFor="bewertung_gut" variant="padding">
					Mag ich!
				</Label>
				<Input
					type="radio"
					value="Nicht mein Fall!"
					id="bewertung_schlecht"
					variant="radio"
					{...register('rating')}
				/>
				<Label htmlFor="bewertung_schlecht" variant="padding">
					Nicht mein Fall!
				</Label>
			</Fieldset>
			<Input type="hidden" id="position" value="geoData[0]" {...register('position')} />
			{entryToUpdate ? (
				<Button type="submit" variant="margin-center-2">
					Speichern
				</Button>
			) : (
				<Button type="submit" variant="margin-center">
					Eintrag hinzuf??gen
				</Button>
			)}
		</FormStyled>
	);
}
