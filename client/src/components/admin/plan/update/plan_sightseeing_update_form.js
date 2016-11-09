import React,{Component} from 'react';
import axios from 'axios';
import config from '../../../../config'

class PlanSightseeingUpdateForm extends Component{
    componentWillMount(){
        this.state = {
            countries: undefined,
            errMsg:'',
            plan:undefined,
            isHiddenErrMsg:true,
            isHiddenSuccessMsg:true
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
    onChangeSightseeingSightseeingImageLink(event){
        const sightseeing_image_link = event.target.value;
        let plan = this.state.plan;
        plan.sightseeing_touring_options.sightseeing.sightseeing_image_link = sightseeing_image_link;
        this.setState({plan});
    }
    onChangeSightseeingSightseeingWebsiteLink(event){
        const sightseeing_website_link = event.target.value;
        let plan = this.state.plan;
        plan.sightseeing_touring_options.sightseeing.sightseeing_website_link = sightseeing_website_link;
        this.setState({plan});
    }
    onChangeSightseeingExtraWebsiteLinkListText(event){
        const text = event.target.value;
        const index = event.target.name.substring(12);
        let plan = this.state.plan;
        plan.sightseeing_touring_options.sightseeing.sightseeing_extra_website_link_list[index].text = text;
        this.setState({plan});
    }
    onChangeSightseeingExtraWebsiteLinkListWebsiteLink(event){
        const website_link = event.target.value;
        const index = event.target.name.substring(12);
        let plan = this.state.plan;
        plan.sightseeing_touring_options.sightseeing.sightseeing_extra_website_link_list[index].website_link = website_link;
        this.setState({plan});
    }
    onChangeIndependentTouringImageLink(event){
        const independent_touring_image_link = event.target.value;
        let plan = this.state.plan;
        plan.sightseeing_touring_options.independent_touring.independent_touring_image_link = independent_touring_image_link;
        this.setState({plan});
    }
    onChangeIndependentTouringWebsiteLink(event){
        const independent_touring_website_link = event.target.value;
        let plan = this.state.plan;
        plan.sightseeing_touring_options.independent_touring.independent_touring_website_link = independent_touring_website_link;
        this.setState({plan});
    }
    onChangeIndependentTouringExtraWebsiteLinkListText(event){
        const text = event.target.value;
        const index = event.target.name.substring(20);
        let plan = this.state.plan;
        plan.sightseeing_touring_options.independent_touring.independent_touring_extra_website_link_list[index].text = text;
        this.setState({plan});
    }
    onChangeIndependentTouringExtraWebsiteLinkListWebsiteLink(event){
        const website_link = event.target.value;
        const index = event.target.name.substring(20);
        let plan = this.state.plan;
        plan.sightseeing_touring_options.independent_touring.independent_touring_extra_website_link_list[index].website_link = website_link;
        this.setState({plan});
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
            <div className="container new-plan-sightseeing">
                <form className="form-horizontal">
            
                    {/*sightseeing */}
                    <div className="panel panel-default">
                        <div className="panel-heading">
                            {this.state.name} sightseeing
                        </div>
                        <div className="panel-body">
                            <div className="form-group">
                                <div className="col-md-4">
                                    <label className="control-label">sightseeing image link</label>
                                </div>
                                <div className="col-md-8">
                                    <input className="form-control" type="text" value={this.state.plan.sightseeing_touring_options.sightseeing.sightseeing_image_link} onChange={this.onChangeSightseeingSightseeingImageLink.bind(this)} required/>
                                </div>
                            </div>
                            <div className="form-group">
                                <div className="col-md-4">
                                    <label className="control-label">sightseeing website link</label>
                                </div>
                                <div className="col-md-8">
                                    <input className="form-control" type="text" value={this.state.plan.sightseeing_touring_options.sightseeing.sightseeing_website_link} onChange={this.onChangeSightseeingSightseeingWebsiteLink.bind(this)} required/>
                                </div>
                            </div>
                            {this.state.plan.sightseeing_touring_options.sightseeing.sightseeing_extra_website_link_list.map((website,num)=>{
                                const name = "sightseeing_"+num;
                                return(
                                    <div className="panel panel-default" key={"sightseeing_extra_website_"+num}>
                                        <div className="panel-heading">
                                            sightseeing extra website link {num+1}
                                        </div>
                                        <div className="panel-body">
                                            <div className="form-group">
                                                <div className="col-md-4">
                                                    <label className="control-label">text</label>
                                                </div>
                                                <div className="col-md-8">
                                                    <input className="form-control" type="text" value={website.text} name={name} onChange={this.onChangeSightseeingExtraWebsiteLinkListText.bind(this)} required/>
                                                </div>
                                            </div>
                                            <div className="form-group">
                                                <div className="col-md-4">
                                                    <label className="control-label">website link</label>
                                                </div>
                                                <div className="col-md-8">
                                                    <input className="form-control" type="text"  value={website.website_link} name={name} onChange={this.onChangeSightseeingExtraWebsiteLinkListWebsiteLink.bind(this)} required/>
                                                </div>
                                            </div>
                                            <div className="form-group">
                                                <div className="col-md-12">
                                                    <button type="button" className="btn btn-success btn-block">Remove the extra website link</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })}
                            <div className="form-group">
                                <div className="col-md-12">
                                    <button type="button" className="btn btn-success btn-block">Add a extra website link</button>
                                </div>
                            </div>
                        </div>        
                    </div>
                    
                    {/*independent touring*/}
                    <div className="panel panel-default">
                        <div className="panel-heading">
                            {this.state.name} independent touring
                        </div>
                        <div className="panel-body">
                            <div className="form-group">
                                <div className="col-md-4">
                                    <label className="control-label">independent touring image link</label>
                                </div>
                                <div className="col-md-8">
                                    <input className="form-control" type="text" value={this.state.plan.sightseeing_touring_options.independent_touring.independent_touring_image_link} onChange={this.onChangeIndependentTouringImageLink.bind(this)} required/>
                                </div>
                            </div>
                            <div className="form-group">
                                <div className="col-md-4">
                                    <label className="control-label">independent touring website link</label>
                                </div>
                                <div className="col-md-8">
                                    <input className="form-control" type="text" value={this.state.plan.sightseeing_touring_options.independent_touring.independent_touring_website_link} onChange={this.onChangeIndependentTouringWebsiteLink.bind(this)} required/>
                                </div>
                            </div>
                            {this.state.plan.sightseeing_touring_options.independent_touring.independent_touring_extra_website_link_list.map((website,num)=>{
                                const name = "independent_touring_"+num;
                                return(
                                    <div className="panel panel-default" key={"independent_touring_extra_website_"+num}>
                                        <div className="panel-heading">
                                            independent touring extra website link {num+1}
                                        </div>
                                        <div className="panel-body">
                                            <div className="form-group">
                                                <div className="col-md-4">
                                                    <label className="control-label">text</label>
                                                </div>
                                                <div className="col-md-8">
                                                    <input className="form-control" type="text" value={website.text} name={name} onChange={this.onChangeIndependentTouringExtraWebsiteLinkListText.bind(this)} required/>
                                                </div>
                                            </div>
                                            <div className="form-group">
                                                <div className="col-md-4">
                                                    <label className="control-label">website link</label>
                                                </div>
                                                <div className="col-md-8">
                                                    <input className="form-control" type="text"  value={website.website_link} name={name} onChange={this.onChangeIndependentTouringExtraWebsiteLinkListWebsiteLink.bind(this)} required/>
                                                </div>
                                            </div>
                                            <div className="form-group">
                                                <div className="col-md-12">
                                                    <button type="button" className="btn btn-success btn-block">Remove the extra website link</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })}
                            <div className="form-group">
                                <div className="col-md-12">
                                    <button type="button" className="btn btn-success btn-block">Add a extra website link</button>
                                </div>
                            </div>
                        </div>        
                    </div>

                    {/*organised day tours*/}
                    <div className="panel panel-default">
                        <div className="panel-heading">
                            {this.state.name} organised day tours
                        </div>
                        <div className="panel-body">
                            <div className="form-group">
                                <div className="col-md-4">
                                    <label className="control-label">organised day tours image link</label>
                                </div>
                                <div className="col-md-8">
                                    <input className="form-control" type="text" ref="organised_day_tours_image_link" placeholder="please input the  image link" required/>
                                </div>
                            </div>
                            <div className="form-group">
                                <div className="col-md-4">
                                    <label className="control-label">independent touring website link</label>
                                </div>
                                <div className="col-md-8">
                                    <input className="form-control" type="text" ref="organised_day_tours_website_link" placeholder="please input the  website link" required/>
                                </div>
                            </div>
                            {this.state.plan.sightseeing_touring_options.organised_day_tours.organised_day_tours_extra_website_link_list.map((website,num)=>{
                                return(
                                    <div className="panel panel-default" key={"organised_day_tours_extra_website_"+num}>
                                        <div className="panel-heading">
                                            organised day tour extra website link {num+1}
                                        </div>
                                        <div className="panel-body">
                                            <div className="form-group">
                                                <div className="col-md-4">
                                                    <label className="control-label">text</label>
                                                </div>
                                                <div className="col-md-8">
                                                    <input className="form-control" type="text" ref={"organised_day_tours_extra_website_link_"+num+"_text"} placeholder="please input the text" required/>
                                                </div>
                                            </div>
                                            <div className="form-group">
                                                <div className="col-md-4">
                                                    <label className="control-label">website link</label>
                                                </div>
                                                <div className="col-md-8">
                                                    <input className="form-control" type="text" ref={"organised_day_tours_extra_website_link_"+num+"_website_link"} placeholder="please input the website link" required/>
                                                </div>
                                            </div>
                                            <div className="form-group">
                                                <div className="col-md-12">
                                                    <button type="button" className="btn btn-success btn-block">Remove the extra website link</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })}
                            <div className="form-group">
                                <div className="col-md-12">
                                    <button type="button" className="btn btn-success btn-block">Add a extra website link</button>
                                </div>
                            </div>
                        </div>        
                    </div>

                    {/*organised extended tours*/}
                    <div className="panel panel-default">
                        <div className="panel-heading">
                            {this.state.name} organised extended tours
                        </div>
                        <div className="panel-body">
                            <div className="form-group">
                                <div className="col-md-4">
                                    <label className="control-label">organised extended tours image link</label>
                                </div>
                                <div className="col-md-8">
                                    <input className="form-control" type="text" ref="organised_extended_tours_image_link" placeholder="please input the  image link" required/>
                                </div>
                            </div>
                            <div className="form-group">
                                <div className="col-md-4">
                                    <label className="control-label">organised extended tours website link</label>
                                </div>
                                <div className="col-md-8">
                                    <input className="form-control" type="text" ref="organised_extended_tours_website_link" placeholder="please input the  website link" required/>
                                </div>
                            </div>
                            {this.state.plan.sightseeing_touring_options.organised_extended_tours.organised_extended_tours_extra_website_link_list.map((website,num)=>{
                                return(
                                    <div className="panel panel-default" key={"organised_extended_tours_extra_website_"+num}>
                                        <div className="panel-heading">
                                            organised extended tours extra website link {num+1}
                                        </div>
                                        <div className="panel-body">
                                            <div className="form-group">
                                                <div className="col-md-4">
                                                    <label className="control-label">text</label>
                                                </div>
                                                <div className="col-md-8">
                                                    <input className="form-control" type="text" ref={"organised_extended_tours_extra_website_link_"+num+"_text"} placeholder="please input the text" required/>
                                                </div>
                                            </div>
                                            <div className="form-group">
                                                <div className="col-md-4">
                                                    <label className="control-label">website link</label>
                                                </div>
                                                <div className="col-md-8">
                                                    <input className="form-control" type="text" ref={"organised_extended_tours_extra_website_link_"+num+"_website_link"} placeholder="please input the website link" required/>
                                                </div>
                                            </div>
                                            <div className="form-group">
                                                <div className="col-md-12">
                                                    <button type="button" className="btn btn-success btn-block">Remove the extra website link</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })}
                            <div className="form-group">
                                <div className="col-md-12">
                                    <button type="button" className="btn btn-success btn-block">Add a extra website link</button>
                                </div>
                            </div>
                        </div>        
                    </div>

                    {/*free activities*/}
                    <div className="panel panel-default">
                        <div className="panel-heading">
                            {this.state.name} free activities
                        </div>
                        <div className="panel-body">
                            <div className="form-group">
                                <div className="col-md-4">
                                    <label className="control-label">free activities image link</label>
                                </div>
                                <div className="col-md-8">
                                    <input className="form-control" type="text" ref="free_activities_image_link" placeholder="please input the  image link" required/>
                                </div>
                            </div>
                            <div className="form-group">
                                <div className="col-md-4">
                                    <label className="control-label">free activities website link</label>
                                </div>
                                <div className="col-md-8">
                                    <input className="form-control" type="text" ref="free_activities_website_link" placeholder="please input the  website link" required/>
                                </div>
                            </div>
                            {this.state.plan.sightseeing_touring_options.free_activities.free_activities_extra_website_link_list.map((website,num)=>{
                                return(
                                    <div className="panel panel-default" key={"free_activities_extra_website_"+num}>
                                        <div className="panel-heading">
                                            free activities extra website link {num+1}
                                        </div>
                                        <div className="panel-body">
                                            <div className="form-group">
                                                <div className="col-md-4">
                                                    <label className="control-label">text</label>
                                                </div>
                                                <div className="col-md-8">
                                                    <input className="form-control" type="text" ref={"free_activities_extra_website_link_"+num+"_text"} placeholder="please input the text" required/>
                                                </div>
                                            </div>
                                            <div className="form-group">
                                                <div className="col-md-4">
                                                    <label className="control-label">website link</label>
                                                </div>
                                                <div className="col-md-8">
                                                    <input className="form-control" type="text" ref={"free_activities_extra_website_link_"+num+"_website_link"} placeholder="please input the website link" required/>
                                                </div>
                                            </div>
                                            <div className="form-group">
                                                <div className="col-md-12">
                                                    <button type="button" className="btn btn-success btn-block">Remove the extra website link</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })}
                            <div className="form-group">
                                <div className="col-md-12">
                                    <button type="button" className="btn btn-success btn-block">Add a extra website link</button>
                                </div>
                            </div>
                        </div>        
                    </div>

                    {/*volunteer*/}
                    <div className="panel panel-default">
                        <div className="panel-heading">
                            {this.state.name} volunteer
                        </div>
                        <div className="panel-body">
                            <div className="form-group">
                                <div className="col-md-4">
                                    <label className="control-label">volunteer image link</label>
                                </div>
                                <div className="col-md-8">
                                    <input className="form-control" type="text" ref="volunteer_image_link" placeholder="please input the  image link" required/>
                                </div>
                            </div>
                            <div className="form-group">
                                <div className="col-md-4">
                                    <label className="control-label">volunteer website link</label>
                                </div>
                                <div className="col-md-8">
                                    <input className="form-control" type="text" ref="volunteer_website_link" placeholder="please input the  website link" required/>
                                </div>
                            </div>
                            {this.state.plan.sightseeing_touring_options.volunteer.volunteer_extra_website_link_list.map((website,num)=>{
                                return(
                                    <div className="panel panel-default" key={"volunteer_extra_website_"+num}>
                                        <div className="panel-heading">
                                            volunteer extra website link {num+1}
                                        </div>
                                        <div className="panel-body">
                                            <div className="form-group">
                                                <div className="col-md-4">
                                                    <label className="control-label">text</label>
                                                </div>
                                                <div className="col-md-8">
                                                    <input className="form-control" type="text" ref={"volunteer_extra_website_link_"+num+"_text"} placeholder="please input the text" required/>
                                                </div>
                                            </div>
                                            <div className="form-group">
                                                <div className="col-md-4">
                                                    <label className="control-label">website link</label>
                                                </div>
                                                <div className="col-md-8">
                                                    <input className="form-control" type="text" ref={"volunteer_extra_website_link_"+num+"_website_link"} placeholder="please input the website link" required/>
                                                </div>
                                            </div>
                                            <div className="form-group">
                                                <div className="col-md-12">
                                                    <button type="button" className="btn btn-success btn-block">Remove the extra website link</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })}
                            <div className="form-group">
                                <div className="col-md-12">
                                    <button type="button" className="btn btn-success btn-block">Add a extra website link</button>
                                </div>
                            </div>
                        </div>        
                    </div>


                    <div className="form-group">
                        <div className="col-md-8">
                            <button type="submit" className="btn btn-success">Save and Continued</button>&nbsp;&nbsp;
                            <button type="reset" className="btn btn-danger">Cancel</button>
                        </div>
                    </div>
                        
                </form>
            </div>
        )
    }
}
export default PlanSightseeingUpdateForm;