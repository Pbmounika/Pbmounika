import React, {Component , useState } from 'react';
import { Navigate , useNavigate , useHistory  } from "react-router-dom";
import projects from '../api/projects';
import api from '../api/projects';


    const initialValues = {
        customer:"",
        projectname:"",
        phase:"",
        owner:""
      }
    const AddProject = (props) => {

        const [project , setProject] = useState(initialValues);
        const {customer,projectname,phase,owner} = project;

        const navigate = useNavigate();


        const onValueChange = (e) =>{
            setProject({...project, [e.target.name] : e.target.value});
        
          //  console.log(project);
          }


    const addNewProject = async() => {

     
        if(customer === "" || projectname === "" || phase ==="" || owner === "")
        {
           alert("Please fill all the details");
            return;
        }      
    const request ={
        ...project,
      }
      const response = await api.post("/projects", request);
      props.setProjects([...props.projects,response.data]);
      navigate('/projects');
    }
         
        return (
            <div className="projectform">
                <h4 style={{marginBottom:"50px"}}>Add project details</h4>

                <div className="form-group row">

                    <label className="control-label col-sm-2">Customer</label>
                    <div className="control-label col-sm-4">
                        <input type="text" name="customer" className="form-control" placeholder="Customer name"
                            value={customer} onChange={(e) => onValueChange(e) } />
                    </div>
                </div>
                <div className="form-group row">

                    <label className="control-label col-sm-2"> Project Name</label>
                    <div className="control-label col-sm-4">

                        <input type="text" name="projectname" className="form-control" placeholder="project name"
                            value={projectname} onChange={(e) => onValueChange(e) } />
                    </div>
                </div>
                <div className="form-group row">

                    <label className="control-label col-sm-2"> Phase </label>
                    <div className="control-label col-sm-4">

                        <input type="text" name ="phase" className="form-control" placeholder="Phase of developement cycle"
                            value={phase} onChange={(e) => onValueChange(e) } />
                    </div>
                </div>
                <div className="form-group row">

                    <label className="control-label col-sm-2"> Owner </label>
                    <div className="control-label col-sm-4">

                        <input type="text" name="owner" className="form-control" placeholder="Product owner"
                            value={owner} onChange={(e) => onValueChange(e) }/>
                    </div>
                </div>
                <div className="form-group row">


                    <div className="control-label col-sm-4">

                        <button className="btn btn-primary" style = {{marginLeft:"20px"}} onClick = {() => addNewProject()}>Add</button>
                    </div>
                </div>

                </div>
        
        );

    }

export default AddProject;