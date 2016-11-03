import React,{Component,PropTypes} from 'react';
import axios from 'axios';

class AdminPlanNewSightseeingForm extends Component{
    static contextTypes = {
        router: PropTypes.object
    }
    componentWillMount(){
        this.state = {
            name:'',
            errMsg:'',
            sightseeing_list:[1],
            independent_touring_list:[1],
            organised_day_tour_list:[1],
            organised_extended_tours_list:[1],
            free_activities_list:[1],
            volunteer_list:[1]
        }
    }
    componentDidMount(){
        const id = this.props.id;
        axios.get("http://localhost:12000/plans/"+id)
        .then(response=>{
            if (response.data.success){
                const name = response.data.data.name;
                this.setState({name});
            } else {
                this.setState({errMsg:response.data.errMsg});
                alert(response.data.errMsg);
            }
        })
        .catch(err=>{
            this.setState({errMsg:err.toString()});
            alert(err.toString());
        })
    }
    onNewSightseeingExtraWebsiteLink(){
        let index = this.state.sightseeing_list.length;
        index++;
        let sightseeing_list = this.state.sightseeing_list;
        sightseeing_list.push(index);
        this.setState({sightseeing_list})
    }
    onNewIndependentTouringExtraWebsiteLink(){
        let index = this.state.independent_touring_list.length;
        index++;
        let independent_touring_list = this.state.independent_touring_list;
        independent_touring_list.push(index);
        this.setState({independent_touring_list})
    }
    onNewOrganisedDayTourExtraWebsiteLink(){
        let index = this.state.organised_day_tour_list.length;
        index++;
        let organised_day_tour_list = this.state.organised_day_tour_list;
        organised_day_tour_list.push(index);
        this.setState({organised_day_tour_list})
    }
    onNewOrganisedExtendedToursExtraWebsiteLink(){
        let index = this.state.organised_extended_tours_list.length;
        index++;
        let organised_extended_tours_list = this.state.organised_extended_tours_list;
        organised_extended_tours_list.push(index);
        this.setState({organised_extended_tours_list})
    }
    onNewFreeActivitiesExtraWebsiteLink(){
        let index = this.state.free_activities_list.length;
        index++;
        let free_activities_list = this.state.free_activities_list;
        free_activities_list.push(index);
        this.setState({free_activities_list})
    }
    onNewVolunteerExtraWebsiteLink(){
        let index = this.state.volunteer_list.length;
        index++;
        let volunteer_list = this.state.volunteer_list;
        volunteer_list.push(index);
        this.setState({volunteer_list})
    }
    render(){
        if (this.state.errMsg!=''){
            return(
                <div>{this.state.errMsg}</div>
            )
        }
        if (this.state.name==''){
            return (
                <div>Loading data...</div>
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
                                    <input className="form-control" type="text" ref="sightseeing_image_link" placeholder="please input the  image link" required/>
                                </div>
                            </div>
                            <div className="form-group">
                                <div className="col-md-4">
                                    <label className="control-label">sightseeing website link</label>
                                </div>
                                <div className="col-md-8">
                                    <input className="form-control" type="text" ref="sightseeing_website_link" placeholder="please input the  website link" required/>
                                </div>
                            </div>
                            {this.state.sightseeing_list.map(num=>{
                                return(
                                    <div className="panel panel-default" key={"extra_website_"+num}>
                                        <div className="panel-heading">
                                            sightseeing extra website link {num}
                                        </div>
                                        <div className="panel-body">
                                            <div className="form-group">
                                                <div className="col-md-4">
                                                    <label className="control-label">text</label>
                                                </div>
                                                <div className="col-md-8">
                                                    <input className="form-control" type="text" ref={"sightseeing_extra_website_link_"+num+"_text"} placeholder="please input the text" required/>
                                                </div>
                                            </div>
                                            <div className="form-group">
                                                <div className="col-md-4">
                                                    <label className="control-label">website link</label>
                                                </div>
                                                <div className="col-md-8">
                                                    <input className="form-control" type="text" ref={"sightseeing_extra_website_link_"+num+"_website_link"} placeholder="please input the website link" required/>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })}
                            <div className="form-group">
                                <div className="col-md-12">
                                    <button type="button" className="btn btn-success btn-block" onClick={this.onNewSightseeingExtraWebsiteLink.bind(this)}>Add a extra website link</button>
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
                                    <input className="form-control" type="text" ref="independent_touring_image_link" placeholder="please input the image link" required/>
                                </div>
                            </div>
                            <div className="form-group">
                                <div className="col-md-4">
                                    <label className="control-label">independent touring website link</label>
                                </div>
                                <div className="col-md-8">
                                    <input className="form-control" type="text" ref="independent_touring_website_link" placeholder="please input the website link" required/>
                                </div>
                            </div>
                            {this.state.independent_touring_list.map(num=>{
                                return(
                                    <div className="panel panel-default" key={"extra_website_"+num}>
                                        <div className="panel-heading">
                                            independent touring extra website link {num}
                                        </div>
                                        <div className="panel-body">
                                            <div className="form-group">
                                                <div className="col-md-4">
                                                    <label className="control-label">text</label>
                                                </div>
                                                <div className="col-md-8">
                                                    <input className="form-control" type="text" ref={"independent_touring_extra_website_link_"+num+"_text"} placeholder="please input the text" required/>
                                                </div>
                                            </div>
                                            <div className="form-group">
                                                <div className="col-md-4">
                                                    <label className="control-label">website link</label>
                                                </div>
                                                <div className="col-md-8">
                                                    <input className="form-control" type="text" ref={"independent_extra_website_link_"+num+"_website_link"} placeholder="please input the website link" required/>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })}
                            <div className="form-group">
                                <div className="col-md-12">
                                    <button type="button" className="btn btn-success btn-block" onClick={this.onNewIndependentTouringExtraWebsiteLink.bind(this)}>Add a extra website link</button>
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
                                    <input className="form-control" type="text" ref="organised_day_tour_image_link" placeholder="please input the  image link" required/>
                                </div>
                            </div>
                            <div className="form-group">
                                <div className="col-md-4">
                                    <label className="control-label">independent touring website link</label>
                                </div>
                                <div className="col-md-8">
                                    <input className="form-control" type="text" ref="organised_day_tour_website_link" placeholder="please input the  website link" required/>
                                </div>
                            </div>
                            {this.state.organised_day_tour_list.map(num=>{
                                return(
                                    <div className="panel panel-default" key={"extra_website_"+num}>
                                        <div className="panel-heading">
                                            organised day tour extra website link {num}
                                        </div>
                                        <div className="panel-body">
                                            <div className="form-group">
                                                <div className="col-md-4">
                                                    <label className="control-label">text</label>
                                                </div>
                                                <div className="col-md-8">
                                                    <input className="form-control" type="text" ref={"organised_day_tour_extra_website_link_"+num+"_text"} placeholder="please input the text" required/>
                                                </div>
                                            </div>
                                            <div className="form-group">
                                                <div className="col-md-4">
                                                    <label className="control-label">website link</label>
                                                </div>
                                                <div className="col-md-8">
                                                    <input className="form-control" type="text" ref={"organised_day_tour_extra_website_link_"+num+"_website_link"} placeholder="please input the website link" required/>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })}
                            <div className="form-group">
                                <div className="col-md-12">
                                    <button type="button" className="btn btn-success btn-block" onClick={this.onNewOrganisedDayTourExtraWebsiteLink.bind(this)}>Add a extra website link</button>
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
                            {this.state.organised_extended_tours_list.map(num=>{
                                return(
                                    <div className="panel panel-default" key={"extra_website_"+num}>
                                        <div className="panel-heading">
                                            organised extended tours extra website link {num}
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
                                        </div>
                                    </div>
                                )
                            })}
                            <div className="form-group">
                                <div className="col-md-12">
                                    <button type="button" className="btn btn-success btn-block" onClick={this.onNewOrganisedExtendedToursExtraWebsiteLink.bind(this)}>Add a extra website link</button>
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
                            {this.state.free_activities_list.map(num=>{
                                return(
                                    <div className="panel panel-default" key={"extra_website_"+num}>
                                        <div className="panel-heading">
                                            free activities extra website link {num}
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
                                        </div>
                                    </div>
                                )
                            })}
                            <div className="form-group">
                                <div className="col-md-12">
                                    <button type="button" className="btn btn-success btn-block" onClick={this.onNewFreeActivitiesExtraWebsiteLink.bind(this)}>Add a extra website link</button>
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
                            {this.state.volunteer_list.map(num=>{
                                return(
                                    <div className="panel panel-default" key={"extra_website_"+num}>
                                        <div className="panel-heading">
                                            volunteer extra website link {num}
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
                                        </div>
                                    </div>
                                )
                            })}
                            <div className="form-group">
                                <div className="col-md-12">
                                    <button type="button" className="btn btn-success btn-block" onClick={this.onNewVolunteerExtraWebsiteLink.bind(this)}>Add a extra website link</button>
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
export default AdminPlanNewSightseeingForm;