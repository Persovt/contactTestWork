
import {React, useEffect, useContext} from 'react'
import { AuthContext } from '../context/AuthContext'
import {useHttp} from '../hooks/http.hook'
import { useMessage } from '../hooks/message.hook'
import './auth.css'
import { connect } from 'react-redux';
import {setInputAuthAC} from '../redux/action'
const AuthPage = (props) => {
    const auth = useContext(AuthContext)
    const message = useMessage()
    const {loading,  request, error, clearError} = useHttp()

    const changeHandler = event => {
        return {value: event.target.value, name: event.target.name}
     }

    useEffect( () => {
       message(error);
       clearError();
    }, [error, message, clearError])
    const registerHandler = async () => {
        try { 

            const data = await request('/api/auth/register', 'POST', {email: props.email, password: props.password})
            message(data.message)
        } catch (error) {}
    }

    const loginHandler = async () => {
        try { 

            const data = await request('/api/auth/login', 'POST', {email: props.email, password: props.password})
            auth.login(data.token, data.userId)
        } catch (error) {}
    }

     return(
        <div className="row">
            <div className="col s6 offset-s3">
                <div className="card blue darken-1">
            <div className="card-content white-text">
            <span className="card-title">Auth</span>
                <div className="">
                    <div className="input-field">

                        <input 
                        placeholder="Email" 
                        id="mail"
                        type="text" 
                        name="email"
                        onChange={(e) => props.setInputAuthAC(changeHandler(e))}
                        className="validate"/>
                        
                        <label htmlFor="email">Email</label>
                    </div>
                    <div className="input-field">

                        <input 
                        placeholder="Password" 
                       
                        type="text" 
                        name="password"
                        onChange={(e) => props.setInputAuthAC(changeHandler(e))}
                        className="validate"/>
                        
                        <label htmlFor="password">Password</label>
                    </div>
                </div>
            </div>
            <div className="card-action">

                <button 
                className="btn yellow darken-4 mr-2"
                disabled={loading}
                onClick={loginHandler}
                >
                
                Login
                </button>

                <button 
                className="btn grey lighten-1 black-text"
                onClick={registerHandler}
                disabled={loading}
                >
                
                Regist
                </button>
            </div>
        </div>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => ({
    email: state.AuthReducer.currectInput.email,
    password: state.AuthReducer.currectInput.password,
  });
  
  export default connect(mapStateToProps,
    {
        setInputAuthAC
    })(AuthPage);