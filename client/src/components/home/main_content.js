import React,{Component} from 'react';
import axios from 'axios';

class MainContent extends Component{
    componentWillMount(){
        this.state = {plans:undefined};
    }
    componentDidMount(){
        axios.get('http://localhost:12000/plans')
        .then((response)=>{
            console.log(response)
            this.setState({plans:response.data.data});
        })
    }
    renderPlans(){
       return this.state.plans.map((plan)=>{
            return(
                <div className="container" key={plan._id}>
                    <h3>Plan in {plan.name}</h3>
                    <p className="lead"><span className="glyphicon glyphicon-user"></span> shuchengc</p>
                    <p><span className="glyphicon glyphicon-time"></span>Post On {plan.createdAt}</p>
                    <hr/>
                    <img className="image-responsive" src={plan.about.about_image_link}/>
                    <hr/>
                    <p>{plan.about.about_description}</p>
                    <a className='btn btn-primary' href={"/plans/"+plan._id}>Plan Detail<span className='glyphicon glyphicon-chevron-right'></span></a>
                    <hr/>
                </div>
            );
        });
    }
    render(){
        if (this.state.plans==undefined){
            return(
                <div className="content">Loading</div>
            )
        }
        return(
            <div className="content">
                <h1 className="page-header">
                    Travel Plans
                </h1>
                {this.renderPlans()}
                
            </div>
        )
    }
}
 
export default MainContent;