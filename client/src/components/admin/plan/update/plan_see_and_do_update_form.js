import React,{Component} from 'react';
import axios from 'axios';
import config from '../../../../config'

class PlanSeeAndDoUpdateForm extends Component{
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
    onChangeActivityName(event){
        const activity_name = event.target.value;
        const field = event.target.name;
        let plan = this.state.plan;
        plan.what_to_see_and_do[field].activity_name = activity_name;
        this.setState({plan});
    }
    onChangeActivityWebsiteLink(event){
        const activity_website_link = event.target.value;
        const field = event.target.name;
        let plan = this.state.plan;
        plan.what_to_see_and_do[field].activity_website_link = activity_website_link;
        this.setState({plan});
    }
    onChangeSuggestedItinerariesName(event){
        const itinerary_name = event.target.value;
        const field = event.target.name;
        let plan = this.state.plan;
        plan.what_to_see_and_do[field].itinerary_name = itinerary_name;
        this.setState({plan});
    }
    onChangeSuggestedItinerariesImageLink(event){
        const itinerary_image_link = event.target.value;
        const field = event.target.name;
        let plan = this.state.plan;
        plan.what_to_see_and_do[field].itinerary_image_link = itinerary_image_link;
        this.setState({plan});
    }
    onChangeSuggestedItinerariesWebsiteLink(event){
        const itinerary_website_link = event.target.value;
        const field = event.target.name;
        let plan = this.state.plan;
        plan.what_to_see_and_do[field].itinerary_website_link = itinerary_website_link;
        this.setState({plan});
    }
    onChangeTopPlaceName(event){
        const top_place_name = event.target.value;
        let plan = this.state.plan;
        const index = event.target.name.substring(11);
        plan.what_to_see_and_do.top_places[index].top_place_name = top_place_name;
        this.setState({plan});
    }
    onChangeTopPlaceImageLink(event){
        const top_place_image_link = event.target.value;
        let plan = this.state.plan;
        const index = event.target.name.substring(11);
        plan.what_to_see_and_do.top_places[index].top_place_image_link = top_place_image_link;
        this.setState({plan});
    }
    onChangeTopPlaceWebsiteLink(event){
        const top_place_website_link = event.target.value;
        let plan = this.state.plan;
        const index = event.target.name.substring(11);
        plan.what_to_see_and_do.top_places[index].top_place_website_link = top_place_website_link;
        this.setState({plan});
    }
    removeTopPlace(num){
        let plan = this.state.plan;
        const top_places = this.state.plan.what_to_see_and_do.top_places;
        const newTopPlaces = top_places.filter((place,index)=>{
            return index != num;
        });
        plan.what_to_see_and_do.top_places = newTopPlaces;
        this.setState({plan});
    }
    onAddNewTopPlace(){
        const top_place = { "top_place_name":'',
                            "top_place_image_link":'',
                            "top_place_website_link":''
                        };
        let plan = this.state.plan;
        plan.what_to_see_and_do.top_places.push(top_place);
        this.setState({plan});
        
    }
    onUpdateSeeAndDoSubmit(event){
        event.preventDefault();
        const plan = this.state.plan;
        const id = this.props.id;
        const host = config.API_SERVER;
        const url = "http://"+host+":12000/plans/"+id;
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
        if (this.state.errMsg){
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
            <div className="container new-plan-see-do">
                <form className="form-horizontal" onSubmit={this.onUpdateSeeAndDoSubmit.bind(this)}>
                
                    {/*best activties */}
                    {[1,2,3,4,5,6,7,8,9,10].map(num=>{
                        const name = "best_activities_"+num;
                        return(
                                <div className="panel panel-default" key={"activities_"+num}>
                                    <div className="panel-heading">
                                        {this.state.name} best activities {num}
                                    </div>
                                    <div className="panel-body">
                                        <div className="form-group">
                                            <div className="col-md-4">
                                                <label className="control-label">activity name</label>
                                            </div>
                                            <div className="col-md-8">
                                                <input className="form-control" type="text" name={name} value={this.state.plan.what_to_see_and_do[name].activity_name} onChange={this.onChangeActivityName.bind(this)}/>
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <div className="col-md-4">
                                                <label className="control-label">Website Link</label>
                                            </div>
                                            <div className="col-md-8">
                                                <input className="form-control" type="text" name={name} value={this.state.plan.what_to_see_and_do[name].activity_website_link} onChange={this.onChangeActivityWebsiteLink.bind(this)} required/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                        )
                    })}
                    
                    {/*suggested itineraries*/}
                    {[1,2,3,4].map(num=>{
                        const name = "suggested_itineraries_"+num;
                        return(
                            <div className="panel panel-default" key={"itineraries_"+num}>
                                <div className="panel-heading">
                                    {this.state.name} suggested itineraries {num}
                                </div>
                                <div className="panel-body">
                                    <div className="form-group">
                                        <div className="col-md-4">
                                            <label className="control-label">itinerary name</label>
                                        </div>
                                        <div className="col-md-8">
                                            <input className="form-control" type="text" name={name} value={this.state.plan.what_to_see_and_do[name].itinerary_name} onChange={this.onChangeSuggestedItinerariesName.bind(this)} required/>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <div className="col-md-4">
                                            <label className="control-label">image Link</label>
                                        </div>
                                        <div className="col-md-8">
                                            <input className="form-control" type="text" name={name} value={this.state.plan.what_to_see_and_do[name].itinerary_image_link} onChange={this.onChangeSuggestedItinerariesImageLink.bind(this)} required/>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <div className="col-md-4">
                                            <label className="control-label">Website Link</label>
                                        </div>
                                        <div className="col-md-8">
                                            <input className="form-control" type="text" name={name} value={this.state.plan.what_to_see_and_do[name].itinerary_website_link} onChange={this.onChangeSuggestedItinerariesWebsiteLink.bind(this)} required/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                   
                    {/*top places*/}
                    {this.state.plan.what_to_see_and_do.top_places.map((place,num)=>{
                        const name = "top_places_"+num;
                        return(
                            <div className="panel panel-default" key={"top_places_"+num}>
                                <div className="panel-heading">
                                    {this.state.name} top places {num+1}
                                </div>
                                <div className="panel-body">
                                    <div className="form-group">
                                        <div className="col-md-4">
                                            <label className="control-label">top places name</label>
                                        </div>
                                        <div className="col-md-8">
                                            <input className="form-control" type="text" name={name} value={this.state.plan.what_to_see_and_do.top_places[num].top_place_name} onChange={this.onChangeTopPlaceName.bind(this)} required/>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <div className="col-md-4">
                                            <label className="control-label">top places image Link</label>
                                        </div>
                                        <div className="col-md-8">
                                            <input className="form-control" type="text" name={name} value={this.state.plan.what_to_see_and_do.top_places[num].top_place_image_link} onChange={this.onChangeTopPlaceImageLink.bind(this)} required/>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <div className="col-md-4">
                                            <label className="control-label">Website Link</label>
                                        </div>
                                        <div className="col-md-8">
                                            <input className="form-control" type="text" name={name} value={this.state.plan.what_to_see_and_do.top_places[num].top_place_website_link} onChange={this.onChangeTopPlaceWebsiteLink.bind(this)} required/>
                                        </div>
                                    </div>
                                    <div className="form-group">    
                                        <div className="col-md-12">
                                            <button type="button" className="btn btn-success btn-block"  onClick={()=>this.removeTopPlace(num)}>Remove a top place</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                    <div className="form-group">    
                        <div className="col-md-12">
                             <button type="button" className="btn btn-success btn-block" onClick={this.onAddNewTopPlace.bind(this)}>Add a top place</button>
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
export default PlanSeeAndDoUpdateForm;