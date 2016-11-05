/*
    the component of plan detail information
    states: *Nav(the navbar active state)
            isHidden*(the state whether hidden)
*/

import React,{Component} from 'react';
import Header from '../includes/header';
import PlanAbout from './plan_about';
import PlanWhenToGo from './plan_when_to_go';
import PlanSeeAndDo from './plan_see_and_do';
import PlanSightseeing from './plan_sightseeing';
import PlanBudgetCost from './plan_budget_cost';
import PlanHowGetThere from './plan_how_get_there';
import PlanHowGetAround from './plan_how_get_around';
import PlanWhereToStay from './plan_where_to_stay';
import PlanImportantInfo from './plan_important_info';
import axios from 'axios'

class PlanDetail extends Component{
    componentDidMount(){
        const id = this.props.params.id;
        this.setState({id});
    }
    componentWillMount(){
        this.state ={
            aboutNav:"active",
            whenToGoNav:"none",
            seeAndDoNav:"none",
            sightseeingNav:"none",
            budgetCostNav:"none",
            getThereNav:"none",
            getAroundNav:"none",
            stayNav:"none",
            importantInfoNav:"none",
            isHiddenAbout:false,
            isHiddenWhenToGo:true,
            isHiddenSeeAndDo:true,
            isHiddenSightseeing:true,
            isHiddenBudgetCost:true,
            isHiddenGetThere:true,
            isHiddenGetAround:true,
            isHiddenStay:true,
            isHiddenImportantInfo:true,
            errMsg:'',
            id:''
        }
    }
    setComponentState(aboutNav,whenToGoNav,seeAndDoNav,sightseeingNav,budgetCostNav,getThereNav,getAroundNav,stayNav,importantInfoNav,isHiddenAbout,isHiddenWhenToGo,isHiddenSeeAndDo,isHiddenSightseeing,isHiddenBudgetCost,isHiddenGetThere,isHiddenGetAround,isHiddenStay,isHiddenImportantInfo){
        this.setState({
            aboutNav:aboutNav,
            whenToGoNav:whenToGoNav,
            seeAndDoNav:seeAndDoNav,
            sightseeingNav:sightseeingNav,
            budgetCostNav:budgetCostNav,
            getThereNav:getThereNav,
            getAroundNav:getAroundNav,
            stayNav:stayNav,
            importantInfoNav:importantInfoNav,
            isHiddenAbout:isHiddenAbout,
            isHiddenWhenToGo:isHiddenWhenToGo,
            isHiddenSeeAndDo:isHiddenSeeAndDo,
            isHiddenSightseeing:isHiddenSightseeing,
            isHiddenBudgetCost:isHiddenBudgetCost,
            isHiddenGetThere:isHiddenGetThere,
            isHiddenGetAround:isHiddenGetAround,
            isHiddenStay:isHiddenStay,
            isHiddenImportantInfo:isHiddenImportantInfo
        })  
    }
    aboutNavClick(){
        this.setComponentState("active","none","none","none","none","none","none","none","none",false,true,true,true,true,true,true,true,true);
    }
    whenToGoNavClick(){
        this.setComponentState("none","active","none","none","none","none","none","none","none",true,false,true,true,true,true,true,true,true);
    }
    seeAndDoNavClick(){
        this.setComponentState("none","none","active","none","none","none","none","none","none",true,true,false,true,true,true,true,true,true);
    }
    sightseeingNavClick(){
        this.setComponentState("none","none","none","active","none","none","none","none","none",true,true,true,false,true,true,true,true,true);
    }
    budgetCostNavClick(){
        this.setComponentState("none","none","none","none","active","none","none","none","none",true,true,true,true,false,true,true,true,true);
    }
    getThereNavClick(){
        this.setComponentState("none","none","none","none","none","active","none","none","none",true,true,true,true,true,false,true,true,true);
    }
    getAroundNavClick(){
        this.setComponentState("none","none","none","none","none","none","active","none","none",true,true,true,true,true,true,false,true,true);
    }
    stayNavClick(){
        this.setComponentState("none","none","none","none","none","none","none","active","none",true,true,true,true,true,true,true,false,true);
    }
    importantInfoNavClick(){
        this.setComponentState("none","none","none","none","none","none","none","none","active",true,true,true,true,true,true,true,true,false);
    }
    render(){
        if (this.state.errMsg!=''){
            return(
                <div>
                    <h1>{this.state.errMsg}</h1>
                </div>
            )
        }
        if (this.state.id==''){
            return(
                <div>Loading plan data...</div>
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
                            <li role="presentation" className={this.state.getThereNav}><a href="#" onClick={this.getThereNavClick.bind(this)}>Get there</a></li>
                            <li role="presentation" className={this.state.getAroundNav}><a href="#" onClick={this.getAroundNavClick.bind(this)}>Get around</a></li>
                            <li role="presentation" className={this.state.stayNav}><a href="#" onClick={this.stayNavClick.bind(this)}>Stay</a></li>
                            <li role="presentation" className={this.state.importantInfoNav}><a href="#" onClick={this.importantInfoNavClick.bind(this)}>Important info</a></li>
                        </ul>
                    </div>
                    <div className="container plancontent">
                        <div className={this.state.isHiddenAbout?'hidden':''}>
                            <PlanAbout id={this.state.id} />
                        </div>
                            {/*<div className={this.state.isHiddenWhenToGo?'hidden':''}>
                            <PlanWhenToGo id={this.state.id}/>
                        </div>
                        <div className={this.state.isHiddenSeeAndDo?'hidden':''}>
                            <PlanSeeAndDo id={this.state.id}/>
                        </div>
                        <div className={this.state.isHiddenSightseeing?'hidden':''}>
                            <PlanSightseeing id={this.state.id}/>
                        </div>
                        <div className={this.state.isHiddenBudgetCost?'hidden':''}>
                            <PlanBudgetCost id={this.state.id}/>
                        </div>
                        <div className={this.state.isHiddenGetThere?'hidden':''}>
                            <PlanHowGetThere id={this.state.id}/>
                        </div>
                        <div className={this.state.isHiddenGetAround?'hidden':''}>
                            <PlanHowGetAround id={this.state.id}/>
                        </div>
                        <div className={this.state.isHiddenStay?'hidden':''}>
                            <PlanWhereToStay id={this.state.id}/>
                        </div>
                        <div className={this.state.isHiddenImportantInfo?'hidden':''}>
                            <PlanImportantInfo id={this.state.id}/>
                        </div>*/}
                        
                    </div>
                </div>
            </div>
        )
    }
}
export default PlanDetail;