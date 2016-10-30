/*
    the component of plan where to stay info
*/
import React,{Component} from 'react';

class PlanWhereToStay extends Component{
    render(){
        return(
            <div className="container planwheretostay">
                <h2>Where to stay in {this.props.plan.name}</h2>
                <p>{this.props.plan.where_to_stay.description}</p>
                <div className="container">
                    <h4>Hotel Compare Websites</h4>
                    {this.props.plan.where_to_stay.hotel_compare_website_list.map((website)=>{
                        return(
                            <p key={website.website_link}>
                                <a href={website.website_link}>{website.text}</a>
                            </p>
                        )
                    })}
                </div>
                <div className="container">
                    <h4>Hotel Direct Websites</h4>
                    {this.props.plan.where_to_stay.hotel_direct_website_list.map((website)=>{
                        return(
                            <p key={website.website_link}>
                                <a href={website.website_link}>{website.text}</a>
                            </p>
                        )
                    })}
                </div>
                <div className="container">
                    <h4>Self Contained Apartments</h4>
                    {this.props.plan.where_to_stay.self_contained_apartment_website_list.map((website)=>{
                        return(
                            <p key={website.website_link}>
                                <a href={website.website_link}>{website.text}</a>
                            </p>
                        )
                    })}
                </div>
                <div className="container">
                    <h4>Villas, Resorts, Chalets, Lodges</h4>
                    {this.props.plan.where_to_stay.villas_website_list.map((website)=>{
                        return(
                            <p key={website.website_link}>
                                <a href={website.website_link}>{website.text}</a>
                            </p>
                        )
                    })}
                </div>
                <div className="container">
                    <h4>Bed and Breakfast, Guest Houses</h4>
                    {this.props.plan.where_to_stay.bed_website_list.map((website)=>{
                        return(
                            <p key={website.website_link}>
                                <a href={website.website_link}>{website.text}</a>
                            </p>
                        )
                    })}
                </div>
                <div className="container">
                    <h4>Holiday Houses</h4>
                    {this.props.plan.where_to_stay.holiday_houses_website_list.map((website)=>{
                        return(
                            <p key={website.website_link}>
                                <a href={website.website_link}>{website.text}</a>
                            </p>
                        )
                    })}
                </div>
                <div className="container">
                    <h4>House Swap, House Sit, House Share</h4>
                    {this.props.plan.where_to_stay.house_share_website_list.map((website)=>{
                        return(
                            <p key={website.website_link}>
                                <a href={website.website_link}>{website.text}</a>
                            </p>
                        )
                    })}
                </div>
                <div className="container">
                    <h4>Motorhome, Caravan, Tourist Parks</h4>
                    {this.props.plan.where_to_stay.motor_home_website_list.map((website)=>{
                        return(
                            <p key={website.website_link}>
                                <a href={website.website_link}>{website.text}</a>
                            </p>
                        )
                    })}
                </div>
                <div className="container">
                    <h4>Backpackers, Hostels</h4>
                    {this.props.plan.where_to_stay.backpacker_website_list.map((website)=>{
                        return(
                            <p key={website.website_link}>
                                <a href={website.website_link}>{website.text}</a>
                            </p>
                        )
                    })}
                </div>
                <div className="container">
                    <h4>Couch Surfing</h4>
                    {this.props.plan.where_to_stay.couch_surfing_website_list.map((website)=>{
                        return(
                            <p key={website.website_link}>
                                <a href={website.website_link}>{website.text}</a>
                            </p>
                        )
                    })}
                </div>
                <div className="container">
                    <h4>Unusual Places</h4>
                    {this.props.plan.where_to_stay.unusual_places_website_list.map((website)=>{
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