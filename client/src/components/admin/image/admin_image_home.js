import React,{Component,PropTypes} from 'react';
import Header from '../../includes/header';
import axios from 'axios';
import config from '../../../config';
import Dropzone from 'react-dropzone';

class AdminImageHome extends Component{
    componentWillMount(){
        this.state = {
            errMsg:'',
            isHiddenForm:true,
            isHiddenCreateButton:false,
            images:undefined,
            countries:undefined,
            hashtags:[],
            imageFile:{},
            imagePreview:'',
            isHiddenImage:true,
            isHiddenText:false,
            isShowErrMsg:false
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
        const hashtag = this.refs.hashtag.value;
        console.log("add hashtags");
        let hashtags = this.state.hashtags;
        hashtags.push(hashtag);
        this.setState({hashtags});
    }
    onImageSubmit(event){
        event.preventDefault();
        const name = this.refs.name.value;
        const description = this.refs.description.value;
        const image_category = this.refs.image_category.value;
        const country_category = this.refs.country_category.value;
        let image_s3_url = "";
        let path=""
        if (country_category=="none"){
            image_s3_url = "http://shuchengc.s3.amazonaws.com/"+image_category+"/"+this.state.file.name;
        }else
            image_s3_url = "http://shuchengc.s3.amazonaws.com/"+image_category+"/"+country_category+"/"+this.state.file.name;
        const hashtags = this.state.hashtags;
        const image = {
            name,
            description,
            image_category,
            country_category,
            image_s3_url,
            hashtags
        };
        const host = config.API_SERVER;
        const url = "http://"+host+":12000/images";
        axios.post(url,image)
        .then(response=>{
            if (response.data.success)
                console.log("success");
            else
                console.log("failure");
        })
        .catch(err=>{
            console.log(err.toString());
            alert(err.toString());
        })
       
    }
    _onDrop(files){
        const file = files[0];
        this.setState({file});
        this.setState({isHiddenImage:false,isHiddenText:true})
        this.setState({imagePreview:file.preview});
    }
    imageFileUpload(){
        console.log(this.state.file);
        let file = this.state.file;
        let host = config.API_SERVER;
        let path = this.refs.image_category.value;
        let country_category = this.refs.country_category.value;
        if (country_category!='none'){
            path = path +"/"+country_category;
        }
        axios.post("http://"+host+":12000/amazon-s3-url",{filename:file.name,filetype:file.type,path:path})
        .then(response=>{
            const s3Url = response.data.data;
            const options = {
                headers:{
                    'Content-Type': file.type
                }
            };
            axios.put(s3Url,file,options)
            .then(response=>{
                console.log(response)
            })
            .catch(err=>{
                console.log(err.toString());
            })
            
        })
        .catch(err=>{
            console.log(err.toString());
        })
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
                    <hr/>
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
                                    <input type="text" className="form-control" ref="name" placeholder="please input the unique image name" required/>
                                </div>
                            </div>
                            <div className="form-group">
                                <div className="col-md-2">
                                    <label className="control-label">Image Description</label>
                                </div>
                                <div className="col-md-10">
                                    <textarea rows="3" type="text" className="form-control" ref="description" placeholder="please input the image description" required></textarea>
                                </div>
                            </div>
                            <div className="form-group">
                                <div className="col-md-2">
                                    <label className="control-label">Image Category</label>
                                </div>
                                <div className="col-md-10">
                                    <select className="form-control" ref="image_category">
                                        <option>find</option>
                                        <option>cost</option>
                                        <option>plan</option>
                                        <option>book</option>
                                        <option>finalise</option>
                                    </select>
                                </div>
                            </div>
                            <div className="form-group">
                                <div className="col-md-2">
                                    <label className="control-label">Country Category</label>
                                </div>
                                <div className="col-md-10">
                                    <select className="form-control" ref="country_category">
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
                                <div className="col-md-4">
                                    <Dropzone  onDrop={this._onDrop.bind(this)}>
                                        <div className={this.state.isHiddenText?"hidden":"image-dropzone"}> select image</div>
                                        <div className={this.state.isHiddenImage?"hidden":""}>
                                            <img src={this.state.imagePreview} height="180" width="180"/>
                                        </div>
                                    </Dropzone>
                                </div>
                                <div className="col-md-2">
                                    <button type="button" className="btn btn-success btn-lg" onClick={this.imageFileUpload.bind(this)}><span className="glyphicon glyphicon-cloud-upload"></span>&nbsp;upload Image</button>
                                </div>
                            </div>
                            <div className="form-group">
                                <div className="col-md-2">
                                    <label className="control-label">Image Hashtags</label>
                                </div>
                                <div className="col-md-8">
                                    <input  type="text" className="form-control" placeholder="please input the image hashtag and add"  ref="hashtag" required/>
                                </div>
                                <div className="col-md-2">
                                    <button type="button" className="btn btn-success btn-block" onClick={this.addHashTag.bind(this)}>Add</button>
                                </div>
                            </div>
                            <div className="form-group">
                                <div className="col-md-12">
                                    {this.state.hashtags.map(tag=>{
                                        return (<span className="hashtag" key={tag}>{tag}</span>)
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
                    <div className="image-list">
                        <div className="row">
                            {this.state.images.map(image=>{
                                return(
                                    <div className="col-md-4" key={image.name}>
                                        <div className="thumbnail">
                                            <img src={image.image_s3_url}/>
                                            <div className="caption">
                                                <h4>Name:{image.name}</h4>
                                                <p>{image.description}</p>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default AdminImageHome;