import { call, put, takeEvery } from '@redux-saga/core/effects';

import * as countryService from 'src/services/countryService';

import actions from './actions';
import types from './actionTypes';

import { TGetCountriesRequestAction } from './interfaces';

function* fetchCountriesByRegion({ payload: { region } }: TGetCountriesRequestAction) {
  try {
    const data = yield call(countryService.getAll, region);

    yield put(actions.getCounriesSuccess(data));
  } catch (e) {
    console.log(e);
  }
}

function* rootCountrySagas() {
  yield takeEvery(types.GET_COUNTRIES_REQUEST, fetchCountriesByRegion);
}

export default {
  rootCountrySagas,
  ...actions,
};
