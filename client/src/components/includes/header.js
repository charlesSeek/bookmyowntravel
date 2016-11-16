import React,{Component,PropTypes} from 'react';
import cookie from 'react-cookie';
import { browserHistory } from 'react-router'

class Header extends Component{
    static contextTypes = {
        router: PropTypes.object
    }
    componentWillMount(){
        const username = cookie.load('username');
        if (username){
            this.state = ({
                isHiddenAdmin:false,
                username:username
            })
        }else{
            this.state = ({
                isHiddenAdmin:true,
                username:''
            })
        }
    }
    onLogout(){
        cookie.remove('username',{path:'/'});
        browserHistory.push('/');
    }
    renderUserItems(){
        const username = this.state.username
        if (username){
            return (
                <ul className="dropdown-menu">
                    <li>
                        <a href="/" onClick={this.onLogout.bind(this)}><i className="glyphicon glyphicon-off"></i> Log out</a>
                    </li>
               </ul>
            )
        }else {
            return (
                <ul className="dropdown-menu">
                    <li>
                        <a href="/signin"><i className="glyphicon glyphicon-off"></i> Sign in</a>
                   </li> 
                    <li>
                        <a href="/signup"><i className="glyphicon glyphicon-off"></i> Sign up</a>
                   </li> 
                </ul>
            )
        }
    }
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
                            <li className={this.state.isHiddenAdmin?'hidden':'dropdown'}>
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
                                
                                    
                                {this.renderUserItems()}
            
                                    
                                
                            </li>
                        </ul>
                    </div> 
                </div>
           </nav>
        )
    }
}
export default Header;

