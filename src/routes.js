import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import Main from './pages/Main';
import Films from './pages/Films';
import people from './pages/People';
import planets from './pages/Planets';
import species from './pages/Species';
import Starships from './pages/Starships'


// ("films", "people", "planets", "species", "starships" ou "vehicles")

function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Main} />
                <Route path="/films" component={Films} />
                <Route path="/people" component={people} />
                <Route path="/planets" component={planets} />
                <Route path="/species" component={species} />
                <Route path="/starships" component={Starships} />
            </Switch>        
        </BrowserRouter>
    );
};

export default Routes;