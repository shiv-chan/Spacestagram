import React, { useState, useCallback } from 'react';
import { DatePicker, TextContainer, TextStyle } from '@shopify/polaris';

function Calendar({ selectedDates, setSelectedDates }) {
	const [{ month, year }, setDate] = useState({
		month: new Date().getMonth(),
		year: new Date().getFullYear(),
	});

	const handleOnMonthChange = useCallback((month, year) => {
		setDate({ month, year });
	}, []);

	return (
		<>
			<TextContainer>
				<TextStyle variation="strong">Pick a day or a range</TextStyle>
			</TextContainer>
			<DatePicker
				month={month}
				year={year}
				onChange={setSelectedDates}
				onMonthChange={handleOnMonthChange}
				selected={selectedDates}
				disableDatesAfter={new Date()}
				allowRange
			/>
		</>
	);
}

export default Calendar;
