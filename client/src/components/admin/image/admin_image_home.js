import React,{Component,PropTypes} from 'react';
import Header from '../../includes/header';
import axios from 'axios';
import config from '../../../config';

class AdminImageHome extends Component{
    componentWillMount(){
        this.state = {
            errMsg:'',
            isHiddenForm:true,
            isHiddenCreateButton:false,
            images:undefined,
            countries:undefined,
            hashtags:[]
        }
    }
    componentDidMount(){
        const host = config.API_SERVER;
        const image_url = 'http://'+host+':12000/images';
        axios.get(image_url)
        .then((response)=>{
            if (response.data.success){
                const images = response.data.data;
                this.setState({images})
            }
        })
        .catch(err=>{
            alert(err.toString());
        });
        const country_url = 'http://'+host+':12000/countries';
        axios.get(country_url)
        .then((response)=>{
            if (response.data.success){
                const countries = response.data.data;
                countries.push({name:"none"});
                this.setState({countries})
            }
        })
        .catch(err=>{
            alert(err.toString());
        });
    }
    createButtonClick(){
        this.setState({
            isHiddenForm:false,
            isHiddenCreateButton:true
        });
    }
    addHashTag(){
        console.log("add hashtags");
        const hashtag = this.refs.tagName.value;
        console.log("tagname:",hashtag);
        const hashtags = this.state.hashtags;
        hashtags.push(hashtag);
        this.setState({hashtags});
    }
    onImageSubmit(event){
        event.preventDefault();
        console.log("submit");
    }
    render(){
        if (this.state.errMsg!=''){
            return (<div>{this.state.errMsg}</div>)
        }
        if (this.state.images==undefined||this.state.countries==undefined){
            return(
                <div>Data Loading...</div>
            )
        }
        return(
            <div className="container">
                <Header/>
                <div className="container image-home">
                    <h2>Admin Website Images</h2>
                    <div className={this.state.isHiddenCreateButton?'hidden':''}>
                        <button type="button" className="btn btn-success btn-block" onClick={this.createButtonClick.bind(this)}>New One</button>
                    </div>
                    <div className={this.state.isHiddenForm?'hidden':''}>
                        <form className="form-horizontal" onSubmit={this.onImageSubmit.bind(this)}>
                            <div className="form-group">
                                <div className="col-md-2">
                                    <label className="control-label">Image Name</label>
                                </div>
                                <div className="col-md-10">
                                    <input type="text" className="form-control" placeholder="please input the unique image name" required/>
                                </div>
                            </div>
                            <div className="form-group">
                                <div className="col-md-2">
                                    <label className="control-label">Image Description</label>
                                </div>
                                <div className="col-md-10">
                                    <textarea rows="3" type="text" className="form-control" placeholder="please input the image description" required></textarea>
                                </div>
                            </div>
                            <div className="form-group">
                                <div className="col-md-2">
                                    <label className="control-label">Image Category</label>
                                </div>
                                <div className="col-md-10">
                                    <select className="form-control">
                                        <option>Find</option>
                                        <option>Cost</option>
                                        <option>Plan</option>
                                        <option>Book</option>
                                        <option>Finalise</option>
                                    </select>
                                </div>
                            </div>
                            <div className="form-group">
                                <div className="col-md-2">
                                    <label className="control-label">Country Category</label>
                                </div>
                                <div className="col-md-10">
                                    <select className="form-control">
                                        {this.state.countries.map((country)=>{
                                            return(
                                                <option key={country.name}>{country.name}</option>
                                            )
                                        })}
                                    </select>
                                </div>
                            </div>
                            <div className="form-group">
                                <div className="col-md-2">
                                    <label className="control-label">Image File Source</label>
                                </div>
                                <div className="col-md-10">
                                    <input type="file"/>
                                </div>
                            </div>
                            <div className="form-group">
                                <div className="col-md-2">
                                    <label className="control-label">Image Hashtags</label>
                                </div>
                                <div className="col-md-8">
                                    <input  type="text" className="form-control" ref="tagName" placeholder="please input the image hashtag and add" required/>
                                </div>
                                <div className="col-md-2">
                                    <button className="btn btn-success btn-block" onClick={this.addHashTag.bind(this)}>Add</button>
                                </div>
                            </div>
                            <div className="form-group">
                                <div className="col-md-12">
                                    {this.state.hashtags.map(tag=>{
                                        return (<span className="hashtag">{tag}</span>)
                                    })}
                                </div>
                            </div>
                            <div className="form-group">
                                <div className="col-md-8">
                                    <button type="submit" className="btn btn-success">Save </button>&nbsp;&nbsp;
                                    <button type="reset" className="btn btn-danger">Cancel</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}
export default AdminImageHome;