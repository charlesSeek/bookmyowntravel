import React,{Component} from 'react';
import Header from '../header';
import PlanAbout from './plan_about';
import PlanWhenToGo from './plan_when_to_go';
import PlanSeeAndDo from './plan_see_and_do';
import PlanSightseeing from './plan_sightseeing';
import axios from 'axios'

class PlanDetail extends Component{
    componentDidMount(){
        var id = this.props.params.id;
        axios.get("http://localhost:12000/plans/"+id)
        .then((response)=>{
            this.setState({plan:response.data});
        })
    }
    componentWillMount(){
        this.state ={
            aboutNav:"active",
            whenToGoNav:"none",
            seeAndDoNav:"none",
            sightseeingNav:"none",
            budgetCostNav:"none",
            goThereNav:"none",
            goAroundNav:"none",
            stayNav:"none",
            importantInfoNav:"none",
            isHiddenAbout:false,
            isHiddenWhenToGo:true,
            isHiddenSeeAndDO:true,
            isHiddenSightseeing:true,
            isHiddenBudgetCost:true,
            isHiddenGoThere:true,
            isHiddenGoAround:true,
            isHiddenStay:true,
            isHiddenImportantInfo:true
        }
    }
    aboutNavClick(){
        console.log("about");
        this.setState({
            aboutNav:"active",
            whenToGoNav:"none",
            seeAndDoNav:"none",
            sightseeingNav:"none",
            budgetCostNav:"none",
            goThereNav:"none",
            goAroundNav:"none",
            stayNav:"none",
            importantInfoNav:"none",
            isHiddenAbout:false,
            isHiddenWhenToGo:true,
            isHiddenSeeAndDO:true,
            isHiddenSightseeing:true,
            isHiddenBudgetCost:true,
            isHiddenGoThere:true,
            isHiddenGoAround:true,
            isHiddenStay:true,
            isHiddenImportantInfo:true
        });
    }
    whenToGoNavClick(){
        console.log("when to go");
        this.setState({
            aboutNav:"none",
            whenToGoNav:"active",
            seeAndDoNav:"none",
            sightseeingNav:"none",
            budgetCostNav:"none",
            goThereNav:"none",
            goAroundNav:"none",
            stayNav:"none",
            importantInfoNav:"none",
            isHiddenAbout:true,
            isHiddenWhenToGo:false,
            isHiddenSeeAndDO:true,
            isHiddenSightseeing:true,
            isHiddenBudgetCost:true,
            isHiddenGoThere:true,
            isHiddenGoAround:true,
            isHiddenStay:true,
            isHiddenImportantInfo:true
        });
    }
    seeAndDoNavClick(){
        console.log("see and do");
        this.setState({
            aboutNav:"none",
            whenToGoNav:"none",
            seeAndDoNav:"active",
            sightseeingNav:"none",
            budgetCostNav:"none",
            goThereNav:"none",
            goAroundNav:"none",
            stayNav:"none",
            importantInfoNav:"none",
            isHiddenAbout:true,
            isHiddenWhenToGo:true,
            isHiddenSeeAndDO:false,
            isHiddenSightseeing:true,
            isHiddenBudgetCost:true,
            isHiddenGoThere:true,
            isHiddenGoAround:true,
            isHiddenStay:true,
            isHiddenImportantInfo:true
        });
    }
    sightseeingNavClick(){
        this.setState({
            aboutNav:"none",
            whenToGoNav:"none",
            seeAndDoNav:"none",
            sightseeingNav:"active",
            budgetCostNav:"none",
            goThereNav:"none",
            goAroundNav:"none",
            stayNav:"none",
            importantInfoNav:"none",
            isHiddenAbout:true,
            isHiddenWhenToGo:true,
            isHiddenSeeAndDO:true,
            isHiddenSightseeing:false,
            isHiddenBudgetCost:true,
            isHiddenGoThere:true,
            isHiddenGoAround:true,
            isHiddenStay:true,
            isHiddenImportantInfo:true
        });
    }
    budgetCostNavClick(){
        this.setState({
            aboutNav:"none",
            whenToGoNav:"none",
            seeAndDoNav:"none",
            sightseeingNav:"none",
            budgetCostNav:"active",
            goThereNav:"none",
            goAroundNav:"none",
            stayNav:"none",
            importantInfoNav:"none",
            isHiddenAbout:true,
            isHiddenWhenToGo:true,
            isHiddenSeeAndDO:true,
            isHiddenSightseeing:true,
            isHiddenBudgetCost:false,
            isHiddenGoThere:true,
            isHiddenGoAround:true,
            isHiddenStay:true,
            isHiddenImportantInfo:true
        });
    }
    goThereNavClick(){
        this.setState({
            aboutNav:"none",
            whenToGoNav:"none",
            seeAndDoNav:"none",
            sightseeingNav:"none",
            budgetCostNav:"none",
            goThereNav:"active",
            goAroundNav:"none",
            stayNav:"none",
            importantInfoNav:"none",
            isHiddenAbout:true,
            isHiddenWhenToGo:true,
            isHiddenSeeAndDO:true,
            isHiddenSightseeing:true,
            isHiddenBudgetCost:true,
            isHiddenGoThere:false,
            isHiddenGoAround:true,
            isHiddenStay:true,
            isHiddenImportantInfo:true
        });
    }
    goAroundNavClick(){
        this.setState({
            aboutNav:"none",
            whenToGoNav:"none",
            seeAndDoNav:"none",
            sightseeingNav:"none",
            budgetCostNav:"none",
            goThereNav:"none",
            goAroundNav:"active",
            stayNav:"none",
            importantInfoNav:"none",
            isHiddenAbout:true,
            isHiddenWhenToGo:true,
            isHiddenSeeAndDO:true,
            isHiddenSightseeing:true,
            isHiddenBudgetCost:true,
            isHiddenGoThere:true,
            isHiddenGoAround:false,
            isHiddenStay:true,
            isHiddenImportantInfo:true
        });
    }
    stayNavClick(){
        this.setState({
            aboutNav:"none",
            whenToGoNav:"none",
            seeAndDoNav:"none",
            sightseeingNav:"none",
            budgetCostNav:"none",
            goThereNav:"none",
            goAroundNav:"none",
            stayNav:"active",
            importantInfoNav:"none",
            isHiddenAbout:true,
            isHiddenWhenToGo:true,
            isHiddenSeeAndDO:true,
            isHiddenSightseeing:true,
            isHiddenBudgetCost:true,
            isHiddenGoThere:true,
            isHiddenGoAround:true,
            isHiddenStay:false,
            isHiddenImportantInfo:true
        });
    }
    importantInfoNavClick(){
        this.setState({
            aboutNav:"none",
            whenToGoNav:"none",
            seeAndDoNav:"none",
            sightseeingNav:"none",
            budgetCostNav:"none",
            goThereNav:"none",
            goAroundNav:"none",
            stayNav:"none",
            importantInfoNav:"active",
            isHiddenAbout:true,
            isHiddenWhenToGo:true,
            isHiddenSeeAndDO:true,
            isHiddenSightseeing:true,
            isHiddenBudgetCost:true,
            isHiddenGoThere:true,
            isHiddenGoAround:true,
            isHiddenStay:true,
            isHiddenImportantInfo:false
        });
    }
    render(){
        if (this.state.plan==undefined){
            return(
                <div>Loading data...</div>
            )
        } 
        return(
            <div className="container">
                <Header/>
                <div className="plandetail">
                    <div className="container detail-nav">
                        <ul className="nav nav-tabs">
                            <li role="presentation" className={this.state.aboutNav} ><a href="#" onClick={this.aboutNavClick.bind(this)}>About</a></li>
                            <li role="presentation" className={this.state.whenToGoNav}><a href="#" onClick={this.whenToGoNavClick.bind(this)}>When to go</a></li>
                            <li role="presentation" className={this.state.seeAndDoNav}><a href="#" onClick={this.seeAndDoNavClick.bind(this)}>See and do</a></li>
                            <li role="presentation" className={this.state.sightseeingNav}><a href="#" onClick={this.sightseeingNavClick.bind(this)}>Sightseeing</a></li>
                            <li role="presentation" className={this.state.budgetCostNav}><a href="#" onClick={this.budgetCostNavClick.bind(this)}>budget Cost</a></li>
                            <li role="presentation" className={this.state.goThereNav}><a href="#" onClick={this.goThereNavClick.bind(this)}>Go there</a></li>
                            <li role="presentation" className={this.state.goAroundNav}><a href="#" onClick={this.goAroundNavClick.bind(this)}>Go around</a></li>
                            <li role="presentation" className={this.state.stayNav}><a href="#" onClick={this.stayNavClick.bind(this)}>Stay</a></li>
                            <li role="presentation" className={this.state.importantInfoNav}><a href="#" onClick={this.importantInfoNavClick.bind(this)}>Important info</a></li>
                        </ul>
                    </div>
                    <div className="container plancontent">
                        <div className={this.state.isHiddenAbout?'hidden':''}>
                            <PlanAbout plan={this.state.plan.data} />
                        </div>
                        <div className={this.state.isHiddenWhenToGo?'hidden':''}>
                            <PlanWhenToGo plan={this.state.plan.data}/>
                        </div>
                        <div className={this.state.isHiddenSeeAndDO?'hidden':''}>
                            <PlanSeeAndDo plan={this.state.plan.data}/>
                        </div>
                        <div className={this.state.isHiddenSightseeing?'hidden':''}>
                            <PlanSightseeing plan={this.state.plan.data}/>
                        </div>
                        
                    </div>
                </div>
            </div>
        )
    }
}
export default PlanDetail;