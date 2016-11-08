import React,{Component,PropTypes} from 'react';
import axios from 'axios';
import config from '../../../../config';

class AdminPlanNewBudgetCostForm extends Component{
    static contextTypes = {
        router: PropTypes.object
    }
    componentWillMount(){
        this.state = {
            name:'',
            errMsg:'',
            flight_list:[1]
        }
    }
    componentDidMount(){
        const id = this.props.id;
        const host = config.API_SERVER;
        const url = 'http://'+host+':12000/plans/'+id;
        axios.get(url)
        .then(response=>{
            if (response.data.success){
                const name = response.data.data.name;
                this.setState({name});
            } else {
                this.setState({errMsg:response.data.errMsg});
                alert(response.data.errMsg);
            }
        })
        .catch(err=>{
            this.setState({errMsg:err.toString()});
            alert(err.toString());
        })
    }
    onNewFlightIndication(){
        let index = this.state.flight_list.length;
        index++;
        let flight_list = this.state.flight_list;
        flight_list.push(index);
        this.setState({flight_list});
    }
    onNewPlanBudgetCostSubmit(event){
        event.preventDefault();
        const cost_description = this.refs.cost_description.value;
        const check_prices_website_link = this.refs.check_prices_webiste_link.value;
        const currency_text = this.refs.currency_text.value;
        const currency_website_link = this.refs.currency_website_link.value;
        const currency = {currency_text,currency_website_link};
        
        //flight_indication
        let flight_indication = [];
        for (let i=1;i<=this.state.flight_list.length;i++){
            const name = "from_"+i;
            const cost = "cost_description_"+i;
            const From = this.refs[name].value;
            const description = this.refs[cost].value;
            flight_indication.push({From,description});
        }
        
        //accomodation indication
        const hotel_name = this.refs.hotel_name.value;
        const hotel_cost = this.refs.hotel_cost.value;
        let hotel = {name:hotel_name,description:hotel_cost};
        const mid_range_hotel_name = this.refs.mid_range_hotel_name.value;
        const mid_range_hotel_cost = this.refs.mid_range_hotel_cost.value;
        let mid_range_hotel ={name: mid_range_hotel_name,description:mid_range_hotel_cost};
        const budget_hotel_name = this.refs.budget_hotel_name.value;
        const budget_hotel_cost = this.refs.budget_hotel_cost.value;
        let budget_hotel = {name:budget_hotel_name,description:budget_hotel_cost};
        const luxury_hotel_name = this.refs.luxury_hotel_name.value;
        const luxury_hotel_cost = this.refs.luxury_hotel_cost.value;
        let luxury_hotel = {name:luxury_hotel_name,description:luxury_hotel_cost};
        let accomodation_indication = {hotel,mid_range_hotel,budget_hotel,luxury_hotel};
        
        //transport indication
        const day_tour_name = this.refs.day_tour_name.value;
        const day_tour_cost = this.refs.day_tour_cost.value;
        let day_tour = {name:day_tour_name,description:day_tour_cost};
        const day_rail_pass_name = this.refs.day_rail_pass_name.value;
        const day_rail_pass_cost  = this.refs.day_rail_pass_cost.value;
        let day_rail_pass = {name:day_rail_pass_name,description:day_rail_pass_cost};
        let transport_indication = {day_tour,day_rail_pass};
        
        //meal indication
        const breakfast_name = this.refs.breakfast_name.value;
        const breakfast_cost = this.refs.breakfast_cost.value;
        let breakfast = {name:breakfast_name,description:breakfast_cost};
        const lunch_name = this.refs.lunch_name.value;
        const lunch_cost = this.refs.lunch_cost.value;
        let lunch = {name:lunch_name,description:lunch_cost};
        const dinner_name = this.refs.dinner_name.value;
        const dinner_cost = this.refs.dinner_cost.value;
        let dinner = {name:dinner_name,description:dinner_cost};
        let meal_indication = {breakfast,lunch,dinner};  
    
        let average_prices_and_costs = {flight_indication,accomodation_indication,transport_indication,meal_indication}
        
        const budget_and_costs = {cost_description,average_prices_and_costs,currency,check_prices_website_link};
        const id = this.props.id;
        const host = config.API_SERVER;
        const url = 'http://'+host+':12000/plans/'+id;
        axios.put(url,{budget_and_costs})
        .then(response=>{
            if (response.data.success){
                this.context.router.push('/admin/plan/new/getThere/'+id);
            }else{
                this.setState({errMsg:response.data.errMsg});
                alert(response.data.errMsg);
            }
        })
        .catch(err=>{
            this.setState({errMsg:err.toString()});
            alert(err.toString());
        })
    }
    render(){
        if (this.state.errMsg!=''){
            return(
                <div>{this.state.errMsg}</div>
            )
        }
        if (this.state.name==''){
            return (
                <div>Loading data...</div>
            )
        }
        return(
            <div className="container new-plan-budget-cost">
                <form className="form-horizontal" onSubmit={this.onNewPlanBudgetCostSubmit.bind(this)}>
                    
                    {/*cost description*/}
                    <div className="form-group">
                        <div className="col-md-4">
                            <label className="control-label">{this.state.name} Cost Description</label>
                        </div>
                        <div className="col-md-8">
                            <input type="text" className="form-control" ref="cost_description" placeholder="please input the cost description" required/>
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
                                    <input type="text" className="form-control" ref="currency_text" placeholder="please input the currency name" required/>
                                </div>
                            </div>
                            <div className="form-group">
                                <div className="col-md-4">
                                    <label className="control-label">currency website link</label>
                                </div>
                                <div className="col-md-8">
                                    <input type="text" className="form-control" ref="currency_website_link" placeholder="please input the currency website link" required/>
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
                            {this.state.flight_list.map(num=>{
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
                                                    <input type="text" className="form-control" ref={"from_"+num} placeholder="please input the flight from location" required/>
                                                </div>
                                            </div>
                                            <div className="form-group">
                                                <div className="col-md-4">
                                                    <label className="control-label">cost description</label>
                                                </div>
                                                <div className="col-md-8">
                                                    <input type="text" className="form-control" ref={"cost_description_"+num} placeholder="please input the flight cost description" required/>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })}
                            <div className="col-md-12">
                                <button className="btn btn-success btn-block" onClick={this.onNewFlightIndication.bind(this)}>Add new flight indication</button>
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
                                            <input type="text" className="form-control" ref="hotel_name" placeholder="please input the name" required/>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <div className="col-md-4">
                                            <label className="control-label">cost description</label>
                                        </div>
                                        <div className="col-md-8">
                                            <input type="text" className="form-control" ref="hotel_cost" placeholder="please input cost description" required/>
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
                                            <input type="text" className="form-control" ref="mid_range_hotel_name" placeholder="please input the name" required/>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <div className="col-md-4">
                                            <label className="control-label">cost description</label>
                                        </div>
                                        <div className="col-md-8">
                                            <input type="text" className="form-control" ref="mid_range_hotel_cost" placeholder="please input cost description" required/>
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
                                            <input type="text" className="form-control" ref="budget_hotel_name" placeholder="please input the name" required/>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <div className="col-md-4">
                                            <label className="control-label">cost description</label>
                                        </div>
                                        <div className="col-md-8">
                                            <input type="text" className="form-control" ref="budget_hotel_cost" placeholder="please input cost description" required/>
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
                                            <input type="text" className="form-control" ref="luxury_hotel_name" placeholder="please input the name" required/>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <div className="col-md-4">
                                            <label className="control-label">cost description</label>
                                        </div>
                                        <div className="col-md-8">
                                            <input type="text" className="form-control" ref="luxury_hotel_cost" placeholder="please input cost description" required/>
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
                                            <input type="text" className="form-control" ref="day_tour_name" placeholder="please input the name" required/>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <div className="col-md-4">
                                            <label className="control-label">cost description</label>
                                        </div>
                                        <div className="col-md-8">
                                            <input type="text" className="form-control" ref="day_tour_cost" placeholder="please input cost description" required/>
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
                                            <input type="text" className="form-control" ref="day_rail_pass_name" placeholder="please input the name" required/>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <div className="col-md-4">
                                            <label className="control-label">cost description</label>
                                        </div>
                                        <div className="col-md-8">
                                            <input type="text" className="form-control" ref="day_rail_pass_cost" placeholder="please input cost description" required/>
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
                                            <input type="text" className="form-control" ref="breakfast_name" placeholder="please input the name" required/>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <div className="col-md-4">
                                            <label className="control-label">cost description</label>
                                        </div>
                                        <div className="col-md-8">
                                            <input type="text" className="form-control" ref="breakfast_cost" placeholder="please input cost description" required/>
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
                                            <input type="text" className="form-control" ref="lunch_name" placeholder="please input the name" required/>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <div className="col-md-4">
                                            <label className="control-label">cost description</label>
                                        </div>
                                        <div className="col-md-8">
                                            <input type="text" className="form-control" ref="lunch_cost" placeholder="please input cost description" required/>
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
                                            <input type="text" className="form-control" ref="dinner_name" placeholder="please input the name" required/>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <div className="col-md-4">
                                            <label className="control-label">cost description</label>
                                        </div>
                                        <div className="col-md-8">
                                            <input type="text" className="form-control" ref="dinner_cost" placeholder="please input cost description" required/>
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
                            <input type="text" className="form-control" ref="check_prices_webiste_link" placeholder="please input the check price website link" required/>
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
export default AdminPlanNewBudgetCostForm;