import React,{Component} from 'react';
import axios from 'axios';
import Popup from 'react-popup';
import config from '../../../../config';

const when_to_go ={
    best_time_to_go:{
        text:'',
        website_link:''
    },
    high_seasons:{
        high_seasons_1:'',
        high_seasons_2:'',
        high_seasons_3:''
    },
    low_seasons:{
        low_seasons_1:'',
        low_seasons_2:'',
        low_seasons_3:''
    },
    average_temperature_website_link:'',
    public_holiday_website_link:''
}

class PlanWhenToGoUpdateForm extends Component{
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
        const country_url = "http://"+host+":12000/countries";
        axios.get(country_url)
        .then((response)=>{
            if (response.data.success){
                const countries = response.data.data;
                this.setState({countries});
            }else{
                Popup.alert(resposnse.data.errMsg);
            }
        })
        .catch(err=>{
            this.setState({errMsg:err.toString()})
            Popup.alert(err.toString);
        });
        const plan_url = "http://"+host+":12000/plans/"+id;
        axios.get(plan_url)
        .then((response)=>{
            if (response.data.success){
                const plan = response.data.data;
                if (!plan.when_to_go){
                    plan.when_to_go = when_to_go;
                }
                this.setState({plan});
            }else{
                const errMsg = response.data.errMsg;
                this.setState({errMsg});
                Popup.alert(errMsg);
            }
        })
        .catch(err=>{
            this.setState({errMsg:err.toString()});
            Popup.alert(err.toString());
        })
    }
    onChangeBestTimeToGoText(event){
        const text = event.target.value;
        let plan = this.state.plan;
        plan.when_to_go.best_time_to_go.text = text;
        this.setState({plan});
    }
    onChangeBestTimeToGoWebsiteLink(event){
        const text = event.target.value;
        let plan = this.state.plan;
        plan.when_to_go.best_time_to_go.website_link = text;
        this.setState({plan});
    }
    onChangeHighSeasons1(event){
        const high_seasons_1 = event.target.value;
        let plan = this.state.plan;
        plan.when_to_go.high_seasons.high_seasons_1 = high_seasons_1;
        this.setState({plan});
    }
    onChangeHighSeasons2(event){
        const high_seasons_2 = event.target.value;
        let plan = this.state.plan;
        plan.when_to_go.high_seasons.high_seasons_2 = high_seasons_2;
        this.setState({plan});
    }
    onChangeHighSeasons3(event){
        const high_seasons_3 = event.target.value;
        let plan = this.state.plan;
        plan.when_to_go.high_seasons.high_seasons_3 = high_seasons_3;
        this.setState({plan});
    }
    onChangeLowSeasons1(event){
        const low_seasons_1 = event.target.value;
        let plan = this.state.plan;
        plan.when_to_go.low_seasons.low_seasons_1 = low_seasons_1;
        this.setState({plan});
    }
     onChangeLowSeasons2(event){
        const low_seasons_2 = event.target.value;
        let plan = this.state.plan;
        plan.when_to_go.low_seasons.low_seasons_2 = low_seasons_2;
        this.setState({plan});
    }
     onChangeLowSeasons3(event){
        const low_seasons_3 = event.target.value;
        let plan = this.state.plan;
        plan.when_to_go.low_seasons.low_seasons_3 = low_seasons_3;
        this.setState({plan});
    }
    onChangeAverageTemperatureWebsiteLink(event){
        const average_temperature_website_link = event.target.value;
        let plan = this.state.plan;
        plan.when_to_go.average_temperature_website_link = average_temperature_website_link;
        this.setState({plan});
    }
    onChangePublicHolidayWebsiteLink(event){
        const public_holiday_website_link = event.target.value;
        let plan = this.state.plan;
        plan.when_to_go.public_holiday_website_link = public_holiday_website_link;
        this.setState({plan});
    }
    onUpdatePlanWhenToGoSubmit(event){
        event.preventDefault();
        const id = this.props.id;
        const host = config.API_SERVER;
        const plan_url = "http://"+host+":12000/plans/"+id;
        const plan = {};
        plan.when_to_go = this.state.plan.when_to_go;
        axios.put(plan_url,plan)
        .then(response=>{
            if (response.data.success){
                Popup.alert('plan when to go info update successfully');
            }else{
                const errMsg = response.data.errMsg;
                this.setState({errMsg});
                Popup.alert('plan when to go info update failed:'+errMsg);
            }
        })
        .catch(err=>{
            this.setState({errMsg:err.toString()});
            Popup.alert('plan when to go info update failed:'+this.state.errMsg);
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
            <div className="container update-plan-when-go">
                <form className="form-horizontal" onSubmit={this.onUpdatePlanWhenToGoSubmit.bind(this)}>
                
                    {/*best time to go*/}
                    <div className="panel panel-default">
                        <div className="panel-heading">
                           {this.state.name} best time to go
                        </div>
                        <div className="panel-body">
                            <div className="form-group">
                                <div className="col-md-4">
                                    <label className="control-label">description</label>
                                </div>
                                <div className="col-md-8">
                                    <textarea rows="5" className="form-control" type="text" value={this.state.plan.when_to_go.best_time_to_go.text||''} onChange={this.onChangeBestTimeToGoText.bind(this)} required></textarea>
                                </div>
                            </div>
                            <div className="form-group">
                                <div className="col-md-4">
                                    <label className="control-label">Website Link</label>
                                </div>
                                <div className="col-md-8">
                                    <input className="form-control" type="text" value={this.state.plan.when_to_go.best_time_to_go.website_link||''} onChange={this.onChangeBestTimeToGoWebsiteLink.bind(this)} required/>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/*high seaseons*/}
                    <div className="panel panel-default">
                        <div className="panel-heading">
                           {this.state.name} high seasons
                        </div>
                        <div className="panel-body">
                            <div className="form-group">
                                <div className="col-md-4">
                                    <label className="control-label">high seasons 1</label>
                                </div>
                                <div className="col-md-8">
                                    <input className="form-control" type="text" value={this.state.plan.when_to_go.high_seasons.high_seasons_1||''} onChange={this.onChangeHighSeasons1.bind(this)} required/>
                                </div>
                            </div>
                            <div className="form-group">
                                <div className="col-md-4">
                                    <label className="control-label">high seasons 2</label>
                                </div>
                                <div className="col-md-8">
                                    <input className="form-control" type="text" value={this.state.plan.when_to_go.high_seasons.high_seasons_2||''} onChange={this.onChangeHighSeasons2.bind(this)} required/>
                                </div>
                            </div>
                            <div className="form-group">
                                <div className="col-md-4">
                                    <label className="control-label">high seasons 3</label>
                                </div>
                                <div className="col-md-8">
                                    <input className="form-control" type="text" value={this.state.plan.when_to_go.high_seasons.high_seasons_3||''} onChange={this.onChangeHighSeasons3.bind(this)} required/>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/*low seasons*/}
                    <div className="panel panel-default">
                        <div className="panel-heading">
                           {this.state.name} low seasons
                        </div>
                        <div className="panel-body">
                            <div className="form-group">
                                <div className="col-md-4">
                                    <label className="control-label">low seasons 1</label>
                                </div>
                                <div className="col-md-8">
                                    <input className="form-control" type="text" value={this.state.plan.when_to_go.low_seasons.low_seasons_1||''} onChange={this.onChangeLowSeasons1.bind(this)} required/>
                                </div>
                            </div>
                            <div className="form-group">
                                <div className="col-md-4">
                                    <label className="control-label">low seasons 2</label>
                                </div>
                                <div className="col-md-8">
                                    <input className="form-control" type="text" value={this.state.plan.when_to_go.low_seasons.low_seasons_2||''} onChange={this.onChangeLowSeasons2.bind(this)} required/>
                                </div>
                            </div>
                            <div className="form-group">
                                <div className="col-md-4">
                                    <label className="control-label">low seasons 3</label>
                                </div>
                                <div className="col-md-8">
                                    <input className="form-control" type="text" value={this.state.plan.when_to_go.low_seasons.low_seasons_3||''} onChange={this.onChangeLowSeasons3.bind(this)} required/>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/*average temperature website link*/}
                    <div className="form-group">
                        <div className="col-md-4">
                            <label className="control-label">average temperature website link</label>
                        </div>
                        <div className="col-md-8">
                            <input className="form-control" type="text" value={this.state.plan.when_to_go.average_temperature_website_link||''} onChange={this.onChangeAverageTemperatureWebsiteLink.bind(this)} required/>
                        </div>
                    </div>
                    
                    {/*public holiday website link*/}
                    <div className="form-group">
                        <div className="col-md-4">
                            <label className="control-label">public holiday website link</label>
                        </div>
                        <div className="col-md-8">
                            <input className="form-control" type="text" value={this.state.plan.when_to_go.public_holiday_website_link||''} onChange={this.onChangePublicHolidayWebsiteLink.bind(this)} required/>
                        </div>
                    </div>

                    <div className="form-group">
                        <div className="col-md-8">
                            <button type="submit" className="btn btn-success">Update</button>
                        </div>
                    </div>
                </form>
                <Popup/>
            </div>
        )
    }
}
export default PlanWhenToGoUpdateForm;