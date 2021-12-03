import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import signup from "./signup";


const Login = (props) =>{

    console.log("welcome");
         
    const[userdetails, setUserdetails] = useState("");
    console.log(userdetails);
    const {email, password} = useState('');
     
    const validateForm = (e) => {
         if( email.length >0 && password.length >0) {

            alert("please enter the correct details");
            return;

         }

     }

     const userLogin = (e) =>{

        e.preventDefault();
     }
     //http://localhost:3006/userdetails?email=mounika259@gmail.com
   /*const userLogin = (e) => {
        e.preventDefault();

        if ({email} === "mounika259@gmail.com" && {password} === "abc") {
            alert("Welcome");
        return;
     } 
    alert("Please enter the correct details");
    
    }*/
        return (
            <div>
            <form className="login" >
                <h3 style={{marginBottom:"50px"}}>Sign In</h3>

                <div className="form-group row">

                    <label className="control-label col-sm-2" >Email address</label>
                    <div className="control-label col-sm-4">
                        <input type="email" className="form-control" placeholder="Enter email" 
                        value = {email} onChange = {(e) => e.target.value()}
                         />
                        
                    </div>
                </div>
                <div className="form-group row">

                    <label className="control-label col-sm-2">Password </label>
                    <div className="control-label col-sm-4">
                        <input type="password" className="form-control" placeholder="Enter password"
                         value = {password} onChange = {(e) => e.target.value()}
                         />
                    </div>
                </div>
                <div className="form-group row">
                    <div className="custom-control custom-checkbox col-sm-4">
                        <input type="checkbox" className="custom-control-input" id="customCheck1" />
                        
                        <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                        
                    </div>
                </div>
                <div className="col-sm-4">
                <button type="submit" className="btn btn-primary btn-block">Submit</button>
               </div>
            </form>
            </div>
        );
    }

export default Login;
