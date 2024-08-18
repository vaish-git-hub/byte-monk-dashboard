// src/redux/saga.js

import { call, put, takeEvery } from 'redux-saga/effects';
import { FETCH_USER_ACTIVITIES, setUserActivities } from './actions';

// Mock API call to fetch user activities
const fetchUserActivitiesApi = () => {
  return [
    { category: 'Ransomware', activityCount: 20 },
    { category: 'Data Breach', activityCount: 15 },
    { category: 'Malware', activityCount: 25 },
    { category: 'Phishing', activityCount: 10 },
  ];
};

// Worker saga: will be fired on FETCH_USER_ACTIVITIES actions
function* fetchUserActivities() {
  try {
    const activities = yield call(fetchUserActivitiesApi);
    yield put(setUserActivities(activities));
  } catch (e) {
    console.error('Error fetching user activities:', e);
  }
}

// Watcher saga: spawns a new fetchUserActivities task on each FETCH_USER_ACTIVITIES
function* watchFetchUserActivities() {
  yield takeEvery(FETCH_USER_ACTIVITIES, fetchUserActivities);
}

// Root saga
export default function* rootSaga() {
  yield watchFetchUserActivities();
}
