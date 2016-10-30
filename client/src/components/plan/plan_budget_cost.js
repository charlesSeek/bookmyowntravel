/*
    the component of plan budget cost info
*/
import React,{Component} from 'react';

class PlanBudgetCost extends Component{
    render(){
        return(
            <div className="container budgetcost">
                <h2>What will {this.props.plan.name} Cost</h2>
                <p><a href={this.props.plan.budget_and_costs.currency.currency_website_link}>{this.props.plan.budget_and_costs.currency.currency_text}</a></p>
                <p>{this.props.plan.budget_and_costs.costs_description}</p>
                <p>Use the below information as a guide for an indicative budget.Prices can vary considerably dependent on where in {this.props.plan.name} you wish to travel to and the season</p>
            
                <div className="container">
                    <h3>FLIGHT INDICATION</h3>
                    {this.props.plan.budget_and_costs.average_prices_and_costs.flight_indication.map((item)=>{
                        return(
                            <p key={item.From}>{item.From} - {this.props.plan.name} {item.description}</p>
                        )
                    })}
                </div>
                
                <div className="container">
                    <h3>ACCOMMODATION INDICATION (Per night)</h3>
                    <p>{this.props.plan.budget_and_costs.average_prices_and_costs.accomodation_indication.hotel.name} - {this.props.plan.budget_and_costs.average_prices_and_costs.accomodation_indication.hotel.description}</p>
                    <p>{this.props.plan.budget_and_costs.average_prices_and_costs.accomodation_indication.mid_range_hotel.name} - {this.props.plan.budget_and_costs.average_prices_and_costs.accomodation_indication.mid_range_hotel.description}</p>
                    <p>{this.props.plan.budget_and_costs.average_prices_and_costs.accomodation_indication.budget_hotel.name} - {this.props.plan.budget_and_costs.average_prices_and_costs.accomodation_indication.budget_hotel.description}</p>
                    <p>{this.props.plan.budget_and_costs.average_prices_and_costs.accomodation_indication.luxury_hotel.name} - {this.props.plan.budget_and_costs.average_prices_and_costs.accomodation_indication.luxury_hotel.description}</p>
                    
                </div>
            
                <div className="container">
                    <h3>TRANSPORT/TOUR INDICATION</h3>
                    <p>{this.props.plan.budget_and_costs.average_prices_and_costs.transport_indication.day_rail_pass.name} - {this.props.plan.budget_and_costs.average_prices_and_costs.transport_indication.day_rail_pass.description}</p>
                    <p>{this.props.plan.budget_and_costs.average_prices_and_costs.transport_indication.day_tour.name} - {this.props.plan.budget_and_costs.average_prices_and_costs.transport_indication.day_tour.description}</p>
                </div>
            
                <div className="container">
                    <h3>MEAL INDICATION</h3>
                    <p>{this.props.plan.budget_and_costs.average_prices_and_costs.meal_indication.breakfast.name} - {this.props.plan.budget_and_costs.average_prices_and_costs.meal_indication.breakfast.description}</p>
                    <p>{this.props.plan.budget_and_costs.average_prices_and_costs.meal_indication.lunch.name} - {this.props.plan.budget_and_costs.average_prices_and_costs.meal_indication.lunch.description}</p>
                    <p>{this.props.plan.budget_and_costs.average_prices_and_costs.meal_indication.dinner.name} - {this.props.plan.budget_and_costs.average_prices_and_costs.meal_indication.dinner.description}</p>
                    
                </div>
                <p><a href={this.props.plan.budget_and_costs.check_prices_website_link}>Check Numbeo for a full range of prices</a></p>
                
            
            </div>
        )
    }
}
export default PlanBudgetCost;