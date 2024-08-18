// src/components/Filter.js
import React from 'react';
import { Select } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from '../redux/actions';

const { Option } = Select;

const Filter = () => {
  const dispatch = useDispatch();
  
  // Assuming your state has a filter object with 'user' and 'category' fields
  const userFilter = useSelector(state => state.filters?.user || '');
  const categoryFilter = useSelector(state => state.filters?.category || '');

  const handleUserChange = value => {
    dispatch(setFilter({ key: 'user', value }));
  };

  const handleCategoryChange = value => {
    dispatch(setFilter({ key: 'category', value }));
  };

  return (
    <div style={{ display: 'flex', gap: '10px' }}>
      <Select 
        value={userFilter} 
        onChange={handleUserChange} 
        placeholder="Select User"
        style={{ width: 120 }}>
        <Option value="">All Users</Option>
        <Option value="User1">User1</Option>
        <Option value="User2">User2</Option>
      </Select>
      <Select 
        value={categoryFilter} 
        onChange={handleCategoryChange} 
        placeholder="Select Category"
        style={{ width: 120 }}>
        <Option value="">All Categories</Option>
        <Option value="Category1">Category1</Option>
        <Option value="Category2">Category2</Option>
      </Select>
    </div>
  );
};

export default Filter;
