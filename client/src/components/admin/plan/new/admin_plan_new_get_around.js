import React,{Component} from 'react';
import Header from '../../../includes/header';
import AdminPlanProgressBar from './admin_plan_progress_bar';
import AdminPlanNewGetAroundForm from './admin_plan_new_get_around_form';


class AdminPlanNewGetAround extends Component{
    render(){
        return(
            <div className="container">
                <Header/>
                <div className="container plan-new">
                    <AdminPlanProgressBar status="getAround"/>
                </div>
                <div>
                    <AdminPlanNewGetAroundForm id={this.props.params.id}/>
                </div>
            </div>
        )
    }
}
export default AdminPlanNewGetAround;