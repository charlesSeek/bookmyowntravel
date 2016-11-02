import React,{Component} from 'react';
import Header from '../../../includes/header';
import AdminPlanProgressBar from './admin_plan_progress_bar';
import AdminPlanNewBudgetCostForm from './admin_plan_new_budget_cost_form';


class AdminPlanNewBudgetCost extends Component{
    render(){
        return(
            <div className="container">
                <Header/>
                <div className="container plan-new">
                    <AdminPlanProgressBar status="budgetCost"/>
                </div>
                <div>
                    <AdminPlanNewBudgetCostForm id={this.props.params.id}/>
                </div>
            </div>
        )
    }
}
export default AdminPlanNewBudgetCost;