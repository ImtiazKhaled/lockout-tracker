import React from 'react';
import './App.css';
import Residents from './components/resident/residents';
import EventsContainer from './components/events/eventsContainer';
import { BreakpointProvider } from 'react-socks';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import RootReducer from './redux/rootReducer';
import { Tabs } from 'antd';
const { TabPane } = Tabs;

const store = createStore(RootReducer);

function App() {
  return (
    <BreakpointProvider>
      <Provider store={store}>
        <Tabs type="card">
          <TabPane tab="Events" key="1">
            <EventsContainer />
          </TabPane>
          <TabPane tab="Lockouts" key="2">
            <Residents />
          </TabPane>
        </Tabs>
      </Provider>
    </BreakpointProvider>
  );
}

export default App;
