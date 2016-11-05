import React,{Component,PropTypes} from 'react';
import axios from 'axios';

class AdminPlanNewGetThereForm extends Component{
    static contextTypes = {
        router: PropTypes.object
    }
    componentWillMount(){
        this.state = {
            errMsg:'',
            name:'',
            airport_list:[1],
            full_service_airlines_list:[1],
            budget_airlines_list:[1]
        }
    }
    componentDidMount(){
        const id = this.props.id;
        axios.get("http://localhost:12000/plans/"+id)
        .then(response=>{
            if (response.data.success){
                const name = response.data.data.name;
                this.setState({name});
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
    onNewInternationalAirport(){
        let index = this.state.airport_list.length;
        index++;
        let airport_list = this.state.airport_list;
        airport_list.push(index);
        this.setState({airport_list});
    }
    onNewFullServiceAirline(){
        let index = this.state.full_service_airlines_list.length;
        index++;
        let full_service_airlines_list = this.state.full_service_airlines_list;
        full_service_airlines_list.push(index);
        this.setState({full_service_airlines_list});
    }
    onNewBudgetAirline(){
        let index = this.state.budget_airlines_list.length;
        index++;
        let budget_airlines_list = this.state.budget_airlines_list;
        budget_airlines_list.push(index);
        this.setState({budget_airlines_list});
    }
    onNewPlanGetThereSubmit(event){
        event.preventDefault();
        
        //international_airports
        let international_airports = [];
        for (let i=1;i<=this.state.airport_list.length;i++){
            const name = "international_airport_name_"+i;
            const airport_name = this.refs[name].value;
            const lat_name = "lat_"+i;
            const lat = this.refs[lat_name].value;
            const lon_name = "long_"+i;
            const lon = this.refs[lon_name].value;
            const geo_location = {lat,lon};
            const airport_website_link_name = "international_airport_website_link_"+i;
            const airport_website_link = this.refs[airport_website_link_name].value;
            international_airports.push({airport_name,geo_location,airport_website_link});
        }
        
        //flights
        const full_service_airlines_image_link = this.refs.full_service_airlines_image_link.value;
        const full_service_website_link = this.refs.full_service_airlines_website_link.value;
        const full_service_text = this.refs.full_service_airlines_text.value;
        let full_service_airline_list_website = [];
        for (let i=1;i<=this.state.full_service_airlines_list.length;i++){
            const full_service_airlines_name = "full_service_airlines_name_"+i;
            const full_service_name = this.refs[full_service_airlines_name].value;
            const full_service_website_link_name = "full_service_airlines_website_link_"+i;
            const full_service_extra_website_link = this.refs[full_service_website_link_name].value;
            full_service_airline_list_website.push({
                name:full_service_name,
                website_link:full_service_extra_website_link
            });
        }
        const full_service_airlines = {
            full_service_airlines_image_link:full_service_airlines_image_link,
            website_link:full_service_website_link,
            text:full_service_text,
            full_service_airline_list_website:full_service_airline_list_website
        };
        
        const budget_airlines_image_link = this.refs.budget_airlines_image_link.value;
        const budget_website_link = this.refs.budget_airlines_website_link.value;
        const budget_text = this.refs.budget_airlines_text.value;
        let budget_airline_list_website = [];
        for (let i=1;i<=this.state.budget_airlines_list.length;i++){
            const budget_airlines_name = "budget_airlines_name_"+i;
            const budget_name = this.refs[budget_airlines_name].value;
            const budget_website_link_name = "budget_airlines_website_link_"+i;
            const budget_extra_website_link = this.refs[budget_website_link_name].value;
            budget_airline_list_website.push({
                name:budget_name,
                website_link:budget_extra_website_link
            });
        }
        const budget_airlines = {
            budget_airlines_image_link:budget_airlines_image_link,
            website_link:budget_website_link,
            text:budget_text,
            budget_airline_list_website:budget_airline_list_website
        };
        const flights = {full_service_airlines,budget_airlines}
        
        //cruise
        const cruise_image_link = this.refs.cruise_image_link.value;
        const website_link = this.refs.cruise_website_link.value;
        const text = this.refs.cruise_text.value;
        const cruise_website = this.refs.cruise_extra_website_link.value;
        const cruise = {cruise_image_link,website_link,text,cruise_website};
        
        const how_to_get_there = {international_airports,flights,cruise};
        const id = this.props.id;
        axios.put("http://localhost:12000/plans/"+id,{how_to_get_there})
        .then(response=>{
            if (response.data.success){
                this.context.router.push('/admin/plan/new/getAround/'+id)
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
            <div className="container new-plan-get-there">
                <form className="form-horizontal" onSubmit={this.onNewPlanGetThereSubmit.bind(this)}>
            
                    {/* international airport */}
                    <div className="panel panel-default">
                        <div className="panel-heading">
                            {this.state.name} international airport
                        </div>
                        <div className="panel-body">
                            {this.state.airport_list.map(num=>{
                                return (
                                    <div className="panel panel-default" key={"airport_"+num}>
                                        <div className="panel-heading">
                                            international airport {num}
                                        </div>
                                        <div className="panel-body">
                                            <div className="form-group">
                                                <div className="col-md-4">
                                                    <label className="control-label">international airport name</label>
                                                </div>
                                                <div className="col-md-8">
                                                    <input type="text" className="form-control" ref={"international_airport_name_"+num} placeholder="please input the international airport name" required/>
                                                </div>
                                            </div>
                                            <div className="form-group">
                                                <div className="col-md-4">
                                                    <label className="control-label">international airport latitude</label>
                                                </div>
                                                <div className="col-md-8">
                                                    <input type="text" className="form-control" ref={"lat_"+num} placeholder="please input the international airport location latitude" required/>
                                                </div>
                                            </div>
                                            <div className="form-group">
                                                <div className="col-md-4">
                                                    <label className="control-label">international airport longitude</label>
                                                </div>
                                                <div className="col-md-8">
                                                    <input type="text" className="form-control" ref={"long_"+num} placeholder="please input the international airport longitude" required/>
                                                </div>
                                            </div>
                                            <div className="form-group">
                                                <div className="col-md-4">
                                                    <label className="control-label">international airport website link</label>
                                                </div>
                                                <div className="col-md-8">
                                                    <input type="text" className="form-control" ref={"international_airport_website_link_"+num} placeholder="please input the international airport website link" required/>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                        )
                            })}

                            <div className="col-md-12">
                                <button className="btn btn-success btn-block" onClick={this.onNewInternationalAirport.bind(this)}>Add a New international airport</button>
                            </div>
                        </div>
                    </div>
                    
                    {/*full service airlines*/}
                    <div className="panel panel-default">
                        <div className="panel-heading">
                            {this.state.name} full service airlines
                        </div>
                        <div className="panel-body">
                            <div className="form-group">
                                <div className="col-md-4">
                                    <label className="control-label">full service airlines image link</label>
                                </div>
                                <div className="col-md-8">
                                    <input type="text" className="form-control" ref="full_service_airlines_image_link" placeholder="please input the full service airlines image link" required/>
                                </div>
                                
                            </div>
                            <div className="form-group">
                                <div className="col-md-4">
                                    <label className="control-label">full service airlines website link</label>
                                </div>
                                <div className="col-md-8">
                                    <input type="text" className="form-control" ref="full_service_airlines_website_link" placeholder="please input the full service airlines website link" required/>
                                </div>
                            </div>
                            <div className="form-group">
                                <div className="col-md-4">
                                    <label className="control-label">full service airlines text</label>
                                </div>
                                <div className="col-md-8">
                                    <input type="text" className="form-control" ref="full_service_airlines_text" placeholder="please input the full service airlines text" required/>
                                </div>
                            </div>
                            {this.state.full_service_airlines_list.map(num=>{
                                return (
                                    <div className="panel panel-default" key={"full_service_airline_website_"+num}>
                                        <div className="panel-heading">
                                            full service airlines {num}
                                        </div>
                                        <div className="panel-body">
                                            <div className="form-group">
                                                <div className="col-md-4">
                                                    <label className="control-label">airline name</label>
                                                </div>
                                                <div className="col-md-8">
                                                    <input type="text" className="form-control" ref={"full_service_airlines_name_"+num} placeholder="please input the full service airlines name" required/>
                                                </div>
                                            </div>
                                            <div className="form-group">
                                                <div className="col-md-4">
                                                    <label className="control-label">airline website link</label>
                                                </div>
                                                <div className="col-md-8">
                                                    <input type="text" className="form-control" ref={"full_service_airlines_website_link_"+num} placeholder="please input the full service airlines website link" required/>
                                                </div>
                                            </div> 
                                        </div>
                                    </div>
                                )
                            })}
                            <div className="col-md-12">
                                <button className="btn btn-success btn-block" onClick={this.onNewFullServiceAirline.bind(this)}>Add a New full service airline</button>
                            </div>
                        </div>
                    </div>
                                
                    {/*budget airlines*/}
                     <div className="panel panel-default">
                        <div className="panel-heading">
                            {this.state.name} budget airlines
                        </div>
                        <div className="panel-body">
                            <div className="form-group">
                                <div className="col-md-4">
                                    <label className="control-label">budget airlines image link</label>
                                </div>
                                <div className="col-md-8">
                                    <input type="text" className="form-control" ref="budget_airlines_image_link" placeholder="please input the budget airlines image link" required/>
                                </div>
                                
                            </div>
                            <div className="form-group">
                                <div className="col-md-4">
                                    <label className="control-label">budget airlines website link</label>
                                </div>
                                <div className="col-md-8">
                                    <input type="text" className="form-control" ref="budget_airlines_website_link" placeholder="please input the budget airlines website link" required/>
                                </div>
                            </div>
                            <div className="form-group">
                                <div className="col-md-4">
                                    <label className="control-label">budget airlines text</label>
                                </div>
                                <div className="col-md-8">
                                    <input type="text" className="form-control" ref="budget_airlines_text" placeholder="please input the budget airlines text" required/>
                                </div>
                            </div>
                            {this.state.budget_airlines_list.map(num=>{
                                return (
                                    <div className="panel panel-default" key={"budget_airline_website_"+num}>
                                        <div className="panel-heading">
                                            budget airlines {num}
                                        </div>
                                        <div className="panel-body">
                                            <div className="form-group">
                                                <div className="col-md-4">
                                                    <label className="control-label">airline name</label>
                                                </div>
                                                <div className="col-md-8">
                                                    <input type="text" className="form-control" ref={"budget_airlines_name_"+num} placeholder="please input the full service airlines name" required/>
                                                </div>
                                            </div>
                                            <div className="form-group">
                                                <div className="col-md-4">
                                                    <label className="control-label">airline website link</label>
                                                </div>
                                                <div className="col-md-8">
                                                    <input type="text" className="form-control" ref={"budget_airlines_website_link_"+num} placeholder="please input the full service airlines website link" required/>
                                                </div>
                                            </div> 
                                        </div>
                                    </div>
                                )
                            })}
                            <div className="col-md-12">
                                <button className="btn btn-success btn-block" onClick={this.onNewBudgetAirline.bind(this)}>Add a new budget airline</button>
                            </div>
                        </div>
                    </div>

                    {/*cruise*/}
                    <div className="panel panel-default">
                        <div className="panel-heading">
                            {this.state.name} cruise
                        </div>
                        <div className="panel-body">
                            <div className="form-group">
                                <div className="col-md-4">
                                    <label className="control-label">cruise image link</label>
                                </div>
                                <div className="col-md-8">
                                    <input type="text" className="form-control" ref="cruise_image_link" placeholder="please input the cruise image link" required/>
                                </div>
                            </div>
                            <div className="form-group">
                                <div className="col-md-4">
                                    <label className="control-label">cruise website link</label>
                                </div>
                                <div className="col-md-8">
                                    <input type="text" className="form-control" ref="cruise_website_link" placeholder="please input the cruise website link" required/>
                                </div>
                            </div>
                            <div className="form-group">
                                <div className="col-md-4">
                                    <label className="control-label">cruise text</label>
                                </div>
                                <div className="col-md-8">
                                    <input type="text" className="form-control" ref="cruise_text" placeholder="please input the cruise text" required/>
                                </div>
                            </div>
                            <div className="form-group">
                                <div className="col-md-4">
                                    <label className="control-label">cruise extra website link</label>
                                </div>
                                <div className="col-md-8">
                                    <input type="text" className="form-control" ref="cruise_extra_website_link" placeholder="please input the cruise extra website link" required/>
                                </div>
                            </div>
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
export default AdminPlanNewGetThereForm;