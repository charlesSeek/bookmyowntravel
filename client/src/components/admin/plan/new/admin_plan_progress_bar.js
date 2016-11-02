import React,{Component} from 'react';

class AdminPlanProgressBar extends Component{
    componentWillMount(){
        const status = this.props.status;
        this.state={
            aboutBorderStyle:'',
            whenGoBorderStyle:'',
            seeDoBorderStyle:'',
            sightseeingBorderStyle:'',
            budgetCostBorderStyle:'',
            getThereBorderStyle:'',
            getAroundBorderStyle:'',
            stayBorderStyle:'',
            importantInfoBorderStyle:''
        }
        switch (status){
            case "about":
                this.setState({aboutBorderStyle:'border-bottom-green'});
                break;
            case "whenGo":
                this.setState({whenGoBorderStyle:'border-bottom-green'});
                break;
            case "seeDo":
                this.setState({seeDoBorderStyle:'border-bottom-green'});
                break;
            case "sightseeing":
                this.setState({sightseeingBorderStyle:'border-bottom-green'});
                break;
            case "budgetCost":
                this.setState({budgetCostBorderStyle:'border-bottom-green'});
                break;
            case "getThere":
                this.setState({getThereBorderStyle:'border-bottom-green'});
                break;
            case "getAround":
                this.setState({getAroundBorderStyle:'border-bottom-green'});
                break;
            case "stay":
                this.setState({stayBorderStyle:'border-bottom-green'});
                break;
            case "importantInfo":
                this.setState({importantInfoBorderStyle:'border-bottom-green'});
                break;
            default:
                break;
        }
    }
    render(){
        return(
            <div className="plan-progress-bar">
                <p className={this.state.aboutBorderStyle}>About</p>
                <p className={this.state.whenGoBorderStyle}>When to go</p>
                <p className={this.state.seeDoBorderStyle}>See and do</p>
                <p className={this.state.sightseeingBorderStyle}>Sightseeing</p>
                <p className={this.state.budgetCostBorderStyle}>Budget&Cost</p>
                <p className={this.state.getThereBorderStyle}>Get there</p>
                <p className={this.state.getAroundBorderStyle}>Get around</p>
                <p className={this.state.stayBorderStyle}>Stay</p>
                <p className={this.state.importantInfoBorderStyle}>Important info</p>
            </div>
        )
    }
}
export default AdminPlanProgressBar;