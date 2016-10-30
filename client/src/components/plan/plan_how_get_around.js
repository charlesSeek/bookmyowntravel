/*
    the component of how get around info
*/
import React,{Component} from 'react';

class PlanHowGetAround extends Component{
    render(){
        return(
            <div className="container planhowgetaround">
                <h2>Travelling Within {this.props.plan.name}</h2>
                <div className="row planhowgetaroundrow">
                    {this.props.plan.how_to_get_around.travelling_options.map((option)=>{
                        return(
                            <div className="col-md-4 col-sm-6" key={option.option_name}>
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