import React, { FC } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import Home from 'src/components/Home';
import CountriesList from 'src/components/CountriesList';

const Routing: FC = () => {
  return (
    <Switch>
      <Route path='/' exact component={Home} />
      <Route path='/countries/:region' component={CountriesList} />
      <Route render={() => <Redirect to='/' />} />
    </Switch>
  );
};

export default Routing;
