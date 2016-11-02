import React,{Component} from 'react';
import Header from '../../../includes/header';
import AdminPlanProgressBar from './admin_plan_progress_bar';
import AdminPlanNewSeeDoForm from './admin_plan_new_see_do_form';


class AdminPlanNewSeeDo extends Component{
    render(){
        return(
            <div className="container">
                <Header/>
                <div className="container plan-new">
                    <AdminPlanProgressBar status="seeDo"/>
                </div>
                <div>
                    <AdminPlanNewSeeDoForm id={this.props.params.id}/>
                </div>
            </div>
        )
    }
}
export default AdminPlanNewSeeDo;