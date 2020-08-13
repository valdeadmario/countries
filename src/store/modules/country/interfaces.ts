import types from './actionTypes';

import { ICountry, TRegion } from 'src/types';

export interface ICountryReducer {
  isLoading: boolean;
  countries: ICountry[];
}

export type TGetCountriesRequestAction = {
  type: typeof types.GET_COUNTRIES_REQUEST;
  payload: {
    region: TRegion;
  };
};

export type TGetCountriesSuccessAction = {
  type: typeof types.GET_COUNTRIES_SUCCESS;
  payload: ICountry[];
};
