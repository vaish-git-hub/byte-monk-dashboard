// src/components/ToggleView.js
import React from 'react';
import { Button } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { toggleView } from '../redux/actions';

const ToggleView = () => {
  const dispatch = useDispatch();
  const view = useSelector(state => state.view);

  return (
    <Button onClick={() => dispatch(toggleView())}>
      Switch to {view === 'table' ? 'Pie Chart' : 'Table'}
    </Button>
  );
};

export default ToggleView;
