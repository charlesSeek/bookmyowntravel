import React,{Component} from 'react';
import axios from 'axios';

class CountryMain extends Component{
    componentDidMount(){
        axios.get("http://localhost:12000/countries")
        .then((response)=>{
            this.setState({countries:response.data})
        })
        .catch((err)=>{
            this.setState({errMsg:err});
        });
    }
    componentWillMount(){
        this.state = {
            countries:undefined,
            errMsg:'',
            isHiddenForm:true,
            isHiddenCreateButton:false,
            languageList:[1]
        }
    }
    createButtonClick(){
        this.setState({
            isHiddenForm:false,
            isHiddenCreateButton:true
        })
    }
    addLanguage(){
        var index = this.state.languageList.length;
        index++;
        var languages = this.state.languageList;
        languages.push(index);
        this.setState({languageList:languages});
    }
    newCountrySubmit(event){
        event.preventDefault();
        var countryName = this.refs.countryName.value;
        var abbr = this.refs.abbr.value;
        var captial = this.refs.captial.value;
        var area = this.refs.area.value;
        var population = this.refs.population.value;
        var currency = this.refs.currency.value;
        var languages = [];
        var country = {};
        for (var i=1;i<=this.state.languageList.length;i++){
            var name = "language"+"_"+i;
            languages.push(this.refs[name].value);
        }
        country = {
            name: countryName,
            abbr: abbr,
            captial: captial,
            area: area,
            population: population,
            currency: currency,
            languages: languages
        }
        axios.post("http://localhost:12000/countries",country)
        .then(response=>{
           if (response.data.success){
               var countries = this.state.countries;
               countries.data.push(response.data.data);
               this.setState({
                    countries:countries,
                    isHiddenForm:true,
                    isHiddenCreateButton:false
               })
           }else{
               alert(response.data.errMsg);
           }
        })
        .catch(err=>{
            alert(err.toString());
        })
    }
    
    countryDelete(id){
        self = this;
        axios.delete("http://localhost:12000/countries/"+id)
        .then(response=>{
            if (response.data.success){
                console.log("self:",self.state.countries);
                var newCountries = self.state.countries.data.filter(country=>{
                    return country._id != id;
                })
                self.setState({countries:newCountries});
            }else{
                alert(response.data.errMsg);
            }
        })
        .catch(err=>{
            alert(err.toString());
        })
    }
    render(){
        if (this.state.errMsg!=''){
            return(
                <h1 className="contry-main">{this.state.errMsg}</h1>
            )
        }
        if (this.state.countries==undefined){
            return(
                <div className="country-main">Loading countries data...</div>
            )
        }
        //console.log('countries',this.state.countries);
        return(
            <div className="container country-main">
                <h2>Admin Country</h2>
                <div className={this.state.isHiddenCreateButton?'hidden':''}>
                   <button type="button" className="btn btn-default btn-block" onClick={this.createButtonClick.bind(this)}>Create New One</button>
                </div>
                <div className={this.state.isHiddenForm?'hidden':''}>
                    <form className="form-horizontal" onSubmit={this.newCountrySubmit.bind(this)}>
                        <div className="form-group">
                            <label className="col-sm-4 control-label">Coutry Name</label>
                            <div className="col-sm-8">
                                <input type="text" className="form-control" ref="countryName" placeholder="please input contry name" required/>
                            </div>
                        </div>
                        <div className="form-group">
                            <label className="col-sm-4 control-label">Abbreviation</label>
                            <div className="col-sm-8">
                                <input type="text" className="form-control" ref="abbr" placeholder="please input abbr name" required/>
                            </div>
                        </div>
                        <div className="form-group">
                            <label className="col-sm-4 control-label">Captial</label>
                            <div className="col-sm-8">
                                <input type="text" className="form-control" ref="captial" placeholder="please input captial name" required/>
                            </div>
                        </div>
                        <div className="form-group">
                            <label className="col-sm-4 control-label">Area(Km square)</label>
                            <div className="col-sm-8">
                                <input type="number" min="1" className="form-control" ref="area" placeholder="please input area" required/>
                            </div>
                        </div>
                        <div className="form-group">
                            <label className="col-sm-4 control-label">Population</label>
                            <div className="col-sm-8">
                                <input type="number" min="1" className="form-control" ref="population" placeholder="please input population" required/>
                            </div>
                        </div>
                        <div className="form-group">
                            <label className="col-sm-4 control-label">Currency</label>
                            <div className="col-sm-8">
                                <input type="text" className="form-control" ref="currency" placeholder="please input currency" required/>
                            </div>
                        </div>
                        
                        {this.state.languageList.map((index)=>{
                            return(
                                <div className="form-group" key={index}>
                                    <label className="col-sm-4 control-label">Official Language {index}</label>
                                    <div className="col-sm-8">
                                        <input type="text" className="form-control" ref={"language"+"_"+index} placeholder="please input currency" required/>
                                    </div>
                                </div>
                            )
                        })}
                        <div className="form-group">    
                            <div className="col-sm-8 col-sm-offset-4">
                                 <button type="button" className="btn btn-default btn-block" onClick={this.addLanguage.bind(this)}>Add a language</button>
                            </div>
                        </div>
                                
                        <div className="form-group">
                            <div className="col-sm-offset-4 col-sm-8">
                                <button type="submit" className="btn btn-default">Submit</button>
                                &nbsp;&nbsp;
                                <button type="reset" className="btn btn-default" onClick={()=>{this.setState({isHiddenForm:true, isHiddenCreateButton:false,languageList:[1]})}}>Cancel</button>
                            </div>
                        </div>
                    </form>
                </div>
                <div className="container">
                    <table className="table table-hover">
                        <thead>
                            <tr>
                                <th>Country Name</th>
                                <th>Captial</th>
                                <th>Abbreviation</th>
                                <th>Area</th>
                                <th>Population</th>
                                <th>Currency</th>
                                <th>View</th>
                                <th>Update</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.countries.data.map((country)=>{
                                return(
                                    <tr key={country._id}>
                                        <td>{country.name}</td>
                                        <td>{country.captial}</td>
                                        <td>{country.abbr}</td>
                                        <td>{country.area}</td>
                                        <td>{country.population}</td>
                                        <td>{country.currency}</td>
                                        <td><a href={"/admin/country/+country._id"}><i className="glyphicon glyphicon-play-circle"></i></a></td>
                                        <td><a href={"/admin/country/update/+country._id"}><i className="glyphicon glyphicon-edit"></i></a></td>
                                        <td><a href="#" value={country._id} onClick={()=>this.countryDelete(country._id)}><i className="glyphicon glyphicon-remove-circle"></i></a></td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                </div>
                
            </div>
        )
    }
}
export default CountryMain;