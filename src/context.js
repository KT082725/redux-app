import { createContext, useReducer } from 'react';

export const amountContext = createContext(null);
export const amountDispatchContext = createContext(null);
const initialAmount=0;
export function Provider({ children }) {
  const [amount, dispatch] = useReducer(
    amountReducer,
    initialAmount
  );

  return (
    <amountContext.Provider value={amount}>
      <amountDispatchContext.Provider value={dispatch}>
        {children}
      </amountDispatchContext.Provider>
    </amountContext.Provider>
  );
}

function amountReducer(amount, action) {
  switch (action.type) {
    case 'withdraw': {
      return( amount-action.money)
    }
    case 'deposit': {
      return( amount+action.money)
    }
    default: {
      throw Error('Unknown action: ' + action.type);
    }
  }
}


