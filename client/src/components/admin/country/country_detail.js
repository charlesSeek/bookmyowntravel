import React,{Component} from 'react';
import Header from '../../includes/header';
import axios from 'axios';
import config from '../../../config';

class CountryDetail extends Component{
    componentWillMount(){
        this.state = {
            country:undefined
        }
    }
    componentDidMount(){
        var id = this.props.params.id;
        const host = config.API_SERVER;
        const url = 'http://'+host+':12000/countries/'+id;
        axios.get(url)
        .then((response)=>{
            this.setState({
                country:response.data.data
            })
        })
        .catch(err=>{
            alert(err.toString());
        })
    }
    render(){
        if (this.state.country==undefined){
            return(
                <div>Loading data...</div>
            )
        }
        return(
            <div>
                <Header/>
                <div className="country-info">
                    <h5>Name: {this.state.country.name}</h5>
                    <h5>Abbr: {this.state.country.abbr}</h5>
                    <h5>Captial: {this.state.country.captial}</h5>
                    <h5>Area: {this.state.country.area}</h5>
                    <h5>Population: {this.state.country.population}</h5>
                    <h5>Currency: {this.state.country.currency}</h5>
                    <h5 className="language-inline">Language:</h5> {this.state.country.languages.map((language)=>{return (<h5 className="language-inline" key={language}>{language}  </h5>)} )}
                                                          
                    <h5>Created At: {this.state.country.createdAt}</h5>
                    <h5>Updated At: {this.state.country.updatedAt}</h5>
                    <div className="row">
                        <div className="col-md-4">
                            <a href="/admin/country"><button className="btn btn-success btn-block">Back</button></a>
                        </div>
                    </div>
                </div>
            
            </div>
        )
    }
}
export default CountryDetail;