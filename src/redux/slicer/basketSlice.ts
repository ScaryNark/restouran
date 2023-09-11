import { createSlice } from "@reduxjs/toolkit";
import { IMenu } from "../../interface/interface";

interface GoodsState {
    goods: IMenu[];
}

const initialState: GoodsState = {
    goods: [],
};

const basketSlice = createSlice({
    name: "basket",
    initialState,
    reducers: {
        addItemToCart: (state, action) => {
            const { id } = action.payload;
            const existingItem = state.goods.find((item) => item.id === id);

            if (existingItem) {
                existingItem.quantity += 1;
            } else {
                state.goods.push({ ...action.payload, quantity: 1 });
            }
        },
        removeItemFromCart: (state, action) => {
            const { id } = action.payload;
            const existingItem = state.goods.find((item) => item.id === id);

            if (existingItem) {
                if (existingItem.quantity > 1) {
                    existingItem.quantity -= 1;
                } else {
                    state.goods = state.goods.filter((item) => item.id !== id);
                }
            }
        },
    },
});

export const { addItemToCart, removeItemFromCart } = basketSlice.actions;
export default basketSlice.reducer;