import React,{Component} from 'react';
import axios from 'axios';

class PlanImportantInfoUpdateForm extends Component{
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
        axios.get("http://localhost:12000/countries")
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
        axios.get("http://localhost:12000/plans/"+id)
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
    onChangeSecurityAndSafeWebsiteLink(event){
        const website_link = event.target.value;
        let plan = this.state.plan;
        plan.important_information.security_and_safe.website_link = website_link;
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
        axios.put("http://localhost:12000/plans/"+id,this.state.plan)
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
                                <label className="control-label">website link</label>
                            </div>
                            <div className="col-md-8">
                                <input type="text" className="form-control" value={this.state.plan.important_information.security_and_safe.website_link} onChange={this.onChangeSecurityAndSafeWebsiteLink.bind(this)} required/>
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
export default PlanImportantInfoUpdateForm;