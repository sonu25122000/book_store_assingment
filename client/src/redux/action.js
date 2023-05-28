import axios from "axios";
import * as types from "./actiontype";

// get book
export const getData = () => async (dispatch) => {
  try {
    let result = await axios.get(
      `https://adventurous-puce-centipede.cyclic.app/book`
    );
    dispatch({ type: types.GET_BOOKS, payload: result.data });
    console.log(result.data);
    return result.data;
  } catch (error) {
    dispatch({ type: types.GET_BOOK_ERROR, payload: error.message });
  }
};
