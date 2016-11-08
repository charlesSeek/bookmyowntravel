/*
    the component of plan when to go info
*/
import React,{Component} from 'react';
import axios from 'axios';
import config from '../../config';

class PlanWhenToGo extends Component{
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
        if (!this.state.plan.hasOwnProperty('when_to_go')){
            return(<div>No data</div>)
        }
        return(
            <div className="container planwhentogo">
                <p>{this.state.plan.when_to_go.best_time_to_go.text}</p>
                <div className="container">
                    <h2>{this.state.plan.name} High season</h2>
                    <ul>
                        <li>{this.state.plan.when_to_go.high_seasons.high_seasons_1}</li>
                        <li>{this.state.plan.when_to_go.high_seasons.high_seasons_2}</li>
                        <li>{this.state.plan.when_to_go.high_seasons.high_seasons_3}</li>
                    </ul>
                </div>
                <div className="container">
                    <h2>{this.state.plan.name} low season</h2>
                    <ul>
                        <li>{this.state.plan.when_to_go.low_seasons.low_seasons_1}</li>
                        <li>{this.state.plan.when_to_go.low_seasons.low_seasons_2}</li>
                        <li>{this.state.plan.when_to_go.low_seasons.low_seasons_3}</li>
                    </ul>
                </div>
                <a href={this.state.plan.when_to_go.average_tempature_website_link}><p>List of average temperatures by month</p></a>
                <a href={this.state.plan.when_to_go.public_holiday_website_link}><p>List of public holidays</p></a>
            </div>
        )
    }
}
export default PlanWhenToGo;