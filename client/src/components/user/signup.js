import React, {Component,PropTypes} from 'react';
import axios from 'axios';
import Header from '../includes/header';
import config from '../../config';
import cookie from 'react-cookie';

class SignUp extends Component {
    static contextTypes = {
        router: PropTypes.object
    }
    componentWillMount(){
        this.state = {
            errMsg:'',
            isHiddenErrMsg:true
        }
    }
    onUserSubmit(event){
        event.preventDefault();
        const host = config.API_SERVER;
        const url = "http://"+host+":12000/signup";
        const username = this.refs.username.value;
        const password = this.refs.password.value;
        const confirm_password = this.refs.confirm_password.value;
        if (confirm_password!=password){
            this.setState({
                errMsg:'password and confirm password are not matched',
                isHiddenErrMsg:false
            })
        }else{
            axios.post(url,{username,password})
            .then(response=>{
                if (response.data.success){
                    //console.log(response.data);
                    cookie.save('username', username, { path: '/' });
                    cookie.save('token',token,{path:'/'});
                    this.context.router.push('/');

                }else{
                    const errMsg = response.data.errMsg;
                    this.setState({
                        errMsg:errMsg,
                        isHiddenErrMsg:false
                    })
                }
            })
            .catch(err=>{
                this.setState({
                    errMsg:"invalid username or password",
                    isHiddenErrMsg:false
                });
            })
        }
    }
    render(){
        return(
            <div className="container user-sign-in">
                <Header/>
                <h3>User Sign In</h3>
                <hr/>
                <form onSubmit={this.onUserSubmit.bind(this)}>
                    <div className="form-group">
                        <label>Username(Email)</label>
                        <input type="email" className="form-control" ref="username" placeholder="Email" required/>
                    </div>
                    <div className="form-group">
                        <label>Password</label>
                        <input type="password" className="form-control" ref="password" placeholder="Password" required/>
                    </div>
                    <div className="form-group">
                        <label>Confirm Password</label>
                        <input type="password" className="form-control" ref="confirm_password" placeholder="Password" required/>
                    </div>
                    <div className={this.state.isHiddenErrMsg?'hidden':'signin-err-msg'}>
                        <h4>{this.state.errMsg}</h4>
                    </div>
                    <button type="submit" className="btn btn-default">Submit</button>&nbsp;&nbsp;
                    <button type="reset" className="btn btn-default">Cancel</button>
                </form>
            </div>
        )
    }
}
export default SignUp;