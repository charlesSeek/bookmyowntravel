import React,{Component,PropTypes} from 'react';
import axios from 'axios';
import config from '../../../../config';

class PlanAboutUpdateForm extends Component{
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
        const country_url = 'http://'+host+':12000/countries';
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
        const plan_url = 'http://'+host+':12000/plans/'+id;
        axios.get(plan_url)
        .then((response)=>{
            if (response.data.success){
                //console.log("data:",response.data.data);
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
    onChangeAboutImageLink(event){
        const about_image_link = event.target.value;
        let plan = this.state.plan;
        plan.about.about_image_link = about_image_link;
        this.setState({plan});
    }
    onChangeCountryMapLink(event){
        const country_map_link = event.target.value;
        let plan = this.state.plan;
        plan.about.country_map_link = country_map_link;
        this.setState({plan});
    }
    onChangeVideo1Name(event){
        const video_name = event.target.value;
        let plan = this.state.plan;
        plan.about.about_video_1.video_name=video_name;
        this.setState({plan});
    }
    onChangeVideo1Link(event){
        const video_link = event.target.value;
        let plan = this.state.plan;
        plan.about.about_video_1.video_link=video_link;
        this.setState({plan});
    }
    onChangeVideo2Name(event){
        const video_name = event.target.value;
        let plan = this.state.plan;
        plan.about.about_video_2.video_name=video_name;
        this.setState({plan});
    }
    onChangeVideo2Link(event){
        const video_link = event.target.value;
        let plan = this.state.plan;
        plan.about.about_video_2.video_link=video_link;
        this.setState({plan});
    }
    onChangeVideo3Name(event){
        const video_name = event.target.value;
        let plan = this.state.plan;
        plan.about.about_video_3.video_name=video_name;
        this.setState({plan});
    }
    onChangeVideo3Link(event){
        const video_link = event.target.value;
        let plan = this.state.plan;
        plan.about.about_video_3.video_link=video_link;
        this.setState({plan});
    }
    onChangeAboutExtraVideos(event){
        const about_extra_videos = event.target.value;
        let plan = this.state.plan;
        plan.about.about_extra_videos = about_extra_videos;
        this.setState({plan});
    }
    onChangeTourismOfficeImageLink(event){
        const tourism_office_image_link = event.target.value;
        let plan = this.state.plan;
        plan.about.tourism_office.tourism_office_image_link = tourism_office_image_link;
        this.setState({plan});
    }
    onChangeTourismOfficeWebsiteLink(event){
        const tourism_office_website_link = event.target.value;
        let plan = this.state.plan;
        plan.about.tourism_office.tourism_office_website_link = tourism_office_website_link;
        this.setState({plan});
    }
    onChangeEntryRequirementsImageLink(event){
        const entry_requirements_image_link = event.target.value;
        let plan = this.state.plan;
        plan.about.entry_requirements.entry_requirements_image_link = entry_requirements_image_link;
        this.setState({plan});
    }
    onChangeEntryRequirementsWebsiteLink(event){
        const entry_requirements_website_link = event.target.value;
        let plan = this.state.plan;
        plan.about.entry_requirements.entry_requirements_website_link = entry_requirements_website_link;
        this.setState({plan});
    }
    onChangeTopBlogImageLink(event){
        const image_link = event.target.value;
        let plan = this.state.plan;
        plan.about.top_blogs.image_link = image_link;
        this.setState({plan});
    }
    onChangeTopBlogWebsiteLink(event){
        const website_link = event.target.value;
        let plan = this.state.plan;
        plan.about.top_blogs.website_link = website_link;
        this.setState({plan});
    }
    onChangeDescription(event){
        const about_description = event.target.value;
        let plan = this.state.plan;
        plan.about.about_description = about_description;
        this.setState({plan})
    }
    onUpdatePlanAboutSubmit(event){
        event.preventDefault();
        const id = this.props.id;
        const host = config.API_SERVER;
        const url = 'http://'+host+':12000/plans/'+id;
        axios.put(url,this.state.plan)
        .then(response=>{
            if (response.data.success){
                this.setState({isHiddenSuccessMsg:false});
            }else{
                const errMsg = response.data.errMsg;
                this.setState({errMsg});
                this.setState({isHiddenErrMsg:false});
                //alert(errMsg)
            }
        })
        .catch(err=>{
            this.setState({errMsg:err.toString()});
            this.setState({isHiddenErrMsg:false});
            //alert(err.toString());
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
            <div className="container new-plan-about">
                <form className="form-horizontal" onSubmit={this.onUpdatePlanAboutSubmit.bind(this)}>
            
                    {/*country Name field*/}
                    <div className="form-group">
                        <div className="col-md-4">
                            <label className="control-label">Country Name(Area Name)</label>
                        </div>
                        <div className="col-md-8">
                            <input type="text" className="form-control" value={this.state.plan.name} readOnly/>
                        </div>
                    </div>
                            
                    {/*continent field*/}
                    <div className="form-group">
                        <div className="col-md-4">
                            <label className="control-label">Continent Name</label>
                        </div>
                        <div className="col-md-8">
                            <input type="text" className="form-control" value={this.state.plan.continent} readOnly/>
                        </div>
                    </div>
                    
                    
                    {/*country image link field*/}
                    <div className="form-group">
                        <div className="col-md-4">
                            <label className="control-label">Country About Image Link</label>
                        </div>
                        <div className="col-md-8">
                            <input type="text" className="form-control" value={this.state.plan.about.about_image_link} onChange={this.onChangeAboutImageLink.bind(this)} required/>
                        </div>
                    </div>
                    
                    {/*country google map link*/}
                    <div className="form-group">
                        <div className="col-md-4">
                            <label className="control-label">Country Map Link</label>
                        </div>
                        <div className="col-md-8">
                            <input type="text" className="form-control" value = {this.state.plan.about.country_map_link} onChange={this.onChangeCountryMapLink.bind(this)} required/>
                        </div>
                    </div>
                    
                    {/*contry about video 1*/}
                    <div className="panel panel-default">
                        <div className="panel-heading">
                            Country About Video 1
                        </div>
                        <div className="panel-body">
                            <div className="form-group">
                                <div className="col-md-4">
                                    <label className="control-label">Video Name</label>
                                </div>
                                <div className="col-md-8">
                                    <input type="text" className="form-control" value={this.state.plan.about.about_video_1.video_name} onChange={this.onChangeVideo1Name.bind(this)} required/>
                                </div>
                            </div>
                            <div className="form-group">
                                <div className="col-md-4">
                                    <label className="control-label">Video Link</label>
                                </div>
                                <div className="col-md-8">
                                    <input type="text" className="form-control" value={this.state.plan.about.about_video_1.video_link} onChange={this.onChangeVideo1Link.bind(this)} required/>
                                </div>
                            </div>
                        </div>
                    </div>          
                              
                    {/*country about video 2*/}
                    <div className="panel panel-default">
                        <div className="panel-heading">
                            Country About Video 2
                        </div>
                        <div className="panel-body">
                            <div className="form-group">
                                <div className="col-md-4">
                                    <label className="control-label">Video Name</label>
                                </div>
                                <div className="col-md-8">
                                    <input type="text" className="form-control" value={this.state.plan.about.about_video_2.video_name} onChange={this.onChangeVideo2Name.bind(this)} required/>
                                </div>
                            </div>
                            <div className="form-group">
                                <div className="col-md-4">
                                    <label className="control-label">Video Link</label>
                                </div>
                                <div className="col-md-8">
                                    <input type="text" className="form-control" value={this.state.plan.about.about_video_2.video_link} onChange={this.onChangeVideo2Link.bind(this)} required/>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    {/*country video 3*/}
                    <div className="panel panel-default">
                        <div className="panel-heading">
                            Country About Video 3
                        </div>
                        <div className="panel-body">
                            <div className="form-group">
                                <div className="col-md-4">
                                    <label className="control-label">Video Name</label>
                                </div>
                                <div className="col-md-8">
                                    <input type="text" className="form-control" value={this.state.plan.about.about_video_3.video_name} onChange={this.onChangeVideo3Name.bind(this)} required/>
                                </div>
                            </div>
                            <div className="form-group">
                                <div className="col-md-4">
                                    <label className="control-label">Video Link</label>
                                </div>
                                <div className="col-md-8">
                                    <input type="text" className="form-control" value={this.state.plan.about.about_video_3.video_link} onChange={this.onChangeVideo3Link.bind(this)} required/>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    {/*country about extra videos channel link*/}
                    <div className="form-group">
                        <div className="col-md-4">
                            <label className="control-label">Country extra videos Channel</label>
                        </div>
                        <div className="col-md-8">
                            <input type="text" className="form-control" value={this.state.plan.about.about_extra_videos} onChange={this.onChangeAboutExtraVideos.bind(this)} required/>
                        </div>
                    </div>
                    
                            
                    {/*about tourism office*/}
                    <div className="panel panel-default">
                        <div className="panel-heading">
                            Country Tourism Office
                        </div>
                        <div className="panel-body">
                            <div className="form-group">
                                <div className="col-md-4">
                                    <label className="control-label">Tourism Office Image Link</label>
                                </div>
                                <div className="col-md-8">
                                    <input type="text" className="form-control" value={this.state.plan.about.tourism_office.tourism_office_image_link} onChange={this.onChangeTourismOfficeImageLink.bind(this)} required/>
                                </div>
                            </div>
                            <div className="form-group">
                                <div className="col-md-4">
                                    <label className="control-label">Tourism Office Website Link</label>
                                </div>
                                <div className="col-md-8">
                                    <input type="text" className="form-control" value={this.state.plan.about.tourism_office.tourism_office_website_link} onChange={this.onChangeTourismOfficeWebsiteLink.bind(this)} required/>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    {/*about entry requirement*/}
                    <div className="panel panel-default">
                        <div className="panel-heading">
                            Entry Requirements
                        </div>
                        <div className="panel-body">
                            <div className="form-group">
                                <div className="col-md-4">
                                    <label className="control-label">Entry Requirements Image Link</label>
                                </div>
                                <div className="col-md-8">
                                    <input type="text" className="form-control" value={this.state.plan.about.entry_requirements.entry_requirements_image_link} onChange={this.onChangeEntryRequirementsImageLink.bind(this)} required/>
                                </div>
                            </div>
                            <div className="form-group">
                                <div className="col-md-4">
                                    <label className="control-label">Entry Requirements Website Link</label>
                                </div>
                                <div className="col-md-8">
                                    <input type="text" className="form-control" value={this.state.plan.about.entry_requirements.entry_requirements_website_link} onChange={this.onChangeEntryRequirementsWebsiteLink.bind(this)} required/>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/*about top blogs*/}
                    <div className="panel panel-default">
                        <div className="panel-heading">
                            Top Blogs
                        </div>
                        <div className="panel-body">
                            <div className="form-group">
                                <div className="col-md-4">
                                    <label className="control-label">Top Blogs Image Link</label>
                                </div>
                                <div className="col-md-8">
                                    <input type="text" className="form-control" value={this.state.plan.about.top_blogs.image_link} onChange={this.onChangeTopBlogImageLink.bind(this)} required/>
                                </div>
                            </div>
                            <div className="form-group">
                                <div className="col-md-4">
                                    <label className="control-label">Top Blogs Website Link</label>
                                </div>
                                <div className="col-md-8">
                                    <input type="text" className="form-control" value={this.state.plan.about.top_blogs.website_link} onChange={this.onChangeTopBlogWebsiteLink.bind(this)} required/>
                                </div>
                            </div>
                        </div>
                    </div>
                                    
                    {/*country about description*/}
                    <div className="form-group">
                        <div className="col-md-4">
                            <label className="control-label">Country Description</label>
                        </div>
                        <div className="col-md-8">
                            <textarea className="form-control" rows="5" value={this.state.plan.about.about_description} onChange={this.onChangeDescription.bind(this)} required></textarea>
                        </div>
                    </div>
                    
                    {/*Message field*/}
                    <div className={this.state.isHiddenErrMsg?'hidden':''}>
                        <div className="col-md-12">
                            <h4 className="error-msg">{this.state.errMsg}</h4>
                        </div>
                    </div>
                    <div className={this.state.isHiddenSuccessMsg?'hidden':''}>
                        <div className="col-md-12">
                            <h4 className="success-msg">The plan info has successfully updated</h4>
                        </div>
                    </div>

                    <div className="form-group">
                        <div className="col-md-8">
                            <button type="submit" className="btn btn-success">Update and Save</button>&nbsp;&nbsp;
                            <button type="reset" className="btn btn-danger">Cancel</button>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}
export default PlanAboutUpdateForm;