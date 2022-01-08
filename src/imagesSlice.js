import { createSlice } from '@reduxjs/toolkit';

const imagesSlice = createSlice({
	name: 'images',
	initialState: {
		images: [],
	},
	reducers: {
		storeImages: (state, action) => {
			state.images = action.payload;
		},
	},
});

export const { storeImages } = imagesSlice.actions;
export default imagesSlice.reducer;
