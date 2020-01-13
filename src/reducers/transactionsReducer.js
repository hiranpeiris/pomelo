import { TRANSACTIONS } from '../constants';

const transactionsReducer = (state = [], action) => {
  switch (action.type) {
    case TRANSACTIONS.LOAD_SUCCESS:
      return action.transactions;
    case TRANSACTIONS.UPDATE:
      return state.map(t => {
        if (t.id === action.transaction.id) {
          return { ...action.transaction, status: action.status };
        }
        return t;
      });
    default:
      return state;
  }
};

export default transactionsReducer;
