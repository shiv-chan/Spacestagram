import React, { useState, useLayoutEffect } from 'react';
import {
	Form,
	FormLayout,
	Button,
	TextContainer,
	TextStyle,
	Stack,
} from '@shopify/polaris';
import Calendar from './Calendar';
import moment from 'moment';
import axios from 'axios';
import { storeImages } from '../imagesSlice';
import { useDispatch } from 'react-redux';

function InputArea() {
	const [selectedDates, setSelectedDates] = useState({
		start: new Date(moment().subtract(30, 'days')),
		end: new Date(),
	});
	const [hasError, setHasError] = useState(false);
	const dispatch = useDispatch();

	async function getImages() {
		await axios
			.get(
				`https://api.nasa.gov/planetary/apod?api_key=${
					process.env.REACT_APP_API_KEY
				}&start_date=${moment(selectedDates.start).format(
					'YYYY-MM-DD'
				)}&end_date=${moment(selectedDates.end).format('YYYY-MM-DD')}`
			)
			.then((res) => {
				setHasError(false);
				dispatch(storeImages(res.data));
				console.log(res.data);
			})
			.catch((err) => {
				setHasError(true);
				console.error(err);
			});
	}

	useLayoutEffect(() => {
		getImages();
	}, []);

	return (
		<Form>
			<FormLayout>
				<Calendar
					selectedDates={selectedDates}
					setSelectedDates={setSelectedDates}
				/>
				<Stack alignment="center">
					<Button onClick={getImages}>Show</Button>
					<TextContainer>
						<TextStyle>
							{hasError ? 'Something went wrong...Try again' : null}
						</TextStyle>
					</TextContainer>
				</Stack>
			</FormLayout>
		</Form>
	);
}

export default InputArea;
