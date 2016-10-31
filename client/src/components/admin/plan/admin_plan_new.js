import React,{Component} from 'react';
import Header from '../../includes/header';
import AdminPlanProgressBar from './admin_plan_progress_bar';

class AdminPlanNew extends Component{
    render(){
        return(
            <div className="container">
                <Header/>
                <div className="container plan-new">
                    <AdminPlanProgressBar status="about"/>
                </div>
            </div>
        )
    }
}
export default AdminPlanNew;