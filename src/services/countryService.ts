import axios from 'axios';

import { TRegion, ICountry } from 'src/types';

const API_URL = 'https://restcountries.eu/rest/v2';

export const getAll = async (region: TRegion): Promise<ICountry[]> => {
  const response = await axios.get(`${API_URL}/region/${region}`);
  return response.data;
};
