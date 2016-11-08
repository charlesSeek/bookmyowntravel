import React,{Component,PropTypes} from 'react';
import axios from 'axios';
import config from '../../../../config';

class AdminPlanNewSeeDoForm extends Component{
    static contextTypes = {
        router: PropTypes.object
    }
    componentWillMount(){
        this.state = {
            name:'',
            errMsg:'',
            top_places_list:[1]
        }
    }
    componentDidMount(){
        const id = this.props.id;
        const host = config.API_SERVER;
        const url = 'http://'+host+':12000/plans/'+id;
        axios.get(url)
        .then(response=>{
            if (response.data.success){
                this.setState({name:response.data.data.name})
            }else{
                this.setState({errMsg:response.data.errMsg})
                alert(response.data.errMsg);
            }
        })
        .catch(err=>{
            this.setState({errMsg:err.toString()});
            alert(err.toString());
        })
    }
    onNewTopPlace(){
        let index = this.state.top_places_list.length;
        index++;
        let list = this.state.top_places_list;
        list.push(index);
        this.setState({top_places_list:list})
    }
    onNewPlanSeeDoSubmit(event){
            event.preventDefault();
            let activities = [];
            for (let i=1;i<=10;i++){
                const name = "activities_"+i+"_name";
                const link = "activities_"+i+"_website_link";
                const activity_name = this.refs[name].value;
                const activity_website_link = this.refs[link].value;
                activities.push({activity_name,activity_website_link})
            }
            let best_activities_1 = activities[0];
            let best_activities_2 = activities[1];
            let best_activities_3 = activities[2];
            let best_activities_4 = activities[3];
            let best_activities_5 = activities[4];
            let best_activities_6 = activities[5];
            let best_activities_7 = activities[6];
            let best_activities_8 = activities[7];
            let best_activities_9 = activities[8];
            let best_activities_10 = activities[9];
            let itineraries = [];
            for (let i=1;i<=4;i++){
                const name = "itineraries_"+i+"_name";
                const image_link = "itineraries_"+i+"_image_link";
                const website_link = "itineraries_"+i+"_website_link";
                const itineraries_name = this.refs[name].value;
                const itineraries_image_link = this.refs[image_link].value;
                const itineraries_website_link = this.refs[website_link].value;
                itineraries.push({itineraries_name,itineraries_image_link,itineraries_website_link});
            }
            let suggested_itineraries_1 = itineraries[0];
            let suggested_itineraries_2 = itineraries[1];
            let suggested_itineraries_3 = itineraries[2];
            let suggested_itineraries_4 = itineraries[3];
            let top_places = [];
            for (let i=1;i<=this.state.top_places_list.length;i++){
                const name = "top_places_"+i+"_name";
                const image_link = "top_places_"+i+"_image_link";
                const website_link = "top_places_"+i+"_website_link";
                const top_place_name = this.refs[name].value;
                const top_place_image_link = this.refs[image_link].value;
                const top_place_website_link = this.refs[website_link].value;
                top_places.push({top_place_name,top_place_image_link,top_place_website_link});  
            }
            const seeDo = {
                best_activities_1,
                best_activities_2,
                best_activities_3,
                best_activities_4,
                best_activities_5,
                best_activities_6,
                best_activities_7,
                best_activities_8,
                best_activities_9,
                best_activities_10,
                suggested_itineraries_1,
                suggested_itineraries_2,
                suggested_itineraries_3,
                suggested_itineraries_4,
                top_places
            };
            console.log({what_to_see_and_do:seeDo})
            const id = this.props.id;
            const host = config.API_SERVER;
            const url = 'http://'+host+':12000/plans/'+id;
            axios.put(url,{what_to_see_and_do:seeDo})
            .then(response=>{
                if (response.data.success){
                    this.context.router.push('/admin/plan/new/sightseeing/'+id);
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
            return(
                <div>Loading data...</div>
            )
        }
        return(
            <div className="container new-plan-see-do">
                <form className="form-horizontal" onSubmit={this.onNewPlanSeeDoSubmit.bind(this)}>
                
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
                                                <input className="form-control" type="text" ref={"activities_"+num+"_name"} placeholder="please input the name of activity" required/>
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
                             <button type="button" className="btn btn-success btn-block" onClick={this.onNewTopPlace.bind(this)}>Add a top place</button>
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
export default AdminPlanNewSeeDoForm;