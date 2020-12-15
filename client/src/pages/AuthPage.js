
import {React, useState, useEffect, useContext} from 'react'
import { AuthContext } from '../context/AuthContext'
import {useHttp} from '../hooks/http.hook'
import { useMessage } from '../hooks/message.hook'
import './auth.css'

export const AuthPage = () => {
    const auth = useContext(AuthContext)
    const message = useMessage()
    const {loading,  request, error, clearError} = useHttp()
    
    const [form, setForm] = useState({
        email: '',
        password: ''
    })

    const changeHandler = event => {
        setForm({...form, [event.target.name]: event.target.value})
    }

    useEffect( () => {
       message(error);
       clearError();
    }, [error, message, clearError])
    const registerHandler = async () => {
        try { 

            const data = await request('/api/auth/register', 'POST', {...form})
            message(data.message)
        } catch (error) {}
    }

    const loginHandler = async () => {
        try { 

            const data = await request('/api/auth/login', 'POST', {...form})
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
                        
                        type="text" 
                        name="email"
                        onChange={changeHandler}
                        className="validate"/>
                        
                        <label htmlFor="email">Email</label>
                    </div>
                    <div className="input-field">

                        <input 
                        placeholder="Password" 
                       
                        type="text" 
                        name="password"
                        onChange={changeHandler}
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