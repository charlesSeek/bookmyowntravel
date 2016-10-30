/*
    the component of plan see and do info
*/
import React,{Component} from 'react';

class PlanSeeAndDo extends Component{
    render(){
        return(
            <div className="container planseeanddo">
                <div className="container bestactivities">
                    <h2>{this.props.plan.name} the 10 best activities</h2>
            
                    <p><a href={this.props.plan.what_to_see_and_do.best_activities_1.activity_website_link}>1. {this.props.plan.what_to_see_and_do.best_activities_1.activity_name}</a></p>
                    
                    <p><a href={this.props.plan.what_to_see_and_do.best_activities_2.activity_website_link}>1. {this.props.plan.what_to_see_and_do.best_activities_2.activity_name}</a></p>
            
                    <p><a href={this.props.plan.what_to_see_and_do.best_activities_3.activity_website_link}>3. {this.props.plan.what_to_see_and_do.best_activities_3.activity_name}</a></p>
            
                    <p><a href={this.props.plan.what_to_see_and_do.best_activities_4.activity_website_link}>4. {this.props.plan.what_to_see_and_do.best_activities_4.activity_name}</a></p>
            
                    <p><a href={this.props.plan.what_to_see_and_do.best_activities_5.activity_website_link}>5. {this.props.plan.what_to_see_and_do.best_activities_5.activity_name}</a></p>
            
                    <p><a href={this.props.plan.what_to_see_and_do.best_activities_6.activity_website_link}>6. {this.props.plan.what_to_see_and_do.best_activities_6.activity_name}</a></p>
            
                    <p><a href={this.props.plan.what_to_see_and_do.best_activities_7.activity_website_link}>7. {this.props.plan.what_to_see_and_do.best_activities_7.activity_name}</a></p>
            
                    <p><a href={this.props.plan.what_to_see_and_do.best_activities_8.activity_website_link}>8. {this.props.plan.what_to_see_and_do.best_activities_8.activity_name}</a></p>
            
                    <p><a href={this.props.plan.what_to_see_and_do.best_activities_9.activity_website_link}>9. {this.props.plan.what_to_see_and_do.best_activities_9.activity_name}</a></p>
            
                    <p><a href={this.props.plan.what_to_see_and_do.best_activities_10.activity_website_link}>10. {this.props.plan.what_to_see_and_do.best_activities_10.activity_name}</a></p>
                </div>
                <hr/>
                <div className="container iternary">
                    <h2>Top 4 suggested itineraries {this.props.plan.name}</h2>
                    <h4>Maps link to suggested tours (use as a guide)</h4>
                    <p>Days given are an indication of what is achievable in that time frame.</p>
                    <div className="row">
                        <div className="col-md-3 col-sm-6">
                            <h4>{this.props.plan.what_to_see_and_do.suggested_itineraries_1.itinerary_name}</h4>
                            <a href={this.props.plan.what_to_see_and_do.suggested_itineraries_1.itinerary_website_link}>
                                <img src={this.props.plan.what_to_see_and_do.suggested_itineraries_1.itinerary_image_link}/>
                            </a>
                        </div>
                        <div className="col-md-3 col-sm-6">
                            <h4>{this.props.plan.what_to_see_and_do.suggested_itineraries_2.itinerary_name}</h4>
                            <a href={this.props.plan.what_to_see_and_do.suggested_itineraries_2.itinerary_website_link}>
                                <img src={this.props.plan.what_to_see_and_do.suggested_itineraries_2.itinerary_image_link}/>
                            </a>
                        </div>
                        <div className="col-md-3 col-sm-6">
                            <h4>{this.props.plan.what_to_see_and_do.suggested_itineraries_3.itinerary_name}</h4>
                            <a href={this.props.plan.what_to_see_and_do.suggested_itineraries_3.itinerary_website_link}>
                                <img src={this.props.plan.what_to_see_and_do.suggested_itineraries_3.itinerary_image_link}/>
                            </a>
                        </div>
                        <div className="col-md-3 col-sm-6">
                            <h4>{this.props.plan.what_to_see_and_do.suggested_itineraries_4.itinerary_name}</h4>
                            <a href={this.props.plan.what_to_see_and_do.suggested_itineraries_4.itinerary_website_link}>
                                <img src={this.props.plan.what_to_see_and_do.suggested_itineraries_4.itinerary_image_link}/>
                            </a>
                        </div>
                    </div>
                    <hr/>
                    <div className="container topplaces">
                        <h2>Top 8 places to visit in {this.props.plan.name}</h2>
                        <p>For the most popular destinations</p>
                        <div className="row">
                            {this.props.plan.what_to_see_and_do.top_places.map((place)=>{
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