import { all } from 'redux-saga/effects';
import addItem from './addItem';

export default function* apiSaga() {
  yield all([
    addItem()
  ]);
}
