import { toByIds } from '../utils/helpers';

import { ADD_ITEM_SUCCESS } from '../actions/items';

const initialState = {
  byId: {}
};

export default (state = initialState, action = {}) => {
  const { type, payload } = action;
  switch (type) {

    case ADD_ITEM_SUCCESS:
      if (!payload.item) {
        return state;
      }
      return {
        ...state,
        byId: toByIds(state.byId, [payload.item])
      };

    default:
      return state;
  }
};

