import React,{Component,PropTypes} from 'react';
import axios from 'axios';

class AdminPlanNewSightseeingForm extends Component{
    static contextTypes = {
        router: PropTypes.object
    }
    componentWillMount(){
        this.state = {
            name:'',
            errMsg:''
        }
    }
    componentDidMount(){
        const id = this.props.id;
        axios.get("http://localhost:12000/plans/"+id)
        .then(response=>{
            if (response.data.success){
                const name = response.data.data.name;
                this.setState({name});
            } else {
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
            <div>
                Hello sightseeing
            </div>
        )
    }
}
export default AdminPlanNewSightseeingForm;