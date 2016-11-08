/*
    the component of plan see and do info
*/
import React,{Component} from 'react';
import axios from 'axios';
import config from '../../config';

class PlanSeeAndDo extends Component{
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
        if (!this.state.plan.hasOwnProperty('what_to_see_and_do')){
            return(<div>No data</div>)
        }
        return(
            <div className="container planseeanddo">
                <div className="container bestactivities">
                    <h2>{this.state.plan.name} the 10 best activities</h2>
            
                    <p><a href={this.state.plan.what_to_see_and_do.best_activities_1.activity_website_link}>1. {this.state.plan.what_to_see_and_do.best_activities_1.activity_name}</a></p>
                    
                    <p><a href={this.state.plan.what_to_see_and_do.best_activities_2.activity_website_link}>1. {this.state.plan.what_to_see_and_do.best_activities_2.activity_name}</a></p>
            
                    <p><a href={this.state.plan.what_to_see_and_do.best_activities_3.activity_website_link}>3. {this.state.plan.what_to_see_and_do.best_activities_3.activity_name}</a></p>
            
                    <p><a href={this.state.plan.what_to_see_and_do.best_activities_4.activity_website_link}>4. {this.state.plan.what_to_see_and_do.best_activities_4.activity_name}</a></p>
            
                    <p><a href={this.state.plan.what_to_see_and_do.best_activities_5.activity_website_link}>5. {this.state.plan.what_to_see_and_do.best_activities_5.activity_name}</a></p>
            
                    <p><a href={this.state.plan.what_to_see_and_do.best_activities_6.activity_website_link}>6. {this.state.plan.what_to_see_and_do.best_activities_6.activity_name}</a></p>
            
                    <p><a href={this.state.plan.what_to_see_and_do.best_activities_7.activity_website_link}>7. {this.state.plan.what_to_see_and_do.best_activities_7.activity_name}</a></p>
            
                    <p><a href={this.state.plan.what_to_see_and_do.best_activities_8.activity_website_link}>8. {this.state.plan.what_to_see_and_do.best_activities_8.activity_name}</a></p>
            
                    <p><a href={this.state.plan.what_to_see_and_do.best_activities_9.activity_website_link}>9. {this.state.plan.what_to_see_and_do.best_activities_9.activity_name}</a></p>
            
                    <p><a href={this.state.plan.what_to_see_and_do.best_activities_10.activity_website_link}>10. {this.state.plan.what_to_see_and_do.best_activities_10.activity_name}</a></p>
                </div>
                <hr/>
                <div className="container iternary">
                    <h2>Top 4 suggested itineraries {this.state.plan.name}</h2>
                    <h4>Maps link to suggested tours (use as a guide)</h4>
                    <p>Days given are an indication of what is achievable in that time frame.</p>
                    <div className="row">
                        <div className="col-md-3 col-sm-6">
                            <h4>{this.state.plan.what_to_see_and_do.suggested_itineraries_1.itinerary_name}</h4>
                            <a href={this.state.plan.what_to_see_and_do.suggested_itineraries_1.itinerary_website_link}>
                                <img src={this.state.plan.what_to_see_and_do.suggested_itineraries_1.itinerary_image_link}/>
                            </a>
                        </div>
                        <div className="col-md-3 col-sm-6">
                            <h4>{this.state.plan.what_to_see_and_do.suggested_itineraries_2.itinerary_name}</h4>
                            <a href={this.state.plan.what_to_see_and_do.suggested_itineraries_2.itinerary_website_link}>
                                <img src={this.state.plan.what_to_see_and_do.suggested_itineraries_2.itinerary_image_link}/>
                            </a>
                        </div>
                        <div className="col-md-3 col-sm-6">
                            <h4>{this.state.plan.what_to_see_and_do.suggested_itineraries_3.itinerary_name}</h4>
                            <a href={this.state.plan.what_to_see_and_do.suggested_itineraries_3.itinerary_website_link}>
                                <img src={this.state.plan.what_to_see_and_do.suggested_itineraries_3.itinerary_image_link}/>
                            </a>
                        </div>
                        <div className="col-md-3 col-sm-6">
                            <h4>{this.state.plan.what_to_see_and_do.suggested_itineraries_4.itinerary_name}</h4>
                            <a href={this.state.plan.what_to_see_and_do.suggested_itineraries_4.itinerary_website_link}>
                                <img src={this.state.plan.what_to_see_and_do.suggested_itineraries_4.itinerary_image_link}/>
                            </a>
                        </div>
                    </div>
                    <hr/>
                    <div className="container topplaces">
                        <h2>Top 8 places to visit in {this.state.plan.name}</h2>
                        <p>For the most popular destinations</p>
                        <div className="row">
                            {this.state.plan.what_to_see_and_do.top_places.map((place)=>{
                                return(
                                    <div className="col-md-3 col-sm-6" key={place.top_place_name}>
                                        <a href={place.top_place_website_link}>
                                            <img src={place.top_place_image_link}/>
                                            <h4>{place.top_place_name}</h4>
                                        </a>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default PlanSeeAndDo;