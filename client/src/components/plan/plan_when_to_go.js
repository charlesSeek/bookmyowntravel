/*
    the component of plan when to go info
*/
import React,{Component} from 'react';

class PlanWhenToGo extends Component{
    render(){
        return(
            <div className="container planwhentogo">
                <p>{this.props.plan.when_to_go.best_time_to_go.text}</p>
                <div className="container">
                    <h2>{this.props.plan.name} High season</h2>
                    <ul>
                        <li>{this.props.plan.when_to_go.high_seasons.high_seasons_1}</li>
                        <li>{this.props.plan.when_to_go.high_seasons.high_seasons_2}</li>
                        <li>{this.props.plan.when_to_go.high_seasons.high_seasons_3}</li>
                    </ul>
                </div>
                <div className="container">
                    <h2>{this.props.plan.name} low season</h2>
                    <ul>
                        <li>{this.props.plan.when_to_go.low_seasons.low_seasons_1}</li>
                        <li>{this.props.plan.when_to_go.low_seasons.low_seasons_2}</li>
                        <li>{this.props.plan.when_to_go.low_seasons.low_seasons_3}</li>
                    </ul>
                </div>
                <a href={this.props.plan.when_to_go.average_tempature_website_link}><p>List of average temperatures by month</p></a>
                <a href={this.props.plan.when_to_go.public_holiday_website_link}><p>List of public holidays</p></a>
            </div>
        )
    }
}
export default PlanWhenToGo;