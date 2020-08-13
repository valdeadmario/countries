import React, { useEffect, useState, FC } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import {
  Container,
  Typography,
  Grid,
  CircularProgress,
} from '@material-ui/core';

import Table from 'src/ui/Table';
import CountryInfo from 'src/ui/CountryInfo';

import { countryOperations, countrySelectors } from 'src/store/modules/country';

import { TTableHead } from './types';
import { ICountry } from 'src/types';
import { TNameRow } from 'src/ui/Table/types';

const headTable: TTableHead[] = [
  { title: 'Name', value: 'name' },
  { title: 'Population', value: 'population' },
];

const CountriesList: FC = () => {
  const { region } = useParams();
  const dispatch = useDispatch();

  const [selectedCountry, setSelectedCountry] = useState<ICountry | null>(null);

  const countries = useSelector(countrySelectors.getCountries);
  const isLoading = useSelector(countrySelectors.isLoading);

  useEffect(() => {
    dispatch(countryOperations.getCounriesRequest(region));
  }, [region, dispatch]);

  const handleSelectCountry = (name: TNameRow) => {
    const country = countries.find((item: ICountry) => item.name === name);
    setSelectedCountry(country || null);
  };

  return (
    <Container maxWidth='lg'>
      <Typography align='center' variant='h3' gutterBottom>
        You choose {region} region
      </Typography>
      <Typography align='center' variant='h6' gutterBottom>
        <Link to='/'>Choose another</Link>
      </Typography>
      {isLoading ? (
        <CircularProgress />
      ) : (
        <Grid container spacing={3}>
          <Grid item md={9} sm={12}>
            <Table
              headRows={headTable}
              data={countries}
              selectRow={handleSelectCountry}
            />
          </Grid>
          <Grid item md={3} sm={12}>
            {selectedCountry ? (
              <CountryInfo {...selectedCountry} />
            ) : (
              <Typography>Select country</Typography>
            )}
          </Grid>
        </Grid>
      )}
    </Container>
  );
};

export default CountriesList;
