import React from 'react';
import {Link} from 'react-router-dom';
import Popup from 'reactjs-popup';


const deleteProject = (props) => {

    const{id, customer, projectname, phase,owner} = props.project

    

         return (
            <div>
                <br></br>
                <div className="card col-md-6 offset-md-3">
                    <h3 className="text-center" > Project Details</h3>
                    <div className="card-body">
                        <div className="row">
                        <label>Project Id </label>
                        <div>{id}</div>
                        </div>
                    <div className="row">
                        <label>Customer</label>
                        <div>{customer}</div>
                    </div>
                    <div className="row">
                        <label>Project Name</label>
                        <div>{projectname}</div>
                    </div>
                    <div className="row">
                        <label>Phase</label>
                        <div>{phase}</div>
                    </div>
                    <div className="row">
                        <label>Owner</label>
                        <div>{owner}</div>
                    </div>
                    </div>
                    <div className="card-body">
                        <Link to={{pathname: `/projects/${id}`, state:{project: props.project}}}>
                        <Popup><button className="btn btn-danger" style = {{marginLeft:"10px"}} onClick={() => props.clickHandler(id)} alert={"Are you sure want to deete the project"}>Delete</button>
                        </Popup>
                        </Link>
                    </div>
                    
                </div>
            </div>
        );
    }

export default deleteProject;