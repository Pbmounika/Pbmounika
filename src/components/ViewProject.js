import React, { useState } from 'react';
import api from '../api/projects';
import { Link } from 'react-router-dom';



const ViewProject = (props) => {

    // console.log("View");
    const [projects, setProjects] = useState([]);
    const [userdetails, setUserdetails] = useState([]);

    const LOCAL_STORAGE_KEY = "projects";
    const { id, customer, projectname, phase, owner } = props.project;



    const deleteProject = async (id) => {
        console.log("delete test", id);



        await api.delete(`/projects/${id}`);
        const newList = projects.filter((project) => {
            return project.id !== id;
        });

        setProjects(newList);


    }

    const updateProject = (id) => {
        console.log("update", id);

    }


    return (

        <tr >
            <td>{id}</td>
            <td>{customer} </td>
            <td>{projectname} </td>
            <td>{phase}</td>
            <td>{owner}</td>
            <td>
            <Link to={{pathname: `/edit/${id}`}}>
                <button className="btn btn-info" style={{ marginLeft: "10px" }}>Edit</button></Link>
                <button className="btn btn-danger" style={{color:"red",  marginLeft: "10px" }} onClick={() => deleteProject(id)} alert={"Are you sure"}>Delete</button>
            </td>
        
        </tr> 

    )
}
export default ViewProject;