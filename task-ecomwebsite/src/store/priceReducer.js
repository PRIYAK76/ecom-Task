import {createSlice} from '@reduxjs/toolkit';

const initialState={ };
const priceReducer = createSlice({
    name:'price',
    initialState,
    reducers: {
        totalPriceSet(state, action) {
            return action.payload;
        }
    }
});

export const {totalPriceSet}=priceReducer.actions;
export default priceReducer.reducer;
