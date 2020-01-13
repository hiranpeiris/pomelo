export const formatAmount = amount => {
  return `SGD ${amount}`;
};

export const statusColor = status => {
  switch (status) {
    case 'COMPLETED':
      return '#5FC98E';
    case 'REFUNDED':
      return '#FF9966';
    default:
      return 'gray';
  }
};
