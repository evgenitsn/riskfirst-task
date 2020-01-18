import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from './reducers';
import Routes from './Routes';
import GlobalStyling from './GlobalStyling';

const store = createStore(reducer);

const App: React.FC = () => {
  return (
    <>
      <Provider store={store}>
        {/* styled-components global styling */}
        <GlobalStyling />
        <Routes />
      </Provider>
    </>
  );
};

export default App;
