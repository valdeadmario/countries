import { RootState } from 'src/store';

const isLoading = (state: RootState) => state.country.isLoading;
const getCountries = (state: RootState) => state.country.countries;

export default {
  getCountries,
  isLoading,
};
