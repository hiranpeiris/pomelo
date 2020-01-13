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

const updateTransaction = (transaction, status) => ({
  type: TRANSACTIONS.UPDATE,
  transaction,
  status,
});

const updateAllTransactions = (transactions, status) => ({
  type: TRANSACTIONS.UPDATE_ALL,
  transactions,
  status,
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
  updateAllTransactions,
  setCurrentTransaction,
  clearCurrentTransaction,
};
