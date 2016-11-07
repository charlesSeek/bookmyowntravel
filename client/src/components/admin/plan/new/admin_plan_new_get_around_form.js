import React,{Component,PropTypes} from 'react';
import axios from 'axios';

class AdminPlanNewGetAroundForm extends Component{
    static contextTypes = {
        router: PropTypes.object
    }
    componentWillMount(){
        this.state = {
            name:'',
            errMsg: '',
            options_list:[[1]]
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
    onNewOption(){
       let options_list = this.state.options_list;
       options_list.push([1]);
       this.setState({options_list});
    }
    onNewExtraWebsite(event){
        const tagName = event.target.name;
        const index = tagName.substring(13);
        //console.log(index);
        let extraWebsiteArray = this.state.options_list[index];
        let len = extraWebsiteArray.length;
        len++;
        extraWebsiteArray.push(len);
        let options_list = this.state.options_list;
        options_list[index] = extraWebsiteArray;
        this.setState({options_list});
    }
    onNewOptionSubmit(event){
        event.preventDefault();
        let travelling_options = [];
        for (let i=0;i<this.state.options_list.length;i++){
            const name = "option_name_"+i;
            const options_name = this.refs[name].value;
            const image_link_name = "option_image_link_"+i;
            const options_image_link = this.refs[image_link_name].value;
            const website_link_name = "option_website_link_"+i;
            const options_website_link = this.refs[website_link_name].value;
            const description_name = "option_description_"+i;
            const options_description = this.refs[description_name].value;
            let options_extra_website_link_list = [];
            for (let j=1;j<=this.state.options_list[i].length;j++){
                const text_name = "option_extra_website_"+i+"_"+j;
                const text = this.refs[text_name].value;
                const extra_website_link_name = "option_extra_website_link_"+i+"_"+j;
                const website_link = this.refs[extra_website_link_name].value;
                options_extra_website_link_list.push({text,website_link});
            }
            travelling_options.push({options_name,options_image_link,options_website_link,options_description,options_extra_website_link_list});
        }
        //console.log(travelling_options);
        const id = this.props.id;
        const how_to_get_around = {travelling_options};
        console.log({how_to_get_around});
        axios.put("http://localhost:12000/plans/"+id,{how_to_get_around})
        .then(response=>{
            if (response.data.success){
                this.context.router.push("/admin/plan/new/stay/"+id);
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
            <div className="container new-plan-get-around">
                <form className="form-horizontal" onSubmit = {this.onNewOptionSubmit.bind(this)}>
                    
                    {this.state.options_list.map((content,index)=>{
                        return (
                            <div className="panel panel-default" key={"options_"+index}>
                                <div className="panel-heading">
                                    {this.state.name} Get Around Option {index+1}
                                </div>
                                <div className="panel-body">
                                    <div className="form-group">
                                        <div className="col-md-4">
                                            <label className="control-label">Option name</label>
                                        </div>
                                        <div className="col-md-8">
                                            <input type="text" className="form-control" ref={"option_name_"+index} placeholder="please input the option name" required/>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <div className="col-md-4">
                                            <label className="control-label">Option image link</label>
                                        </div>
                                        <div className="col-md-8">
                                            <input type="text" className="form-control" ref={"option_image_link_"+index} placeholder="please input the option image link" required/>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <div className="col-md-4">
                                            <label className="control-label">Option website link</label>
                                        </div>
                                        <div className="col-md-8">
                                            <input type="text" className="form-control" ref={"option_website_link_"+index} placeholder="please input the option website link" required/>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <div className="col-md-4">
                                            <label className="control-label">Option description</label>
                                        </div>
                                        <div className="col-md-8">
                                            <textarea rows="5" type="text" className="form-control" ref={"option_description_"+index} placeholder="please input the option description link" required></textarea>
                                        </div>
                                    </div>
                                    {this.state.options_list[index].map(num=>{
                                        return(
                                            <div className="panel panel-default" key={"extra_website_"+num}>
                                                <div className="panel-heading">
                                                    option extra website link {num}
                                                </div>
                                                <div className="panel-body">
                                                    <div className="form-group">
                                                        <div className="col-md-4">
                                                            <label className="control-label">option extra website name </label>
                                                        </div>
                                                        <div className="col-md-8">
                                                            <input type="text" className="form-control" ref={"option_extra_website_"+index+"_"+num} placeholder="please input the option extra website name" required/>
                                                        </div>
                                                    </div>
                                                    <div className="form-group">
                                                        <div className="col-md-4">
                                                            <label className="control-label">option extra website link </label>
                                                        </div>
                                                        <div className="col-md-8">
                                                            <input type="text" className="form-control" ref={"option_extra_website_link_"+index+"_"+num} placeholder="please input the option extra website link" required/>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        )
                                    })}
                                    <div className="col-md-12">
                                        <button className="btn btn-success btn-block" name={"extra_button_"+index} onClick={this.onNewExtraWebsite.bind(this)}>Add A New extra website</button>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                    <div className="form-group">
                        <div className="col-md-12">
                            <button className="btn btn-success btn-block" onClick={this.onNewOption.bind(this)}>Add A New option</button>
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
export default AdminPlanNewGetAroundForm;