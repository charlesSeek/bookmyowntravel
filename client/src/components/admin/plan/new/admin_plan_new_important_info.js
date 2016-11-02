import React,{Component} from 'react';
import Header from '../../../includes/header';
import AdminPlanProgressBar from './admin_plan_progress_bar';
import AdminPlanNewImportantInfoForm from './admin_plan_new_important_info_form';

class AdminPlanNewImportantInfo extends Component{
    render(){
        return(
            <div className="container">
                <Header/>
                <div className="container plan-new">
                    <AdminPlanProgressBar status="importantInfo"/>
                </div>
                <div>
                    <AdminPlanNewImportantInfoForm id={this.props.params.id}/>
                </div>
            </div>
        )
    }
}
export default AdminPlanNewImportantInfo;