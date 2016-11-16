import React from 'react';
import {Route,IndexRoute} from 'react-router';
import App from './components/app';
import Home from './components/home/home';
import PlanDetail from './components/plan/plan_detail';
import AdminHome from './components/admin/admin_home';
import CountryHome from './components/admin/country/country_home';
import CountryDetail from './components/admin/country/country_detail';
import CountryUpdate from './components/admin/country/country_update';
import AdminPlanHome from './components/admin/plan/admin_plan_home';
import AdminPlanNewAbout from './components/admin/plan/new/admin_plan_new_about';
import AdminPlanNewWhenGo from './components/admin/plan/new/admin_plan_new_when_go';
import AdminPlanNewSeeDo from './components/admin/plan/new/admin_plan_new_see_do';
import AdminPlanNewSightseeing from './components/admin/plan/new/admin_plan_new_sightseeing'
import AdminPlanNewBudgetCost from './components/admin/plan/new/admin_plan_new_budget_cost';
import AdminPlanNewGetThere from './components/admin/plan/new/admin_plan_new_get_there';
import AdminPlanNewGetAround from './components/admin/plan/new/admin_plan_new_get_around';
import AdminPlanNewStay from './components/admin/plan/new/admin_plan_new_stay';
import AdminPlanNewImportantInfo from './components/admin/plan/new/admin_plan_new_important_info';
import PlanUpdateHome from './components/admin/plan/update/plan_update_home';
import AdminImageHome from './components/admin/image/admin_image_home';
import SignIn from './components/user/signin';
import SignUp from './components/user/signup';

export default(
    <Route path="/" component={App}>
        <IndexRoute component={Home}/>
        <Route path="/plan/:id" component={PlanDetail}/>
        <Route path="/admin/dashboard" component={AdminHome}/>
        <Route path="/admin/country" component={CountryHome}/>
        <Route path="/admin/country/:id" component={CountryDetail}/>
        <Route path="/admin/country/update/:id" component={CountryUpdate}/>
        <Route path="/admin/plan" component={AdminPlanHome}/>
        <Route path="/admin/plan/new/about/:id" component={AdminPlanNewAbout}/>
        <Route path="/admin/plan/new/whenGo/:id" component={AdminPlanNewWhenGo}/>
        <Route path="/admin/plan/new/seeDo/:id" component={AdminPlanNewSeeDo}/>
        <Route path="/admin/plan/new/sightseeing/:id" component={AdminPlanNewSightseeing}/>
        <Route path="/admin/plan/new/budgetCost/:id" component={AdminPlanNewBudgetCost}/>
        <Route path="/admin/plan/new/getThere/:id" component={AdminPlanNewGetThere}/>
        <Route path="/admin/plan/new/getAround/:id" component={AdminPlanNewGetAround}/>
        <Route path="/admin/plan/new/stay/:id" component={AdminPlanNewStay}/>
        <Route path="/admin/plan/new/importantInfo/:id" component={AdminPlanNewImportantInfo}/>
        <Route path="/admin/plan/update/:id" component={PlanUpdateHome}/>
        <Route path="/admin/image" component={AdminImageHome}/>
        <Route path="/signin" component={SignIn}/>
        <Route path="/signup" component={SignUp}/>
    </Route>
)