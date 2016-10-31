import React,{Component} from 'react';
import Header from '../../includes/header';
import CountryMain from './country_main';
class CountryHome extends Component{
    render(){
        return(
            <div>
                <Header/>
                <CountryMain/>
            </div>
        )
    }
}
export default CountryHome;