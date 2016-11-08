/*
    the component of how get around info
*/
import React,{Component} from 'react';
import axios from 'axios';
import config from '../../config';

class PlanHowGetAround extends Component{
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
        if (!this.state.plan.hasOwnProperty('how_to_get_around')){
            return(<div>No data</div>)
        }
        return(
            <div className="container planhowgetaround">
                <h2>Travelling Within {this.state.plan.name}</h2>
                <div className="row planhowgetaroundrow">
                    {this.state.plan.how_to_get_around.travelling_options.map((option,index)=>{
                        return(
                            <div className="col-md-4 col-sm-6" key={"option_"+index}>
                                <a href={option.options_website_link}>
                                    <img src={option.options_image_link}/>
                                </a>
                                <h4>{option.options_name}</h4>
                                <p>{option.options_description}</p>
                                {option.options_extra_website_link_list.map((item)=>{
                                    return(
                                        <p key={item.website_link}><a href={item.website_link}>{item.text}</a></p>
                                    )
                                })}
                            </div>
                        )
                    })}
                </div>
            </div>
        )
    }
}
export default PlanHowGetAround;