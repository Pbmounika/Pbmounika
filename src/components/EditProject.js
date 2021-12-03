import React, { useState, useEffect } from 'react'
import { Navigate, useNavigate, useParams } from "react-router-dom";
import api from '../api/projects';
import 'react-edit-text/dist/index.css';


const initialValues = {
    customer: "",
    projectname: "",
    phase: "",
    owner: ""
}
const EditProject = (props) => {

    const [project, setProject] = useState(initialValues);
    const { customer, projectname, phase, owner } = project;
    const navigate = useNavigate();
    const [success, setSuccess] = useState("");


    const {id} = useParams();


    const onValueChange = (e) => {
        setProject({ ...project, [e.target.name]: e.target.value });

        console.log("Project details", project);
    }

    useEffect(() => {
        loadProjectData();
    }, []);

    const loadProjectData = async () => {
        const response = await api.get(`/projects/${id}`);
        setProject(response.data);
    }

    const updateProject = async () => {
      
       const request = {
            ...project,
        }
        const response = await api.put(`/projects/${id}`, request);
        props.setProjects([...props.projects, response.data]);

        setSuccess("Successfully updated");
        
        navigate('/projects');
    }


    return (
        <div className="projectform">
            
                <h3 style={{marginBottom:"50px"}}>Edit Project</h3>
                
                { success }
                <div className="form-group row">

                    <label className="control-label col-sm-2">Customer</label>
                    <div className="control-label col-sm-4">
                        <input type="text" name="customer" className="form-control" placeholder="Customer name"
                            value={customer} onChange={(e) => onValueChange(e)} />
                    </div>
                </div>
                <div className="form-group row">

                    <label className="control-label col-sm-2"> Project Name</label>
                    <div className="control-label col-sm-4">

                        <input type="text" name="projectname" className="form-control" placeholder="project name"
                            value={projectname} onChange={(e) => onValueChange(e)} />
                    </div>
                </div>
                <div className="form-group row">

                    <label className="control-label col-sm-2"> Phase </label>
                    <div className="control-label col-sm-4">

                        <input type="text" name="phase" className="form-control" placeholder="Phase of developement cycle"
                            value={phase} onChange={(e) => onValueChange(e)} />
                    </div>
                </div>
                <div className="form-group row">

                    <label className="control-label col-sm-2"> Owner </label>
                    <div className="control-label col-sm-4">

                        <input type="text" name="owner" className="form-control" placeholder="Product owner"
                            value={owner} onChange={(e) => onValueChange(e)} />
                    </div>
                </div>
                <div className="form-group row">


                    <div className="control-label col-sm-4">

                        <button className="btn btn-success" style={{ marginLeft: "20px" }} onClick={() => updateProject()}>Update</button>
                    </div>
                </div>

            
        </div>

    );

}

export default EditProject;
