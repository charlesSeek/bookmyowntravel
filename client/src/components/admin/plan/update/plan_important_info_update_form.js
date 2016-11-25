import React,{Component} from 'react';
import axios from 'axios';
import config from '../../../../config';
import Popup from 'react-popup';

class PlanImportantInfoUpdateForm extends Component{
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
    onChangeSecurityAndSafeText(event){
        const text = event.target.value;
        let plan = this.state.plan;
        plan.important_information.security_and_safe.text = text;
        this.setState({plan});
    }
    onChangeSecurityAndSafeWebsiteLinkAU(event){
        const website_link = event.target.value;
        let plan = this.state.plan;
        plan.important_information.security_and_safe.website_link_au = website_link;
        this.setState({plan});
    }
    onChangeSecurityAndSafeWebsiteLinkUK(event){
        const website_link = event.target.value;
        let plan = this.state.plan;
        plan.important_information.security_and_safe.website_link_uk = website_link;
        this.setState({plan});
    }
    onChangeSecurityAndSafeWebsiteLinkUS(event){
        const website_link = event.target.value;
        let plan = this.state.plan;
        plan.important_information.security_and_safe.website_link_us = website_link;
        this.setState({plan});
    }
    onChangeHealthAndVaccinationText(event){
        const text = event.target.value;
        let plan = this.state.plan;
        plan.important_information.health_and_vaccination.text = text;
        this.setState({plan});
    }
    onChangeHealthAndVaccinationWebsiteLink(event){
        const website_link = event.target.value;
        let plan = this.state.plan;
        plan.important_information.health_and_vaccination.website_link = website_link;
        this.setState({plan});
    }
    onChangeTelphoneAndInternetText(event){
        const text = event.target.value;
        let plan = this.state.plan;
        plan.important_information.telphone_and_internet.text = text;
        this.setState({plan});
    }
     onChangeTelphoneAndInternetWebsiteLink(event){
        const website_link = event.target.value;
        let plan = this.state.plan;
        plan.important_information.telphone_and_internet.website_link = website_link;
        this.setState({plan});
    }
    onChangeElectricalText(event){
        const text = event.target.value;
        let plan = this.state.plan;
        plan.important_information.electrical.text = text;
        this.setState({plan});
    }
    onChangeElectricalWebsiteLink(event){
        const website_link = event.target.value;
        let plan = this.state.plan;
        plan.important_information.electrical.website_link = website_link;
        this.setState({plan});
    }
    onChangeLanguageText(event){
        const text = event.target.value;
        let plan = this.state.plan;
        plan.important_information.language.text = text;
        this.setState({plan});
    }
     onChangeLanguageWebsiteLink(event){
        const website_link = event.target.value;
        let plan = this.state.plan;
        plan.important_information.language.website_link = website_link;
        this.setState({plan});
    }
    onChangePassportVisaText(event){
        const text = event.target.value;
        let plan = this.state.plan;
        plan.important_information.passport_visa.text = text;
        this.setState({plan});
    }
    onChangePassportVisaWebsiteLink(event){
        const website_link = event.target.value;
        let plan = this.state.plan;
        plan.important_information.passport_visa.website_link = website_link;
        this.setState({plan});
    }
    onChangeDutyFreeText(event){
        const text = event.target.value;
        let plan = this.state.plan;
        plan.important_information.duty_free.text = text;
        this.setState({plan});
    }
    onChangeDutyFreeWebsiteLink(event){
        const website_link = event.target.value;
        let plan = this.state.plan;
        plan.important_information.duty_free.website_link = website_link;
        this.setState({plan});
    }
    onChangeLocalTimeText(event){
        const text = event.target.value;
        let plan = this.state.plan;
        plan.important_information.local_time.text = text;
        this.setState({plan});
    }
    onChangeLocalTimeWebsiteLink(event){
        const website_link = event.target.value;
        let plan = this.state.plan;
        plan.important_information.local_time.website_link = website_link;
        this.setState({plan});
    }
    onUpdatePlanImportInfoSubmit(event){
        event.preventDefault();
        const id = this.props.id;
        const host = config.API_SERVER;
        const url = 'http://'+host+':12000/plans/'+id;
        const plan = {};
        plan.important_information = this.state.plan.important_information;
        axios.put(url,plan)
        .then(response=>{
            if (response.data.success){
                Popup.alert('plan important information is successfully updated');
            }else{
                const errMsg = response.data.errMsg;
                this.setState({errMsg});
                Popup.alert('plan important information update failed:'+errMsg);
            }
        })
        .catch(err=>{
            this.setState({errMsg:err.toString()});
            Popup.alert('plan important information update failed:'+this.state.errMsg);
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
            <div className="container plan-important-info">
                <form className="form-horizontal" onSubmit={this.onUpdatePlanImportInfoSubmit.bind(this)}>
            
                {/*security and safe info*/}
                <div className="panel panel-default">
                    <div className="panel-heading">
                        {this.state.name} security and safe info
                    </div>
                    <div className="panel-body">
                        <div className="form-group">
                            <div className="col-md-4">
                                <label className="control-label">text</label>
                            </div>
                            <div className="col-md-8">
                                <textarea rows="5" type="text" className="form-control" value={this.state.plan.important_information.security_and_safe.text} onChange={this.onChangeSecurityAndSafeText.bind(this)} required></textarea>
                            </div>
                        </div>
                        <div className="form-group">
                            <div className="col-md-4">
                                <label className="control-label">website link for AU</label>
                            </div>
                            <div className="col-md-8">
                                <input type="text" className="form-control" value={this.state.plan.important_information.security_and_safe.website_link_au||''} onChange={this.onChangeSecurityAndSafeWebsiteLinkAU.bind(this)} required/>
                            </div>
                        </div>
                        <div className="form-group">
                            <div className="col-md-4">
                                <label className="control-label">website link for UK</label>
                            </div>
                            <div className="col-md-8">
                                <input type="text" className="form-control" value={this.state.plan.important_information.security_and_safe.website_link_uk||''} onChange={this.onChangeSecurityAndSafeWebsiteLinkUK.bind(this)} required/>
                            </div>
                        </div>
                        <div className="form-group">
                            <div className="col-md-4">
                                <label className="control-label">website link for US</label>
                            </div>
                            <div className="col-md-8">
                                <input type="text" className="form-control" value={this.state.plan.important_information.security_and_safe.website_link_us} onChange={this.onChangeSecurityAndSafeWebsiteLinkUS.bind(this)} required/>
                            </div>
                        </div>
                    </div>
                </div>
            
                {/*health and vaccination*/}
                <div className="panel panel-default">
                    <div className="panel-heading">
                        {this.state.name} health and vaccination info
                    </div>
                    <div className="panel-body">
                        <div className="form-group">
                            <div className="col-md-4">
                                <label className="control-label">text</label>
                            </div>
                            <div className="col-md-8">
                                <textarea rows="5" type="text" className="form-control" value={this.state.plan.important_information.health_and_vaccination.text} onChange={this.onChangeHealthAndVaccinationText.bind(this)} required></textarea>
                            </div>
                        </div>
                        <div className="form-group">
                            <div className="col-md-4">
                                <label className="control-label">website link</label>
                            </div>
                            <div className="col-md-8">
                                <input type="text" className="form-control" value={this.state.plan.important_information.health_and_vaccination.website_link} onChange={this.onChangeHealthAndVaccinationWebsiteLink.bind(this)} required/>
                            </div>
                        </div>
                    </div>
                </div>
            
                {/*telphone and internent info*/}
                <div className="panel panel-default">
                    <div className="panel-heading">
                        {this.state.name} telphone and internet info
                    </div>
                    <div className="panel-body">
                        <div className="form-group">
                            <div className="col-md-4">
                                <label className="control-label">text</label>
                            </div>
                            <div className="col-md-8">
                                <textarea rows="5" type="text" className="form-control" value={this.state.plan.important_information.telphone_and_internet.text} onChange={this.onChangeTelphoneAndInternetText.bind(this)} required></textarea>
                            </div>
                        </div>
                        <div className="form-group">
                            <div className="col-md-4">
                                <label className="control-label">website link</label>
                            </div>
                            <div className="col-md-8">
                                <input type="text" className="form-control" value={this.state.plan.important_information.telphone_and_internet.website_link} onChange={this.onChangeTelphoneAndInternetWebsiteLink.bind(this)} required/>
                            </div>
                        </div>
                    </div>
                </div>
            
                {/*electrical info*/}
                <div className="panel panel-default">
                    <div className="panel-heading">
                        {this.state.name} electrical info
                    </div>
                    <div className="panel-body">
                        <div className="form-group">
                            <div className="col-md-4">
                                <label className="control-label">text</label>
                            </div>
                            <div className="col-md-8">
                                <textarea rows="5" type="text" className="form-control" value={this.state.plan.important_information.electrical.text} onChange={this.onChangeElectricalText.bind(this)} required></textarea>
                            </div>
                        </div>
                        <div className="form-group">
                            <div className="col-md-4">
                                <label className="control-label">website link</label>
                            </div>
                            <div className="col-md-8">
                                <input type="text" className="form-control" value={this.state.plan.important_information.electrical.website_link} onChange={this.onChangeElectricalWebsiteLink.bind(this)} required/>
                            </div>
                        </div>
                    </div>
                </div>
            
                {/*language*/}
                <div className="panel panel-default">
                    <div className="panel-heading">
                        {this.state.name} language info
                    </div>
                    <div className="panel-body">
                        <div className="form-group">
                            <div className="col-md-4">
                                <label className="control-label">text</label>
                            </div>
                            <div className="col-md-8">
                                <textarea rows="5" type="text" className="form-control" value={this.state.plan.important_information.language.text} onChange={this.onChangeLanguageText.bind(this)} required></textarea>
                            </div>
                        </div>
                        <div className="form-group">
                            <div className="col-md-4">
                                <label className="control-label">website link</label>
                            </div>
                            <div className="col-md-8">
                                <input type="text" className="form-control" value={this.state.plan.important_information.language.website_link} onChange={this.onChangeLanguageWebsiteLink.bind(this)} required/>
                            </div>
                        </div>
                    </div>
                </div>
            
                {/*passport and visa info*/}
                <div className="panel panel-default">
                    <div className="panel-heading">
                        {this.state.name} passport and visa info
                    </div>
                    <div className="panel-body">
                        <div className="form-group">
                            <div className="col-md-4">
                                <label className="control-label">text</label>
                            </div>
                            <div className="col-md-8">
                                <textarea rows="5" type="text" className="form-control" value={this.state.plan.important_information.passport_visa.text} onChange={this.onChangePassportVisaText.bind(this)} required/>
                            </div>
                        </div>
                        <div className="form-group">
                            <div className="col-md-4">
                                <label className="control-label">website link</label>
                            </div>
                            <div className="col-md-8">
                                <input type="text" className="form-control" value={this.state.plan.important_information.passport_visa.website_link} onChange={this.onChangePassportVisaWebsiteLink.bind(this)} required/>
                            </div>
                        </div>
                    </div>
                </div>
            
                {/*duty free info*/}
                <div className="panel panel-default">
                    <div className="panel-heading">
                        {this.state.name} duty free info
                    </div>
                    <div className="panel-body">
                        <div className="form-group">
                            <div className="col-md-4">
                                <label className="control-label">text</label>
                            </div>
                            <div className="col-md-8">
                                <textarea rows="5" type="text" className="form-control" value={this.state.plan.important_information.duty_free.text} onChange={this.onChangeDutyFreeText.bind(this)} required></textarea>
                            </div>
                        </div>
                        <div className="form-group">
                            <div className="col-md-4">
                                <label className="control-label">website link</label>
                            </div>
                            <div className="col-md-8">
                                <input type="text" className="form-control" value={this.state.plan.important_information.duty_free.website_link} onChange={this.onChangeDutyFreeWebsiteLink.bind(this)} required/>
                            </div>
                        </div>
                    </div>
                </div>
            
                {/*local time info*/}
                <div className="panel panel-default">
                    <div className="panel-heading">
                        {this.state.name} local time info
                    </div>
                    <div className="panel-body">
                        <div className="form-group">
                            <div className="col-md-4">
                                <label className="control-label">text</label>
                            </div>
                            <div className="col-md-8">
                                <textarea rows="5" type="text" className="form-control" value={this.state.plan.important_information.local_time.text} onChange={this.onChangeLocalTimeText.bind(this)} required></textarea>
                            </div>
                        </div>
                        <div className="form-group">
                            <div className="col-md-4">
                                <label className="control-label">website link</label>
                            </div>
                            <div className="col-md-8">
                                <input type="text" className="form-control" value={this.state.plan.important_information.local_time.website_link} onChange={this.onChangeLocalTimeWebsiteLink.bind(this)} required/>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div className="form-group">
                    <div className="col-md-8">
                        <button type="submit" className="btn btn-success">Update and Save</button>&nbsp;&nbsp;
                    </div>
                </div>
                </form>
                <Popup/>
            </div>
        )
    }
}
export default PlanImportantInfoUpdateForm;