/*
    the component of plan important info
*/
import React,{Component} from 'react';
import axios from 'axios';
import config from '../../config';

class PlanImportantInfo extends Component{
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
        if (!this.state.plan.hasOwnProperty('important_information')){
            return(<div>No data</div>)
        }
        return(
            <div className="container planimportantinfo">
                <div className="container securityinfo">
                    <h3>Security and Safety Information</h3>
                    <p>{this.state.plan.important_information.security_and_safe.text}</p>
                    <p><a href={this.state.plan.important_information.security_and_safe.website_link}>Security and Safety Information Website</a></p>
                </div>
                <div className="container healthinfo">
                    <h3>Health and Vaccinations</h3>
                    <p>{this.state.plan.important_information.health_and_vaccination.text}</p>
                    <p><a href={this.state.plan.important_information.health_and_vaccination.website_link}>Health and Vaccinations Information Website</a></p>
                </div>
                <div className="container passportinfo">
                    <h3>Passport and Visa</h3>
                    <p>{this.state.plan.important_information.passport_visa.text}</p>
                    <p><a href={this.state.plan.important_information.passport_visa.website_link}>Passport and Visa Information Website</a></p>
                </div>
                <div className="container telphoneinfo">
                    <h3>Telephone and Internet</h3>
                    <p>{this.state.plan.important_information.telphone_and_internet.text}</p>
                    <p><a href={this.state.plan.important_information.telphone_and_internet.website_link}>Telphone and Internet Information Website</a></p>
                </div>
                <div className="container dutyfreeinfo">
                    <h3>Duty Free Information</h3>
                    <p>{this.state.plan.important_information.duty_free.text}</p>
                    <p><a href={this.state.plan.important_information.duty_free.website_link}>Security and Safety Information Website</a></p>
                </div>
                <div className="container electricalinfo">
                    <h3>Electrical Information</h3>
                    <p>{this.state.plan.important_information.electrical.text}</p>
                    <p><a href={this.state.plan.important_information.electrical.website_link}>electrical  Information Website</a></p>
                </div>
                <div className="container languageinfo">
                    <h3>Local Time</h3>
                    <p>{this.state.plan.important_information.language.text}</p>
                    <p><a href={this.state.plan.important_information.language.website_link}>Language  Information Website</a></p>
                </div>
            </div>
        )
    }
}
export default PlanImportantInfo;