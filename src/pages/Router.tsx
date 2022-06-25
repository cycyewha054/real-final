import React from 'react';
import { Redirect, Route, Switch } from 'react-router';
import { LoginPage } from './LoginPage';
import { HomePage } from './HomePage';
import { SignupPage } from './SignupPage';
import { AlertWrittenPage } from './AlertWritten';
import { CoinPage } from './CoinPage';
import { PostOptionPage } from './PostOptionPage';
import { OptionSelectPage } from './OptionSelect';
import { PlusPage } from './PlusPage';
import { PostPage } from './PostPage';
import { AlertOptionPage } from './AlertOption';

export const Router = () => {
  return (
    <Switch>
      <Route path="/signup" component={SignupPage} />
      <Route path="/login" component={LoginPage} />
      <Route path="/" component={HomePage} exact />
      <Route path="/alertoption" component={AlertOptionPage} />
      <Route path="/alertwritten" component={AlertWrittenPage} />
      <Route path="/coin" component={CoinPage} />
      <Route path="/postoption/:postId" component={PostOptionPage} />
      <Route path="/optionselect" component={OptionSelectPage} />
      <Route path="/plus" component={PlusPage} />
      <Route path="/post" component={PostPage} />
      <Route path="/">
        <Redirect to="/" />
      </Route>
    </Switch>
  );
};
