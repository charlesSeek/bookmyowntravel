import React,{Component} from 'react';
import Header from '../../includes/header';
import axios from 'axios';

class CountryUpdate extends Component{
    
    componentWillMount(){
        this.state = {
            country:undefined,
            languageList: []
        }
    }
    componentDidMount(){
        const id = this.props.params.id;
        axios.get("http://localhost:12000/countries/"+id)
        .then((response)=>{
            const country = response.data.data;
            const {name} = country;
            const {abbr} = country;
            const {captial} = country;
            const {area} = country;
            const {population} = country;
            const {currency} = country;
            const {languages} = country;
            this.setState({name,abbr,captial,area,population,currency,languages})
        })
        .catch(err=>{
            alert(err.toString());
        })
    }
    addLanguage(){
        let languages = this.state.languages;
        languages.push("");
        this.setState({languages});
    }
    countryAbbrChange(event){
        const abbr = event.target.value;
        this.setState({abbr});
       
    }
    countryCaptialChange(event){
        const captial = event.target.value;
        this.setState({captial});
    }
    countryAreaChange(event){
        const area = event.target.value;
        this.setState({area})
    }
    countryPopulationChange(event){
        const population = event.target.value;
        this.setState({population})
    }
    countryCurrencyChange(event){
        const currency = event.target.value;
        this.setState({currency});
    }
    countryLanguagesChange(event){
        //console.log(event.target);
        const tagName = event.target.name;
        const index = tagName.substring(9);
        const language = event.target.value;
        const languages = this.state.languages;
        languages[index] = language;
        this.setState({languages});
    }
    countryUpdateSubmit(event){
        event.preventDefault();
        const name = this.state.name;
        const abbr = this.state.abbr;
        const captial = this.state.captial;
        const area = this.state.area;
        const population = this.state.population;
        const currency = this.state.currency;
        const languages = this.state.languages;
        console.log({name,abbr,captial,area,population,currency,languages});
        
    }
    render(){
        if (this.state.name == undefined){
            return (
                <div>Loading data...</div>
            )
        }
        return(
            <div className="container">
                <Header/>
                <div className="country-update-form">
                     <h2>Country Update</h2>
                     <form className="form-horizontal" onSubmit={this.countryUpdateSubmit.bind(this)}>
                        <div className="form-group">
                            <label className="col-sm-4 control-label">Coutry Name</label>
                            <div className="col-sm-8">
                                <input type="text" className="form-control" value={this.state.name} required/>
                            </div>
                        </div>
                        <div className="form-group">
                            <label className="col-sm-4 control-label">Abbreviation</label>
                            <div className="col-sm-8">
                                <input type="text" className="form-control" onChange={this.countryAbbrChange.bind(this)} value={this.state.abbr} required/>
                            </div>
                        </div>
                        <div className="form-group">
                            <label className="col-sm-4 control-label">Captial</label>
                            <div className="col-sm-8">
                                <input type="text" className="form-control" value={this.state.captial} onChange={this.countryCaptialChange.bind(this)} required/>
                            </div>
                        </div>
                        <div className="form-group">
                            <label className="col-sm-4 control-label">Area(Km square)</label>
                            <div className="col-sm-8">
                                <input type="number" min="1" className="form-control" onChange={this.countryAreaChange.bind(this)} value={this.state.area} required/>
                            </div>
                        </div>
                        <div className="form-group">
                            <label className="col-sm-4 control-label">Population</label>
                            <div className="col-sm-8">
                                <input type="number" min="1" className="form-control" onChange={this.countryPopulationChange.bind(this)} value={this.state.population} required/>
                            </div>
                        </div>
                        <div className="form-group">
                            <label className="col-sm-4 control-label">Currency</label>
                            <div className="col-sm-8">
                                <input type="text" className="form-control" onChange={this.countryCurrencyChange.bind(this)} value={this.state.currency} required/>
                            </div>
                        </div>
                        
                        {this.state.languages.map((language,index)=>{
                            return(
                                <div className="form-group" key={language}>
                                    <label className="col-sm-4 control-label">Official Language {index+1}</label>
                                    <div className="col-sm-6">
                                        <input name={"language_"+index} type="text" className="form-control" ref={"language"+"_"+index} value={this.state.languages[index]} onChange={this.countryLanguagesChange.bind(this)} required/>
                                    </div>
                                    <div className="col-sm-2">
                                        <button className="btn btn-success">REMOVE</button>
                                    </div>
                                </div>
                            )
                        })}
                        <div className="form-group">    
                            <div className="col-sm-8 col-sm-offset-4">
                                 <button type="button" className="btn btn-success btn-block" onClick={this.addLanguage.bind(this)} >Add a language</button>
                            </div>
                        </div>
                                
                        <div className="form-group">
                            <div className="col-sm-offset-4 col-sm-8">
                                <button type="submit" className="btn btn-default">Update</button>
                                &nbsp;&nbsp;
                                <button type="reset" className="btn btn-default" >Cancel</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}
export default CountryUpdate;