/*
    the component of plan budget cost info
*/
import React,{Component} from 'react';
import axios from 'axios';
import config from '../../config';
class PlanBudgetCost extends Component{
    componentWillMount(){
        this.state = {
            plan:undefined,
            errMsg:''
        }
        
    }
    componentDidMount(){
        const id = this.props.id;
        const host = config.API_SERVER;
        const url = 'http://'+host+':12000/plans/'+id;
        axios.get(url)
        .then(response=>{
            if (response.data.success){
                const plan = response.data.data;
                this.setState({plan})
            }else{
                const errMsg = response.data.errMsg;
                this.setState({errMsg});
                alert(errMsg);
                
            }
        })
        .catch(err=>{
            this.setState({errMsg:err.toString()});
            alert(err.toString());
        })
    }
    render(){
        if (this.state.plan==undefined){
            return(<div>Loading data...</div>)
        }
        if (!this.state.plan.hasOwnProperty('budget_and_costs')){
            return(<div>No data</div>)
        }
        return(
            <div className="container budgetcost">
                <h2>What will {this.state.plan.name} Cost</h2>
                <p><a href={this.state.plan.budget_and_costs.currency.currency_website_link}>{this.state.plan.budget_and_costs.currency.currency_text}</a></p>
                <p>{this.state.plan.budget_and_costs.costs_description}</p>
                <p>Use the below information as a guide for an indicative budget.Prices can vary considerably dependent on where in {this.state.plan.name} you wish to travel to and the season</p>
            
                <div className="container">
                    <h3>FLIGHT INDICATION</h3>
                    {this.state.plan.budget_and_costs.average_prices_and_costs.flight_indication.map((item)=>{
                        return(
                            <p key={item.From}>{item.From} - {this.state.plan.name} {item.description}</p>
                        )
                    })}
                </div>
                
                <div className="container">
                    <h3>ACCOMMODATION INDICATION (Per night)</h3>
                    <p>{this.state.plan.budget_and_costs.average_prices_and_costs.accomodation_indication.hotel.name} - {this.state.plan.budget_and_costs.average_prices_and_costs.accomodation_indication.hotel.description}</p>
                    <p>{this.state.plan.budget_and_costs.average_prices_and_costs.accomodation_indication.mid_range_hotel.name} - {this.state.plan.budget_and_costs.average_prices_and_costs.accomodation_indication.mid_range_hotel.description}</p>
                    <p>{this.state.plan.budget_and_costs.average_prices_and_costs.accomodation_indication.budget_hotel.name} - {this.state.plan.budget_and_costs.average_prices_and_costs.accomodation_indication.budget_hotel.description}</p>
                    <p>{this.state.plan.budget_and_costs.average_prices_and_costs.accomodation_indication.luxury_hotel.name} - {this.state.plan.budget_and_costs.average_prices_and_costs.accomodation_indication.luxury_hotel.description}</p>
                    
                </div>
            
                <div className="container">
                    <h3>TRANSPORT/TOUR INDICATION</h3>
                    <p>{this.state.plan.budget_and_costs.average_prices_and_costs.transport_indication.day_rail_pass.name} - {this.state.plan.budget_and_costs.average_prices_and_costs.transport_indication.day_rail_pass.description}</p>
                    <p>{this.state.plan.budget_and_costs.average_prices_and_costs.transport_indication.day_tour.name} - {this.state.plan.budget_and_costs.average_prices_and_costs.transport_indication.day_tour.description}</p>
                </div>
            
                <div className="container">
                    <h3>MEAL INDICATION</h3>
                    <p>{this.state.plan.budget_and_costs.average_prices_and_costs.meal_indication.breakfast.name} - {this.state.plan.budget_and_costs.average_prices_and_costs.meal_indication.breakfast.description}</p>
                    <p>{this.state.plan.budget_and_costs.average_prices_and_costs.meal_indication.lunch.name} - {this.state.plan.budget_and_costs.average_prices_and_costs.meal_indication.lunch.description}</p>
                    <p>{this.state.plan.budget_and_costs.average_prices_and_costs.meal_indication.dinner.name} - {this.state.plan.budget_and_costs.average_prices_and_costs.meal_indication.dinner.description}</p>
                    
                </div>
                <p><a href={this.state.plan.budget_and_costs.check_prices_website_link}>Check Numbeo for a full range of prices</a></p>
                
            
            </div>
        )
    }
}
export default PlanBudgetCost;