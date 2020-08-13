import React, { FC } from 'react';
import { Link } from 'react-router-dom';

import { Container, Typography, Grid } from '@material-ui/core';

import { TRegionList } from './types';

const regions: TRegionList[] = [
  {
    label: 'Africa',
    path: 'africa',
  },
  {
    label: 'Americas',
    path: 'americas',
  },
  {
    label: 'Asia',
    path: 'asia',
  },
  {
    label: 'Europe',
    path: 'europe',
  },
  {
    label: 'Oceania',
    path: 'oceania',
  },
];

const Home: FC = () => {
  return (
    <Container maxWidth='lg'>
      <Typography align='center' variant='h3' gutterBottom>
        Choose your region
      </Typography>
      <Container maxWidth='md'>
        <Grid container spacing={3} justify='space-between'>
          {regions.map(({ label, path }: TRegionList) => (
            <Grid key={path} item>
              <Link to={`/countries/${path}`}>
                <Typography align='center' variant='h4'>
                  {label}
                </Typography>
              </Link>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Container>
  );
};

export default Home;
