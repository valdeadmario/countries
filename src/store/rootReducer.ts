import { combineReducers } from 'redux';
import countryReducer from './modules/country';

const rootReducer = combineReducers({
  country: countryReducer,
});

export default rootReducer;
