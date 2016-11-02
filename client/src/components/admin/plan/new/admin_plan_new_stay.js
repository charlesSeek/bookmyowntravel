import React,{Component} from 'react';
import Header from '../../../includes/header';
import AdminPlanProgressBar from './admin_plan_progress_bar';
import AdminPlanNewStayForm from './admin_plan_new_stay_form';


class AdminPlanNewStay extends Component{
    render(){
        return(
            <div className="container">
                <Header/>
                <div className="container plan-new">
                    <AdminPlanProgressBar status="stay"/>
                </div>
                <div>
                    <AdminPlanNewStayForm id={this.props.params.id}/>
                </div>
            </div>
        )
    }
}
export default AdminPlanNewStay;