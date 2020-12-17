import {React} from 'react'
import {Switch, Route, Redirect} from 'react-router-dom'
import AuthPage from './pages/AuthPage'
import Contact from './pages/Contact'

export const useRoutes = isAuth => {
    if(isAuth){
        return(
            <Switch>
               
                <Route path="/contact" exact>
                    <Contact/>
                </Route>
                <Redirect to="/contact"/>
            </Switch>
        )
    }
    return(
        <Switch>
                 <Route path="/" exact>
                    <AuthPage/>
                </Route>
                <Redirect to="/"/>
        </Switch>
    )
}
