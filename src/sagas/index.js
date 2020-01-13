import { takeEvery, take, fork } from 'redux-saga/effects';
import { TRANSACTIONS } from '../constants';
import {
  handleTransactionsLoad,
  handleUpdateTransaction,
} from './transactionsSaga';

function* rootSaga() {
  yield takeEvery(TRANSACTIONS.LOAD, handleTransactionsLoad);
  while (true) {
    const { transactions, status } = yield take(TRANSACTIONS.UPDATE_ALL);
    for (let i = 0; i < transactions.length; i++) {
      yield fork(handleUpdateTransaction, transactions[i], status);
    }
  }
}

export default rootSaga;
