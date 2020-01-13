import { TRANSACTIONS } from '../constants';

const currentTransactionReducer = (state = null, action) => {
  switch (action.type) {
    case TRANSACTIONS.SELECT:
      return action.transaction;
    case TRANSACTIONS.UPDATE:
      return action.transaction;
    case TRANSACTIONS.CLEAR:
      return null;
    default:
      return state;
  }
};

export default currentTransactionReducer;
