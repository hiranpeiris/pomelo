import { TRANSACTIONS_STATUS } from '../constants';

export const formatAmount = amount => {
  return `SGD ${amount}`;
};

export const statusColor = status => {
  switch (status) {
    case TRANSACTIONS_STATUS.COMPLETED:
      return '#5FC98E';
    case TRANSACTIONS_STATUS.REFUNDED:
      return '#FF9966';
    default:
      return 'gray';
  }
};

export const createNavBar = title => {
  return {
    title,
    headerTintColor: 'white',
    headerStyle: { backgroundColor: '#5FC98E' },
  };
};
