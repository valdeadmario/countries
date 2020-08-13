import React, { FC } from 'react';

import { Typography, Grid } from '@material-ui/core';

import { ICountry } from 'src/types';

const CountryInfo: FC<ICountry> = ({
  name,
  population,
  area,
  region,
  numericCode,
  subregion,
  capital,
}) => {
  return (
    <Grid>
      <Typography align='center' variant='h5' gutterBottom>
        {name}
      </Typography>
      <Grid container justify='space-between'>
        <Grid item xs={6}>
          Population
        </Grid>
        <Grid item xs={6}>
          {population}
        </Grid>
        <Grid item xs={6}>
          Area
        </Grid>
        <Grid item xs={6}>
          {area}
        </Grid>
        <Grid item xs={6}>
          Region
        </Grid>
        <Grid item xs={6}>
          {region}
        </Grid>
        <Grid item xs={6}>
          Subregion
        </Grid>
        <Grid item xs={6}>
          {subregion}
        </Grid>
        <Grid item xs={6}>
          Capital
        </Grid>
        <Grid item xs={6}>
          {capital}
        </Grid>
        <Grid item xs={6}>
          Code
        </Grid>
        <Grid item xs={6}>
          {numericCode}
        </Grid>
      </Grid>
    </Grid>
  );
};

export default CountryInfo;
