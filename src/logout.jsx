import React, {Component} from 'react';
import { Link } from "react-router-dom";

class Logout extends Component{

    ComponentDidMount = () =>{
        this.props.onLogoutUser();

    }

    render(){

        return (

            <div className="container">
            <p>You are logged out Click<Link to="/login"></Link>here to login in</p>
            </div>
        )
    }
};
export default Logout