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

const updateTransaction = transaction => ({
  type: TRANSACTIONS.UPDATE,
  transaction,
});

const setCurrentTransaction = transaction => ({
  type: TRANSACTIONS.SELECT,
  transaction,
});

const clearCurrentTransaction = transaction => ({
  type: TRANSACTIONS.CLEAR,
  transaction,
});

export {
  loadTransactions,
  setTransactions,
  setError,
  updateTransaction,
  setCurrentTransaction,
  clearCurrentTransaction,
};
