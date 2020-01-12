import { takeEvery } from 'redux-saga/effects';
import { TRANSACTIONS } from '../constants';
import { handleTransactionsLoad } from './transactionsSaga';

function* rootSaga() {
  yield takeEvery(TRANSACTIONS.LOAD, handleTransactionsLoad);
}

export default rootSaga;
