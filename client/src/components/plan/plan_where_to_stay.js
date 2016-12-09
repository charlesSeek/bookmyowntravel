/*
    the component of plan where to stay info
*/
import React,{Component} from 'react';
import axios from 'axios';
import config from '../../config';

class PlanWhereToStay extends Component{
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
        if (!this.state.plan.hasOwnProperty('where_to_stay')){
            return(<div>No data</div>)
        }
        const { where_to_stay } = this.state.plan; 
        return(
            <div className="container planwheretostay">
                <h2>Where to stay in {this.state.plan.name}</h2>
                <p>{where_to_stay.description}</p>
                <div className="row stayrow">
                    <div className="col-md-3 col-sm-6">
                        <a href={where_to_stay.where_to_stay_accommodation.website_link}>
                            <img src={where_to_stay.where_to_stay_accommodation.image_link}/>
                        </a>
                        <h4>{where_to_stay.where_to_stay_accommodation.text}</h4>
                    </div>
                    <div className="col-md-3 col-sm-6">
                        <a href={where_to_stay.accommodation_options.website_link}>
                            <img src={where_to_stay.accommodation_options.image_link}/>
                        </a>
                        <h4>{where_to_stay.accommodation_options.text}</h4>
                    </div>
                    <div className="col-md-3 col-sm-6">
                        <a href={where_to_stay.traditional_accommodation.website_link}>
                            <img src={where_to_stay.traditional_accommodation.image_link}/>
                        </a>
                        <h4>{where_to_stay.traditional_accommodation.text}</h4>
                    </div>
                    <div className="col-md-3 col-sm-6">
                        <a href={where_to_stay.unique_accommodation.website_link}>
                            <img src={where_to_stay.unique_accommodation.image_link}/>
                        </a>
                        <h4>{where_to_stay.unique_accommodation.text}</h4>
                    </div>
                </div>
            </div>
        )
    }
}
export default PlanWhereToStay;