import React, { Component } from 'react';
import ViewProject from './ViewProject';
import AddProject from './AddProject';
import {Link} from 'react-router-dom';


const ProjectList = (props) => {
    
    //console.log(props.projects);

    const deleteProjectHandler = (id) => {
        props.getProjectId(id);

    }
    const displayProjectList = props.projects.map((project) => {
    
        return (
            <ViewProject project={project} key={project.id}
             />
        );
    });
    
        //Edit project details here
        

    return (

        <div className="ui container center">
            
                <h2>Projects List
                  
                </h2>

            
  <div>
            <br></br>
            <div>

                <table style={{ width: "100%" }}>
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Customer </th>
                            <th> Projectname </th>
                            <th>Phase</th>
                            <th>Owner</th>
                        </tr>
                    </thead>

                    <tbody>
                       {displayProjectList}
                    </tbody>

                </table>

            </div></div>
            
        </div>
    )
}
export default ProjectList;