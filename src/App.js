import React from 'react';
import C1 from './components/c1'; 
import C2 from './components/c2';
import C3 from './components/c3';
import './App.css';

function App() {
  return (
    <div className="App">
      {/* Header Section */}
      <header className="App-header">
        <h1>Resizable Components</h1>
      </header>

      {/* Content Section */}
      <div className="App-content">
        {/* Component 1 */}
        <C1 />

        {/* Component 2 */}
        <C2 />

        {/* Component 3 */}
        <C3 />
      </div>
    </div>
  );
}

export default App;
