import React, { useReducer } from 'react';
import { initialState, reducer } from '../../lib/reducer';

const StoreContext = React.createContext();

const withStoreContext = (Component, componentProps) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const store = { state, dispatch };

  return (
    <StoreContext.Provider value={store}>
      <Component { ...componentProps } />
    </StoreContext.Provider>
  );
};

export { StoreContext, withStoreContext };