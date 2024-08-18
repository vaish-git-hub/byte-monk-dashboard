// src/redux/actions.js

// Action Types
export const FETCH_USER_ACTIVITIES = 'FETCH_USER_ACTIVITIES';
export const SET_USER_ACTIVITIES = 'SET_USER_ACTIVITIES';
export const TOGGLE_VIEW = 'TOGGLE_VIEW';
export const SET_FILTER = 'SET_FILTER';

// Action Creators
export const fetchUserActivities = () => ({
  type: FETCH_USER_ACTIVITIES,
});

export const setUserActivities = (activities) => ({
  type: SET_USER_ACTIVITIES,
  payload: activities,
});

export const toggleView = () => ({
  type: TOGGLE_VIEW,
});

export const setFilter = (filter) => ({
  type: SET_FILTER,
  payload: filter,
});
