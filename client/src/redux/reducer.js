import * as types from "./actiontype";
const initialState = {
  loading: false,
  error: false,
  book: [],
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case types.GET_BOOKS: {
      return { ...state, book: payload, loading: false };
    }
    default:
      return state;
  }
};
export default reducer;
