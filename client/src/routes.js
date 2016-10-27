import React from 'react';
import {Route,IndexRoute} from 'react-router';
import App from './components/app';
import Home from './components/home/home';
import PlanDetail from './components/plan/plan_detail';

export default(
    <Route path="/" component={App}>
        <IndexRoute component={Home}/>
        <Route path="/plans/:id" component={PlanDetail}/>
    </Route>
)