import React,{Component,PropTypes} from 'react';
import axios from 'axios';
import config from '../../../../config';

class AdminPlanNewAboutForm extends Component{
    static contextTypes = {
        router: PropTypes.object
    }
    componentWillMount(){
        this.state = {
            countries: undefined,
            name:'',
            continent:'',
            errMsg:''
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
                console.log("data:",response.data.data);
                const name = response.data.data.name;
                const continent = response.data.data.continent;
                this.setState({name,continent});
            }
        })
        .catch(err=>{
            this.setState({errMsg:err.toString()});
            alert(err.toString());
        })
    }
    onNewPlanAboutSubmit(event){
        event.preventDefault();
        let about = {};
        let about_video_1 = {};
        let about_video_2 = {};
        let about_video_3 = {};
        let map_geolocation = {};
        let tourism_office = {};
        let entry_requirements = {};
        let top_blogs = {};
        const about_description = this.refs.about_description.value;
        const about_image_link = this.refs.about_image_link.value;
        const video1_name = this.refs.about_video1_name.value;
        const video1_link = this.refs.about_video1_link.value;
        const video2_name = this.refs.about_video2_name.value;
        const video2_link = this.refs.about_video2_link.value;
        const video3_name = this.refs.about_video3_name.value;
        const video3_link = this.refs.about_video3_link.value;
        const about_extra_videos = this.refs.about_extra_videos.value;
        const country_map_link = this.refs.country_map_link.value;
        const tourism_office_image_link = this.refs.tourism_office_image_link.value;
        const tourism_office_website_link = this.refs.tourism_office_website_link.value;
        const entry_requirements_image_link = this.refs.entry_requirements_image_link.value;
        const entry_requirements_website_link = this.refs.entry_requirements_website_link.value;
        const top_blogs_image_link = this.refs.top_blogs_image_link.value;
        const top_blogs_website_link = this.refs.top_blogs_website_link.value;
        about_video_1.video_name = video1_name;
        about_video_1.video_link = video1_link;
        about_video_2.video_name = video2_name;
        about_video_2.video_link = video2_link;
        about_video_3.video_name = video3_name;
        about_video_3.video_link = video3_link;
        map_geolocation = {lat,lon};
        tourism_office = {tourism_office_image_link,tourism_office_website_link};
        entry_requirements = {entry_requirements_image_link,entry_requirements_website_link};
        top_blogs = {image_link:top_blogs_image_link,website_link:top_blogs_website_link};
        about = {about_description,about_image_link,about_video_1,about_video_2,about_video_3,about_extra_videos,country_map_link,tourism_office,entry_requirements,top_blogs};
        const plan = {about};
        const id = this.props.id;
        const host = config.API_SERVER;
        const url = 'http://'+host+':12000/plans/'+id;
        axios.put(url,plan)
        .then(response=>{
            if (response.data.success){
                console.log('push id:',this.props.id);
                this.context.router.push('/admin/plan/new/whenGo/'+this.props.id)
            }else
                alert(response.data.errMsg);
        })
        .catch(err=>{
            this.setState({errMsg:err.toString()});
            alert(err.toString());
        })
    }
    render(){
        if (this.state.errMsg){
            return(
                <div>{this.state.errMsg}</div>
            )
        }
        if (this.state.countries==undefined||this.state.name==''){
            return(
                <div>Loading country data...</div>
            )
        }
        return(
            <div className="container new-plan-about">
                <form className="form-horizontal" onSubmit={this.onNewPlanAboutSubmit.bind(this)}>
            
                    {/*country Name field*/}
                    <div className="form-group">
                        <div className="col-md-4">
                            <label className="control-label">Country Name(Area Name)</label>
                        </div>
                        <div className="col-md-8">
                            <input type="text" className="form-control" value={this.state.name} readOnly/>
                        </div>
                    </div>
                            
                    {/*continent field*/}
                    <div className="form-group">
                        <div className="col-md-4">
                            <label className="control-label">Continent Name</label>
                        </div>
                        <div className="col-md-8">
                            <input type="text" className="form-control" value={this.state.continent} readOnly/>
                        </div>
                    </div>
                    
                    {/*country image link field*/}
                    <div className="form-group">
                        <div className="col-md-4">
                            <label className="control-label">Country About Image Link</label>
                        </div>
                        <div className="col-md-8">
                            <input type="text" className="form-control" ref="about_image_link" placeholder="please input the country about image link" required/>
                        </div>
                    </div>
                                
                    {/*country google map link*/}
                    <div className="form-group">
                        <div className="col-md-4">
                            <label className="control-label">Country Google Map Link</label>
                        </div>
                        <div className="col-md-8">
                            <input type="text" className="form-control" ref="country_map_link" placeholder="please input the country google map link" required/>
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
                                    <input type="text" className="form-control" ref="about_video1_name"  placeholder="please input the video name" required/>
                                </div>
                            </div>
                            <div className="form-group">
                                <div className="col-md-4">
                                    <label className="control-label">Video Link</label>
                                </div>
                                <div className="col-md-8">
                                    <input type="text" className="form-control" ref="about_video1_link" placeholder="please input the video link" required/>
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
                                    <input type="text" className="form-control" ref="about_video2_name" placeholder="please input the video name" required/>
                                </div>
                            </div>
                            <div className="form-group">
                                <div className="col-md-4">
                                    <label className="control-label">Video Link</label>
                                </div>
                                <div className="col-md-8">
                                    <input type="text" className="form-control" ref="about_video2_link" placeholder="please input the video link" required/>
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
                                    <input type="text" className="form-control" ref="about_video3_name" placeholder="please input the video name" required/>
                                </div>
                            </div>
                            <div className="form-group">
                                <div className="col-md-4">
                                    <label className="control-label">Video Link</label>
                                </div>
                                <div className="col-md-8">
                                    <input type="text" className="form-control" ref="about_video3_link" placeholder="please input the video link" required/>
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
                            <input type="text" className="form-control" ref="about_extra_videos" placeholder="please input the extra videos channel link" required/>
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
                                    <input type="text" className="form-control" ref="tourism_office_image_link" placeholder="please input the tourism office image link" required/>
                                </div>
                            </div>
                            <div className="form-group">
                                <div className="col-md-4">
                                    <label className="control-label">Tourism Office Website Link</label>
                                </div>
                                <div className="col-md-8">
                                    <input type="text" className="form-control" ref="tourism_office_website_link" placeholder="please input the tourism office website link" required/>
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
                                    <input type="text" className="form-control" ref="entry_requirements_image_link" placeholder="please input the entry requirements image link" required/>
                                </div>
                            </div>
                            <div className="form-group">
                                <div className="col-md-4">
                                    <label className="control-label">Entry Requirements Website Link</label>
                                </div>
                                <div className="col-md-8">
                                    <input type="text" className="form-control" ref="entry_requirements_website_link" placeholder="please input the tourism office website link" required/>
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
                                    <input type="text" className="form-control" ref="top_blogs_image_link" placeholder="please input the top blogs image link" required/>
                                </div>
                            </div>
                            <div className="form-group">
                                <div className="col-md-4">
                                    <label className="control-label">Top Blogs Website Link</label>
                                </div>
                                <div className="col-md-8">
                                    <input type="text" className="form-control" ref="top_blogs_website_link" placeholder="please input the top blogs website link" required/>
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
                            <textarea className="form-control" rows="5" ref="about_description" required></textarea>
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
export default AdminPlanNewAboutForm;