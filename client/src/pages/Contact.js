import './contact.css'
import {React, useContext} from 'react'
import { AuthContext } from '../context/AuthContext'
import { connect } from 'react-redux';
import {useEffect} from 'react'
import {addContactAC,setInputContactAC,deleteContactAC,redactContactAC,sortContactAZAC,sortContactZAAC,filterContactAC} from '../redux/action'

const Contact = (props) => {
   
    const auth = useContext(AuthContext)
    useEffect(() => {
        props.filterContactAC('')
      }, [props.contacts]);
   
      const changeHandler = event => {
        return {value: event.target.value, name: event.target.name}
     }
    return(
        <div className="">
            <button className="btn" onClick={() => auth.logout()}>logout</button>
                <div className="">
                    <div className="row valign-wrapper">
                        <form className="col s10">

                        <div className="input-field col s6">
                      
                            <input id="icon_prefix" type="text" name="firstName" onChange={(e) => props.setInputContactAC(changeHandler(e))}/>
                            <label htmlFor="icon_prefix">First Name</label>
                        </div>

                        <div className="input-field col s6">
                       
                            <input id="input_text" type="text"  maxLength="15" name="telephone" onChange={(e) => props.setInputContactAC(changeHandler(e))}/>
                            <label htmlFor="input_text">Telephone</label>
                        </div>

                        </form>
                        <button className="btn col s2" onClick={() => props.addContactAC({firstName: props.firstName, telephone: props.telephone})}>Add</button>
                    </div>
                    
                </div> 
                <div className="sorts row valign-wrapper">
                <h5 className='col '>Sort:</h5>
                    <button className="btn col " onClick={() => props.sortContactAZAC()}>A-Z</button>
                    <button className="btn col" onClick={() => props.sortContactZAAC()}>Z-A</button>
                    <h5 className='col '>Search:</h5>
                    <div className="input-field col ">
                        <input placeholder="Input first name" id="first_name" type="text" className="validate" onChange={(e) => props.filterContactAC(e.target.value)}/>
                        <label htmlFor="first_name">First Name</label>
                    </div>
                    
                </div>
                <ul className="collapsible">
                
                
                
                    { props.contactFilter.map((item, index) => {
                        
                        return ( 
                        
                                <li key={item+index}>
                                    <div className="collapsible-header row valign-wrapper">
                                    { 
                                       
                                        props.contactFilter[index].redact  ?
                                        <>
                                        <div className="input-field col s4">
                      
                                            <input id="icon_prefix" type="text" className="validate" name="newFirstName" placeholder={item.firstName} onChange={(e) => props.setInputContactAC(changeHandler(e))}/>
                                            
                                        </div>

                                        <div className="input-field col s5">
                                        
                                        <input id="icon_telephone" type="tel" className="validate" name="newTelephone" placeholder={item.telephone} onChange={(e) => props.setInputContactAC(changeHandler(e))} />
                                        
                                        </div>
                                        <button className="btn col s2 m1" onClick={() => props.redactContactAC(index)}>Accept</button>
                                        </> 
                                        :
                                        <>
                                                    <p className="col s4 firstName-text">{item.firstName} </p>
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
    firstName: state.ContactsReducer.currectInput.firstName,
    telephone: state.ContactsReducer.currectInput.telephone,
    contacts: state.ContactsReducer.contacts,
    contactFilter: state.ContactsReducer.contactFilter
  });
  
  export default connect(mapStateToProps,
    {

       
        addContactAC,
        deleteContactAC,
        redactContactAC,
       
        sortContactAZAC,
        sortContactZAAC,
        filterContactAC,
        setInputContactAC
    })(Contact);