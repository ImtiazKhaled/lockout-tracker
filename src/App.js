import React from 'react';
import './App.css';
import Residents from './components/resident/residents';
import Events from './components/events/events';
import { BreakpointProvider } from 'react-socks';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import RootReducer from './redux/rootReducer';

const store = createStore(RootReducer);

function App() {
  return (
    <BreakpointProvider>
      <Provider store={store}>
        {/* <Residents /> */}
        <Events />
      </Provider>
    </BreakpointProvider>
  );
}

export default App;
