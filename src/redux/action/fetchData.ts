
import { AppDispatch } from "../app/store";
import { setLoading, setError, setFulfilled } from "../slicer/loaderSlice";


export const fetchData = () => async (dispatch: AppDispatch) => {
    try {
        dispatch(setLoading());
    } catch (error: any) {
        dispatch(setError(error.message));
    }
}