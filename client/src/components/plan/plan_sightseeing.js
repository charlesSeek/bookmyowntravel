/*
    the component of plan sightseeing info
*/
import React,{Component} from 'react';
import axios from 'axios';
import config from '../../config';

class PlanSightseeing extends Component{
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
        if (!this.state.plan.hasOwnProperty('sightseeing_touring_options')){
            return(<div>No data</div>)
        }
        return(
            <div className="container sightseeing">
                <h2 className="sightseeingtitle">Touring Options for {this.state.plan.name}</h2>
                <p>Whether it is just a short sightseeing tour, finding your own way, or a day or extended tour, Japan offers plenty of ways to travel and see the country.</p>
                <div className="row sightseeingrow">
                    <div className="col-md-4 col-sm-6">
                        <a href={this.state.plan.sightseeing_touring_options.sightseeing.sightseeing_website_link}>
                            <img src={this.state.plan.sightseeing_touring_options.sightseeing.sightseeing_image_link}/>
                        </a>
                        <h3>Sightseeing suggestions for {this.state.plan.name}</h3>
                        {this.state.plan.sightseeing_touring_options.sightseeing.sightseeing_extra_website_link_list.map((link)=>{
                            return(
                                <p key={link.website_link}><a href={link.website_link}>{link.text}</a></p>
                            )
                        })}
                    </div>
                    
                    <div className="col-md-4 col-sm-6">
                        <a href={this.state.plan.sightseeing_touring_options.independent_touring.independent_touring_website_link}>
                            <img src={this.state.plan.sightseeing_touring_options.independent_touring.independent_touring_image_link}/>
                        </a>
                        <h3>Travel {this.state.plan.name} on your own</h3>
                        {this.state.plan.sightseeing_touring_options.independent_touring.independent_touring_extra_website_link_list.map((link)=>{
                            return(
                                <p key={link.website_link}><a href={link.website_link}>{link.text}</a></p>
                            )
                        })}
                    </div>
                    
                    <div className="col-md-4 col-sm-6">
                        <a href={this.state.plan.sightseeing_touring_options.organised_day_tours.organised_day_tours_website_link}>
                            <img src={this.state.plan.sightseeing_touring_options.organised_day_tours.organised_day_tours_image_link}/>
                        </a>
                        <h3>{this.state.plan.name} Day Tours & Short Tours</h3>
                        {this.state.plan.sightseeing_touring_options.organised_day_tours.organised_day_tours_extra_website_link_list.map((link)=>{
                            return(
                                <p key={link.website_link}><a href={link.website_link}>{link.text}</a></p>
                            )
                        })}
                    </div>
                    
                    <div className="col-md-4 col-sm-6">
                        <a href={this.state.plan.sightseeing_touring_options.free_activities.free_activities_website_link}>
                            <img src={this.state.plan.sightseeing_touring_options.free_activities.free_activities_image_link}/>
                        </a>
                        <h3>Free things to do in {this.state.plan.name}</h3>
                        {this.state.plan.sightseeing_touring_options.free_activities.free_activities_extra_website_link_list.map((link)=>{
                            return(
                                <p key={link.website_link}><a href={link.website_link}>{link.text}</a></p>
                            )
                        })}
                    </div>
                    
                    <div className="col-md-4 col-sm-6">
                        <a href={this.state.plan.sightseeing_touring_options.organised_extended_tours.organised_extended_tours_website_link}>
                            <img src={this.state.plan.sightseeing_touring_options.organised_extended_tours.organised_extended_tours_image_link}/>
                        </a>
                        <h3>Tour Operators with extended tours {this.state.plan.name}</h3>
                        {this.state.plan.sightseeing_touring_options.organised_extended_tours.organised_extended_tours_extra_website_link_list.map((link)=>{
                            return(
                                <p key={link.website_link}><a href={link.website_link}>{link.text}</a></p>
                            )
                        })}
                    </div>
                    
                    <div className="col-md-4 col-sm-6">
                        <a href={this.state.plan.sightseeing_touring_options.volunteer.volunteer_website_link}>
                            <img src={this.state.plan.sightseeing_touring_options.volunteer.volunteer_image_link}/>
                        </a>
                        <h3>Volunteer in {this.state.plan.name}</h3>
                        {this.state.plan.sightseeing_touring_options.volunteer.volunteer_extra_website_link_list.map((link)=>{
                            return(
                                <p key={link.website_link}><a href={link.website_link}>{link.text}</a></p>
                            )
                        })}
                    </div>
                    
                </div>
            </div>
        )
    }
}
export default PlanSightseeing;