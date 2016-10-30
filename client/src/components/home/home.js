/*
    the component of home page
*/
import React,{Component} from 'react';
import Header from '../includes/header';
import MainContent from './main_content';

class Home extends Component{
    render(){
        return(
            <div className="container">
                <Header/>
                <MainContent/>
            </div>
        )
    }
}
export default Home;