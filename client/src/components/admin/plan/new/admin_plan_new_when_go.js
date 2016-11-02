import React,{Component} from 'react';
import Header from '../../../includes/header';
import AdminPlanProgressBar from './admin_plan_progress_bar';
import AdminPlanNewWhenGoForm from './admin_plan_new_when_go_form';

class AdminPlanNewWhenGo extends Component{
    render(){
        return(
            <div className="container">
                <Header/>
                <div className="container plan-new">
                    <AdminPlanProgressBar status="whenGo"/>
                </div>
                <div>
                    <AdminPlanNewWhenGoForm id={this.props.params.id}/>
                </div>
            </div>
        )
    }
}
export default AdminPlanNewWhenGo;