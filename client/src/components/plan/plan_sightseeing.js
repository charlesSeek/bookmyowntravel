import React,{Component} from 'react';

class PlanSightseeing extends Component{
    render(){
        return(
            <div className="container sightseeing">
                <h2 className="sightseeingtitle">Touring Options for {this.props.plan.name}</h2>
                <p>Whether it is just a short sightseeing tour, finding your own way, or a day or extended tour, Japan offers plenty of ways to travel and see the country.</p>
                <div className="row sightseeingrow">
                    <div className="col-md-4 col-sm-6">
                        <a href={this.props.plan.sightseeing_touring_options.sightseeing.sightseeing_website_link}>
                            <img src={this.props.plan.sightseeing_touring_options.sightseeing.sightseeing_image_link}/>
                        </a>
                        <h3>Sightseeing suggestions for {this.props.plan.name}</h3>
                        {this.props.plan.sightseeing_touring_options.sightseeing.sightseeing_extra_website_link_list.map((link)=>{
                            return(
                                <p><a href={this.website_link}>{link.text}</a></p>
                            )
                        })}
                    </div>
                    
                    <div className="col-md-4 col-sm-6">
                        <a href={this.props.plan.sightseeing_touring_options.independent_touring.independent_touring_website_link}>
                            <img src={this.props.plan.sightseeing_touring_options.independent_touring.independent_touring_image_link}/>
                        </a>
                        <h3>Travel {this.props.plan.name} on your own</h3>
                        {this.props.plan.sightseeing_touring_options.independent_touring.independent_touring_extra_website_link_list.map((link)=>{
                            return(
                                <p><a href={this.website_link}>{link.text}</a></p>
                            )
                        })}
                    </div>
                    
                    <div className="col-md-4 col-sm-6">
                        <a href={this.props.plan.sightseeing_touring_options.organised_day_tours.organised_day_tours_website_link}>
                            <img src={this.props.plan.sightseeing_touring_options.organised_day_tours.organised_day_tours_image_link}/>
                        </a>
                        <h3>{this.props.plan.name} Day Tours & Short Tours</h3>
                        {this.props.plan.sightseeing_touring_options.organised_day_tours.organised_day_tours_extra_website_link_list.map((link)=>{
                            return(
                                <p><a href={this.website_link}>{link.text}</a></p>
                            )
                        })}
                    </div>
                    
                    <div className="col-md-4 col-sm-6">
                        <a href={this.props.plan.sightseeing_touring_options.free_activities.free_activities_website_link}>
                            <img src={this.props.plan.sightseeing_touring_options.free_activities.free_activities_image_link}/>
                        </a>
                        <h3>Free things to do in {this.props.plan.name}</h3>
                        {this.props.plan.sightseeing_touring_options.free_activities.free_activities_extra_website_link_list.map((link)=>{
                            return(
                                <p><a href={this.website_link}>{link.text}</a></p>
                            )
                        })}
                    </div>
                    
                    <div className="col-md-4 col-sm-6">
                        <a href={this.props.plan.sightseeing_touring_options.organised_extended_tours.organised_extended_tours_website_link}>
                            <img src={this.props.plan.sightseeing_touring_options.organised_extended_tours.organised_extended_tours_image_link}/>
                        </a>
                        <h3>Tour Operators with extended tours {this.props.plan.name}</h3>
                        {this.props.plan.sightseeing_touring_options.organised_extended_tours.organised_extended_tours_extra_website_link_list.map((link)=>{
                            return(
                                <p><a href={this.website_link}>{link.text}</a></p>
                            )
                        })}
                    </div>
                    
                    <div className="col-md-4 col-sm-6">
                        <a href={this.props.plan.sightseeing_touring_options.volunteer.volunteer_website_link}>
                            <img src={this.props.plan.sightseeing_touring_options.volunteer.volunteer_image_link}/>
                        </a>
                        <h3>Volunteer in {this.props.plan.name}</h3>
                        {this.props.plan.sightseeing_touring_options.volunteer.volunteer_extra_website_link_list.map((link)=>{
                            return(
                                <p><a href={this.website_link}>{link.text}</a></p>
                            )
                        })}
                    </div>
                    
                </div>
            </div>
        )
    }
}
export default PlanSightseeing;