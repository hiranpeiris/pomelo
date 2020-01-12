import { TRANSACTIONS } from '../constants';

const errorReducer = (state = null, action) => {
  switch (action.type) {
    case TRANSACTIONS.LOAD_FAIL:
      return action.error;
    case TRANSACTIONS.LOAD:
    case TRANSACTIONS.LOAD_SUCCESS:
      return null;
    default:
      return state;
  }
};

export default errorReducer;
