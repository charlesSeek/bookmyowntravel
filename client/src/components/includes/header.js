import React,{Component} from 'react';

class Header extends Component{
    render(){
        return(
           <nav className="navbar navbar-default navbar-fixed-top" role="navigation">
                <div className="container">
                    <div className="navbar-header">
                        <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
                            <span className="sr-only">Toggle navigation</span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                        </button>
                        <a className="navbar-brand" href="/">Book My Own Travel CMS</a>
                    </div>
                    <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                        <ul className="nav navbar-nav navbar-right">
                            <li><a href="/">Home</a></li>
                            <li className="dropdown">
                                <a href="#" className="dropdown-toggle" data-toggle="dropdown">Admin<b className="caret"></b></a>
                                <ul className="dropdown-menu">
                                    <li>
                                        <a href="/admin/dashboard"><i className="glyphicon glyphicon-dashboard"></i> DashBoard</a>
                                    </li>
                                    <li className="divider"></li>
                                    <li>
                                        <a href="/admin/user"><i className="glyphicon glyphicon-user"></i> User</a>
                                    </li>
                                    <li className="divider"></li>
                                    <li>
                                        <a href="/admin/country"><i className="glyphicon glyphicon-globe"></i> Country</a>
                                    </li>
                                    <li className="divider"></li>
                                    <li>
                                        <a href="/admin/plan"><i className="glyphicon glyphicon-plane"></i> Travel Plan</a>
                                    </li>
                                    <li className="divider"></li>
                                    <li>
                                        <a href="/admin/image"><i className="glyphicon glyphicon-picture"></i> Image</a>
                                    </li>
                                </ul>
                            </li>
                            <li className="dropdown">
                                <a href="#" className="dropdown-toggle" data-toggle="dropdown"><i className="glyphicon glyphicon-user" aria-hidden="true"></i><b className="caret"></b></a>
                                <ul className="dropdown-menu">
                                    <li>
                                        <a href="#"><i className="glyphicon glyphicon-pencil"></i> Profile</a>
                                    </li> 
                                    <li className="divider"></li>
                                    <li>
                                        <a href="#"><i className="glyphicon glyphicon-off"></i> Log Out</a>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </div> 
                </div>
           </nav>
        )
    }
}
export default Header;

