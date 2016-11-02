import React,{Component,PropTypes} from 'react';
import axios from 'axios';

class AdminPlanNewWhenGoForm extends Component{
    static contextTypes = {
        router: PropTypes.object
    }
    componentWillMount(){
        this.state = {
            name:'',
            errMsg:''
        }
    }
    componentDidMount(){
        const id = this.props.id;
        axios.get("http://localhost:12000/plans/"+id)
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
    onNewPlanWhenGoSubmit(event){
        event.preventDefault();
        let when_to_go = {};
        let best_time_to_go = {};
        let high_seasons = {};
        let low_seasons = {};
        const text = this.refs.description.value;
        const website_link = this.refs.website_link.value;
        best_time_to_go = {text,website_link};
        const high_seasons_1 = this.refs.high_seasons1.value;
        const high_seasons_2 = this.refs.high_seasons2.value;
        const high_seasons_3 = this.refs.high_seasons3.value;
        high_seasons = {high_seasons_1,high_seasons_2,high_seasons_3};
        const low_seasons_1 = this.refs.low_seasons1.value;
        const low_seasons_2 = this.refs.low_seasons2.value;
        const low_seasons_3 = this.refs.low_seasons3.value;
        low_seasons = {low_seasons_1,low_seasons_2,low_seasons_3};
        const average_temperature_website_link = this.refs.average_temperature_website_link.value;
        const public_holiday_website_link = this.refs.public_holiday_website_link.value;
        when_to_go = {best_time_to_go,high_seasons,low_seasons,average_temperature_website_link,public_holiday_website_link};
        const id = this.props.id;
        axios.put("http://localhost:12000/plans/"+id,{when_to_go})
        .then(response=>{
            if (response.data.success){
                this.context.router.push('/admin/plan/new/seeDo/'+id);
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
            <div className="container new-plan-when-go">
                <form className="form-horizontal" onSubmit={this.onNewPlanWhenGoSubmit.bind(this)}>
                
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
                                    <input className="form-control" type="text" ref='description' placeholder="please input the description of best time to go" required/>
                                </div>
                            </div>
                            <div className="form-group">
                                <div className="col-md-4">
                                    <label className="control-label">Website Link</label>
                                </div>
                                <div className="col-md-8">
                                    <input className="form-control" type="text" ref='website_link' placeholder="please input the website link" required/>
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
                                    <input className="form-control" type="text" ref='high_seasons1' placeholder="please input the high seasons 1 of best time to go" required/>
                                </div>
                            </div>
                            <div className="form-group">
                                <div className="col-md-4">
                                    <label className="control-label">high seasons 2</label>
                                </div>
                                <div className="col-md-8">
                                    <input className="form-control" type="text" ref='high_seasons2' placeholder="please input the high seasons 2 of best time to go" required/>
                                </div>
                            </div>
                            <div className="form-group">
                                <div className="col-md-4">
                                    <label className="control-label">high seasons 3</label>
                                </div>
                                <div className="col-md-8">
                                    <input className="form-control" type="text" ref='high_seasons3' placeholder="please input the high seasons 3 of best time to go" required/>
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
                                    <input className="form-control" type="text" ref='low_seasons1' placeholder="please input the low seasons 1 of best time to go" required/>
                                </div>
                            </div>
                            <div className="form-group">
                                <div className="col-md-4">
                                    <label className="control-label">low seasons 2</label>
                                </div>
                                <div className="col-md-8">
                                    <input className="form-control" type="text" ref='low_seasons2' placeholder="please input the low seasons 2 of best time to go" required/>
                                </div>
                            </div>
                            <div className="form-group">
                                <div className="col-md-4">
                                    <label className="control-label">low seasons 3</label>
                                </div>
                                <div className="col-md-8">
                                    <input className="form-control" type="text" ref='low_seasons3' placeholder="please input the low seasons 3 of best time to go" required/>
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
                            <input className="form-control" type="text" ref='average_temperature_website_link' placeholder="please input the average temperature website link" required/>
                        </div>
                    </div>
                    
                    {/*public holiday website link*/}
                    <div className="form-group">
                        <div className="col-md-4">
                            <label className="control-label">public holiday website link</label>
                        </div>
                        <div className="col-md-8">
                            <input className="form-control" type="text" ref='public_holiday_website_link' placeholder="please input the public holiday website link" required/>
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
export default AdminPlanNewWhenGoForm;