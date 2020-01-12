import { TRANSACTIONS } from '../constants';

const loadingReducer = (state = false, action) => {
  switch (action.type) {
    case TRANSACTIONS.LOAD:
      return true;
    case TRANSACTIONS.LOAD_SUCCESS:
      return false;
    case TRANSACTIONS.LOAD_FAIL:
      return false;
    default:
      return state;
  }
};

export default loadingReducer;
