import types from './actionTypes';
import {
  ICountryReducer,
  TGetCountriesSuccessAction,
} from './interfaces';

const initialState: ICountryReducer = {
  isLoading: false,
  countries: [],
};

const countryReducer = (
  state = initialState,
  { type, payload }: TGetCountriesSuccessAction
) => {
  switch (type) {
    case types.GET_COUNTRIES_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case types.GET_COUNTRIES_SUCCESS:
      return {
        ...state,
        countries: payload,
        isLoading: false,
      };
    default:
      return state;
  }
};

export default countryReducer;
