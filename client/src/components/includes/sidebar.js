import React,{Component} from 'react';

class SideBar extends Component{
    render(){
        return(
            <div className="navbar-default sidebar sidebar-fixed-left" role="navigation">
                <div className="sidebar-nav navbar-collapse sidebar-nav-top">
                    <ul className="nav" id="side-menu">
                        <li>
                            <a href="/admin/dashboad"><i className="glyphicon glyphicon-dashboard"></i> DASHBOARD</a>
                        </li>
                        <hr/>
                        <li>
                            <a href="/admin/country"><i className="glyphicon glyphicon-globe"></i> COUNTRY</a>
                        </li>
                        <hr/>
                        <li>
                            <a href="#"><i className="glyphicon glyphicon-calendar"></i> PLAN<span className="glyphicon glyphicon-menu-right"></span></a>
                            <ul className="nav nav-second-level">
                                <li>
                                    <a href="#"><i className="glyphicon glyphicon-wrench"></i> Plans Admin</a>
                                </li>
                                <li>
                                    <a href="#"><i className="glyphicon glyphicon-pencil"></i> New Plan</a>
                                </li>
                            </ul>
                        </li>
                        <hr/>
                        <li>
                            <a href="/admin/dashboad"><i className="glyphicon glyphicon-picture"></i> IMAGE</a>
                        </li>
                        <hr/>
                        <li>
                            <a href="/admin/dashboad"><i className="glyphicon glyphicon-user"></i> USER</a>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}
export default SideBar;