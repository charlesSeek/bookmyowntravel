import React,{Component} from 'react';

class PlanAbout extends Component{
    componentWillMount(){
        console.log(this.props);
    }
    render(){
        return(
            <div className="container planabout">
                <p>{this.props.plan.about.about_description}</p>
                <h1 className="aboutvideo">See the Sites of {this.props.plan.name}</h1>
                <div className="row">
                    <div className="col-md-4 col-sm-6">
                        <iframe src={this.props.plan.about.about_video_1.video_link}></iframe>
                    </div>
                    <div className="col-md-4 col-sm-6">
                        <iframe src={this.props.plan.about.about_video_2.video_link}></iframe>
                    </div>
                    <div className="col-md-4 col-sm-6">
                        <iframe src={this.props.plan.about.about_video_3.video_link}></iframe>
                    </div>
                </div>
                <p><a href="#">More videos at Book My Own Travel You Tube Channel</a></p>
                <h1 className="aboutmap">Map of {this.props.plan.name}</h1>
                <iframe width="600" height="450" src="https://www.google.com/maps/embed/v1/place?key=AIzaSyDi6rDt-Lec1EPgqReSXZJhNlCrlAZNSmo&q=japan,japan"></iframe>
                <div className="row">
                    <div className="col-md-4 col-sm-6">
                        <h3>Tourism Office</h3>
                        <a href= {this.props.plan.about.tourism_office.tourism_office_website_link}>
                            <img src={this.props.plan.about.tourism_office.tourism_office_image_link}/>
                        </a>
                    </div>
                    <div className="col-md-4 col-sm-6">
                        <h3>Entry Requirements</h3>
                        <a href= {this.props.plan.about.entry_requirements.entry_requirements_website_link}>
                            <img src={this.props.plan.about.entry_requirements.entry_requirements_image_link}/>
                        </a>
                    </div>
                    <div className="col-md-4 col-sm-6">
                        <h3>Top Blogs</h3>
                        <a href= {this.props.plan.about.top_blogs.website_link}>
                            <img src={this.props.plan.about.top_blogs.image_link}/>
                        </a>
                    </div>
                </div>
            </div>
        )
    }
}
export default PlanAbout