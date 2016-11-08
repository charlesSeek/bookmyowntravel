import React,{Component} from 'react';
import axios from 'axios';

class PlanSeeAndDoUpdateForm extends Component{
    componentWillMount(){
        this.state = {
            countries: undefined,
            errMsg:'',
            plan:undefined,
            isHiddenErrMsg:true,
            isHiddenSuccessMsg:true,
            top_places_list:[]
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
                let top_places_list = [];
                for (let i=1;i<=plan.what_to_see_and_do.top_places.length;i++){
                    top_places_list.push(i);
                }
                
                this.setState({plan,top_places_list});
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
            <div className="container new-plan-see-do">
                <form className="form-horizontal">
                
                    {/*best activties */}
                    {[1,2,3,4,5,6,7,8,9,10].map(num=>{
                        return(
                                <div className="panel panel-default" key={"activities_"+num}>
                                    <div className="panel-heading">
                                        {this.state.name} best activities {num}
                                    </div>
                                    <div className="panel-body">
                                        <div className="form-group">
                                            <div className="col-md-4">
                                                <label className="control-label">activity name</label>
                                            </div>
                                            <div className="col-md-8">
                                                <input className="form-control" type="text"/>
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <div className="col-md-4">
                                                <label className="control-label">Website Link</label>
                                            </div>
                                            <div className="col-md-8">
                                                <input className="form-control" type="text" ref={"activities_"+num+"_website_link"} placeholder="please input the website link" required/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                        )
                    })}
                    
                    {/*suggested itineraries*/}
                    {[1,2,3,4].map(num=>{
                        return(
                            <div className="panel panel-default" key={"itineraries_"+num}>
                                <div className="panel-heading">
                                    {this.state.name} suggested itineraries {num}
                                </div>
                                <div className="panel-body">
                                    <div className="form-group">
                                        <div className="col-md-4">
                                            <label className="control-label">itinerary name</label>
                                        </div>
                                        <div className="col-md-8">
                                            <input className="form-control" type="text" ref={"itineraries_"+num+"_name"} placeholder="please input the name of itinerary" required/>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <div className="col-md-4">
                                            <label className="control-label">image Link</label>
                                        </div>
                                        <div className="col-md-8">
                                            <input className="form-control" type="text" ref={"itineraries_"+num+"_image_link"} placeholder="please input the image link" required/>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <div className="col-md-4">
                                            <label className="control-label">Website Link</label>
                                        </div>
                                        <div className="col-md-8">
                                            <input className="form-control" type="text" ref={"itineraries_"+num+"_website_link"} placeholder="please input the website link" required/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                   
                    {/*top places*/}
                    {this.state.top_places_list.map((num)=>{
                        return(
                            <div className="panel panel-default" key={"top_places_"+num}>
                                <div className="panel-heading">
                                    {this.state.name} top places {num}
                                </div>
                                <div className="panel-body">
                                    <div className="form-group">
                                        <div className="col-md-4">
                                            <label className="control-label">top places name</label>
                                        </div>
                                        <div className="col-md-8">
                                            <input className="form-control" type="text" ref={"top_places_"+num+"_name"} placeholder="please input the name of top places" required/>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <div className="col-md-4">
                                            <label className="control-label">top places image Link</label>
                                        </div>
                                        <div className="col-md-8">
                                            <input className="form-control" type="text" ref={"top_places_"+num+"_image_link"} placeholder="please input the image link" required/>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <div className="col-md-4">
                                            <label className="control-label">Website Link</label>
                                        </div>
                                        <div className="col-md-8">
                                            <input className="form-control" type="text" ref={"top_places_"+num+"_website_link"} placeholder="please input the website link" required/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                    <div className="form-group">    
                        <div className="col-md-12">
                             <button type="button" className="btn btn-success btn-block" >Add a top place</button>
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
export default PlanSeeAndDoUpdateForm;