import React,{Component} from 'react';
import axios from 'axios';
import config from '../../../../config'
import Popup from 'react-popup';

const where_to_stay = {
    where_to_stay_accommodation:{
        text:'',
        image_link:'',
        website_link:''
    },
    accommodation_options:{
        text:'',
        image_link:'',
        website_link:''
    },
    traditional_accommodation:{
        text:'',
        image_link:'',
        website_link:''
    },
    unique_accommodation:{
        text:'',
        image_link:'',
        website_link:''
    },
    description:''
}

class PlanWhereToStayUpdateForm extends Component{
    componentWillMount(){
        this.state = {
            countries: undefined,
            errMsg:'',
            plan:undefined
        }
    }
    componentDidMount(){
        const id = this.props.id;
        const host = config.API_SERVER;
        const country_url = "http://"+host+":12000/countries";
        axios.get(country_url)
        .then((response)=>{
            if (response.data.success){
                const countries = response.data.data;
                this.setState({countries});
            }else{
                alert(resposnse.data.errMsg);
            }
        })
        .catch(err=>{
            this.setState({errMsg:err.toString()})
            alert(err.toString);
        });
        const plan_url = "http://"+host+":12000/plans/"+id;
        axios.get(plan_url)
        .then((response)=>{
            if (response.data.success){
                const plan = response.data.data;
                if (!plan.where_to_stay){
                    plan.where_to_stay = where_to_stay;
                }
                this.setState({plan});
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
    onDescriptionChange(event){
        const description = event.target.value;
        let plan = this.state.plan;
        plan.where_to_stay.description = description;
        this.setState({plan});
    }
    onWhereToStayTextChange(event){
        const text = event.target.value;
        let plan = this.state.plan;
        plan.where_to_stay.where_to_stay_accommodation.text = text;
        this.setState({plan});
    }
    onWhereToStayImageLinkChange(event){
        const image_link = event.target.value;
        let plan = this.state.plan;
        plan.where_to_stay.where_to_stay_accommodation.image_link = image_link;
        this.setState({plan});
    }
    onWhereToStayWebsiteLinkChange(event){
        const website_link = event.target.value;
        let plan = this.state.plan;
        plan.where_to_stay.where_to_stay_accommodation.website_link = website_link;
        this.setState({plan});
    }
    onAccommodationOptionsTextChange(event){
        const text = event.target.value;
        let plan = this.state.plan;
        plan.where_to_stay.accommodation_options.text = text;
        this.setState({plan});
    }
    onAccommodationOptionsImageLinkChange(event){
        const image_link = event.target.value;
        let plan = this.state.plan;
        plan.where_to_stay.accommodation_options.image_link = image_link;
        this.setState({plan});
    }
    onAccommodationOptionsWebsiteLinkChange(event){
        const website_link = event.target.value;
        let plan = this.state.plan;
        plan.where_to_stay.accommodation_options.website_link = website_link;
        this.setState({plan});
    }
    onTraditionalAccommodationTextChange(event){
        const text = event.target.value;
        let plan = this.state.plan;
        plan.where_to_stay.traditional_accommodation.text = text;
        this.setState({plan});
    }
    onTraditionalAccommodationImageLinkChange(event){
        const image_link = event.target.value;
        let plan = this.state.plan;
        plan.where_to_stay.traditional_accommodation.image_link = image_link;
        this.setState({plan});
    }
    onTraditionalAccommodationWebsiteLinkChange(event){
        const website_link = event.target.value;
        let plan = this.state.plan;
        plan.where_to_stay.traditional_accommodation.website_link = website_link;
        this.setState({plan});
    }
    onUniqueAccommodationTextChange(event){
        const text = event.target.value;
        let plan = this.state.plan;
        plan.where_to_stay.unique_accommodation.text = text;
        this.setState({plan});
    }
    onUniqueAccommodationImageLinkChange(event){
        const image_link = event.target.value;
        let plan = this.state.plan;
        plan.where_to_stay.unique_accommodation.image_link = image_link;
        this.setState({plan});
    }
    onUniqueAccommodationWebsiteLinkChange(event){
        const website_link = event.target.value;
        let plan = this.state.plan;
        plan.where_to_stay.unique_accommodation.website_link = website_link;
        this.setState({plan});
    }
    
    onUpdateStaySubmit(event){
        event.preventDefault();
        const id = this.props.id;
        const host = config.API_SERVER;
        const url = "http://"+host+":12000/plans/"+id;
        const plan = {};
        plan.where_to_stay = this.state.plan.where_to_stay;
        axios.put(url,plan)
        .then(response=>{
            if (response.data.success){
                Popup.alert('plan where to stay info is successfully updated');
            }else{
                const errMsg = response.data.errMsg;
                this.setState({errMsg});
                Popup.alert('plan where to stay info update failed:'+errMsg);
            }
        })
        .catch(err=>{
            this.setState({errMsg:err.toString()});
            Popup.alert('plan where to stay info update failed:'+this.state.errMsg);
        })
    }
    render(){
        if (this.state.errMsg){
            return(
                <div>{this.state.errMsg}</div>
            )
        }
        if (this.state.countries==undefined||this.state.plan==undefined){
            return(
                <div>Loading country data...</div>
            )
        }
        return(
            <div className="container plan-update-stay">
                <form className="form-horizontal" onSubmit={this.onUpdateStaySubmit.bind(this)}>
            
                    {/*description*/}
                    <div className="form-group">
                        <div className="col-md-4">
                            <label className="control-label">{this.state.name} stay description</label>
                        </div>
                        <div className="col-md-8">
                            <input type="text" className="form-control" value={this.state.plan.where_to_stay.description||''} onChange={this.onDescriptionChange.bind(this)} required/>
                        </div>
                    </div>
                    
                    {/*where to stay*/}
                    <div className="panel panel-default">
                        <div className="panel-heading">
                           {this.state.name} where to stay
                        </div>
                        <div className="panel-body">
                            <div className="form-group">
                                <div className="col-md-4">
                                    <label className="control-label">text</label>
                                </div>
                                <div className="col-md-8">
                                    <input className="form-control" type="text" value={this.state.plan.where_to_stay.where_to_stay_accommodation.text||''} onChange={this.onWhereToStayTextChange.bind(this)} required/>
                                </div>
                            </div>
                            <div className="form-group">
                                <div className="col-md-4">
                                    <label className="control-label">image link</label>
                                </div>
                                <div className="col-md-8">
                                    <input className="form-control" type="text" value={this.state.plan.where_to_stay.where_to_stay_accommodation.image_link||''} onChange={this.onWhereToStayImageLinkChange.bind(this)} required/>
                                </div>
                            </div>
                            <div className="form-group">
                                <div className="col-md-4">
                                    <label className="control-label">website link</label>
                                </div>
                                <div className="col-md-8">
                                    <input className="form-control" type="text" value={this.state.plan.where_to_stay.where_to_stay_accommodation.website_link} onChange={this.onWhereToStayWebsiteLinkChange.bind(this)} required/>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    {/*accommodation options*/}
                    <div className="panel panel-default">
                        <div className="panel-heading">
                           {this.state.name} accommodation options
                        </div>
                        <div className="panel-body">
                            <div className="form-group">
                                <div className="col-md-4">
                                    <label className="control-label">text</label>
                                </div>
                                <div className="col-md-8">
                                    <input className="form-control" type="text" value={this.state.plan.where_to_stay.accommodation_options.text||''} onChange={this.onAccommodationOptionsTextChange.bind(this)} required/>
                                </div>
                            </div>
                            <div className="form-group">
                                <div className="col-md-4">
                                    <label className="control-label">image link</label>
                                </div>
                                <div className="col-md-8">
                                    <input className="form-control" type="text" value={this.state.plan.where_to_stay.accommodation_options.image_link||''} onChange={this.onAccommodationOptionsImageLinkChange.bind(this)} required/>
                                </div>
                            </div>
                            <div className="form-group">
                                <div className="col-md-4">
                                    <label className="control-label">website link</label>
                                </div>
                                <div className="col-md-8">
                                    <input className="form-control" type="text" value={this.state.plan.where_to_stay.accommodation_options.website_link||''} onChange={this.onAccommodationOptionsWebsiteLinkChange.bind(this)} required/>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    {/*traditional accommodation*/}
                    <div className="panel panel-default">
                        <div className="panel-heading">
                           {this.state.name} traditional accommodation
                        </div>
                        <div className="panel-body">
                            <div className="form-group">
                                <div className="col-md-4">
                                    <label className="control-label">text</label>
                                </div>
                                <div className="col-md-8">
                                    <input className="form-control" type="text" value={this.state.plan.where_to_stay.traditional_accommodation.text||''} onChange={this.onTraditionalAccommodationTextChange.bind(this)} required/>
                                </div>
                            </div>
                            <div className="form-group">
                                <div className="col-md-4">
                                    <label className="control-label">image link</label>
                                </div>
                                <div className="col-md-8">
                                    <input className="form-control" type="text" value={this.state.plan.where_to_stay.traditional_accommodation.image_link||''} onChange={this.onTraditionalAccommodationImageLinkChange.bind(this)} required/>
                                </div>
                            </div>
                            <div className="form-group">
                                <div className="col-md-4">
                                    <label className="control-label">website link</label>
                                </div>
                                <div className="col-md-8">
                                    <input className="form-control" type="text" value={this.state.plan.where_to_stay.traditional_accommodation.website_link||''} onChange={this.onTraditionalAccommodationWebsiteLinkChange.bind(this)} required/>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    {/*unique accommodation*/}
                    <div className="panel panel-default">
                        <div className="panel-heading">
                           {this.state.name} unique accommodation
                        </div>
                        <div className="panel-body">
                            <div className="form-group">
                                <div className="col-md-4">
                                    <label className="control-label">text</label>
                                </div>
                                <div className="col-md-8">
                                    <input className="form-control" type="text" value={this.state.plan.where_to_stay.unique_accommodation.text||''} onChange={this.onUniqueAccommodationTextChange.bind(this)} required/>
                                </div>
                            </div>
                            <div className="form-group">
                                <div className="col-md-4">
                                    <label className="control-label">image link</label>
                                </div>
                                <div className="col-md-8">
                                    <input className="form-control" type="text" value={this.state.plan.where_to_stay.unique_accommodation.image_link||''} onChange={this.onUniqueAccommodationImageLinkChange.bind(this)} required/>
                                </div>
                            </div>
                            <div className="form-group">
                                <div className="col-md-4">
                                    <label className="control-label">website link</label>
                                </div>
                                <div className="col-md-8">
                                    <input className="form-control" type="text" value={this.state.plan.where_to_stay.unique_accommodation.website_link||''} onChange={this.onUniqueAccommodationWebsiteLinkChange.bind(this)} required/>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="form-group">
                        <div className="col-md-8">
                            <button type="submit" className="btn btn-success">Update</button>
                        </div>
                    </div>
                </form>
                <Popup/>
            </div>
        )
    }
}
export default PlanWhereToStayUpdateForm;