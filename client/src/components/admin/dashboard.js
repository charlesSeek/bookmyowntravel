import React,{Component} from 'react';
import axios from 'axios';
import config from '../../config';

class DashBoard extends Component{
    componentWillMount(){
        this.state = {
            countryCount:undefined,
            planCount:undefined,
            imageCount:undefined,
            errMsg:''
        }
    }
    componentDidMount(){
        const host = config.API_SERVER;
       
        //country
        const countryUrl = "http://"+host+":12000/countries";
        axios.get(countryUrl)
        .then(response=>{
            if (response.data.success){
                const countryCount = response.data.data.length;
                this.setState({countryCount})
            }else{
                
                this.setState({errMsg:response.data.errMsg});
            }
        })
        .catch(err=>{
            this.setState({errMsg:err.toString()})
        })
        //plan
        const planUrl = "http://"+host+":12000/plans";
        axios.get(planUrl)
        .then(response=>{
            if (response.data.success){
                const planCount = response.data.data.length;
                this.setState({planCount})
            }else{
                
                this.setState({errMsg:response.data.errMsg});
            }
        })
        .catch(err=>{
            this.setState({errMsg:err.toString()})
        })
        
        //image
        const imageUrl = "http://"+host+":12000/images";
        axios.get(imageUrl)
        .then(response=>{
            if (response.data.success){
                const imageCount = response.data.data.length;
                this.setState({imageCount})
            }else{
                
                this.setState({errMsg:response.data.errMsg});
            }
        })
        .catch(err=>{
            this.setState({errMsg:err.toString()})
        })
    }
    render(){
        if (this.state.errMsg!=''){
            return (
                <div className="dashboad">{this.state.errMsg}</div>
            )
        }
        if (this.state.countryCount==undefined||this.state.planCount==undefined||this.state.imageCount==undefined){
            return (
                <div className="dashboad">Loading data...</div>
            )
        }
        return(
        <div id="page-wrapper" className="dashboard">
            <div className="row">
                <div className="col-lg-12">
                    <h1 className="page-header">BMOT Dashboard</h1>
                </div>
                
            </div>
            
            <div className="row">
                <div className="col-lg-3 col-md-6">
                    <div className="panel panel-primary">
                        <div className="panel-heading">
                            <div className="row">
                                <div className="col-xs-3">
                                    <i className="glyphicon glyphicon-map-marker glyphicon-5x"></i>
                                </div>
                                <div className="col-xs-9 text-right">
                                    <div className="huge">{this.state.countryCount}</div>
                                    <div>Countries</div>
                                </div>
                            </div>
                        </div>
                        <a href="/admin/country">
                            <div className="panel-footer">
                                <span className="pull-left">View Details</span>
                                <span className="pull-right"><i className="glyphicon glyphicon-arrow-right"></i></span>
                                <div className="clearfix"></div>
                            </div>
                        </a>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6">
                    <div className="panel panel-primary">
                        <div className="panel-heading">
                            <div className="row">
                                <div className="col-xs-3">
                                    <i className="glyphicon glyphicon-plane glyphicon-5x"></i>
                                </div>
                                <div className="col-xs-9 text-right">
                                    <div className="huge">{this.state.planCount}</div>
                                    <div>Travel Plans</div>
                                </div>
                            </div>
                        </div>
                        <a href="/admin/plan">
                            <div className="panel-footer">
                                <span className="pull-left">View Details</span>
                                <span className="pull-right"><i className="glyphicon glyphicon-arrow-right"></i></span>
                                <div className="clearfix"></div>
                            </div>
                        </a>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6">
                    <div className="panel panel-primary">
                        <div className="panel-heading">
                            <div className="row">
                                <div className="col-xs-3">
                                    <i className="glyphicon glyphicon-picture glyphicon-5x"></i>
                                </div>
                                <div className="col-xs-9 text-right">
                                    <div className="huge">{this.state.imageCount}</div>
                                    <div>Images</div>
                                </div>
                            </div>
                        </div>
                        <a href="/admin/image">
                            <div className="panel-footer">
                                <span className="pull-left">View Details</span>
                                <span className="pull-right"><i className="glyphicon glyphicon-arrow-right"></i></span>
                                <div className="clearfix"></div>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </div>
        )
    }
}
export default DashBoard;