import {
  LIST_REQUEST,
  LIST_FAILURE,
  LIST_SUCCESS,
} from '../actions/actionTypes'

const initialState = {
  items: [],
  loading: false,
  error: null,
};

export default function listReducer(state = initialState, action) {
  switch (action.type) {
    case LIST_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
      
    case LIST_FAILURE:
      const { error } = action.payload;
      return {
        ...state,
        loading: false,
        error,
      };
      
    case LIST_SUCCESS:
      const { items } = action.payload;
      return {
        ...state,
        items,
        loading: false,
        error: null,
      };
    
    default:
      return state;
  }
}
