import React from 'react';
import './App.css';
import Residents from './components/resident/residents';
import { BreakpointProvider } from 'react-socks';

function App() {
  return (
    <BreakpointProvider>
      <Residents />
    </BreakpointProvider>
  );
}

export default App;
