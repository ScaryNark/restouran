import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface LoaderState {
    isLoading: boolean;
    error: string | null;
}

const initialState: LoaderState = {
    isLoading: false,
    error: null,
};

const loaderSlice = createSlice({
    name: 'loader',
    initialState,
    reducers: {
        setLoading: (state) => {
            state.isLoading = true;
            state.error = null;
        },
        setFulfilled: (state) => {
            state.isLoading = false;
            state.error = null;
        },
        setError: (state, action: PayloadAction<string>) => {
            state.isLoading = false;
            state.error = action.payload;
        },
    },
});

export const { setLoading, setFulfilled, setError } = loaderSlice.actions;
export default loaderSlice.reducer;