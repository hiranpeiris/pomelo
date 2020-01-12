import { TRANSACTIONS } from '../constants';

const loadTransactions = () => ({
  type: TRANSACTIONS.LOAD,
});

const setTransactions = transactions => ({
  type: TRANSACTIONS.LOAD_SUCCESS,
  transactions,
});

const setError = error => ({
  type: TRANSACTIONS.LOAD_FAIL,
  error,
});

export { loadTransactions, setTransactions, setError };
