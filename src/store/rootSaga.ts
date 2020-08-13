import { all } from 'redux-saga/effects';

import { countryOperations } from 'src/store/modules/country';

export const rootSaga = function* root() {
  yield all([countryOperations.rootCountrySagas()]);
};
