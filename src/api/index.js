import { BASE_URL } from '../constants';

export const fetchTransactions = async page => {
  const response = await fetch(`${BASE_URL}/transactions`);
  const data = await response.json();
  if (response.status >= 400) {
    throw new Error(data.errors);
  }
  return data;
};
