import React,{Component,PropTypes} from 'react';
import Header from '../../includes/header';
import axios from 'axios';

class AdminPlanHome extends Component {
    static contextTypes = {
        router: PropTypes.object
    }
    componentWillMount(){
        this.state = {
            plans:undefined
        }
    }
    componentDidMount(){
        axios.get("http://localhost:12000/plansList")
        .then((response)=>{
            if (response.data.success){
                const plans = response.data.data;
                plans.sort(function(a,b){
                    return a.name > b.name;
                });
                this.setState({plans})
            }
        })
    }
    createButtonClick(){
        
    }
    render(){
        if (this.state.plans==undefined){
            return(
                <div>Data Loading...</div>
            )
        }
        return(
            <div className="container">
                <Header/>
                <div className="container plan-home">
                   <h2>Admin Travel Plan</h2>
                    <div className="container">
                       <button type="button" className="btn btn-success btn-block" onClick={()=>this.context.router.push("/admin/plan/new")}>New One</button>
                    </div>
                    <div className="container countries-table">
                        <table className="table table-hover">
                            <thead>
                                <tr>
                                    <th>Country Name</th>
                                    <th>Continent</th>
                                    <th>Created At</th>
                                    <th>Updated At</th>
                                    <th>View</th>
                                    <th>Update</th>
                                    <th>Delete</th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.state.plans.map((plan)=>{
                                    return(
                                        <tr key={plan._id}>
                                            <td>{plan.name}</td>
                                            <td>{plan.continent}</td>
                                            <td>{plan.createdAt}</td>
                                            <td>{plan.updatedAt}</td>
                                            <td><a href={"/plan/"+plan._id}><i className="glyphicon glyphicon-play-circle"></i></a></td>
                                            <td><a href={"/admin/plan/update/about/"+plan._id}><i className="glyphicon glyphicon-edit"></i></a></td>
                                            <td><a href="#" ><i className="glyphicon glyphicon-remove-circle"></i></a></td>
                                        </tr>
                                    )
                                })}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        )
    }
}
export default AdminPlanHome;