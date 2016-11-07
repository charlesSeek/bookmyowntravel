import React,{Component} from 'react';
import Header from '../../../includes/header';
import PlanAboutUpdateForm from './plan_about_update_form';
import PlanBudgetCostUpdateForm from './plan_budget_cost_update_form';
import PlanGetAroundUpdateForm from './plan_get_around_update_form';
import PlanGetThereUpdateForm from './plan_get_there_update_form';
import PlanImportantInfoUpdateForm from './plan_important_info_update_form';
import PlanSeeAndDoUpdateForm from './plan_see_and_do_update_form';
import PlanSightseeingUpdateForm from './plan_sightseeing_update_form';
import PlanWhenToGoUpdateForm from './plan_when_to_go_update_form';
import PlanWhereToStayUpdateForm from './plan_where_to_stay_update_form';

class PlanUpdateHome extends Component{
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
        if (this.state.id==''){
            return (<div>Loading data...</div>)
        }
        return(
            <div className="container">
                <Header/>
                <div className="plan-update-home">
                    <div className="container">
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
                    <div className="container plan-update-form">
                        <div className={this.state.isHiddenAbout?'hidden':''}>
                            <PlanAboutUpdateForm id={this.state.id} />
                        </div>
                        <div className={this.state.isHiddenWhenToGo?'hidden':''}>
                            <PlanWhenToGoUpdateForm id={this.state.id}/>
                        </div>
                        <div className={this.state.isHiddenSeeAndDo?'hidden':''}>
                            <PlanSeeAndDoUpdateForm id={this.state.id}/>
                        </div>
                        <div className={this.state.isHiddenSightseeing?'hidden':''}>
                            <PlanSightseeingUpdateForm id={this.state.id}/>
                        </div>
                        <div className={this.state.isHiddenBudgetCost?'hidden':''}>
                            <PlanBudgetCostUpdateForm id={this.state.id}/>
                        </div>
                        <div className={this.state.isHiddenGetThere?'hidden':''}>
                            <PlanGetThereUpdateForm id={this.state.id}/>
                        </div>
                        <div className={this.state.isHiddenGetAround?'hidden':''}>
                            <PlanGetAroundUpdateForm id={this.state.id}/>
                        </div>
                        <div className={this.state.isHiddenStay?'hidden':''}>
                            <PlanWhereToStayUpdateForm id={this.state.id}/>
                        </div>
                        <div className={this.state.isHiddenImportantInfo?'hidden':''}>
                            <PlanImportantInfoUpdateForm id={this.state.id}/>
                        </div>
                        
                    </div>
                </div>
            </div>
        )
    }
}
export default PlanUpdateHome