/* 
    the component of plan about info
*/
import React,{Component} from 'react';
import axios from 'axios'
import config from '../../config';

class PlanAbout extends Component{
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
        if (!this.state.plan.hasOwnProperty('about')){
            return(<div>No data</div>)
        }
        return(
            <div className="container planabout">
                <p>{this.state.plan.about.about_description}</p>
                <h1 className="aboutvideo">See the Sites of {this.state.plan.name}</h1>
                <div className="row">
                    <div className="col-md-4 col-sm-6">
                        <iframe src={this.state.plan.about.about_video_1.video_link} frameBorder="0" allowFullScreen></iframe>
                    </div>
                    <div className="col-md-4 col-sm-6">
                        <iframe src={this.state.plan.about.about_video_2.video_link} frameBorder="0" allowFullScreen></iframe>
                    </div>
                    <div className="col-md-4 col-sm-6">
                        <iframe src={this.state.plan.about.about_video_3.video_link} frameBorder="0" allowFullScreen></iframe>
                    </div>
                </div>
                <p><a href="#">More videos at Book My Own Travel You Tube Channel</a></p>
                <h1 className="aboutmap">Map of {this.state.plan.name}</h1>
                <iframe width="600" height="450" src={this.state.plan.about.country_map_link}></iframe>
                <div className="row">
                    <div className="col-md-4 col-sm-6">
                        <h3>Tourism Office</h3>
                        <a href= {this.state.plan.about.tourism_office.tourism_office_website_link}>
                            <img src={this.state.plan.about.tourism_office.tourism_office_image_link}/>
                        </a>
                    </div>
                    <div className="col-md-4 col-sm-6">
                        <h3>Entry Requirements</h3>
                        <a href= {this.state.plan.about.entry_requirements.entry_requirements_website_link}>
                            <img src={this.state.plan.about.entry_requirements.entry_requirements_image_link}/>
                        </a>
                    </div>
                    <div className="col-md-4 col-sm-6">
                        <h3>Top Blogs</h3>
                        <a href= {this.state.plan.about.top_blogs.website_link}>
                            <img src={this.state.plan.about.top_blogs.image_link}/>
                        </a>
                    </div>
                </div>
            </div>
        )
    }
}
export default PlanAbout