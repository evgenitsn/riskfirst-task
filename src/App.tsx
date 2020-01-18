import React from 'react';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import reducer from './reducers';
import Routes from './Routes';
import GlobalStyling from './GlobalStyling';

const store = createStore(reducer, applyMiddleware(thunk));

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
