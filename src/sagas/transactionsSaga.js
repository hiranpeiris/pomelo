import { call, put } from 'redux-saga/effects';
import { fetchTransactions } from '../api';
import { setTransactions, setError } from '../actions';

function* handleTransactionsLoad() {
  try {
    const transactions = yield call(fetchTransactions);
    yield put(setTransactions(transactions));
  } catch (error) {
    yield put(setError(error.toString()));
  }
}

export { handleTransactionsLoad };
