import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchUserActivities, toggleView } from '../redux/actions';
import TableView from './TableView';
import PieChartView from './PieChartView';
import Filter from './Filter';
import ToggleView from './ToggleView';

const Dashboard = () => {
  const dispatch = useDispatch();
  
  // Select data and view from the Redux store
  const data = useSelector(state => state.userActivities);
  const view = useSelector(state => state.view); // 'table' or 'pie'

  // Fetch user activities when the component mounts
  useEffect(() => {
    dispatch(fetchUserActivities());
  }, [dispatch]);

  // Handler for toggling view
  const handleToggleView = () => {
    dispatch(toggleView());
  };

  return (
    <div>
      <h1>User Activities Dashboard</h1>
      <Filter />
      <ToggleView currentView={view} onToggle={handleToggleView} />
      {/* Render either TableView or PieChartView based on current view */}
      {view === 'table' ? <TableView data={data} /> : <PieChartView data={data} />}
    </div>
  );
};

export default Dashboard;
