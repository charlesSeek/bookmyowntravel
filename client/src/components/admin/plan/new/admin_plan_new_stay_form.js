import React,{Component,PropTypes} from 'react';
import axios from 'axios';
import config from '../../../../config';

class AdminPlanNewStayForm extends Component{
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
        const host = config.API_SERVER;
        const url = 'http://'+host+':12000/plans/'+id;
        axios.get(url)
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
    onNewStaySubmit(event){
        event.preventDefault();
        //description
        const description = this.refs.description.value;
        
        let text = this.refs.where_to_stay_text.value;
        let image_link = this.refs.where_to_stay_image_link.value;
        let website_link = this.refs.where_to_stay_website_link.value;
        const where_to_stay_accommodation = {text,image_link,website_link};
        
        text = this.refs.accommodation_options_text.value;
        image_link = this.refs.accommodation_options_image_link.value;
        website_link = this.refs.accommodation_options_website_link.value;
        const accommodation_options = {text,image_link,website_link};
        
        text = this.refs.traditional_accommodation_text.value;
        image_link = this.refs.traditional_accommodation_image_link.value;
        website_link = this.refs.traditional_accommodation_website_link.value;
        const traditional_accommodation = {text,image_link,website_link};
        
        text = this.refs.unique_accommodation_text.value;
        image_link = this.refs.unique_accommodation_image_link.value;
        website_link = this.refs.unique_accommodation_website_link.value;
        const unique_accommodation = {text,image_link,website_link};
        
        const where_to_stay = {description,where_to_stay_accommodation,accommodation_options,traditional_accommodation,unique_accommodation}
        const id = this.props.id;
        const host = config.API_SERVER;
        const url = 'http://'+host+':12000/plans/'+id;
        axios.put(url,{where_to_stay})
        .then(response=>{
            if (response.data.success){
                this.context.router.push("/admin/plan/new/importantInfo/"+id);
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
            <div className="container plan-stay">
                <form className="form-horizontal" onSubmit={this.onNewStaySubmit.bind(this)}>
            
                    {/*description*/}
                    <div className="form-group">
                        <div className="col-md-4">
                            <label className="control-label">{this.state.name} stay description</label>
                        </div>
                        <div className="col-md-8">
                            <input type="text" className="form-control" ref="description" placeholder="please input where to stay description" required/>
                        </div>
                    </div>
                    
                    {/*where to stay*/}
                    <div className="panel panel-default">
                        <div className="panel-heading">
                           {this.state.name} where to stay
                        </div>
                        <div className="panel-body">
                            <div className="form-group">
                                <div className="col-md-4">
                                    <label className="control-label">text</label>
                                </div>
                                <div className="col-md-8">
                                    <input className="form-control" type="text" ref='where_to_stay_text' placeholder="please input the where to stay text" required/>
                                </div>
                            </div>
                            <div className="form-group">
                                <div className="col-md-4">
                                    <label className="control-label">image link</label>
                                </div>
                                <div className="col-md-8">
                                    <input className="form-control" type="text" ref='where_to_stay_image_link' placeholder="please input the where to stay image link" required/>
                                </div>
                            </div>
                            <div className="form-group">
                                <div className="col-md-4">
                                    <label className="control-label">website link</label>
                                </div>
                                <div className="col-md-8">
                                    <input className="form-control" type="text" ref='where_to_stay_website_link' placeholder="please input the where to stay website link" required/>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    {/*accommodation options*/}
                    <div className="panel panel-default">
                        <div className="panel-heading">
                           {this.state.name} accommodation options
                        </div>
                        <div className="panel-body">
                            <div className="form-group">
                                <div className="col-md-4">
                                    <label className="control-label">text</label>
                                </div>
                                <div className="col-md-8">
                                    <input className="form-control" type="text" ref='accommodation_options_text' placeholder="please input the accommodation options text" required/>
                                </div>
                            </div>
                            <div className="form-group">
                                <div className="col-md-4">
                                    <label className="control-label">image link</label>
                                </div>
                                <div className="col-md-8">
                                    <input className="form-control" type="text" ref='accommodation_options_image_link' placeholder="please input the accommodation options image link" required/>
                                </div>
                            </div>
                            <div className="form-group">
                                <div className="col-md-4">
                                    <label className="control-label">website link</label>
                                </div>
                                <div className="col-md-8">
                                    <input className="form-control" type="text" ref='accommodation_options_website_link' placeholder="please input the accommodation options website link" required/>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    {/*traditional accommodation*/}
                    <div className="panel panel-default">
                        <div className="panel-heading">
                           {this.state.name} traditional accommodation
                        </div>
                        <div className="panel-body">
                            <div className="form-group">
                                <div className="col-md-4">
                                    <label className="control-label">text</label>
                                </div>
                                <div className="col-md-8">
                                    <input className="form-control" type="text" ref='traditional_accommodation_text' placeholder="please input the traditional accommodation text" required/>
                                </div>
                            </div>
                            <div className="form-group">
                                <div className="col-md-4">
                                    <label className="control-label">image link</label>
                                </div>
                                <div className="col-md-8">
                                    <input className="form-control" type="text" ref='traditional_accommodation_image_link' placeholder="please input the traditional accommodation image link" required/>
                                </div>
                            </div>
                            <div className="form-group">
                                <div className="col-md-4">
                                    <label className="control-label">website link</label>
                                </div>
                                <div className="col-md-8">
                                    <input className="form-control" type="text" ref='traditional_accommodation_website_link' placeholder="please input the traditional accommodation website link" required/>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    {/*unique accommodation*/}
                    <div className="panel panel-default">
                        <div className="panel-heading">
                           {this.state.name} unique accommodation
                        </div>
                        <div className="panel-body">
                            <div className="form-group">
                                <div className="col-md-4">
                                    <label className="control-label">text</label>
                                </div>
                                <div className="col-md-8">
                                    <input className="form-control" type="text" ref='unique_accommodation_text' placeholder="please input the unique accommodation text" required/>
                                </div>
                            </div>
                            <div className="form-group">
                                <div className="col-md-4">
                                    <label className="control-label">image link</label>
                                </div>
                                <div className="col-md-8">
                                    <input className="form-control" type="text" ref='unique_accommodation_image_link' placeholder="please input the unique accommodation image link" required/>
                                </div>
                            </div>
                            <div className="form-group">
                                <div className="col-md-4">
                                    <label className="control-label">website link</label>
                                </div>
                                <div className="col-md-8">
                                    <input className="form-control" type="text" ref='unique_accommodation_website_link' placeholder="please input the unique accommodation website link" required/>
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
export default AdminPlanNewStayForm;