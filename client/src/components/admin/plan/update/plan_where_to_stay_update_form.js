import React,{Component} from 'react';
import axios from 'axios';
import config from '../../../../config'
import Popup from 'react-popup';

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
    onChangeDescription(event){
        const description = event.target.value;
        let plan = this.state.plan;
        plan.where_to_stay.description = descritption;
        this.setState({plan});
    }
    onChangeHotelCompareText(event){
        const text = event.target.value;
        const index = event.target.name.substring(14);
        let plan = this.state.plan;
        plan.where_to_stay.hotel_compare_website_list[index].text = text;
        this.setState({plan});
    }
    onChangeHotelCompareWebsiteLink(event){
        const website_link = event.target.value;
        const index = event.target.name.substring(14);
        let plan = this.state.plan;
        plan.where_to_stay.hotel_compare_website_list[index].website_link = website_link;
        this.setState({plan});
    }
    onChangeDirectWebsiteText(event){
        const text = event.target.value;
        const index = event.target.name.substring(13);
        let plan = this.state.plan;
        plan.where_to_stay.hotel_direct_website_list[index].text = text;
        this.setState({plan});
    }
    onChangeDirectWebsiteWebsiteLink(event){
        const website_link = event.target.value;
        const index = event.target.name.substring(13);
        let plan = this.state.plan;
        plan.where_to_stay.hotel_direct_website_list[index].website_link = website_link;
        this.setState({plan});
    }
    onChangeSelfContainedText(event){
        const text = event.target.value;
        const index = event.target.name.substring(15);
        console.log("index:",index)
        let plan = this.state.plan;
        plan.where_to_stay.self_contained_apartment_website_list[index].text = text;
        this.setState({plan});
    }
    onChangeSelfContainedWebsiteLink(event){
        const website_link = event.target.value;
        const index = event.target.name.substring(15);
        console.log("index:",index);
        let plan = this.state.plan;
        plan.where_to_stay.self_contained_apartment_website_list[index].website_link = website_link;
        this.setState({plan});
    }
    onChangeVillasText(event){
        const text = event.target.value;
        const index = event.target.name.substring(7);
        let plan = this.state.plan;
        plan.where_to_stay.villas_website_list[index].text = text;
        this.setState({plan});
    }
    onChangeVillasWebsiteLink(event){
        const website_link = event.target.value;
        const index = event.target.name.substring(7);
        let plan = this.state.plan;
        plan.where_to_stay.villas_website_list[index].website_link = website_link;
        this.setState({plan});
    }
    onChangeBedText(event){
        const text = event.target.value;
        const index = event.target.name.substring(4);
        let plan = this.state.plan;
        plan.where_to_stay.bed_website_list[index].text = text;
        this.setState({plan});
    }
    onChangeBedWebsiteLink(event){
        const website_link = event.target.value;
        const index = event.target.name.substring(4);
        let plan = this.state.plan;
        plan.where_to_stay.bed_website_list[index].website_link = website_link;
        this.setState({plan});
    }
    onChangeHolidayHousesText(event){
        const text = event.target.value;
        const index = event.target.name.substring(15);
        let plan = this.state.plan;
        plan.where_to_stay.holiday_houses_website_list[index].text = text;
        this.setState({plan});
    }
    onChangeHolidayHousesWebsiteLink(event){
        const website_link = event.target.value;
        const index = event.target.name.substring(15);
        let plan = this.state.plan;
        plan.where_to_stay.holiday_houses_website_list[index].website_link = website_link;
        this.setState({plan});
    }
    onChangeMotorHomeText(event){
        const text = event.target.value;
        const index = event.target.name.substring(11);
        let plan = this.state.plan;
        plan.where_to_stay.motor_home_website_list[index].text = text;
        this.setState({plan});
    }
    onChangeMotorHomeWebsiteLink(event){
        const website_link = event.target.value;
        const index = event.target.name.substring(11);
        let plan = this.state.plan;
        plan.where_to_stay.motor_home_website_list[index].website_link = website_link;
        this.setState({plan});
    }
    onChangeBackpackerText(event){
        const text = event.target.value;
        const index = event.target.name.substring(11);
        let plan = this.state.plan;
        plan.where_to_stay.backpacker_website_list[index].text = text;
        this.setState({plan});
    }
    onChangeBackpackerWebsiteLink(event){
        const website_link = event.target.value;
        const index = event.target.name.substring(11);
        let plan = this.state.plan;
        plan.where_to_stay.backpacker_website_list[index].website_link = website_link;
        this.setState({plan});
    }
    onChangeCouchSurfingText(event){
        const text = event.target.value;
        const index = event.target.name.substring(14);
        let plan = this.state.plan;
        plan.where_to_stay.couch_surfing_website_list[index].text = text;
        this.setState({plan});
    }
    onChangeCouchSurfingWebsiteLink(event){
        const website_link = event.target.value;
        const index = event.target.name.substring(14);
        let plan = this.state.plan;
        plan.where_to_stay.couch_surfing_website_list[index].website_link = website_link;
        this.setState({plan});
    }
    onChangeHouseShareText(event){
        const text = event.target.value;
        const index = event.target.name.substring(12);
        let plan = this.state.plan;
        plan.where_to_stay.house_share_website_list[index].text = text;
        this.setState({plan});
    }
    onChangeHouseShareWebsiteLink(event){
        const website_link = event.target.value;
        const index = event.target.name.substring(12);
        let plan = this.state.plan;
        plan.where_to_stay.house_share_website_list[index].website_link = website_link;
        this.setState({plan});
    }
    onChangeUnusualPlacesText(event){
        const text = event.target.value;
        const index = event.target.name.substring(15);
        let plan = this.state.plan;
        plan.where_to_stay.unusual_places_website_list[index].text = text;
        this.setState({plan});
    }
    onChangeUnusualPlacesWebsiteLink(event){
        const website_link = event.target.value;
        const index = event.target.name.substring(15);
        let plan = this.state.plan;
        plan.where_to_stay.unusual_places_website_list[index].website_link = website_link;
        this.setState({plan});
    }
    removeHotelCompareWebsite(num){
        let plan = this.state.plan;
        let newHotelCompareWebsiteList= plan.where_to_stay.hotel_compare_website_list.filter((website,index)=>{
            return index !=num;
        })
        plan.where_to_stay.hotel_compare_website_list = newHotelCompareWebsiteList;
        this.setState({plan});
    }
    addNewHotelCompareWebsite(){
        let plan = this.state.plan;
        const website = {"text":"","website_link":""};
        plan.where_to_stay.hotel_compare_website_list.push(website);
        this.setState({plan});
    }
    removeHotelDirectWebsite(num){
        let plan = this.state.plan;
        let newHotelDirectWebsiteList= plan.where_to_stay.hotel_direct_website_list.filter((website,index)=>{
            return index !=num;
        })
        plan.where_to_stay.hotel_direct_website_list = newHotelDirectWebsiteList;
        this.setState({plan});
    }
    addNewHotelDirectWebsite(){
        let plan = this.state.plan;
        const website = {"text":"","website_link":""};
        plan.where_to_stay.hotel_direct_website_list.push(website);
        this.setState({plan});
    }
    removeSelfContainedWebsite(num){
        let plan = this.state.plan;
        let newSelfContainedWebsiteList= plan.where_to_stay.self_contained_apartment_website_list.filter((website,index)=>{
            return index !=num;
        })
        plan.where_to_stay.self_contained_apartment_website_list = newSelfContainedWebsiteList;
        this.setState({plan});
    }
    addNewSelfContainedWebsite(){
        let plan = this.state.plan;
        const website = {"text":"","website_link":""};
        plan.where_to_stay.self_contained_apartment_website_list.push(website);
        this.setState({plan});
    }
    removeVillasWebsite(num){
        let plan = this.state.plan;
        let newVillasWebsiteList= plan.where_to_stay.villas_website_list.filter((website,index)=>{
            return index !=num;
        })
        plan.where_to_stay.villas_website_list = newVillasWebsiteList;
        this.setState({plan});
    }
    addNewVillasWebsite(){
        let plan = this.state.plan;
        const website = {"text":"","website_link":""};
        plan.where_to_stay.villas_website_list.push(website);
        this.setState({plan});
    }
    removeBedWebsite(num){
        let plan = this.state.plan;
        let newBedWebsiteList= plan.where_to_stay.bed_website_list.filter((website,index)=>{
            return index !=num;
        })
        plan.where_to_stay.bed_website_list = newBedWebsiteList;
        this.setState({plan});
    }
    addNewBedWebsite(){
        let plan = this.state.plan;
        const website = {"text":"","website_link":""};
        plan.where_to_stay.bed_website_list.push(website);
        this.setState({plan});
    }
    removeHolidayHousesWebsite(num){
        let plan = this.state.plan;
        let newHolidayHousesWebsiteList= plan.where_to_stay.holiday_houses_website_list.filter((website,index)=>{
            return index !=num;
        })
        plan.where_to_stay.holiday_houses_website_list = newHolidayHousesWebsiteList;
        this.setState({plan});
    }
    addNewHolidayHousesWebsite(){
        let plan = this.state.plan;
        const website = {"text":"","website_link":""};
        plan.where_to_stay.holiday_houses_website_list.push(website);
        this.setState({plan});
    }
    removeHouseShareWebsite(num){
        let plan = this.state.plan;
        let newHouseShareWebsiteList= plan.where_to_stay.house_share_website_list.filter((website,index)=>{
            return index !=num;
        })
        plan.where_to_stay.house_share_website_list = newHouseShareWebsiteList;
        this.setState({plan});
    }
    addNewHouseShareWebsite(){
        let plan = this.state.plan;
        const website = {"text":"","website_link":""};
        plan.where_to_stay.house_share_website_list.push(website);
        this.setState({plan});
    }
    removeMotorHomeWebsite(num){
        let plan = this.state.plan;
        let newMotorHomeWebsiteList= plan.where_to_stay.motor_home_website_list.filter((website,index)=>{
            return index !=num;
        })
        plan.where_to_stay.motor_home_website_list = newMotorHomeWebsiteList;
        this.setState({plan});
    }
    addNewMotorHomeWebsite(){
        let plan = this.state.plan;
        const website = {"text":"","website_link":""};
        plan.where_to_stay.motor_home_website_list.push(website);
        this.setState({plan});
    }
    removeBackpackerWebsite(num){
        let plan = this.state.plan;
        let newBackpackerWebsiteList= plan.where_to_stay.backpacker_website_list.filter((website,index)=>{
            return index !=num;
        })
        plan.where_to_stay.backpacker_website_list = newBackpackerWebsiteList;
        this.setState({plan});
    }
    addNewBackpackerWebsite(){
        let plan = this.state.plan;
        const website = {"text":"","website_link":""};
        plan.where_to_stay.backpacker_website_list.push(website);
        this.setState({plan});
    }
    removeCouchSurfingWebsite(num){
        let plan = this.state.plan;
        let newCouchSurfingWebsiteList= plan.where_to_stay.couch_surfing_website_list.filter((website,index)=>{
            return index !=num;
        })
        plan.where_to_stay.couch_surfing_website_list = newCouchSurfingWebsiteList;
        this.setState({plan});
    }
    addNewCouchSurfingWebsite(){
        let plan = this.state.plan;
        const website = {"text":"","website_link":""};
        plan.where_to_stay.couch_surfing_website_list.push(website);
        this.setState({plan});
    }
    removeUnusualPlacesWebsite(num){
        let plan = this.state.plan;
        let newUnusualPlacesWebsiteList= plan.where_to_stay.unusual_places_website_list.filter((website,index)=>{
            return index !=num;
        })
        plan.where_to_stay.unusual_places_website_list = newUnusualPlacesWebsiteList;
        this.setState({plan});
    }
    addNewUnusualPlacesWebsite(){
        let plan = this.state.plan;
        const website = {"text":"","website_link":""};
        plan.where_to_stay.unusual_places_website_list.push(website);
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
                            <textarea rows="5" type="text" className="form-control" value={this.state.plan.where_to_stay.description} onChange={this.onChangeDescription.bind(this)} required></textarea>
                        </div>
                    </div>
            
                    {/*hotel compare website list*/}
                    <div className="panel panel-default">
                        <div className="panel-heading">
                            {this.state.name} hotel compare website
                        </div>
                        <div className="panel-body">
                            {this.state.plan.where_to_stay.hotel_compare_website_list.map((website,num)=>{
                            const name = "hotel_compare_"+num;
                            return (
                                <div className="panel panel-default" key={"hotel_compare_website_"+num}>
                                    <div className="panel-heading">
                                        hotel compare website {num+1}
                                    </div>
                                    <div className="panel-body">
                                        <div className="form-group">
                                            <div className="col-md-4">
                                                <label className="control-label">text</label>
                                            </div>
                                            <div className="col-md-8">
                                                <input type="text" className="form-control" value={website.text} name={name} onChange={this.onChangeHotelCompareText.bind(this)} required/>
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <div className="col-md-4">
                                                <label className="control-label">website link</label>
                                            </div>
                                            <div className="col-md-8">
                                                <input type="text" className="form-control" value={website.website_link} name={name} onChange={this.onChangeHotelCompareWebsiteLink.bind(this)} required/>
                                            </div>
                                        </div>
                                        <div className="col-md-12">
                                            <button className="btn btn-success btn-block" onClick={()=>this.removeHotelCompareWebsite(num)}>Remove a Hotel Compare Website</button>
                                        </div>
                                    </div>
                                </div>
                            )
                            })}
                            <div className="col-md-12">
                                <button className="btn btn-success btn-block" onClick={this.addNewHotelCompareWebsite.bind(this)}>Add a New Hotel Compare Website</button>
                            </div>
                        </div>
                    </div>
                    
                    {/*hotel direct website list*/}
                    <div className="panel panel-default">
                        <div className="panel-heading">
                            {this.state.name} hotel direct website
                        </div>
                        <div className="panel-body">
                            {this.state.plan.where_to_stay.hotel_direct_website_list.map((website,num)=>{
                             const name ="hotel_direct_"+num;
                            return (
                                <div className="panel panel-default" key={"hotel_direct_website_"+num}>
                                    <div className="panel-heading">
                                        hotel direct website {num+1}
                                    </div>
                                    <div className="panel-body">
                                        <div className="form-group">
                                            <div className="col-md-4">
                                                <label className="control-label">text</label>
                                            </div>
                                            <div className="col-md-8">
                                                <input type="text" className="form-control" value={website.text} name={name} onChange={this.onChangeDirectWebsiteText.bind(this)} required/>
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <div className="col-md-4">
                                                <label className="control-label">website link</label>
                                            </div>
                                            <div className="col-md-8">
                                                <input type="text" className="form-control" value={website.website_link} name={name} onChange={this.onChangeDirectWebsiteWebsiteLink.bind(this)} required/>
                                            </div>
                                        </div>
                                        <div className="col-md-12">
                                            <button className="btn btn-success btn-block" onClick={()=>this.removeHotelDirectWebsite(num)}>Remove a Hotel Direct Website</button>
                                        </div>
                                    </div>
                                </div>
                            )
                            })}
                            <div className="col-md-12">
                                <button className="btn btn-success btn-block" onClick={this.addNewHotelDirectWebsite.bind(this)}>Add a New Hotel direct Website</button>
                            </div>
                        </div>
                    </div>
                                
                    {/*self_contained apartment website*/}
                    <div className="panel panel-default">
                        <div className="panel-heading">
                            {this.state.name} self contained apartment website
                        </div>
                        <div className="panel-body">
                            {this.state.plan.where_to_stay.self_contained_apartment_website_list.map((website,num)=>{
                             const name="self_contained_"+num;
                            return (
                                <div className="panel panel-default" key={"self_contained_website_"+num}>
                                    <div className="panel-heading">
                                        self contained apratment website {num+1}
                                    </div>
                                    <div className="panel-body">
                                        <div className="form-group">
                                            <div className="col-md-4">
                                                <label className="control-label">text</label>
                                            </div>
                                            <div className="col-md-8">
                                                <input type="text" className="form-control" value={website.text} name={name} onChange={this.onChangeSelfContainedText.bind(this)} required/>
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <div className="col-md-4">
                                                <label className="control-label">website link</label>
                                            </div>
                                            <div className="col-md-8">
                                                <input type="text" className="form-control" value={website.website_link} name={name} onChange={this.onChangeSelfContainedWebsiteLink.bind(this)} required/>
                                            </div>
                                        </div>
                                        <div className="col-md-12">
                                            <button className="btn btn-success btn-block" onClick={()=>this.removeSelfContainedWebsite(num)}>Remove a self contained Website</button>
                                        </div>
                                    </div>
                                </div>
                            )
                            })}
                            <div className="col-md-12">
                                <button className="btn btn-success btn-block" onClick={this.addNewSelfContainedWebsite.bind(this)}>Add a New self contained  Website</button>
                            </div>
                        </div>
                    </div>
                                
                    {/*villas website */}
                    <div className="panel panel-default">
                        <div className="panel-heading">
                            {this.state.name} villas website
                        </div>
                        <div className="panel-body">
                            {this.state.plan.where_to_stay.villas_website_list.map((website,num)=>{
                             const name="villas_"+num;
                            return (
                                <div className="panel panel-default" key={"villas_website_"+num}>
                                    <div className="panel-heading">
                                        villas website {num+1}
                                    </div>
                                    <div className="panel-body">
                                        <div className="form-group">
                                            <div className="col-md-4">
                                                <label className="control-label">text</label>
                                            </div>
                                            <div className="col-md-8">
                                                <input type="text" className="form-control" value={website.text} name={name} onChange={this.onChangeVillasText.bind(this)} required/>
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <div className="col-md-4">
                                                <label className="control-label">website link</label>
                                            </div>
                                            <div className="col-md-8">
                                                <input type="text" className="form-control" value={website.website_link} name={name} onChange={this.onChangeVillasWebsiteLink.bind(this)} required/>
                                            </div>
                                        </div>
                                        <div className="col-md-12">
                                            <button className="btn btn-success btn-block" onClick={()=>this.removeVillasWebsite(num)}>Remove a villas Website</button>
                                        </div>
                                    </div>
                                </div>
                            )
                            })}
                            <div className="col-md-12">
                                <button className="btn btn-success btn-block" onClick={this.addNewVillasWebsite.bind(this)}>Add a New Villas Website</button>
                            </div>
                        </div>
                    </div>
                                
                    {/*bed website */}
                    <div className="panel panel-default">
                        <div className="panel-heading">
                            {this.state.name} bed and breakfast guest house website
                        </div>
                        <div className="panel-body">
                            {this.state.plan.where_to_stay.bed_website_list.map((website,num)=>{
                             const name="bed_"+num;
                            return (
                                <div className="panel panel-default" key={"bed_website_"+num}>
                                    <div className="panel-heading">
                                        bed and breakfast guest house website {num+1}
                                    </div>
                                    <div className="panel-body">
                                        <div className="form-group">
                                            <div className="col-md-4">
                                                <label className="control-label">text</label>
                                            </div>
                                            <div className="col-md-8">
                                                <input type="text" className="form-control" value={website.text} name={name} onChange={this.onChangeBedText.bind(this)} required/>
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <div className="col-md-4">
                                                <label className="control-label">website link</label>
                                            </div>
                                            <div className="col-md-8">
                                                <input type="text" className="form-control" value={website.website_link} name={name} onChange={this.onChangeBedWebsiteLink.bind(this)} required/>
                                            </div>
                                        </div>
                                        <div className="col-md-12">
                                            <button className="btn btn-success btn-block" onClick={()=>this.removeBedWebsite(num)}>Remove a bed and breakfast guest house Website</button>
                                        </div>
                                    </div>
                                </div>
                            )
                            })}
                            <div className="col-md-12">
                                <button className="btn btn-success btn-block" onClick={this.addNewBedWebsite.bind(this)}>Add a New Bed and Breakfast Guest House Website</button>
                            </div>
                        </div>
                    </div>
                    
                    {/*holiday houses website*/}
                    <div className="panel panel-default">
                        <div className="panel-heading">
                            {this.state.name} holiday houses website
                        </div>
                        <div className="panel-body">
                            {this.state.plan.where_to_stay.holiday_houses_website_list.map((website,num)=>{
                             const name = "holiday_houses_"+num;
                            return (
                                <div className="panel panel-default" key={"holiday_houses_website_"+num}>
                                    <div className="panel-heading">
                                        holiday houses website {num}
                                    </div>
                                    <div className="panel-body">
                                        <div className="form-group">
                                            <div className="col-md-4">
                                                <label className="control-label">text</label>
                                            </div>
                                            <div className="col-md-8">
                                                <input type="text" className="form-control" value={website.text} name={name} onChange={this.onChangeHolidayHousesText.bind(this)} required/>
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <div className="col-md-4">
                                                <label className="control-label">website link</label>
                                            </div>
                                            <div className="col-md-8">
                                                <input type="text" className="form-control" value={website.website_link} name={name} onChange={this.onChangeHolidayHousesWebsiteLink.bind(this)} required/>
                                            </div>
                                        </div>
                                        <div className="col-md-12">
                                            <button className="btn btn-success btn-block" onClick={()=>this.removeHolidayHousesWebsite(num)}>Remove a holiday houses website</button>
                                        </div>
                                    </div>
                                </div>
                            )
                            })}
                            <div className="col-md-12">
                                <button className="btn btn-success btn-block" onClick={this.addNewHolidayHousesWebsite.bind(this)}>Add a New Holiday Houses Website</button>
                            </div>
                        </div>
                    </div>
                                
                    {/*house share website*/}
                    <div className="panel panel-default">
                        <div className="panel-heading">
                            {this.state.name} house share website
                        </div>
                        <div className="panel-body">
                            {this.state.plan.where_to_stay.house_share_website_list.map((website,num)=>{
                             const name = "house_share_"+num
                            return (
                                <div className="panel panel-default" key={"house_share_website_"+num}>
                                    <div className="panel-heading">
                                        house share website {num+1}
                                    </div>
                                    <div className="panel-body">
                                        <div className="form-group">
                                            <div className="col-md-4">
                                                <label className="control-label">text</label>
                                            </div>
                                            <div className="col-md-8">
                                                <input type="text" className="form-control" value={website.text} name={name} onChange={this.onChangeHouseShareText.bind(this)} required/>
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <div className="col-md-4">
                                                <label className="control-label">website link</label>
                                            </div>
                                            <div className="col-md-8">
                                                <input type="text" className="form-control" value={website.website_link} name={name} onChange={this.onChangeHouseShareWebsiteLink.bind(this)} required/>
                                            </div>
                                        </div>
                                        <div className="col-md-12">
                                            <button className="btn btn-success btn-block" onClick={()=>this.removeHouseShareWebsite(num)}>Remove a house share website</button>
                                        </div>
                                    </div>
                                </div>
                            )
                            })}
                            <div className="col-md-12">
                                <button className="btn btn-success btn-block" onClick={this.addNewHouseShareWebsite.bind(this)}>Add a New House Share Website</button>
                            </div>
                        </div>
                    </div>
                                
                    {/*motor home website*/}
                    <div className="panel panel-default">
                        <div className="panel-heading">
                            {this.state.name} motor home website
                        </div>
                        <div className="panel-body">
                            {this.state.plan.where_to_stay.motor_home_website_list.map((website,num)=>{
                             const name = "motor_home_"+num;
                            return (
                                <div className="panel panel-default" key={"motor_home_website_"+num}>
                                    <div className="panel-heading">
                                        motor home website {num+1}
                                    </div>
                                    <div className="panel-body">
                                        <div className="form-group">
                                            <div className="col-md-4">
                                                <label className="control-label">text</label>
                                            </div>
                                            <div className="col-md-8">
                                                <input type="text" className="form-control" value={website.text} name={name} onChange={this.onChangeMotorHomeText.bind(this)} required/>
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <div className="col-md-4">
                                                <label className="control-label">website link</label>
                                            </div>
                                            <div className="col-md-8">
                                                <input type="text" className="form-control" value={website.website_link} name={name} onChange={this.onChangeMotorHomeWebsiteLink.bind(this)} required/>
                                            </div>
                                        </div>
                                        <div className="col-md-12">
                                            <button className="btn btn-success btn-block" onClick={()=>this.removeMotorHomeWebsite(num)}>Remove a motor home website</button>
                                        </div>
                                    </div>
                                </div>
                            )
                            })}
                            <div className="col-md-12">
                                <button className="btn btn-success btn-block" onClick={this.addNewMotorHomeWebsite.bind(this)}>Add a New Motor Home Website</button>
                            </div>
                        </div>
                    </div>
                    
                    {/*backpacker website*/}
                    <div className="panel panel-default">
                        <div className="panel-heading">
                            {this.state.name} backpacker website
                        </div>
                        <div className="panel-body">
                            {this.state.plan.where_to_stay.backpacker_website_list.map((website,num)=>{
                             const name="backpacker_"+num;
                            return (
                                <div className="panel panel-default" key={"backpacker_website_"+num}>
                                    <div className="panel-heading">
                                        backpacker website {num+1}
                                    </div>
                                    <div className="panel-body">
                                        <div className="form-group">
                                            <div className="col-md-4">
                                                <label className="control-label">text</label>
                                            </div>
                                            <div className="col-md-8">
                                                <input type="text" className="form-control" value={website.text} name={name} onChange={this.onChangeBackpackerText.bind(this)} required/>
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <div className="col-md-4">
                                                <label className="control-label">website link</label>
                                            </div>
                                            <div className="col-md-8">
                                                <input type="text" className="form-control" value={website.website_link} name={name} onChange={this.onChangeBackpackerWebsiteLink.bind(this)} required/>
                                            </div>
                                        </div>
                                        <div className="col-md-12">
                                            <button className="btn btn-success btn-block" onClick={()=>this.removeBackpackerWebsite(num)}>Remove a backpacker website</button>
                                        </div>
                                    </div>
                                </div>
                            )
                            })}
                            <div className="col-md-12">
                                <button className="btn btn-success btn-block" onClick={this.addNewBackpackerWebsite.bind(this)}>Add a New backpacker Website</button>
                            </div>
                        </div>
                    </div>
                                
                    {/*couch surfing website*/}
                    <div className="panel panel-default">
                        <div className="panel-heading">
                            {this.state.name} couch surfing website
                        </div>
                        <div className="panel-body">
                            {this.state.plan.where_to_stay.couch_surfing_website_list.map((website,num)=>{
                             const name = "couch_surfing_"+num;
                            return (
                                <div className="panel panel-default" key={"couch_surfing_website_"+num}>
                                    <div className="panel-heading">
                                        couch surfing website {num+1}
                                    </div>
                                    <div className="panel-body">
                                        <div className="form-group">
                                            <div className="col-md-4">
                                                <label className="control-label">text</label>
                                            </div>
                                            <div className="col-md-8">
                                                <input type="text" className="form-control" value={website.text} name={name} onChange={this.onChangeCouchSurfingText.bind(this)} required/>
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <div className="col-md-4">
                                                <label className="control-label">website link</label>
                                            </div>
                                            <div className="col-md-8">
                                                <input type="text" className="form-control" value={website.website_link} name={name} onChange={this.onChangeCouchSurfingWebsiteLink.bind(this)} required/>
                                            </div>
                                        </div>
                                        <div className="col-md-12">
                                            <button className="btn btn-success btn-block" onClick={()=>this.removeCouchSurfingWebsite(num)}>Remove a couch surfing website</button>
                                        </div>
                                    </div>
                                </div>
                            )
                            })}
                            <div className="col-md-12">
                                <button className="btn btn-success btn-block" onClick={this.addNewCouchSurfingWebsite.bind(this)}>Add a New Couch Surfing Website</button>
                            </div>
                        </div>
                    </div>
                                
                    {/*unusual places website*/}
                    <div className="panel panel-default">
                        <div className="panel-heading">
                            {this.state.name} unusual places website
                        </div>
                        <div className="panel-body">
                            {this.state.plan.where_to_stay.unusual_places_website_list.map((website,num)=>{
                             const name ="unusual_places_"+num;
                            return (
                                <div className="panel panel-default" key={"unusual_places_website_"+num}>
                                    <div className="panel-heading">
                                        unusual places website {num+1}
                                    </div>
                                    <div className="panel-body">
                                        <div className="form-group">
                                            <div className="col-md-4">
                                                <label className="control-label">text</label>
                                            </div>
                                            <div className="col-md-8">
                                                <input type="text" className="form-control" value={website.text} name={name} onChange={this.onChangeUnusualPlacesText.bind(this)} required/>
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <div className="col-md-4">
                                                <label className="control-label">website link</label>
                                            </div>
                                            <div className="col-md-8">
                                                <input type="text" className="form-control" value={website.website_link} name={name} onChange={this.onChangeUnusualPlacesWebsiteLink.bind(this)} required/>
                                            </div>
                                        </div>
                                        <div className="col-md-12">
                                            <button className="btn btn-success btn-block" onClick={()=>this.removeUnusualPlacesWebsite(num)}>Remove a unusual place website</button>
                                        </div>
                                    </div>
                                </div>
                            )
                            })}
                            <div className="col-md-12">
                                <button className="btn btn-success btn-block" onClick={this.addNewUnusualPlacesWebsite.bind(this)}>Add a New Unusual Places Website</button>
                            </div>
                        </div>
                    </div>
                            
                    <div className="form-group">
                        <div className="col-md-8">
                            <button type="submit" className="btn btn-success">Save and Continued</button>&nbsp;&nbsp;
                        </div>
                    </div>
                </form>
                <Popup/>
            </div>
        )
    }
}
export default PlanWhereToStayUpdateForm;