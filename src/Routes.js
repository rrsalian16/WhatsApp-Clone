import React from 'react';
import { Route, Switch, Redirect } from 'react-router';
import ROUTES from './configs/routes';
import { auth, notAuth } from './utils/utils-auth';

import Login from './page/Login';
import App from './page/App';


const Routes = () => {
    return (
        <Switch>
            <Route exact path={ROUTES.LOGIN} component={notAuth(Login)} />
            <Route exact path={ROUTES.SAMPLE} component={auth(App)} />
            <Redirect from={ROUTES.ROOT} to={ROUTES.SAMPLE} />
        </Switch>
    );
};

Routes.propTypes = {};

export default Routes;