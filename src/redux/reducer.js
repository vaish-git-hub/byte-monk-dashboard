// src/redux/reducer.js

import { SET_USER_ACTIVITIES, TOGGLE_VIEW, SET_FILTER } from './actions';

// Initial State
const initialState = {
  userActivities: [],
  view: 'table',  // 'table' or 'pie'
  filter: 'ALL',  // Default filter value
};

// Reducer
const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_ACTIVITIES:
      return {
        ...state,
        userActivities: action.payload,
      };
    case TOGGLE_VIEW:
      return {
        ...state,
        view: state.view === 'table' ? 'pie' : 'table',
      };
    case SET_FILTER:
      return {
        ...state,
        filter: action.payload,
      };
    default:
      return state;
  }
};

export default rootReducer;
