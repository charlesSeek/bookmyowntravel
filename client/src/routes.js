import React from 'react';
import {Route,IndexRoute} from 'react-router';
import App from './components/app';
import Home from './components/home/home';
import PlanDetail from './components/plan/plan_detail';
import AdminHome from './components/admin/admin_home';
import CountryHome from './components/admin/country/country_home';
import CountryDetail from './components/admin/country/country_detail';
import CountryUpdate from './components/admin/country/country_update';

export default(
    <Route path="/" component={App}>
        <IndexRoute component={Home}/>
        <Route path="/plans/:id" component={PlanDetail}/>
        <Route path="/admin/dashboard" component={AdminHome}/>
        <Route path="/admin/country" component={CountryHome}/>
        <Route path="/admin/country/:id" component={CountryDetail}/>
        <Route path="/admin/country/update/:id" component={CountryUpdate}/>
    </Route>
)