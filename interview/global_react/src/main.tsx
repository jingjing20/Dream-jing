import * as React from "react";
import * as ReactDOM from "react-dom";
import { HashRouter, Switch, Route } from "react-router-dom";
import { LoginPage } from './pages/login/index';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core'
import './i18n';
const theme = createMuiTheme({
  typography: {
    useNextVariants: true
  }
})

ReactDOM.render(
  <MuiThemeProvider theme={theme}>
    <HashRouter>
      <Switch>
        <Route exact={true} path="/" component={LoginPage} />
      </Switch>
    </HashRouter>
  </MuiThemeProvider>,
  document.getElementById('root')
)