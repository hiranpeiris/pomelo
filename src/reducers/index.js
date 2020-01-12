import { combineReducers } from 'redux';

import loadingReducer from './loadingReducer';
import transactionsReducer from './transactionsReducer';
import errorReducer from './errorReducer';

const rootReducer = combineReducers({
  isLoading: loadingReducer,
  transactions: transactionsReducer,
  error: errorReducer,
});

export default rootReducer;
