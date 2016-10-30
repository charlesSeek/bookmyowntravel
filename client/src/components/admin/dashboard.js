import React,{Component} from 'react';

class DashBoard extends Component{
    render(){
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
                                    <i className="glyphicon glyphicon-globe glyphicon-5x"></i>
                                </div>
                                <div className="col-xs-9 text-right">
                                    <div className="huge">7</div>
                                    <div>Continents</div>
                                </div>
                            </div>
                        </div>
                        <a href="#">
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
                                    <i className="glyphicon glyphicon-map-marker glyphicon-5x"></i>
                                </div>
                                <div className="col-xs-9 text-right">
                                    <div className="huge">26</div>
                                    <div>Countries</div>
                                </div>
                            </div>
                        </div>
                        <a href="#">
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
                                    <div className="huge">60</div>
                                    <div>Travel Plans</div>
                                </div>
                            </div>
                        </div>
                        <a href="#">
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
                                    <i className="glyphicon glyphicon-user glyphicon-5x"></i>
                                </div>
                                <div className="col-xs-9 text-right">
                                    <div className="huge">1</div>
                                    <div>Users</div>
                                </div>
                            </div>
                        </div>
                        <a href="#">
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
                                    <div className="huge">200</div>
                                    <div>Images</div>
                                </div>
                            </div>
                        </div>
                        <a href="#">
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