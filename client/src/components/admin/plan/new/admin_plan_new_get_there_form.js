import React,{Component,PropTypes} from 'react';
import axios from 'axios';

class AdminPlanNewGetThereForm extends Component{
    static contextTypes = {
        router: PropTypes.object
    }
    componentWillMount(){
        this.state = {
            errMsg:'',
            name:'',
            airport_list:[1]
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
    onNewInternationalAirport(){
        console.log("aaaa")
        let index = this.state.airport_list.length;
        index++;
        let airport_list = this.state.airport_list;
        airport_list.push(index);
        this.setState({airport_list});
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
            <div className="container new-plan-get-there">
                <form className="form-horizontal">
            
                    {/* international airport */}
                    <div className="panel panel-default">
                        <div className="panel-heading">
                            {this.state.name} international airport
                        </div>
                        <div className="panel-body">
                            {this.state.airport_list.map(num=>{
                                return (
                                    <div className="panel panel-default" key={"airport_"+num}>
                                        <div className="panel-heading">
                                            international airport {num}
                                        </div>
                                        <div className="panel-body">
                                            <div className="form-group">
                                                <div className="col-md-4">
                                                    <label className="control-label">international airport name</label>
                                                </div>
                                                <div className="col-md-8">
                                                    <input type="text" className="form-control" ref={"international_airport_name_"+num} placeholder="please input the international airport name" required/>
                                                </div>
                                            </div>
                                            <div className="form-group">
                                                <div className="col-md-4">
                                                    <label className="control-label">international airport latitude</label>
                                                </div>
                                                <div className="col-md-8">
                                                    <input type="text" className="form-control" ref={"lat_"+num} placeholder="please input the international airport location latitude" required/>
                                                </div>
                                            </div>
                                            <div className="form-group">
                                                <div className="col-md-4">
                                                    <label className="control-label">international airport longitude</label>
                                                </div>
                                                <div className="col-md-8">
                                                    <input type="text" className="form-control" ref={"long_"+num} placeholder="please input the international airport longitude" required/>
                                                </div>
                                            </div>
                                            <div className="form-group">
                                                <div className="col-md-4">
                                                    <label className="control-label">international airport website link</label>
                                                </div>
                                                <div className="col-md-8">
                                                    <input type="text" className="form-control" ref={"international_airport_website_link_"+num} placeholder="please input the international airport website link" required/>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                        )
                            })}

                            <div className="col-md-12">
                                <button className="btn btn-success btn-block" onClick={this.onNewInternationalAirport.bind(this)}>Add a New international airport</button>
                            </div>
                        </div>
                    </div>
                    
                    {/*full service airlines*/}
                    <div className="panel panel-default">
                        <div className="panel-heading">
                            {this.state.name} full service airlines
                        </div>
                        <div className="panel-body">
                            <div className="form-group">
                                <div className="col-md-4">
                                    <label className="control-label">full service airlines image link</label>
                                </div>
                                <div className="col-md-8">
                                    <input type="text" className="form-control" ref="full_service_airlines_image_link" placeholder="please input the full service airlines image link" required/>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}
export default AdminPlanNewGetThereForm;