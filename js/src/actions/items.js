/*
 * action types
 */
export const ADD_ITEM_REQUEST = 'ADD_ITEM_REQUEST';
export const ADD_ITEM_SUCCESS = 'ADD_ITEM_SUCCESS';
export const ADD_ITEM_FAILURE = 'ADD_ITEM_FAILURE';

/*
 * action creators
 */
export function addItem(item = null) {
  return {
    type: ADD_ITEM_REQUEST,
    payload: { item }
  };
}

export function addItemSuccess(item = null) {
  return {
    type: ADD_ITEM_SUCCESS,
    payload: { item }
  };
}

export function addItemFailure(error = null) {
  return {
    type: ADD_ITEM_FAILURE,
    payload: { error }
  };
}

export default {
  addItem,
  addItemSuccess,
  addItemFailure,

  ADD_ITEM_REQUEST,
  ADD_ITEM_SUCCESS,
  ADD_ITEM_FAILURE,
};
