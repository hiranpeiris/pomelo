import { combineReducers } from 'redux';

import loadingReducer from './loadingReducer';
import transactionsReducer from './transactionsReducer';
import errorReducer from './errorReducer';
import currentTransactionReducer from './currentTransactionReducer';

const rootReducer = combineReducers({
  isLoading: loadingReducer,
  transactions: transactionsReducer,
  error: errorReducer,
  currentTransaction: currentTransactionReducer,
});

export default rootReducer;
