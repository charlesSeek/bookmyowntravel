/*
    the component of home content, list of the plans information
*/

import React,{Component} from 'react';
import axios from 'axios';

class MainContent extends Component{
    componentWillMount(){
        this.state = {
            plans:undefined,
            errMsg:'',
            value:''
        };
    }
    componentDidMount(){
        axios.get('http://localhost:12000/plans')
        .then((response)=>{
            console.log(response)
            this.setState({plans:response.data.data});
        })
        .catch(err=>{
            this.setState({errMsg:err})
        })
    }
    searchBtnClick(){
       var countryName = this.refs.countryName.value;
        var plans = this.state.plans;
        var newPlans = plans.filter((plan)=>{
            return plan.name==countryName;
        })
        this.setState({plans:newPlans});
        this.setState({value:''});
    }
    handleChange(event) {
        this.setState({value: event.target.value});
    }
    renderPlans(){
       return this.state.plans.map((plan)=>{
           if (plan.status=="committed")
            return(
                <div key={plan._id}>
                    <h3>Plan in {plan.name}</h3>
                    <p className="lead"><span className="glyphicon glyphicon-user"></span> shuchengc</p>
                    <p><span className="glyphicon glyphicon-time"></span>Post On {plan.createdAt}</p>
                    <hr/>
                    <img className="image-responsive" src={plan.about.about_image_link}/>
                    <hr/>
                    <p>{plan.about.about_description}</p>
                    <a className='btn btn-primary' href={"/plan/"+plan._id}>Plan Detail<span className='glyphicon glyphicon-chevron-right'></span></a>
                    <hr/>
                </div>
            );
        });
    }
    render(){
        if (this.state.errMsg!=''){
            return(
                <div className="content">
                    <h1>{this.state.errMsg}</h1>
                </div>
            )
        }
        if (this.state.plans==undefined){
            return(
                <div className="content">Loading</div>
            )
        }
        return(
            <div className="content">
                <div className="page-header">
                    <h1>Travel Plans</h1>
                    <div className="input-group">
                        <input ref="countryName" type="text" size="80" value={this.state.value} onChange={this.handleChange.bind(this)} className="input-search" placeholder="please input the country name for search"/>
                        <button name="submit" className="btn btn-default" onClick={this.searchBtnClick.bind(this)}>
                                <span className="glyphicon glyphicon-search"></span>
                        </button>
                    </div>
                </div>
                {this.renderPlans()}
                
            </div>
        )
    }
}
 
export default MainContent;