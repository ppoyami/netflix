import { Switch, Route } from 'react-router-dom';
import { Global, ThemeProvider } from '@emotion/react';

import GlobalStyles from '@styles/global';
import theme from '@styles/theme';

import Header from '@components/Header';
import Home from '@pages/Home';
import Tv from '@pages/Tv';
import Search from '@pages/Search';

export default function App() {
  return (
    <div>
      <ThemeProvider theme={theme}>
        <Global styles={GlobalStyles(theme)} />
        <Header />
        <Switch>
          <Route path={['/', '/movies/:movieId']} component={Home} />
          <Route exact path="/tv" component={Tv} />
          <Route exact path="/search" component={Search} />
        </Switch>
      </ThemeProvider>
    </div>
  );
}
