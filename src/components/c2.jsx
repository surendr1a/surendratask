// C2.js
import React, { useState, useEffect } from 'react';
import { Resizable } from 'react-resizable';
import './style.css';

const C2 = () => {
  // State variables
  const [size, setSize] = useState({ width: 300, height: 200 });
  const [content, setContent] = useState('');
  const [updateId, setUpdateId] = useState('');

  // Resize handler
  const onResize = (event, { size }) => {
    setSize(size);
  };

  // Add data to the server
  const handleAdd = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/add', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name: 'Component 2', content }),
      });
      await response.json();
      // Clear the content input
      setContent('');
      // Clear the component data
      setSize({ width: 300, height: 200 });
    } catch (error) {
      console.error('Error adding data:', error);
    }
  };

  // Update data on the server
  const handleUpdate = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/update', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ myid: updateId, name: 'Component 2', content }),
      });
      await response.json();
      // Clear the content and updateId inputs after updating
      setContent('');
      setUpdateId('');
    } catch (error) {
      console.error('Error updating data:', error);
    }
  };

  // Fetch initial data if needed
  useEffect(() => {
    // Fetch initial count data if needed
  }, []);

  // Component JSX
  return (
    <Resizable
      className="resizable-component"
      width={size.width}
      height={size.height}
      onResize={onResize}
      enable={{
        top: true,
        right: true,
        bottom: true,
        left: true,
        topRight: true,
        bottomRight: true,
        bottomLeft: true,
        topLeft: true,
      }}
    >
      <div>
        <h2>Component 2</h2>
        <div>
          <label htmlFor="content">Content:</label>
          <input
            type="text"
            id="content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="updateId">Update ID:</label>
          <input
            type="text"
            id="updateId"
            value={updateId}
            onChange={(e) => setUpdateId(e.target.value)}
          />
        </div>
        <button onClick={handleAdd}>Add</button>
        <button onClick={handleUpdate}>Update</button>
      </div>
    </Resizable>
  );
};

export default C2;
