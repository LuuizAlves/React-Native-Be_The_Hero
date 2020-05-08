import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import Logon from './pages/logon';
import Register from './pages/register';
import Profiles from './pages/profile';
import NewIncidents from './pages/newIncidents';

export default function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact  component={Logon} />
                <Route path="/register" component={Register} />
                <Route path="/profiles" component={Profiles} />
                <Route path="/incidents/new" component={NewIncidents} />
            </Switch>
        </BrowserRouter>
    );
}