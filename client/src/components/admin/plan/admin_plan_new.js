import React,{Component} from 'react';
import Header from '../../includes/header';
import AdminPlanProgressBar from './admin_plan_progress_bar';
import AdminPlanNewAboutForm from './admin_plan_new_about_form';

class AdminPlanNew extends Component{
    render(){
        return(
            <div className="container">
                <Header/>
                <div className="container plan-new">
                    <AdminPlanProgressBar status="about"/>
                    <AdminPlanNewAboutForm/>
                </div>
            </div>
        )
    }
}
export default AdminPlanNew;