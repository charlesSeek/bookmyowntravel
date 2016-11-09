import React, {Component} from 'react';
import axios from 'axios';
import config from '../../../../config';

class PlanBudgetCostUpdateForm extends Component{
    componentWillMount(){
        this.state = {
            countries: undefined,
            errMsg:'',
            plan:undefined,
            isHiddenErrMsg:true,
            isHiddenSuccessMsg:true
        }
    }
    componentDidMount(){
        const id = this.props.id;
        const host = config.API_SERVER;
        const country_url = "http://"+host+":12000/countries";
        axios.get(country_url)
        .then((response)=>{
            if (response.data.success){
                const countries = response.data.data;
                this.setState({countries});
            }else{
                alert(resposnse.data.errMsg);
            }
        })
        .catch(err=>{
            this.setState({errMsg:err.toString()})
            alert(err.toString);
        });
        const plan_url = "http://"+host+":12000/plans/"+id;
        axios.get(plan_url)
        .then((response)=>{
            if (response.data.success){
                const plan = response.data.data;
                this.setState({plan});
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
    onChangeCostsDescription(event){
        const costs_description = event.target.value;
        let plan = this.state.plan;
        plan.budget_and_costs.costs_description = costs_description;
        this.setState({plan});
    }
    onChangeCurrencyText(event){
        const currency_text = event.target.value;
        let plan = this.state.plan;
        plan.budget_and_costs.currency.currency_text = currency_text;
        this.setState({plan});
    }
    onChangeCurrencyWebsiteLink(event){
        const currency_website_link = event.target.value;
        let plan = this.state.plan;
        plan.budget_and_costs.currency.currency_website_link = currency_website_link;
        this.setState({plan});
    }
    onChangeFlightIndicationFrom(event){
        const From = event.target.value;
        const index = event.target.name.substring(18);
        let plan = this.state.plan;
        plan.budget_and_costs.average_prices_and_costs.flight_indication[index].From = From;
        this.setState({plan});
    }
    onChangeFlightIndicationDescription(event){
        const description = event.target.value;
        const index = event.target.name.substring(18);
        let plan = this.state.plan;
        plan.budget_and_costs.average_prices_and_costs.flight_indication[index].description = description;
        this.setState({plan});
    }
    onChangeAccomodationIndicationHotelName(event){
        const name = event.target.value;
        let plan = this.state.plan;
        plan.budget_and_costs.average_prices_and_costs.accomodation_indication.hotel.name = name;
        this.setState({plan});
    }
    onChangeAccomodationIndicationHotelDescription(event){
        const description = event.target.value;
        let plan = this.state.plan;
        plan.budget_and_costs.average_prices_and_costs.accomodation_indication.hotel.description = description;
        this.setState({plan});
    }
    onChangeAccomodationIndicationMigRangeHotelName(event){
        const name = event.target.value;
        let plan = this.state.plan;
        plan.budget_and_costs.average_prices_and_costs.accomodation_indication.mid_range_hotel.name = name;
        this.setState({plan});
    }
    onChangeAccomodationIndicationMigRangeHotelDescription(event){
        const description = event.target.value;
        let plan = this.state.plan;
        plan.budget_and_costs.average_prices_and_costs.accomodation_indication.mid_range_hotel.description = description;
        this.setState({plan});
    }
    onChangeAccomodationIndicationBudgetHotelName(event){
        const name = event.target.value;
        let plan = this.state.plan;
        plan.budget_and_costs.average_prices_and_costs.accomodation_indication.budget_hotel.name = name;
        this.setState({plan});
    }
    onChangeAccomodationIndicationBudgetHotelDescription(event){
        const description = event.target.value;
        let plan = this.state.plan;
        plan.budget_and_costs.average_prices_and_costs.accomodation_indication.budget_hotel.description = description;
        this.setState({plan});
    }
    onChangeAccomodationIndicationLuxuryHotelName(event){
        const name = event.target.value;
        let plan = this.state.plan;
        plan.budget_and_costs.average_prices_and_costs.accomodation_indication.luxury_hotel.name = name;
        this.setState({plan});
    }
    onChangeAccomodationIndicationLuxuryHotelDescription(event){
        const description = event.target.value;
        let plan = this.state.plan;
        plan.budget_and_costs.average_prices_and_costs.accomodation_indication.luxury_hotel.description = description;
        this.setState({plan});
    }
    onChangeTransportIndicationDayTourName(event){
        const name = event.target.value;
        let plan = this.state.plan;
        plan.budget_and_costs.average_prices_and_costs.transport_indication.day_tour.name = name;
        this.setState({plan});
    }
    onChangeTransportIndicationDayTourDescription(event){
        const description = event.target.value;
        let plan = this.state.plan;
        plan.budget_and_costs.average_prices_and_costs.transport_indication.day_tour.description = description;
        this.setState({plan});
    }
    onChangeTransportIndicationDayRailPassName(event){
        const name = event.target.value;
        let plan = this.state.plan;
        plan.budget_and_costs.average_prices_and_costs.transport_indication.day_rail_pass.name = name;
        this.setState({plan});
    }
    onChangeTransportIndicationDayRailPassDescription(event){
        const description = event.target.value;
        let plan = this.state.plan;
        plan.budget_and_costs.average_prices_and_costs.transport_indication.day_rail_pass.description = description;
        this.setState({plan});
    }
    onChangeMealIndicationBreakfastName(event){
        const name = event.target.value;
        let plan = this.state.plan;
        plan.budget_and_costs.average_prices_and_costs.meal_indication.breakfast.name = name;
        this.setState({plan});
    }
    onChangeMealIndicationBreakfastDescription(event){
        const description = event.target.value;
        let plan = this.state.plan;
        plan.budget_and_costs.average_prices_and_costs.meal_indication.breakfast.description = description;
        this.setState({plan});
    }
    onChangeMealIndicationLunchName(event){
        const name = event.target.value;
        let plan = this.state.plan;
        plan.budget_and_costs.average_prices_and_costs.meal_indication.lunch.name = name;
        this.setState({plan});
    }
    onChangeMealIndicationLunchDescription(event){
        const description = event.target.value;
        let plan = this.state.plan;
        plan.budget_and_costs.average_prices_and_costs.meal_indication.lunch.description = description;
        this.setState({plan});
    }
    onChangeMealIndicationDinnerName(event){
        const name = event.target.value;
        let plan = this.state.plan;
        plan.budget_and_costs.average_prices_and_costs.meal_indication.dinner.name = name;
        this.setState({plan});
    }
    onChangeMealIndicationDinnerDescription(event){
        const description = event.target.value;
        let plan = this.state.plan;
        plan.budget_and_costs.average_prices_and_costs.meal_indication.dinner.description = description;
        this.setState({plan});
    }
    onChangeCheckPricesWebsiteLink(event){
        const check_prices_website_link = event.target.value;
        let plan = this.state.plan;
        plan.budget_and_costs.check_prices_website_link = check_prices_website_link;
        this.setState({plan});
    }
    removeFlightIndication(num){
        let plan = this.state.plan;
        const newFlightIndication = plan.budget_and_costs.average_prices_and_costs.flight_indication.filter((flight,index)=>{
            return index !=num;
        })
        plan.budget_and_costs.average_prices_and_costs.flight_indication = newFlightIndication;
        this.setState({plan});
    }
    addNewFlightIndication(){
        const flight = {"From":"","description":""};
        let plan = this.state.plan;
        plan.budget_and_costs.average_prices_and_costs.flight_indication.push(flight);
        this.setState({plan});
    }
    onUpdateBudgetCostSubmit(event){
        event.preventDefault();
        const id = this.props.id;
        const host = config.API_SERVER;
        const url = "http://"+host+":12000/plans/"+id;
        const plan = this.state.plan;
        axios.put(url,plan)
        .then(response=>{
            if (response.data.success){
                this.setState({isHiddenSuccessMsg:false});
            }else{
                const errMsg = response.data.errMsg;
                this.setState({errMsg});
                this.setState({isHiddenErrMsg:false});
                //alert(errMsg)
            }
        })
        .catch(err=>{
            this.setState({errMsg:err.toString()});
            this.setState({isHiddenErrMsg:false});
            //alert(err.toString());
        })
    }
    render(){
        if (this.state.errMsg!=''){
            return(
                <div>{this.state.errMsg}</div>
            )
        }
        if (this.state.countries==undefined||this.state.plan==undefined){
            return(
                <div>Loading country data...</div>
            )
        }
        return(
            <div className="container new-plan-budget-cost">
                <form className="form-horizontal" onSubmit={this.onUpdateBudgetCostSubmit.bind(this)}>
                    
                    {/*cost description*/}
                    <div className="form-group">
                        <div className="col-md-4">
                            <label className="control-label">{this.state.name} Cost Description</label>
                        </div>
                        <div className="col-md-8">
                            <textarea rows="5" type="text" className="form-control" value={this.state.plan.budget_and_costs.costs_description} onChange={this.onChangeCostsDescription.bind(this)} required></textarea>
                        </div>
                    </div>
                            
                    {/* currency */}
                    <div className="panel panel-default">
                        <div className="panel-heading">
                            {this.state.name} currency
                        </div>
                        <div className="panel-body">
                            <div className="form-group">
                                <div className="col-md-4">
                                    <label className="control-label">currency text</label>
                                </div>
                                <div className="col-md-8">
                                    <input type="text" className="form-control" value={this.state.plan.budget_and_costs.currency.currency_text} onChange={this.onChangeCurrencyText.bind(this)} required/>
                                </div>
                            </div>
                            <div className="form-group">
                                <div className="col-md-4">
                                    <label className="control-label">currency website link</label>
                                </div>
                                <div className="col-md-8">
                                    <input type="text" className="form-control" value={this.state.plan.budget_and_costs.currency.currency_website_link} onChange={this.onChangeCurrencyWebsiteLink.bind(this)} required/>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    {/*flight indication*/}
                    <div className="panel panel-default">
                        <div className="panel-heading">
                            {this.state.name} flight cost indication
                        </div>
                        <div className="panel-body">
                            {this.state.plan.budget_and_costs.average_prices_and_costs.flight_indication.map((flight,num)=>{
                                const name="flight_indication_"+num;
                                return(
                                    <div className="panel panel-default" key={"fligh_indication_"+num}>
                                        <div className="panel-heading">
                                            flight indication {num}
                                        </div>
                                        <div className="panel-body">
                                            <div className="form-group">
                                                <div className="col-md-4">
                                                    <label className="control-label">From </label>
                                                </div>
                                                <div className="col-md-8">
                                                    <input type="text" className="form-control" value={flight.From} name={name} onChange={this.onChangeFlightIndicationFrom.bind(this)} required/>
                                                </div>
                                            </div>
                                            <div className="form-group">
                                                <div className="col-md-4">
                                                    <label className="control-label">cost description</label>
                                                </div>
                                                <div className="col-md-8">
                                                    <input type="text" className="form-control" value={flight.description} name={name} onChange={this.onChangeFlightIndicationDescription.bind(this)} required/>
                                                </div>
                                            </div>
                                            <div className="col-md-12">
                                                <button className="btn btn-success btn-block" onClick={()=>this.removeFlightIndication(num)}>Remove a flight indication</button>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })}
                            <div className="col-md-12">
                                <button className="btn btn-success btn-block" onClick={this.addNewFlightIndication.bind(this)}>Add new flight indication</button>
                            </div>
                        </div>
                    </div>
                    
                    {/*accomodation cost indication*/}
                    <div className="panel panel-default">
                        <div className="panel-heading">
                            {this.state.name} accomodation cost indication
                        </div>
                        <div className="panel-body">
                            <div className="panel panel-default">
                                <div className="panel-heading">
                                    Hostel
                                </div>
                                <div className="panel-body">
                                    <div className="form-group">
                                        <div className="col-md-4">
                                            <label className="control-label">Name </label>
                                        </div>
                                        <div className="col-md-8">
                                            <input type="text" className="form-control" value={this.state.plan.budget_and_costs.average_prices_and_costs.accomodation_indication.hotel.name} onChange={this.onChangeAccomodationIndicationHotelName.bind(this)} required/>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <div className="col-md-4">
                                            <label className="control-label">cost description</label>
                                        </div>
                                        <div className="col-md-8">
                                            <input type="text" className="form-control" value={this.state.plan.budget_and_costs.average_prices_and_costs.accomodation_indication.hotel.description} onChange={this.onChangeAccomodationIndicationHotelDescription.bind(this)} required/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="panel panel-default">
                                <div className="panel-heading">
                                    Mid Range Hotel
                                </div>
                                <div className="panel-body">
                                    <div className="form-group">
                                        <div className="col-md-4">
                                            <label className="control-label">Name </label>
                                        </div>
                                        <div className="col-md-8">
                                            <input type="text" className="form-control" value={this.state.plan.budget_and_costs.average_prices_and_costs.accomodation_indication.mid_range_hotel.name} onChange={this.onChangeAccomodationIndicationMigRangeHotelName.bind(this)} required/>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <div className="col-md-4">
                                            <label className="control-label">cost description</label>
                                        </div>
                                        <div className="col-md-8">
                                            <input type="text" className="form-control" value={this.state.plan.budget_and_costs.average_prices_and_costs.accomodation_indication.mid_range_hotel.description} onChange={this.onChangeAccomodationIndicationMigRangeHotelDescription.bind(this)} required/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="panel panel-default">
                                <div className="panel-heading">
                                    Budget Hotel
                                </div>
                                <div className="panel-body">
                                    <div className="form-group">
                                        <div className="col-md-4">
                                            <label className="control-label">Name </label>
                                        </div>
                                        <div className="col-md-8">
                                            <input type="text" className="form-control" value={this.state.plan.budget_and_costs.average_prices_and_costs.accomodation_indication.budget_hotel.name} onChange={this.onChangeAccomodationIndicationBudgetHotelName.bind(this)} required/>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <div className="col-md-4">
                                            <label className="control-label">cost description</label>
                                        </div>
                                        <div className="col-md-8">
                                            <input type="text" className="form-control" value={this.state.plan.budget_and_costs.average_prices_and_costs.accomodation_indication.budget_hotel.description} onChange={this.onChangeAccomodationIndicationBudgetHotelDescription.bind(this)} required/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="panel panel-default">
                                <div className="panel-heading">
                                    Luxury Hotel
                                </div>
                                <div className="panel-body">
                                    <div className="form-group">
                                        <div className="col-md-4">
                                            <label className="control-label">Name </label>
                                        </div>
                                        <div className="col-md-8">
                                            <input type="text" className="form-control" value={this.state.plan.budget_and_costs.average_prices_and_costs.accomodation_indication.luxury_hotel.name} onChange={this.onChangeAccomodationIndicationLuxuryHotelName.bind(this)} required/>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <div className="col-md-4">
                                            <label className="control-label">cost description</label>
                                        </div>
                                        <div className="col-md-8">
                                            <input type="text" className="form-control" value={this.state.plan.budget_and_costs.average_prices_and_costs.accomodation_indication.luxury_hotel.description} onChange={this.onChangeAccomodationIndicationLuxuryHotelDescription.bind(this)} required/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    {/*transport indication*/}
                    <div className="panel panel-default">
                        <div className="panel-heading">
                            {this.state.name} transport cost indication
                        </div>
                        <div className="panel-body">
                            <div className="panel panel-default">
                                <div className="panel-heading">
                                    Day tour
                                </div>
                                <div className="panel-body">
                                    <div className="form-group">
                                        <div className="col-md-4">
                                            <label className="control-label">Name </label>
                                        </div>
                                        <div className="col-md-8">
                                            <input type="text" className="form-control" value={this.state.plan.budget_and_costs.average_prices_and_costs.transport_indication.day_tour.name} onChange={this.onChangeTransportIndicationDayTourName.bind(this)} required/>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <div className="col-md-4">
                                            <label className="control-label">cost description</label>
                                        </div>
                                        <div className="col-md-8">
                                            <input type="text" className="form-control" value={this.state.plan.budget_and_costs.average_prices_and_costs.transport_indication.day_tour.description} onChange={this.onChangeTransportIndicationDayTourDescription.bind(this)} required/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="panel panel-default">
                                <div className="panel-heading">
                                    Day rail pass
                                </div>
                                <div className="panel-body">
                                    <div className="form-group">
                                        <div className="col-md-4">
                                            <label className="control-label">Name </label>
                                        </div>
                                        <div className="col-md-8">
                                            <input type="text" className="form-control" value={this.state.plan.budget_and_costs.average_prices_and_costs.transport_indication.day_rail_pass.name} onChange={this.onChangeTransportIndicationDayRailPassName.bind(this)} required/>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <div className="col-md-4">
                                            <label className="control-label">cost description</label>
                                        </div>
                                        <div className="col-md-8">
                                            <input type="text" className="form-control" value={this.state.plan.budget_and_costs.average_prices_and_costs.transport_indication.day_rail_pass.description} onChange={this.onChangeTransportIndicationDayRailPassDescription.bind(this)} required/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    {/*meal cost indication*/}
                    <div className="panel panel-default">
                        <div className="panel-heading">
                            {this.state.name} meal cost indication
                        </div>
                        <div className="panel-body">
                            <div className="panel panel-default">
                                <div className="panel-heading">
                                    Breakfast
                                </div>
                                <div className="panel-body">
                                    <div className="form-group">
                                        <div className="col-md-4">
                                            <label className="control-label">Name </label>
                                        </div>
                                        <div className="col-md-8">
                                            <input type="text" className="form-control" value={this.state.plan.budget_and_costs.average_prices_and_costs.meal_indication.breakfast.name} onChange={this.onChangeMealIndicationBreakfastName.bind(this)} required/>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <div className="col-md-4">
                                            <label className="control-label">cost description</label>
                                        </div>
                                        <div className="col-md-8">
                                            <input type="text" className="form-control" value={this.state.plan.budget_and_costs.average_prices_and_costs.meal_indication.breakfast.description} onChange={this.onChangeMealIndicationBreakfastDescription.bind(this)} required/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="panel panel-default">
                                <div className="panel-heading">
                                    Lunch
                                </div>
                                <div className="panel-body">
                                    <div className="form-group">
                                        <div className="col-md-4">
                                            <label className="control-label">Name </label>
                                        </div>
                                        <div className="col-md-8">
                                            <input type="text" className="form-control" value={this.state.plan.budget_and_costs.average_prices_and_costs.meal_indication.lunch.name} onChange={this.onChangeMealIndicationLunchName.bind(this)} required/>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <div className="col-md-4">
                                            <label className="control-label">cost description</label>
                                        </div>
                                        <div className="col-md-8">
                                            <input type="text" className="form-control" value={this.state.plan.budget_and_costs.average_prices_and_costs.meal_indication.lunch.description} onChange={this.onChangeMealIndicationLunchDescription.bind(this)} required/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="panel panel-default">
                                <div className="panel-heading">
                                    Dinner
                                </div>
                                <div className="panel-body">
                                    <div className="form-group">
                                        <div className="col-md-4">
                                            <label className="control-label">Name </label>
                                        </div>
                                        <div className="col-md-8">
                                            <input type="text" className="form-control" value={this.state.plan.budget_and_costs.average_prices_and_costs.meal_indication.dinner.name} onChange={this.onChangeMealIndicationDinnerName.bind(this)} required/>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <div className="col-md-4">
                                            <label className="control-label">cost description</label>
                                        </div>
                                        <div className="col-md-8">
                                            <input type="text" className="form-control" value={this.state.plan.budget_and_costs.average_prices_and_costs.meal_indication.dinner.description} onChange={this.onChangeMealIndicationDinnerDescription.bind(this)} required/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    {/*check prices website link*/}
                    <div className="form-group">
                        <div className="col-md-4">
                            <label className="control-label">check prices website link</label>
                        </div>
                        <div className="col-md-8">
                            <input type="text" className="form-control" value={this.state.plan.budget_and_costs.check_prices_website_link} onChange={this.onChangeCheckPricesWebsiteLink.bind(this)} required/>
                        </div>
                    </div>
                    
                    {/*Message field*/}
                    <div className={this.state.isHiddenErrMsg?'hidden':''}>
                        <div className="col-md-12">
                            <h4 className="error-msg">{this.state.errMsg}</h4>
                        </div>
                    </div>
                    <div className={this.state.isHiddenSuccessMsg?'hidden':''}>
                        <div className="col-md-12">
                            <h4 className="success-msg">The plan info has successfully updated</h4>
                        </div>
                    </div>
                            
                    <div className="form-group">
                        <div className="col-md-8">
                            <button type="submit" className="btn btn-success">Save and Continued</button>&nbsp;&nbsp;
                            <button type="reset" className="btn btn-danger">Cancel</button>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}
export default PlanBudgetCostUpdateForm;