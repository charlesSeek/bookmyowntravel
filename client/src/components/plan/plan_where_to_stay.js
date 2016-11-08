/*
    the component of plan where to stay info
*/
import React,{Component} from 'react';
import axios from 'axios';
import config from '../../config';

class PlanWhereToStay extends Component{
    componentWillMount(){
        this.state = {
            plan:undefined,
            errMsg:''
        }
        
    }
    componentDidMount(){
        const id = this.props.id;
        const host = config.API_SERVER;
        const url = 'http://'+host+':12000/plans/'+id;
        axios.get(url)
        .then(response=>{
            if (response.data.success){
                const plan = response.data.data;
                this.setState({plan})
            }else{
                const errMsg = response.data.errMsg;
                this.setState({errMsg});
                alert(errMsg);
                
            }
        })
        .catch(err=>{
            this.setState({errMsg:err.toString()});
            alert(err.toString());
        })
    }
    render(){
        if (this.state.plan==undefined){
            return(<div>Loading data...</div>)
        }
        if (!this.state.plan.hasOwnProperty('where_to_stay')){
            return(<div>No data</div>)
        }
        return(
            <div className="container planwheretostay">
                <h2>Where to stay in {this.state.plan.name}</h2>
                <p>{this.state.plan.where_to_stay.description}</p>
                <div className="container">
                    <h4>Hotel Compare Websites</h4>
                    {this.state.plan.where_to_stay.hotel_compare_website_list.map((website)=>{
                        return(
                            <p key={website.website_link}>
                                <a href={website.website_link}>{website.text}</a>
                            </p>
                        )
                    })}
                </div>
                <div className="container">
                    <h4>Hotel Direct Websites</h4>
                    {this.state.plan.where_to_stay.hotel_direct_website_list.map((website)=>{
                        return(
                            <p key={website.website_link}>
                                <a href={website.website_link}>{website.text}</a>
                            </p>
                        )
                    })}
                </div>
                <div className="container">
                    <h4>Self Contained Apartments</h4>
                    {this.state.plan.where_to_stay.self_contained_apartment_website_list.map((website)=>{
                        return(
                            <p key={website.website_link}>
                                <a href={website.website_link}>{website.text}</a>
                            </p>
                        )
                    })}
                </div>
                <div className="container">
                    <h4>Villas, Resorts, Chalets, Lodges</h4>
                    {this.state.plan.where_to_stay.villas_website_list.map((website)=>{
                        return(
                            <p key={website.website_link}>
                                <a href={website.website_link}>{website.text}</a>
                            </p>
                        )
                    })}
                </div>
                <div className="container">
                    <h4>Bed and Breakfast, Guest Houses</h4>
                    {this.state.plan.where_to_stay.bed_website_list.map((website)=>{
                        return(
                            <p key={website.website_link}>
                                <a href={website.website_link}>{website.text}</a>
                            </p>
                        )
                    })}
                </div>
                <div className="container">
                    <h4>Holiday Houses</h4>
                    {this.state.plan.where_to_stay.holiday_houses_website_list.map((website)=>{
                        return(
                            <p key={website.website_link}>
                                <a href={website.website_link}>{website.text}</a>
                            </p>
                        )
                    })}
                </div>
                <div className="container">
                    <h4>House Swap, House Sit, House Share</h4>
                    {this.state.plan.where_to_stay.house_share_website_list.map((website)=>{
                        return(
                            <p key={website.website_link}>
                                <a href={website.website_link}>{website.text}</a>
                            </p>
                        )
                    })}
                </div>
                <div className="container">
                    <h4>Motorhome, Caravan, Tourist Parks</h4>
                    {this.state.plan.where_to_stay.motor_home_website_list.map((website)=>{
                        return(
                            <p key={website.website_link}>
                                <a href={website.website_link}>{website.text}</a>
                            </p>
                        )
                    })}
                </div>
                <div className="container">
                    <h4>Backpackers, Hostels</h4>
                    {this.state.plan.where_to_stay.backpacker_website_list.map((website)=>{
                        return(
                            <p key={website.website_link}>
                                <a href={website.website_link}>{website.text}</a>
                            </p>
                        )
                    })}
                </div>
                <div className="container">
                    <h4>Couch Surfing</h4>
                    {this.state.plan.where_to_stay.couch_surfing_website_list.map((website)=>{
                        return(
                            <p key={website.website_link}>
                                <a href={website.website_link}>{website.text}</a>
                            </p>
                        )
                    })}
                </div>
                <div className="container">
                    <h4>Unusual Places</h4>
                    {this.state.plan.where_to_stay.unusual_places_website_list.map((website)=>{
                        return(
                            <p key={website.website_link}>
                                <a href={website.website_link}>{website.text}</a>
                            </p>
                        )
                    })}
                </div>
            </div>
        )
    }
}
export default PlanWhereToStay;