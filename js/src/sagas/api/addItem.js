import { takeEvery} from 'redux-saga/effects';

import { ADD_ITEM_REQUEST } from '../../actions/items';

export default function* watcher() {
  yield takeEvery(ADD_ITEM_REQUEST, worker);
}

function* worker(action) {

}
