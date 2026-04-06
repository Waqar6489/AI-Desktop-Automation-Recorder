import React, { useState } from 'react';
import './RecorderControls.css'; // We will create this file next

const RecorderControls = () => {
  const [status, setStatus] = useState('Idle');

  const handleStart = () => {
    setStatus('Recording');
    console.log("Action: Start Recording clicked at " + new Date().toLocaleTimeString());
  };

  const handleStop = () => {
    setStatus('Idle');
    console.log("Action: Stop Recording clicked at " + new Date().toLocaleTimeString());
  };

  return (
    <div className="container">
      <div className="glass-card">
        <h1 className="title">AI Desktop Recorder</h1>
        
        <div className="status-container">
          <div className={`status-dot ${status === 'Recording' ? 'pulse' : ''}`}></div>
          <span className="status-text">{status}</span>
        </div>

        <div className="button-grid">
          <button className="btn start-btn" onClick={handleStart} disabled={status === 'Recording'}>
            <span className="icon">⏺</span> Start Recording
          </button>
          
          <button className="btn stop-btn" onClick={handleStop} disabled={status === 'Idle'}>
            <span className="icon">⏹</span> Stop Recording
          </button>

          <button className="btn secondary-btn" onClick={() => console.log("Action: Generate Script")}>
            <span className="icon">📝</span> Generate Script
          </button>

          <button className="btn secondary-btn" onClick={() => console.log("Action: Run Script")}>
            <span className="icon">▶</span> Run Script
          </button>
        </div>
        
        <footer className="footer">Waqar Ali - Frontend Setup</footer>
      </div>
    </div>
  );
};

export default RecorderControls;