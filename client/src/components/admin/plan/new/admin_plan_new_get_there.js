import React,{Component} from 'react';
import Header from '../../../includes/header';
import AdminPlanProgressBar from './admin_plan_progress_bar';
import AdminPlanNewGetThereForm from './admin_plan_new_get_there_form';

class AdminPlanNewGetThere extends Component{
    render(){
        return(
            <div className="container">
                <Header/>
                <div className="container plan-new">
                    <AdminPlanProgressBar status="getThere"/>
                </div>
                <div>
                    <AdminPlanNewGetThereForm id={this.props.params.id}/>
                </div>
            </div>
        )
    }
}
export default AdminPlanNewGetThere;