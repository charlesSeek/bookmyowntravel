import React,{Component,PropTypes} from 'react';
import axios from 'axios';

class AdminPlanNewImportantInfoForm extends Component{
    static contextTypes = {
        router: PropTypes.object
    }
    componentWillMount(){
        this.state = {
            name:'',
            errMsg: ''
        }
    }
    componentDidMount(){
        const id = this.props.id;
        axios.get("http://localhost:12000/plans/"+id)
        .then(response=>{
            if (response.data.success){
                const name = response.data.data.name;
                this.setState({name});
            }else{
                this.setState({errMsg:response.data.errMsg});
                alert(response.data.errMsg);
            }
        })
        .catch(err=>{
            this.setState({errMsg:err.toString()});
            alert(err.toString());
        })
    }
    onNewImportInfoSubmit(event){
        event.preventDefault();
        //security_and_safe
        const security_and_safe_text = this.refs.security_and_safe_text.value;
        const security_and_safe_website_link = this.refs.security_and_safe_website_link.value;
        const security_and_safe = {
            text:security_and_safe_text,
            website_link:security_and_safe_website_link
        }
        //health_and_vaccination
        const health_and_vaccination_text = this.refs.health_and_vaccination_text.value;
        const health_and_vaccination_website_link = this.refs.health_and_vaccination_website_link.value;
        const health_and_vaccination = {
            text:health_and_vaccination_text,
            website_link:health_and_vaccination_website_link
        }
        //telphone_and_internet
        const telphone_and_internet_text = this.refs.telphone_and_internet_text.value;
        const telphone_and_internet_website_link = this.refs.telphone_and_internet_website_link.value;
        const telphone_and_internet = {
            text:telphone_and_internet_text,
            website_link:telphone_and_internet_website_link
        }
        //electrical
        const electrical_text = this.refs.electrical_text.value;
        const electrical_website_link = this.refs.electrical_website_link.value;
        const electrical = {
            text:electrical_text,
            website_link:electrical_website_link
        }
        //language
        const language_text = this.refs.language_text.value;
        const language_website_link = this.refs.language_website_link.value;
        const language = {
            text:language_text,
            website_link:language_website_link
        }
        //passport_visa
        const passport_and_visa_text = this.refs.passport_and_visa_text.value;
        const passport_and_visa_website_link = this.refs.passport_and_visa_website_link.value;
        const passport_visa = {
            text:passport_and_visa_text,
            website_link:passport_and_visa_website_link
        }
        //duty_free
        const duty_free_text = this.refs.duty_free_text.value;
        const duty_free_website_link = this.refs.duty_free_website_link.value;
        const duty_free = {
            text:duty_free_text,
            website_link:duty_free_website_link
        }
        //local_time
        const local_time_text = this.refs.local_time_text.value;
        const local_time_website_link = this.refs.local_time_website_link.value;
        const local_time = {
            text:local_time_text,
            website_link:local_time_website_link
        }
        const important_information = {security_and_safe,health_and_vaccination,telphone_and_internet,electrical,language,passport_visa,duty_free,local_time};
        //console.log(important_information);
        const id = this.props.id;
        axios.put("http://localhost:12000/plans/"+id,{important_information:important_information,status:"committed"})
        .then(response=>{
            if (response.data.success){
                this.context.router.push("/admin/plan/");
            }else{
                this.setState({errMsg:response.data.errMsg});
                alert(response.data.errMsg);
            }
        })
        .catch(err=>{
            this.setState({errMsg:err.toString()});
            alert(err.toString());
        })
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
            <div className="container plan-important-info">
                <form className="form-horizontal" onSubmit={this.onNewImportInfoSubmit.bind(this)}>
            
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
                                <textarea rows="5" type="text" className="form-control" ref="security_and_safe_text" placeholder="please input security and safe info description" required></textarea>
                            </div>
                        </div>
                        <div className="form-group">
                            <div className="col-md-4">
                                <label className="control-label">website link</label>
                            </div>
                            <div className="col-md-8">
                                <input type="text" className="form-control" ref="security_and_safe_website_link" placeholder="please input security and safe info website link" required/>
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
                                <textarea rows="5" type="text" className="form-control" ref="health_and_vaccination_text" placeholder="please input health and vaccination info" required></textarea>
                            </div>
                        </div>
                        <div className="form-group">
                            <div className="col-md-4">
                                <label className="control-label">website link</label>
                            </div>
                            <div className="col-md-8">
                                <input type="text" className="form-control" ref="health_and_vaccination_website_link" placeholder="please input health and vaccination info website link" required/>
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
                                <textarea rows="5" type="text" className="form-control" ref="telphone_and_internet_text" placeholder="please input telphone and internet info" required></textarea>
                            </div>
                        </div>
                        <div className="form-group">
                            <div className="col-md-4">
                                <label className="control-label">website link</label>
                            </div>
                            <div className="col-md-8">
                                <input type="text" className="form-control" ref="telphone_and_internet_website_link" placeholder="please input telphone and internet info website link" required/>
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
                                <textarea rows="5" type="text" className="form-control" ref="electrical_text" placeholder="please input electrical info" required></textarea>
                            </div>
                        </div>
                        <div className="form-group">
                            <div className="col-md-4">
                                <label className="control-label">website link</label>
                            </div>
                            <div className="col-md-8">
                                <input type="text" className="form-control" ref="electrical_website_link" placeholder="please input electrical info website link" required/>
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
                                <textarea rows="5" type="text" className="form-control" ref="language_text" placeholder="please input language info" required></textarea>
                            </div>
                        </div>
                        <div className="form-group">
                            <div className="col-md-4">
                                <label className="control-label">website link</label>
                            </div>
                            <div className="col-md-8">
                                <input type="text" className="form-control" ref="language_website_link" placeholder="please input language info website link" required/>
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
                                <textarea rows="5" type="text" className="form-control" ref="passport_and_visa_text" placeholder="please input passport and visa info" required></textarea>
                            </div>
                        </div>
                        <div className="form-group">
                            <div className="col-md-4">
                                <label className="control-label">website link</label>
                            </div>
                            <div className="col-md-8">
                                <input type="text" className="form-control" ref="passport_and_visa_website_link" placeholder="please input passport and visa info website link" required/>
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
                                <textarea rows="5" type="text" className="form-control" ref="duty_free_text" placeholder="please input duty free info" required></textarea>
                            </div>
                        </div>
                        <div className="form-group">
                            <div className="col-md-4">
                                <label className="control-label">website link</label>
                            </div>
                            <div className="col-md-8">
                                <input type="text" className="form-control" ref="duty_free_website_link" placeholder="please input duty free info website link" required/>
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
                                <textarea rows="5" type="text" className="form-control" ref="local_time_text" placeholder="please input local time info" required></textarea>
                            </div>
                        </div>
                        <div className="form-group">
                            <div className="col-md-4">
                                <label className="control-label">website link</label>
                            </div>
                            <div className="col-md-8">
                                <input type="text" className="form-control" ref="local_time_website_link" placeholder="please input local time info website link" required/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="form-group">
                    <div className="col-md-8">
                        <button type="submit" className="btn btn-success">Save and Submitted</button>&nbsp;&nbsp;
                        <button type="reset" className="btn btn-danger">Cancel</button>
                    </div>
                </div>
                </form>
            </div>
        )
    }
}
export default AdminPlanNewImportantInfoForm;