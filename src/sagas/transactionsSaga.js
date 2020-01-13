import { call, put } from 'redux-saga/effects';
import { fetchTransactions } from '../api';
import { setTransactions, updateTransaction, setError } from '../actions';

function* handleTransactionsLoad() {
  try {
    const transactions = yield call(fetchTransactions);
    yield put(setTransactions(transactions));
  } catch (error) {
    yield put(setError(error.toString()));
  }
}

function* handleUpdateTransaction(transaction, status) {
  yield put(updateTransaction(transaction, status));
}

export { handleTransactionsLoad, handleUpdateTransaction };
