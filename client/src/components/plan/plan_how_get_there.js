/*
    the component of how to get there info
*/
import React,{Component} from 'react';

class PlanHowGetThere extends Component {
    render(){
        return(
            <div className="container planhowgothere">
                <h2>Flying to {this.props.plan.name}</h2>
                <h4>{this.props.plan.name} INTERNATIONAL AIRPORTS</h4>
                <iframe width="600" height="450" src="https://www.google.com/maps/embed/v1/place?key=AIzaSyDi6rDt-Lec1EPgqReSXZJhNlCrlAZNSmo&q=japan,japan"></iframe>
                
                <div className="row ">
                    <h2>Airlines who fly to {this.props.plan.name}</h2>
                    <div className="col-md-6 col-sm-6 planairline">
                        <a href={this.props.plan.how_to_get_there.flights.full_service_airlines.website_link}>
                            <img src={this.props.plan.how_to_get_there.flights.full_service_airlines.full_service_airlines_image_link}/>
                        </a>
                        <h4>Full Service Airlines (Includes meals, luggage)</h4>
                        <p>{this.props.plan.how_to_get_there.flights.full_service_airlines.text}</p>
                        {this.props.plan.how_to_get_there.flights.full_service_airlines.full_service_airline_list_website.map((link)=>{
                            return(
                                <p key={link.name}>
                                    <a href={link.website_link}>{link.name}</a>
                                </p>
                            )
                        })}
                        <p><a href={this.props.plan.how_to_get_there.flights.full_service_airlines.website_link}>Other International airlines offering services Full Service Airlines to {this.props.plan.name}</a></p>
                    </div>
                    <div className="col-md-6 col-sm-6 planairline">
                        <a href={this.props.plan.how_to_get_there.flights.budget_airlines.website_link}>
                            <img src={this.props.plan.how_to_get_there.flights.budget_airlines.budget_airlines_image_link}/>
                        </a>
                        <h4>Budget Airlines (Low Cost, pay additional for extras)</h4>
                        <p>{this.props.plan.how_to_get_there.flights.budget_airlines.text}</p>
                        {this.props.plan.how_to_get_there.flights.budget_airlines.budget_airlines_list_website.map((link)=>{
                            return(
                                <p key={link.name}>
                                    <a href={link.website_link}>{link.name}</a>
                                </p>
                            )
                        })}
                        <p><a href={this.props.plan.how_to_get_there.flights.budget_airlines.website_link}>Other International airlines offering budget Airlines to {this.props.plan.name}</a></p>
                    </div>
                </div>
                <div className="row">
                    <h2>Cruising to {this.props.plan.name}</h2>
                    <div className="col-md-12 col-sm-12 plancruise">
                        <a href={this.props.plan.how_to_get_there.cruise.website_link}>
                            <img src={this.props.plan.how_to_get_there.cruise.cruise_image_link}/>
                        </a>
                        <h4>Cruise/Boat/Ferry</h4>
                        <p><a href={this.props.plan.how_to_get_there.cruise.cruise_website}>There are several Cruise lines that visit Japan, click the image for details.Ferries operate between Japan and China, Korea and Russia</a></p>
                    </div>
                </div>
               
            </div>
        )
    }
}
export default PlanHowGetThere;