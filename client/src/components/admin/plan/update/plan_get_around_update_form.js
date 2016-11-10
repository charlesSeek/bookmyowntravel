import React,{Component} from 'react';
import axios from 'axios';
import config from '../../../../config';

class PlanGetAroundUpdateForm extends Component{
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
    onAddNewOption(){
        let plan = this.state.plan;
        const option = {
            "options_name":"",
            "options_image_link":"",
            "options_website_link":"",
            "options_description":"",
            "options_extra_website_link_list":[
                "text":"",
                "website_link":""
            ]
        }
        plan.how_to_get_around.travelling_options.push(option);
        this.setState({plan});
    }
    removeOption(num){
        console.log("num:",num);
        let plan = this.state.plan;
        const newTravellingOptions = plan.how_to_get_around.travelling_options.filter((option,index)=>{
            return index !=num;
        })
        plan.how_to_get_around.travelling_options = newTravellingOptions;
        this.setState({plan});
    }
    addNewExtraWebsite(num){
        let plan = this.state.plan;
        const website = {"text":"","website_link":""};
        plan.how_to_get_around.travelling_options[num].options_extra_website_link_list.push(website);
        this.setState({plan});
    }
    removeExtraWebsite(index1,index2){
        let plan = this.state.plan;
        const newOptionsExtraWebsiteLinkList = plan.how_to_get_around.travelling_options[index1].options_extra_website_link_list.filter((website,num)=>{
            return num != index2;
        })
        plan.how_to_get_around.travelling_options[index1].options_extra_website_link_list = newOptionsExtraWebsiteLinkList;
        this.setState({plan});
    }
    onChangeOptionName(event){
        const index = event.target.name;
        const options_name = event.target.value;
        let plan = this.state.plan;
        plan.how_to_get_around.travelling_options[index].options_name = options_name;
        this.setState({plan})
    }
    onChangeOptionImageLink(event){
        const index = event.target.name;
        const options_image_link = event.target.value;
        let plan = this.state.plan;
        plan.how_to_get_around.travelling_options[index].options_image_link = options_image_link;
        this.setState({plan});
    }
    onChangeOptionWebsiteLink(event){
        const index = event.target.name;
        const options_website_link = event.target.value;
        let plan = this.state.plan;
        plan.how_to_get_around.travelling_options[index].options_website_link = options_website_link;
        this.setState({plan});
    }
    onChangeOptionDescription(event){
        const index = event.target.name;
        const options_description = event.target.value;
        let plan = this.state.plan;
        plan.how_to_get_around.travelling_options[index].options_description = options_description;
        this.setState({plan});
    }
    onChangeWebsiteText(event){
        const name = event.target.name;
        const text = event.target.value;
        const arr = name.split("_");
        const index1 = arr[0];
        const index2 = arr[1];
        let plan = this.state.plan;
        plan.how_to_get_around.travelling_options[index1].options_extra_website_link_list[index2].text = text;
        this.setState({plan});
    }
    onChangeWebsiteWebsiteLink(event){
        const name = event.target.name;
        const website_link = event.target.value;
        const arr = name.split("_");
        const index1 = arr[0];
        const index2 = arr[1];
        let plan = this.state.plan;
        plan.how_to_get_around.travelling_options[index1].options_extra_website_link_list[index2].website_link = website_link;
        this.setState({plan});
    }
    onUpdateGetAroundSubmit(event){
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
            <div className="container new-plan-get-around">
                <form className="form-horizontal" onSubmit={this.onUpdateGetAroundSubmit.bind(this)}>
                    {this.state.plan.how_to_get_around.travelling_options.map((option,option_index)=>{
                        const option_key = "options_"+option_index;
                        return (
                            <div className="container get-around-option" key={option_key}>
                                <div className="panel panel-default">
                                    <div className="panel-heading">
                                        {this.state.name} Get Around Option {option_index+1}
                                    </div>
                                    <div className="panel-body">
                                        <div className="form-group">
                                            <div className="col-md-4">
                                                <label className="control-label">Option name</label>
                                            </div>
                                            <div className="col-md-8">
                                                <input type="text" className="form-control" name={option_index} value={option.options_name} onChange={this.onChangeOptionName.bind(this)} required/>
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <div className="col-md-4">
                                                <label className="control-label">Option image link</label>
                                            </div>
                                            <div className="col-md-8">
                                                <input type="text" className="form-control" value={option.options_image_link}  name={option_index} onChange={this.onChangeOptionImageLink.bind(this)} required/>
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <div className="col-md-4">
                                                <label className="control-label">Option website link</label>
                                            </div>
                                            <div className="col-md-8">
                                                <input type="text" className="form-control" value={option.options_website_link} name={option_index} onChange={this.onChangeOptionWebsiteLink.bind(this)} required/>
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <div className="col-md-4">
                                                <label className="control-label">Option description</label>
                                            </div>
                                            <div className="col-md-8">
                                                <textarea rows="5" type="text" className="form-control" value={option.options_description} name={option_index} onChange={this.onChangeOptionDescription.bind(this)} required></textarea>
                                            </div>
                                        </div>
                                        {option.options_extra_website_link_list.map((website,num)=>{
                                            const key = "option_"+option_index+"_extra_website_"+num;
                                            return(
                                                <div className="panel panel-default" key={key}>
                                                    <div className="panel-heading">
                                                        option extra website link {num+1}
                                                    </div>
                                                    <div className="panel-body">
                                                        <div className="form-group">
                                                            <div className="col-md-4">
                                                                <label className="control-label">option extra website name </label>
                                                            </div>
                                                            <div className="col-md-8">
                                                                <input type="text" className="form-control" value={website.text} name={option_index+"_"+num} onChange={this.onChangeWebsiteText.bind(this)} required/>
                                                            </div>
                                                        </div>
                                                        <div className="form-group">
                                                            <div className="col-md-4">
                                                                <label className="control-label">option extra website link </label>
                                                            </div>
                                                            <div className="col-md-8">
                                                                <input type="text" className="form-control" value={website.website_link} name={option_index+"_"+num} onChange={this.onChangeWebsiteWebsiteLink.bind(this)} required/>
                                                            </div>
                                                        </div>
                                                        <div className="form-group">
                                                            <div className="col-md-12">
                                                                <button className="btn btn-success btn-block" onClick={()=>this.removeExtraWebsite(option_index,num)}>Remove the website</button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            )
                                        })}
                                        <div className="col-md-12">
                                            <button className="btn btn-success btn-block" onClick={()=>this.addNewExtraWebsite(option_index)}>Add A New extra website</button>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-12">
                                    <button className="btn btn-success btn-block" onClick={()=>this.removeOption(option_index)}>Remove the option</button>
                                </div>  
                            </div>
                        )
                    })}
                    <div className="form-group">
                        <div className="col-md-12">
                            <button className="btn btn-success btn-block" onClick={this.onAddNewOption.bind(this)}>Add A New option</button>
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
export default PlanGetAroundUpdateForm;