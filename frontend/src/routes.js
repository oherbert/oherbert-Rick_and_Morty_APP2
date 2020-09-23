import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import Search from './pages/Search';
import Sobre from './pages/Sobre';

const Routes = () =>(
    <BrowserRouter>
    <Header />
        <Switch>
            <Route path="/" exact>
                <Home />
            </Route>
            <Route path="/search">
                <Search />
            </Route>
            <Route path="/sobre">
                <Sobre />
            </Route>
        </Switch>
    </BrowserRouter>
);

export default Routes;