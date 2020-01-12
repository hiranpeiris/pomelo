import { TRANSACTIONS } from '../constants';

const transactionsReducer = (state = [], action) => {
  if (action.type === TRANSACTIONS.LOAD_SUCCESS) {
    return [...state, ...action.transactions];
  }
  return state;
};

export default transactionsReducer;
