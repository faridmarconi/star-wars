import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import Main from './pages/Main';
import People from './pages/People';
import Planets from './pages/Planets';

function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Main} />
                <Route path="/people" component={People} />
                <Route path="/planets" component={Planets} />
            </Switch>        
        </BrowserRouter>
    );
};

export default Routes;