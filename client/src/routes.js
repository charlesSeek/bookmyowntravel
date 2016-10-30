import React from 'react';
import {Route,IndexRoute} from 'react-router';
import App from './components/app';
import Home from './components/home/home';
import PlanDetail from './components/plan/plan_detail';
import AdminHome from './components/admin/admin_home';
import CountryHome from './components/admin/country/country_home';

export default(
    <Route path="/" component={App}>
        <IndexRoute component={Home}/>
        <Route path="/plans/:id" component={PlanDetail}/>
        <Route path="/admin/dashboard" component={AdminHome}/>
        <Route path="/admin/country" component={CountryHome}/>
    </Route>
)