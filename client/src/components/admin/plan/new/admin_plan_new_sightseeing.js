import React,{Component} from 'react';
import Header from '../../../includes/header';
import AdminPlanProgressBar from './admin_plan_progress_bar';
import AdminPlanNewSightseeingForm from './admin_plan_new_sightseeing_form';


class AdminPlanNewSightseeing extends Component{
    render(){
        return(
            <div className="container">
                <Header/>
                <div className="container plan-new">
                    <AdminPlanProgressBar status="sightseeing"/>
                </div>
                <div>
                    <AdminPlanNewSightseeingForm id={this.props.params.id}/>
                </div>
            </div>
        )
    }
}
export default AdminPlanNewSightseeing;