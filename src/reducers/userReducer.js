import { actions } from "../actions";

export const initialState = {
  loading: true,
  error: null,
  user: {},
  users: [],
};

export const userReducer = (state, action) => {
  switch (action.type) {
    case actions.user.USER_DATA_FETCHING:
      return {
        ...state,
        loading: true,
      };
    case actions.user.USER_DATA_FETCHED:
      return {
        ...state,
        loading: false,
        user: action.user,
      };
    case actions.user.USER_DATA_FETCHING_ERROR:
      return {
        ...state,
        loading: false,
        error: action.error,
      };

    default:
      return state;
  }
};
