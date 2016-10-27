import React,{Component} from 'react';
import Header from '../header';
import MainContent from './main_content';

class Home extends Component{
    render(){
        return(
            <div>
                <Header/>
                <MainContent/>
            
            </div>
        )
    }
}
export default Home;