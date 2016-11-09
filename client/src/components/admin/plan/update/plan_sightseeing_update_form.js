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
    onChangeOrganisedDayToursImageLink(event){
        const organised_day_tours_image_link = event.target.value;
        let plan = this.state.plan;
        plan.sightseeing_touring_options.organised_day_tours.organised_day_tours_image_link = organised_day_tours_image_link;
        this.setState({plan});
    }
    onChangeOrganisedDayToursWebsiteLink(event){
        const organised_day_tours_website_link = event.target.value;
        let plan = this.state.plan;
        plan.sightseeing_touring_options.organised_day_tours.organised_day_tours_website_link = organised_day_tours_website_link;
        this.setState({plan});
    }
    onChangeOrganisedDayToursExtraWebsiteLinkListText(event){
        const text = event.target.value;
        const index = event.target.name.substring(20);
        let plan = this.state.plan;
        plan.sightseeing_touring_options.organised_day_tours.organised_day_tours_extra_website_link_list[index].text = text;
        this.setState({plan});
    }
    onChangeOrganisedDayToursExtraWebsiteLinkListWebsiteLink(event){
        const website_link = event.target.value;
        const index = event.target.name.substring(20);
        let plan = this.state.plan;
        plan.sightseeing_touring_options.organised_day_tours.organised_day_tours_extra_website_link_list[index].website_link = website_link;
        this.setState({plan});
    }
    onChangeOrganisedExtendedToursImageLink(evnet){
        const organised_extended_tours_image_link = event.target.value;
        let plan = this.state.plan;
        plan.sightseeing_touring_options.organised_extended_tours.organised_extended_tours_image_link = organised_extended_tours_image_link;
        this.setState({plan});
    }
    onChangeOrganisedExtendedToursWebsiteLink(event){
        const organised_extended_tours_website_link = event.target.value;
        let plan = this.state.plan;
        plan.sightseeing_touring_options.organised_extended_tours.organised_extended_tours_website_link = organised_extended_tours_website_link;
        this.setState({plan});
    }
    onChangeOrganisedExtendedToursExtraWebsiteLinkListText(event){
        const text = event.target.value;
        const index = event.target.name.substring(25);
        let plan = this.state.plan;
        plan.sightseeing_touring_options.organised_day_tours.organised_extended_tours_extra_website_link_list[index].text = text;
        this.setState({plan});
    }
    onChangeOrganisedExtendedToursExtraWebsiteLinkListWebsiteLink(event){
        const website_link = event.target.value;
        const index = event.target.name.substring(25);
        let plan = this.state.plan;
        plan.sightseeing_touring_options.organised_day_tours.organised_extended_tours_extra_website_link_list[index].website_link = website_link;
        this.setState({plan});
    }
    onChangeFreeActivitiesImageLink(event){
        const free_activities_image_link = event.target.value;
        let plan = this.state.plan;
        plan.sightseeing_touring_options.free_activities.free_activities_image_link = free_activities_image_link;
        this.setState({plan});
    }
    onChangeFreeActivitiesWebsiteLink(event){
        const free_activities_website_link = event.target.value;
        let plan = this.state.plan;
        plan.sightseeing_touring_options.free_activities.free_activities_website_link = free_activities_website_link;
        this.setState({plan});
    }
    onChangeFreeActivitiesExtraWebsiteLinkListText(event){
        const text = event.target.value;
        const index = event.target.name.substring(16);
        let plan = this.state.plan;
        plan.sightseeing_touring_options.organised_day_tours.free_activities.extra_website_link_list[index].text = text;
        this.setState({plan});
    }
    onChangeFreeActivitiesExtraWebsiteLinkListWebsiteLink(event){
        const website_link = event.target.value;
        const index = event.target.name.substring(16);
        let plan = this.state.plan;
        plan.sightseeing_touring_options.organised_day_tours.free_activities.extra_website_link_list[index].website_link = website_link;
        this.setState({plan});
    }
    onChangeVolunteerImageLink(event){
        const volunteer_image_link = event.target.value;
        let plan = this.state.plan;
        plan.sightseeing_touring_options.volunteer.volunteer_image_link = volunteer_image_link;
        this.setState({plan});
    }
    onChangeVolunteerWebsiteLink(event){
        const volunteer_image_link = event.target.value;
        let plan = this.state.plan;
        plan.sightseeing_touring_options.volunteer.volunteer_website_link = volunteer_website_link;
        this.setState({plan});
    }
    onChangeVolunteerExtraWebsiteLinkListText(event){
        const text = event.target.value;
        const index = event.target.name.substring(10);
        let plan = this.state.plan;
        plan.sightseeing_touring_options.volunteer.volunteer_extra_website_link_list[index].text = text;
        this.setState({plan});
    }
    onChangeVolunteerExtraWebsiteLinkListWebsiteLink(event){
        const website_link = event.target.value;
        const index = event.target.name.substring(10);
        let plan = this.state.plan;
        plan.sightseeing_touring_options.volunteer.volunteer_extra_website_link_list[index].website_link = website_link;
        this.setState({plan});
    }
    removeSightseeingExtraWebsite(num){
        let plan = this.state.plan;
        const newSightseeingExtraWebsiteLinkList = plan.sightseeing_touring_options.sightseeing.sightseeing_extra_website_link_list.filter((list,index)=>{
            return index != num;
        })
        plan.sightseeing_touring_options.sightseeing.sightseeing_extra_website_link_list = newSightseeingExtraWebsiteLinkList;
        this.setState({plan});
    }
    addNewSightseeingExtraWebsite(){
        const extra_website_link = {"text":"","website_link":""};
        let plan = this.state.plan
        plan.sightseeing_touring_options.sightseeing.sightseeing_extra_website_link_list.push(extra_website_link);
        this.setState({plan});
    }
    removeIndependentTouringExtreaWebsite(num){
        let plan = this.state.plan;
        const newIndependentTouringExtraWebsiteLinkList = plan.sightseeing_touring_options.independent_touring.independent_touring_extra_website_link_list.filter((list,index)=>{
            return index != num;
        })
        plan.sightseeing_touring_options.independent_touring.independent_touring_extra_website_link_list = newIndependentTouringExtraWebsiteLinkList;
        this.setState({plan});
    }
    addNewIndependentTouringExtraWebsite(){
        const extra_website_link = {"text":"","website_link":""};
        let plan = this.state.plan
        plan.sightseeing_touring_options.independent_touring.independent_touring_extra_website_link_list.push(extra_website_link);
        this.setState({plan});
    }
    removeOrganisedDayToursExtraWebsite(num){
        let plan = this.state.plan;
        const newOrganisedDayToursExtraWebsiteLinkList = plan.sightseeing_touring_options.organised_day_tours.organised_day_tours_extra_website_link_list.filter((list,index)=>{
            return index != num;
        })
        plan.sightseeing_touring_options.organised_day_tours.organised_day_tours_extra_website_link_list = newOrganisedDayToursExtraWebsiteLinkList;
        this.setState({plan});
    }
    addNewOrganisedDayToursExtraWebsite(){
        const extra_website_link = {"text":"","website_link":""};
        let plan = this.state.plan
        plan.sightseeing_touring_options.organised_day_tours.organised_day_tours_extra_website_link_list.push(extra_website_link);
        this.setState({plan});
    }
    removeOrganisedExtendedTours(num){
        let plan = this.state.plan;
        const newOrganisedExtendedToursExtraWebsiteLinkList = plan.sightseeing_touring_options.organised_extended_tours.organised_extended_tours_extra_website_link_list.filter((list,index)=>{
            return index != num;
        })
        plan.sightseeing_touring_options.organised_extended_tours.organised_extended_tours_extra_website_link_list = newOrganisedExtendedToursExtraWebsiteLinkList;
        this.setState({plan});
    }
    addNewOrganisedExtendedTours(){
        const extra_website_link = {"text":"","website_link":""};
        let plan = this.state.plan
        plan.sightseeing_touring_options.organised_extended_tours.organised_extended_tours_extra_website_link_list.push(extra_website_link);
        this.setState({plan});
    }
    removeFreeActivitiesExtraWebsite(num){
        let plan = this.state.plan;
        const newFreeActivitiesExtraWebsiteLinkList = plan.sightseeing_touring_options.free_activities.free_activities_extra_website_link_list.filter((list,index)=>{
            return index != num;
        })
        plan.sightseeing_touring_options.free_activities.free_activities_extra_website_link_list = newFreeActivitiesExtraWebsiteLinkList;
        this.setState({plan});
    }
    addNewFreeActivitiesExtraWebsite(){
        const extra_website_link = {"text":"","website_link":""};
        let plan = this.state.plan
        plan.sightseeing_touring_options.free_activities.free_activities_extra_website_link_list.push(extra_website_link);
        this.setState({plan});
    }
    removeVolunteerExtraWebsite(num){
        let plan = this.state.plan;
        const newVolunteerExtraWebsiteLinkList = plan.sightseeing_touring_options.volunteer.volunteer_extra_website_link_list.filter((list,index)=>{
            return index != num;
        })
        plan.sightseeing_touring_options.volunteer.volunteer_extra_website_link_list = newVolunteerExtraWebsiteLinkList;
        this.setState({plan});
    }
    addNewVolunteerExtraWebsite(){
        const extra_website_link = {"text":"","website_link":""};
        let plan = this.state.plan
        plan.sightseeing_touring_options.volunteer.volunteer_extra_website_link_list.push(extra_website_link);
        this.setState({plan});
    }
    onUpdateSightseeingSubmit(event){
        event.preventDefault();
        const id = this.props.id;
        const host = config.API_SERVER;
        const url = "http://"+host+":12000/plans/"+id;
        const plan = this.state.plan;
        axios.put(url,plan)
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
            <div className="container new-plan-sightseeing">
                <form className="form-horizontal" onSubmit={this.onUpdateSightseeingSubmit.bind(this)}>
            
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
                                                    <button type="button" className="btn btn-success btn-block" onClick={()=>this.removeSightseeingExtraWebsite(num)}>Remove the extra website link</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })}
                            <div className="form-group">
                                <div className="col-md-12">
                                    <button type="button" className="btn btn-success btn-block" onClick={this.addNewSightseeingExtraWebsite.bind(this)}>Add a extra website link</button>
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
                                                    <button type="button" className="btn btn-success btn-block" onClick={()=>this.removeIndependentTouringExtreaWebsite(num)}>Remove the extra website link</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })}
                            <div className="form-group">
                                <div className="col-md-12">
                                    <button type="button" className="btn btn-success btn-block" onClick={this.addNewIndependentTouringExtraWebsite.bind(this)}>Add a extra website link</button>
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
                                    <input className="form-control" type="text" value={this.state.plan.sightseeing_touring_options.organised_day_tours.organised_day_tours_image_link} onChange={this.onChangeOrganisedDayToursImageLink.bind(this)} required/>
                                </div>
                            </div>
                            <div className="form-group">
                                <div className="col-md-4">
                                    <label className="control-label">independent touring website link</label>
                                </div>
                                <div className="col-md-8">
                                    <input className="form-control" type="text" value={this.state.plan.sightseeing_touring_options.organised_day_tours.organised_day_tours_website_link} onChange={this.onChangeOrganisedDayToursWebsiteLink.bind(this)} required/>
                                </div>
                            </div>
                            {this.state.plan.sightseeing_touring_options.organised_day_tours.organised_day_tours_extra_website_link_list.map((website,num)=>{
                                const name = "organised_day_tours_"+num;
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
                                                    <input className="form-control" type="text" value={website.text} name={name} onChange={this.onChangeOrganisedDayToursExtraWebsiteLinkListText.bind(this)} required/>
                                                </div>
                                            </div>
                                            <div className="form-group">
                                                <div className="col-md-4">
                                                    <label className="control-label">website link</label>
                                                </div>
                                                <div className="col-md-8">
                                                    <input className="form-control" type="text" value={website.website_link} name={name} onChange={this.onChangeOrganisedDayToursExtraWebsiteLinkListWebsiteLink.bind(this)} required/>
                                                </div>
                                            </div>
                                            <div className="form-group">
                                                <div className="col-md-12">
                                                    <button type="button" className="btn btn-success btn-block" onClick={()=>{this.removeOrganisedDayToursExtraWebsite(num)}}>Remove the extra website link</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })}
                            <div className="form-group">
                                <div className="col-md-12">
                                    <button type="button" className="btn btn-success btn-block" onClick={this.addNewOrganisedDayToursExtraWebsite.bind(this)}>Add a extra website link</button>
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
                                    <input className="form-control" type="text" value={this.state.plan.sightseeing_touring_options.organised_extended_tours.organised_extended_tours_image_link} onChange={this.onChangeOrganisedExtendedToursImageLink.bind(this)} required/>
                                </div>
                            </div>
                            <div className="form-group">
                                <div className="col-md-4">
                                    <label className="control-label">organised extended tours website link</label>
                                </div>
                                <div className="col-md-8">
                                    <input className="form-control" type="text" value={this.state.plan.sightseeing_touring_options.organised_extended_tours.organised_extended_tours_website_link} onChange={this.onChangeOrganisedExtendedToursWebsiteLink.bind(this)} required/>
                                </div>
                            </div>
                            {this.state.plan.sightseeing_touring_options.organised_extended_tours.organised_extended_tours_extra_website_link_list.map((website,num)=>{
                                const name = "organised_extended_tours_"+num;
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
                                                    <input className="form-control" type="text" value={website.text} name={name} onChange={this.onChangeOrganisedExtendedToursExtraWebsiteLinkListText.bind(this)} required/>
                                                </div>
                                            </div>
                                            <div className="form-group">
                                                <div className="col-md-4">
                                                    <label className="control-label">website link</label>
                                                </div>
                                                <div className="col-md-8">
                                                    <input className="form-control" type="text" value={website.website_link} name={name} onChange={this.onChangeOrganisedExtendedToursExtraWebsiteLinkListWebsiteLink.bind(this)} required/>
                                                </div>
                                            </div>
                                            <div className="form-group">
                                                <div className="col-md-12">
                                                    <button type="button" className="btn btn-success btn-block" onClick={()=>this.removeOrganisedExtendedTours(num)}>Remove the extra website link</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })}
                            <div className="form-group">
                                <div className="col-md-12">
                                    <button type="button" className="btn btn-success btn-block" onClick={this.addNewOrganisedExtendedTours.bind(this)}>Add a extra website link</button>
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
                                    <input className="form-control" type="text" value={this.state.plan.sightseeing_touring_options.free_activities.free_activities_image_link} onChange={this.onChangeFreeActivitiesImageLink.bind(this)} required/>
                                </div>
                            </div>
                            <div className="form-group">
                                <div className="col-md-4">
                                    <label className="control-label">free activities website link</label>
                                </div>
                                <div className="col-md-8">
                                    <input className="form-control" type="text" value={this.state.plan.sightseeing_touring_options.free_activities.free_activities_website_link} onChange={this.onChangeFreeActivitiesWebsiteLink.bind(this)} required/>
                                </div>
                            </div>
                            {this.state.plan.sightseeing_touring_options.free_activities.free_activities_extra_website_link_list.map((website,num)=>{
                                const name = "free_activities_"+num;
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
                                                    <input className="form-control" type="text" value={website.text} name={name} onChange={this.onChangeFreeActivitiesExtraWebsiteLinkListText.bind(this)} required/>
                                                </div>
                                            </div>
                                            <div className="form-group">
                                                <div className="col-md-4">
                                                    <label className="control-label">website link</label>
                                                </div>
                                                <div className="col-md-8">
                                                    <input className="form-control" type="text" value={website.website_link} name={name} onChange={this.onChangeFreeActivitiesExtraWebsiteLinkListWebsiteLink.bind(this)} required/>
                                                </div>
                                            </div>
                                            <div className="form-group">
                                                <div className="col-md-12">
                                                    <button type="button" className="btn btn-success btn-block" onClick={()=>this.removeFreeActivitiesExtraWebsite(num)}>Remove the extra website link</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })}
                            <div className="form-group">
                                <div className="col-md-12">
                                    <button type="button" className="btn btn-success btn-block" onClick={this.addNewFreeActivitiesExtraWebsite.bind(this)}>Add a extra website link</button>
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
                                    <input className="form-control" type="text" value={this.state.plan.sightseeing_touring_options.volunteer.volunteer_image_link} onChange={this.onChangeVolunteerImageLink.bind(this)} required/>
                                </div>
                            </div>
                            <div className="form-group">
                                <div className="col-md-4">
                                    <label className="control-label">volunteer website link</label>
                                </div>
                                <div className="col-md-8">
                                    <input className="form-control" type="text" value={this.state.plan.sightseeing_touring_options.volunteer.volunteer_website_link} onChange={this.onChangeVolunteerWebsiteLink.bind(this)} required/>
                                </div>
                            </div>
                            {this.state.plan.sightseeing_touring_options.volunteer.volunteer_extra_website_link_list.map((website,num)=>{
                                const name = "volunteer_"+num;
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
                                                    <input className="form-control" type="text" value={website.text} name={name} onChange={this.onChangeVolunteerExtraWebsiteLinkListText.bind(this)} required/>
                                                </div>
                                            </div>
                                            <div className="form-group">
                                                <div className="col-md-4">
                                                    <label className="control-label">website link</label>
                                                </div>
                                                <div className="col-md-8">
                                                    <input className="form-control" type="text" value={website.website_link} name={name} onChange={this.onChangeVolunteerExtraWebsiteLinkListWebsiteLink.bind(this)} required/>
                                                </div>
                                            </div>
                                            <div className="form-group">
                                                <div className="col-md-12">
                                                    <button type="button" className="btn btn-success btn-block" onClick={()=>this.removeVolunteerExtraWebsite(num)}>Remove the extra website link</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })}
                            <div className="form-group">
                                <div className="col-md-12">
                                    <button type="button" className="btn btn-success btn-block" onClick={this.addNewVolunteerExtraWebsite.bind(this)}>Add a extra website link</button>
                                </div>
                            </div>
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