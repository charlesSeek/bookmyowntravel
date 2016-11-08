/*
    the component of how to get there info
*/
import React,{Component} from 'react';
import axios from 'axios';
import config from '../../config';

class PlanHowGetThere extends Component {
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
        if (!this.state.plan.hasOwnProperty('how_to_get_there')){
            return(<div>No data</div>)
        }
        return(
            <div className="container planhowgothere">
                <h2>Flying to {this.state.plan.name}</h2>
                <h4>{this.state.plan.name} INTERNATIONAL AIRPORTS</h4>
                <iframe width="600" height="450" src="https://www.google.com/maps/embed/v1/place?key=AIzaSyDi6rDt-Lec1EPgqReSXZJhNlCrlAZNSmo&q=japan,japan"></iframe>
                
                <div className="row ">
                    <h2>Airlines who fly to {this.state.plan.name}</h2>
                    <div className="col-md-6 col-sm-6 planairline">
                        <a href={this.state.plan.how_to_get_there.flights.full_service_airlines.website_link}>
                            <img src={this.state.plan.how_to_get_there.flights.full_service_airlines.full_service_airlines_image_link}/>
                        </a>
                        <h4>Full Service Airlines (Includes meals, luggage)</h4>
                        <p>{this.state.plan.how_to_get_there.flights.full_service_airlines.text}</p>
                        {this.state.plan.how_to_get_there.flights.full_service_airlines.full_service_airline_list_website.map((link)=>{
                            return(
                                <p key={link.name}>
                                    <a href={link.website_link}>{link.name}</a>
                                </p>
                            )
                        })}
                        <p><a href={this.state.plan.how_to_get_there.flights.full_service_airlines.website_link}>Other International airlines offering services Full Service Airlines to {this.state.plan.name}</a></p>
                    </div>
                    <div className="col-md-6 col-sm-6 planairline">
                        <a href={this.state.plan.how_to_get_there.flights.budget_airlines.website_link}>
                            <img src={this.state.plan.how_to_get_there.flights.budget_airlines.budget_airlines_image_link}/>
                        </a>
                        <h4>Budget Airlines (Low Cost, pay additional for extras)</h4>
                        <p>{this.state.plan.how_to_get_there.flights.budget_airlines.text}</p>
                        {this.state.plan.how_to_get_there.flights.budget_airlines.budget_airlines_list_website.map((link)=>{
                            return(
                                <p key={link.name}>
                                    <a href={link.website_link}>{link.name}</a>
                                </p>
                            )
                        })}
                        <p><a href={this.state.plan.how_to_get_there.flights.budget_airlines.website_link}>Other International airlines offering budget Airlines to {this.state.plan.name}</a></p>
                    </div>
                </div>
                <div className="row">
                    <h2>Cruising to {this.state.plan.name}</h2>
                    <div className="col-md-12 col-sm-12 plancruise">
                        <a href={this.state.plan.how_to_get_there.cruise.website_link}>
                            <img src={this.state.plan.how_to_get_there.cruise.cruise_image_link}/>
                        </a>
                        <h4>Cruise/Boat/Ferry</h4>
                        <p><a href={this.state.plan.how_to_get_there.cruise.cruise_website}>There are several Cruise lines that visit Japan, click the image for details.Ferries operate between Japan and China, Korea and Russia</a></p>
                    </div>
                </div>
               
            </div>
        )
    }
}
export default PlanHowGetThere;