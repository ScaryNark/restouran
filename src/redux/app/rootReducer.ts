import { combineReducers } from '@reduxjs/toolkit';
import categorySlice from '../slicer/categorySlice';
import basketSlice from '../slicer/basketSlice';
import loaderSlice from '../slicer/loaderSlice';


export const rootReducer = combineReducers({
    categorySlice,
    basketSlice,
    loaderSlice
});