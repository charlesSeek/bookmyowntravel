import React,{Component,PropTypes} from 'react';
import axios from 'axios';
import config from '../../../../config';

class AdminPlanNewStayForm extends Component{
    static contextTypes = {
        router: PropTypes.object
    }
    componentWillMount(){
        this.state = {
            name:'',
            errMsg: '',
            hotel_compare_list:[1],
            hotel_direct_list:[1],
            self_contained_list:[1],
            villas_list:[1],
            bed_list:[1],
            holiday_houses_list:[1],
            house_share_list:[1],
            motor_home_list:[1],
            backpacker_list:[1],
            couch_surfing_list:[1],
            unusual_places_list:[1]
        }
    }
    componentDidMount(){
        const id = this.props.id;
        const host = config.API_SERVER;
        const url = 'http://'+host+':12000/plans/'+id;
        axios.get(url)
        .then(response=>{
            if (response.data.success){
                const name = response.data.data.name;
                this.setState({name});
            }else{
                this.setState({errMsg:response.data.errMsg});
                alert(response.data.errMsg);
            }
        })
        .catch(err=>{
            this.setState({errMsg:err.toString()});
            alert(err.toString());
        })
    }
    onNewHotelCompareWebsite(){
        let index = this.state.hotel_compare_list.length;
        index++;
        let hotel_compare_list = this.state.hotel_compare_list;
        hotel_compare_list.push(index);
        this.setState({hotel_compare_list});
    }
    onNewHotelDirectWebsite(){
        let index = this.state.hotel_direct_list.length;
        index++;
        let hotel_direct_list = this.state.hotel_direct_list;
        hotel_direct_list.push(index);
        this.setState({hotel_direct_list});
    }
    onNewSelfContainedWebsite(){
        let index = this.state.self_contained_list.length;
        index++;
        let self_contained_list = this.state.self_contained_list;
        self_contained_list.push(index);
        this.setState({self_contained_list});
    }
    onNewVillasWebsite(){
        let index = this.state.villas_list.length;
        index++;
        let villas_list = this.state.villas_list;
        villas_list.push(index);
        this.setState({villas_list});
    }
    onNewBedWebsite(){
        let index = this.state.bed_list.length;
        index++;
        let bed_list = this.state.bed_list;
        bed_list.push(index);
        this.setState({bed_list});
    }
    onNewHolidayHousesWebsite(){
        let index = this.state.holiday_houses_list.length;
        index++;
        let holiday_houses_list = this.state.holiday_houses_list;
        holiday_houses_list.push(index);
        this.setState({holiday_houses_list});
    }
    onNewHouseShareWebsite(){
        let index = this.state.house_share_list.length;
        index++;
        let house_share_list = this.state.house_share_list;
        house_share_list.push(index);
        this.setState({house_share_list});
    }
    onNewMotorHomeWebsite(){
        let index = this.state.motor_home_list.length;
        index++;
        let motor_home_list = this.state.motor_home_list;
        motor_home_list.push(index);
        this.setState({motor_home_list});
    }
    onNewBackpackerWebsite(){
        let index = this.state.backpacker_list.length;
        index++;
        let backpacker_list = this.state.backpacker_list;
        backpacker_list.push(index);
        this.setState({backpacker_list});
    }
    onNewCouchSurfingWebsite(){
        let index = this.state.couch_surfing_list.length;
        index++;
        let couch_surfing_list = this.state.couch_surfing_list;
        couch_surfing_list.push(index);
        this.setState({couch_surfing_list});
    }
    onNewUnusualPlacesWebsite(){
        let index = this.state.unusual_places_list.length;
        index++;
        let unusual_places_list = this.state.unusual_places_list;
        unusual_places_list.push(index);
        this.setState({unusual_places_list});     
    }
    onNewStaySubmit(event){
        event.preventDefault();
        //description
        const description = this.refs.description.value;
        
        //hotel compare website
        let hotel_compare_website_list = [];
        for (let i=1;i<=this.state.hotel_compare_list.length;i++){
            const hotel_compare_website_text_name = "hotel_compare_website_text_"+i;
            const hotel_compare_website_text = this.refs[hotel_compare_website_text_name].value;
            const hotel_compare_website_link_name = "hotel_compare_website_link_"+i;
            const hotel_compare_website_link = this.refs[hotel_compare_website_link_name].value;
            hotel_compare_website_list.push({
                text: hotel_compare_website_text,
                website_link: hotel_compare_website_link
            })
        }
        
        //hotel direct website
        let hotel_direct_website_list = [];
        for (let i=1;i<=this.state.hotel_direct_list.length;i++){
            const hotel_direct_website_text_name = "hotel_direct_website_text_"+i;
            const hotel_direct_website_text = this.refs[hotel_direct_website_text_name].value;
            const hotel_direct_website_link_name = "hotel_direct_website_link_"+i;
            const hotel_direct_website_link = this.refs[hotel_direct_website_link_name].value;
            hotel_direct_website_list.push({
                text: hotel_direct_website_text,
                website_link: hotel_direct_website_link
            })
        }
        
        //slef contained website list
        let self_contained_apartment_website_list = [];
        for (let i=1;i<=this.state.self_contained_list.length;i++){
            const self_contained_website_text_name = "self_contained_website_text_"+i;
            const self_contained_website_text = this.refs[self_contained_website_text_name].value;
            const self_contained_website_link_name = "self_contained_website_link_"+i;
            const self_contained_website_link = this.refs[self_contained_website_link_name].value;
            self_contained_apartment_website_list.push({
                text: self_contained_website_text,
                website_link: self_contained_website_link
            })
        }
        
        //villas website
        let villas_website_list = [];
        for (let i=1;i<=this.state.villas_list.length;i++){
            const villas_website_text_name = "villas_website_text_"+i;
            const villas_website_text = this.refs[villas_website_text_name].value;
            const villas_website_link_name = "villas_website_link_"+i;
            const villas_website_link = this.refs[villas_website_link_name].value;
            villas_website_list.push({
                text: villas_website_text,
                website_link: villas_website_link
            })
        }
        
        //bed and breakfast guest house
        let bed_website_list = [];
        for (let i=1;i<=this.state.bed_list.length;i++){
            const bed_website_text_name = "bed_website_text_"+i;
            const bed_website_text = this.refs[bed_website_text_name].value;
            const bed_website_link_name = "bed_website_link_"+i;
            const bed_website_link = this.refs[bed_website_link_name].value;
            bed_website_list.push({
                text: bed_website_text,
                website_link: bed_website_link
            })
        }
        
        //holiday houses website
        let holiday_houses_website_list = [];
        for (let i=1;i<=this.state.holiday_houses_list.length;i++){
            const holiday_houses_website_text_name = "holiday_houses_website_text_"+i;
            const holiday_houses_website_text = this.refs[holiday_houses_website_text_name].value;
            const holiday_houses_website_link_name = "holiday_houses_website_link_"+i;
            const holiday_houses_website_link = this.refs[holiday_houses_website_link_name].value;
            holiday_houses_website_list.push({
                text: holiday_houses_website_text,
                website_link: holiday_houses_website_link
            })
        }
        
        //house share website
        let house_share_website_list = [];
        for (let i=1;i<=this.state.house_share_list.length;i++){
            const house_share_website_text_name = "house_share_website_text_"+i;
            const house_share_website_text = this.refs[house_share_website_text_name].value;
            const house_share_website_link_name = "house_share_website_link_"+i;
            const house_share_website_link = this.refs[house_share_website_link_name].value;
            house_share_website_list.push({
                text: house_share_website_text,
                website_link: house_share_website_link
            })
        }
        
        //motor home website
        let motor_home_website_list = [];
        for (let i=1;i<=this.state.house_share_list.length;i++){
            const motor_home_website_text_name = "motor_home_website_text_"+i;
            const motor_home_website_text = this.refs[motor_home_website_text_name].value;
            const motor_home_website_link_name = "motor_home_website_link_"+i;
            const motor_home_website_link = this.refs[motor_home_website_link_name].value;
            motor_home_website_list.push({
                text: motor_home_website_text,
                website_link: motor_home_website_link
            })
        }
        
        //backpacker website
        let backpacker_website_list = [];
        for (let i=1;i<=this.state.backpacker_list.length;i++){
            const backpacker_website_text_name = "backpacker_website_text_"+i;
            const backpacker_website_text = this.refs[backpacker_website_text_name].value;
            const backpacker_website_link_name = "backpacker_website_link_"+i;
            const backpacker_website_link = this.refs[backpacker_website_link_name].value;
            backpacker_website_list.push({
                text: backpacker_website_text,
                website_link: backpacker_website_link
            })
        }
        
        //couch surfing website
        let couch_surfing_website_list = [];
        for (let i=1;i<=this.state.couch_surfing_list.length;i++){
            const couch_surfing_website_text_name = "couch_surfing_website_text_"+i;
            const couch_surfing_website_text = this.refs[couch_surfing_website_text_name].value;
            const couch_surfing_website_link_name = "couch_surfing_website_link_"+i;
            const couch_surfing_website_link = this.refs[couch_surfing_website_link_name].value;
            couch_surfing_website_list.push({
                text: couch_surfing_website_text,
                website_link: couch_surfing_website_link
            })
        }
        
        //unusual places website
        let unusual_places_website_list = [];
        for (let i=1;i<=this.state.unusual_places_list.length;i++){
            const unusual_places_website_text_name = "unusual_places_website_text_"+i;
            const unusual_places_website_text = this.refs[unusual_places_website_text_name].value;
            const unusual_places_website_link_name = "unusual_places_website_link_"+i;
            const unusual_places_website_link = this.refs[unusual_places_website_link_name].value;
            unusual_places_website_list.push({
                text: unusual_places_website_text,
                website_link: unusual_places_website_link
            })
        }
        
        const where_to_stay = {description,hotel_compare_website_list,hotel_direct_website_list,self_contained_apartment_website_list,villas_website_list,bed_website_list,holiday_houses_website_list,house_share_website_list,motor_home_website_list,backpacker_website_list,couch_surfing_website_list,unusual_places_website_list};
        console.log(where_to_stay);
        const id = this.props.id;
        const host = config.API_SERVER;
        const url = 'http://'+host+':12000/plans/'+id;
        axios.put(url,{where_to_stay})
        .then(response=>{
            if (response.data.success){
                this.context.router.push("/admin/plan/new/importantInfo/"+id);
            }else{
                this.setState({errMsg:response.data.errMsg});
                alert(response.data.errMsg);
            }
        })
        .catch(err=>{
            this.setState({errMsg:err.toString()});
            alert(err.toString());
        })
    }
    render(){
        if (this.state.errMsg!=''){
            return(
                <div>{this.state.errMsg}</div>
            )
        }
        if (this.state.name==''){
            return (
                <div>Loading data...</div>
            )
        }
        return(
            <div className="container plan-stay">
                <form className="form-horizontal" onSubmit={this.onNewStaySubmit.bind(this)}>
            
                    {/*description*/}
                    <div className="form-group">
                        <div className="col-md-4">
                            <label className="control-label">{this.state.name} stay description</label>
                        </div>
                        <div className="col-md-8">
                            <input type="text" className="form-control" ref="description" placeholder="please input where to stay description" required/>
                        </div>
                    </div>
            
                    {/*hotel compare website list*/}
                    <div className="panel panel-default">
                        <div className="panel-heading">
                            {this.state.name} hotel compare website
                        </div>
                        <div className="panel-body">
                            {this.state.hotel_compare_list.map(num=>{
                            return (
                                <div className="panel panel-default" key={"hotel_compare_website_"+num}>
                                    <div className="panel-heading">
                                        hotel compare website {num}
                                    </div>
                                    <div className="panel-body">
                                        <div className="form-group">
                                            <div className="col-md-4">
                                                <label className="control-label">text</label>
                                            </div>
                                            <div className="col-md-8">
                                                <input type="text" className="form-control" ref={"hotel_compare_website_text_"+num} placeholder="please input the hotel compare website name" required/>
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <div className="col-md-4">
                                                <label className="control-label">website link</label>
                                            </div>
                                            <div className="col-md-8">
                                                <input type="text" className="form-control" ref={"hotel_compare_website_link_"+num} placeholder="please input the hotel compare website link" required/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                            })}
                            <div className="col-md-12">
                                <button className="btn btn-success btn-block" onClick={this.onNewHotelCompareWebsite.bind(this)}>Add a New Hotel Compare Website</button>
                            </div>
                        </div>
                    </div>
                    
                    {/*hotel direct website list*/}
                    <div className="panel panel-default">
                        <div className="panel-heading">
                            {this.state.name} hotel direct website
                        </div>
                        <div className="panel-body">
                            {this.state.hotel_direct_list.map(num=>{
                            return (
                                <div className="panel panel-default" key={"hotel_direct_website_"+num}>
                                    <div className="panel-heading">
                                        hotel direct website {num}
                                    </div>
                                    <div className="panel-body">
                                        <div className="form-group">
                                            <div className="col-md-4">
                                                <label className="control-label">text</label>
                                            </div>
                                            <div className="col-md-8">
                                                <input type="text" className="form-control" ref={"hotel_direct_website_text_"+num} placeholder="please input the hotel direct website name" required/>
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <div className="col-md-4">
                                                <label className="control-label">website link</label>
                                            </div>
                                            <div className="col-md-8">
                                                <input type="text" className="form-control" ref={"hotel_direct_website_link_"+num} placeholder="please input the hotel direct website link" required/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                            })}
                            <div className="col-md-12">
                                <button className="btn btn-success btn-block" onClick={this.onNewHotelDirectWebsite.bind(this)}>Add a New Hotel direct Website</button>
                            </div>
                        </div>
                    </div>
                                
                    {/*self_contained apartment website*/}
                    <div className="panel panel-default">
                        <div className="panel-heading">
                            {this.state.name} self contained apartment website
                        </div>
                        <div className="panel-body">
                            {this.state.self_contained_list.map(num=>{
                            return (
                                <div className="panel panel-default" key={"self_contained_website_"+num}>
                                    <div className="panel-heading">
                                        self contained apratment website {num}
                                    </div>
                                    <div className="panel-body">
                                        <div className="form-group">
                                            <div className="col-md-4">
                                                <label className="control-label">text</label>
                                            </div>
                                            <div className="col-md-8">
                                                <input type="text" className="form-control" ref={"self_contained_website_text_"+num} placeholder="please input the self contained apartment website name" required/>
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <div className="col-md-4">
                                                <label className="control-label">website link</label>
                                            </div>
                                            <div className="col-md-8">
                                                <input type="text" className="form-control" ref={"self_contained_website_link_"+num} placeholder="please input the self contained apartment website link" required/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                            })}
                            <div className="col-md-12">
                                <button className="btn btn-success btn-block" onClick={this.onNewSelfContainedWebsite.bind(this)}>Add a New self contained apartment Website</button>
                            </div>
                        </div>
                    </div>
                                
                    {/*villas website */}
                    <div className="panel panel-default">
                        <div className="panel-heading">
                            {this.state.name} villas website
                        </div>
                        <div className="panel-body">
                            {this.state.villas_list.map(num=>{
                            return (
                                <div className="panel panel-default" key={"villas_website_"+num}>
                                    <div className="panel-heading">
                                        villas website {num}
                                    </div>
                                    <div className="panel-body">
                                        <div className="form-group">
                                            <div className="col-md-4">
                                                <label className="control-label">text</label>
                                            </div>
                                            <div className="col-md-8">
                                                <input type="text" className="form-control" ref={"villas_website_text_"+num} placeholder="please input the villas website name" required/>
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <div className="col-md-4">
                                                <label className="control-label">website link</label>
                                            </div>
                                            <div className="col-md-8">
                                                <input type="text" className="form-control" ref={"villas_website_link_"+num} placeholder="please input the villas website link" required/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                            })}
                            <div className="col-md-12">
                                <button className="btn btn-success btn-block" onClick={this.onNewVillasWebsite.bind(this)}>Add a New Villas Website</button>
                            </div>
                        </div>
                    </div>
                                
                    {/*bed website */}
                    <div className="panel panel-default">
                        <div className="panel-heading">
                            {this.state.name} bed and breakfast guest house website
                        </div>
                        <div className="panel-body">
                            {this.state.bed_list.map(num=>{
                            return (
                                <div className="panel panel-default" key={"bed_website_"+num}>
                                    <div className="panel-heading">
                                        bed and breakfast guest house website {num}
                                    </div>
                                    <div className="panel-body">
                                        <div className="form-group">
                                            <div className="col-md-4">
                                                <label className="control-label">text</label>
                                            </div>
                                            <div className="col-md-8">
                                                <input type="text" className="form-control" ref={"bed_website_text_"+num} placeholder="please input the bed and breakfast guest house website name" required/>
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <div className="col-md-4">
                                                <label className="control-label">website link</label>
                                            </div>
                                            <div className="col-md-8">
                                                <input type="text" className="form-control" ref={"bed_website_link_"+num} placeholder="please input the bed and breakfast guest house website link" required/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                            })}
                            <div className="col-md-12">
                                <button className="btn btn-success btn-block" onClick={this.onNewBedWebsite.bind(this)}>Add a New Bed and Breakfast Guest House Website</button>
                            </div>
                        </div>
                    </div>
                    
                    {/*holiday houses website*/}
                    <div className="panel panel-default">
                        <div className="panel-heading">
                            {this.state.name} holiday houses website
                        </div>
                        <div className="panel-body">
                            {this.state.holiday_houses_list.map(num=>{
                            return (
                                <div className="panel panel-default" key={"holiday_houses_website_"+num}>
                                    <div className="panel-heading">
                                        holiday houses website {num}
                                    </div>
                                    <div className="panel-body">
                                        <div className="form-group">
                                            <div className="col-md-4">
                                                <label className="control-label">text</label>
                                            </div>
                                            <div className="col-md-8">
                                                <input type="text" className="form-control" ref={"holiday_houses_website_text_"+num} placeholder="please input the holiday houses website name" required/>
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <div className="col-md-4">
                                                <label className="control-label">website link</label>
                                            </div>
                                            <div className="col-md-8">
                                                <input type="text" className="form-control" ref={"holiday_houses_website_link_"+num} placeholder="please input the holiday houses website link" required/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                            })}
                            <div className="col-md-12">
                                <button className="btn btn-success btn-block" onClick={this.onNewHolidayHousesWebsite.bind(this)}>Add a New Holiday Houses Website</button>
                            </div>
                        </div>
                    </div>
                                
                    {/*house share website*/}
                    <div className="panel panel-default">
                        <div className="panel-heading">
                            {this.state.name} house share website
                        </div>
                        <div className="panel-body">
                            {this.state.house_share_list.map(num=>{
                            return (
                                <div className="panel panel-default" key={"house_share_website_"+num}>
                                    <div className="panel-heading">
                                        house share website {num}
                                    </div>
                                    <div className="panel-body">
                                        <div className="form-group">
                                            <div className="col-md-4">
                                                <label className="control-label">text</label>
                                            </div>
                                            <div className="col-md-8">
                                                <input type="text" className="form-control" ref={"house_share_website_text_"+num} placeholder="please input the house share website name" required/>
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <div className="col-md-4">
                                                <label className="control-label">website link</label>
                                            </div>
                                            <div className="col-md-8">
                                                <input type="text" className="form-control" ref={"house_share_website_link_"+num} placeholder="please input the house share website link" required/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                            })}
                            <div className="col-md-12">
                                <button className="btn btn-success btn-block" onClick={this.onNewHouseShareWebsite.bind(this)}>Add a New House Share Website</button>
                            </div>
                        </div>
                    </div>
                                
                    {/*motor home website*/}
                    <div className="panel panel-default">
                        <div className="panel-heading">
                            {this.state.name} motor home website
                        </div>
                        <div className="panel-body">
                            {this.state.motor_home_list.map(num=>{
                            return (
                                <div className="panel panel-default" key={"motor_home_website_"+num}>
                                    <div className="panel-heading">
                                        motor home website {num}
                                    </div>
                                    <div className="panel-body">
                                        <div className="form-group">
                                            <div className="col-md-4">
                                                <label className="control-label">text</label>
                                            </div>
                                            <div className="col-md-8">
                                                <input type="text" className="form-control" ref={"motor_home_website_text_"+num} placeholder="please input the motor home website name" required/>
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <div className="col-md-4">
                                                <label className="control-label">website link</label>
                                            </div>
                                            <div className="col-md-8">
                                                <input type="text" className="form-control" ref={"motor_home_website_link_"+num} placeholder="please input the motor home website link" required/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                            })}
                            <div className="col-md-12">
                                <button className="btn btn-success btn-block" onClick={this.onNewMotorHomeWebsite.bind(this)}>Add a New Motor Home Website</button>
                            </div>
                        </div>
                    </div>
                    
                    {/*backpacker website*/}
                    <div className="panel panel-default">
                        <div className="panel-heading">
                            {this.state.name} backpacker website
                        </div>
                        <div className="panel-body">
                            {this.state.backpacker_list.map(num=>{
                            return (
                                <div className="panel panel-default" key={"backpacker_website_"+num}>
                                    <div className="panel-heading">
                                        backpacker website {num}
                                    </div>
                                    <div className="panel-body">
                                        <div className="form-group">
                                            <div className="col-md-4">
                                                <label className="control-label">text</label>
                                            </div>
                                            <div className="col-md-8">
                                                <input type="text" className="form-control" ref={"backpacker_website_text_"+num} placeholder="please input the backpacker website name" required/>
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <div className="col-md-4">
                                                <label className="control-label">website link</label>
                                            </div>
                                            <div className="col-md-8">
                                                <input type="text" className="form-control" ref={"backpacker_website_link_"+num} placeholder="please input the backpacker website link" required/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                            })}
                            <div className="col-md-12">
                                <button className="btn btn-success btn-block" onClick={this.onNewBackpackerWebsite.bind(this)}>Add a New backpacker Website</button>
                            </div>
                        </div>
                    </div>
                                
                    {/*couch surfing website*/}
                    <div className="panel panel-default">
                        <div className="panel-heading">
                            {this.state.name} couch surfing website
                        </div>
                        <div className="panel-body">
                            {this.state.couch_surfing_list.map(num=>{
                            return (
                                <div className="panel panel-default" key={"couch_surfing_website_"+num}>
                                    <div className="panel-heading">
                                        couch surfing website {num}
                                    </div>
                                    <div className="panel-body">
                                        <div className="form-group">
                                            <div className="col-md-4">
                                                <label className="control-label">text</label>
                                            </div>
                                            <div className="col-md-8">
                                                <input type="text" className="form-control" ref={"couch_surfing_website_text_"+num} placeholder="please input the couch surfing website name" required/>
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <div className="col-md-4">
                                                <label className="control-label">website link</label>
                                            </div>
                                            <div className="col-md-8">
                                                <input type="text" className="form-control" ref={"couch_surfing_website_link_"+num} placeholder="please input the couch surfing website link" required/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                            })}
                            <div className="col-md-12">
                                <button className="btn btn-success btn-block" onClick={this.onNewCouchSurfingWebsite.bind(this)}>Add a New Couch Surfing Website</button>
                            </div>
                        </div>
                    </div>
                                
                    {/*unusual places website*/}
                    <div className="panel panel-default">
                        <div className="panel-heading">
                            {this.state.name} unusual places website
                        </div>
                        <div className="panel-body">
                            {this.state.unusual_places_list.map(num=>{
                            return (
                                <div className="panel panel-default" key={"unusual_places_website_"+num}>
                                    <div className="panel-heading">
                                        unusual places website {num}
                                    </div>
                                    <div className="panel-body">
                                        <div className="form-group">
                                            <div className="col-md-4">
                                                <label className="control-label">text</label>
                                            </div>
                                            <div className="col-md-8">
                                                <input type="text" className="form-control" ref={"unusual_places_website_text_"+num} placeholder="please input the unusual places website name" required/>
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <div className="col-md-4">
                                                <label className="control-label">website link</label>
                                            </div>
                                            <div className="col-md-8">
                                                <input type="text" className="form-control" ref={"unusual_places_website_link_"+num} placeholder="please input the unusual places website link" required/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                            })}
                            <div className="col-md-12">
                                <button className="btn btn-success btn-block" onClick={this.onNewUnusualPlacesWebsite.bind(this)}>Add a New Unusual Places Website</button>
                            </div>
                        </div>
                    </div>
                    <div className="form-group">
                        <div className="col-md-8">
                            <button type="submit" className="btn btn-success">Save and Continued</button>&nbsp;&nbsp;
                            <button type="reset" className="btn btn-danger">Cancel</button>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}
export default AdminPlanNewStayForm;