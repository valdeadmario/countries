import {
  TGetCountriesRequestAction,
  TGetCountriesSuccessAction,
} from './interfaces';
import types from './actionTypes';

import { TRegion, ICountry } from 'src/types';

const getCounriesRequest = (region: TRegion): TGetCountriesRequestAction => ({
  payload: { region },
  type: types.GET_COUNTRIES_REQUEST,
});

const getCounriesSuccess = (data: ICountry[]): TGetCountriesSuccessAction => {
  return {
    payload: data,
    type: types.GET_COUNTRIES_SUCCESS,
  };
};

export default {
  getCounriesRequest,
  getCounriesSuccess,
};
