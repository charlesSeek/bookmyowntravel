import React,{Component} from 'react';
import Header from '../includes/header';
import DashBoard from './dashboard';

class AdminHome extends Component{
    render(){
        return(
            <div className="container admin-home">
                <Header/>
                <DashBoard/>
            </div>
        )
    }
}
export default AdminHome;