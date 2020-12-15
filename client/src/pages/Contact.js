import {React, useContext} from 'react'
import { AuthContext } from '../context/AuthContext'
import { connect } from 'react-redux';
import {setFirstNameAC, setTelephoneAC, addContactAC,deleteContactAC,redactContactAC,setNewContactFirstNameAC,setNewContactTelephoneAC} from '../redux/action'

const Contact = (props) => {
   
    const auth = useContext(AuthContext)

    return(
        <div className="">
            <button className="btn" onClick={() => auth.logout()}>logout</button>
                <div className="">
                    <div className="row valign-wrapper">
                        <form className="col s10">

                        <div className="input-field col s6">
                      
                            <input id="icon_prefix" type="text" className="validate" onChange={(e) => props.setFirstNameAC(e.target.value)}/>
                            <label htmlFor="icon_prefix">First Name</label>
                        </div>

                        <div className="input-field col s6">
                       
                        <input id="icon_telephone" type="tel" className="validate" onChange={(e) => props.setTelephoneAC(e.target.value)}/>
                        <label htmlFor="icon_telephone">Telephone</label>
                        </div>

                        </form>
                        <button className="btn col s2" onClick={() => props.addContactAC({firstName: props.firstName, telephone: props.telephone})}>Add</button>
                    </div>
                    
                </div> 
                <ul className="collapsible">
                    {props.contacts.map((item, index) => {
                        return ( 
                        
                                <li key={item+index}>
                                    <div className="collapsible-header row valign-wrapper">
                                    { 
                                        props.redactContact  ?
                                        <>
                                        <div className="input-field col s4">
                      
                                            <input id="icon_prefix" type="text" className="validate" placeholder={item.firstName} onChange={(e) => props.setNewContactFirstNameAC(e.target.value)}/>
                                            
                                        </div>

                                        <div className="input-field col s5">
                                        
                                        <input id="icon_telephone" type="tel" className="validate" placeholder={item.telephone} onChange={(e) => props.setNewContactTelephoneAC(e.target.value)} />
                                        
                                        </div>
                                        <button className="btn col s2 m1" onClick={() => props.redactContactAC(index)}>Accept</button>
                                        </> 
                                        :
                                        <>
                                                    <p className="col s4">{item.firstName} </p>
                                                    <p className="col s5">{item.telephone}</p>
                                                    <button className="btn col s2 m1" onClick={() => props.redactContactAC(index)}>Redact</button>
                                                </>
                            
                                       
                                    }
                                   
                                        
                                         
                                             
                                         
                                         
                                         
                                    
                                    
                                    
                                    
                                    <button className="btn col s1  red " onClick={() => props.deleteContactAC(index)}>Delete</button>
                                    
                                   
                                    </div>
                                   
                                </li>
                                
                        
                           
                        )
                    })}
                </ul>
                
        </div>
    )
}

const mapStateToProps = (state) => ({
    contacts: state.changeContact.contacts,
    firstName: state.inputReducer.currectInput.firstName,
    telephone: state.inputReducer.currectInput.telephone,
    redactContact: state.changeContact.redactContact.redact
  });
  
  export default connect(mapStateToProps,
    {

        setTelephoneAC,
        setFirstNameAC,
        addContactAC,
        deleteContactAC,
        redactContactAC,
        setNewContactFirstNameAC,
        setNewContactTelephoneAC
    })(Contact);