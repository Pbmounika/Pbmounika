import React from 'react';
import ViewProject from './ViewProject';
import { Link } from 'react-router-dom';


const ListProjects = (props) => {

    const deleteProjectHandler = (id) => {
        props.getProjectId(id);

    }

    const displayProjectList = props.projects.map((project) => {
        return (
            <ViewProject project={project} key={project.id} clickHandler={deleteProjectHandler} />
        );

    });

    return (
        <div className="container">
       
            <table className="table table-striped table-bordered">
                
                <thead style={{textAlign: 'center', paddingBottom: '20px'}}>Project details</thead>
                <tr>
                    <th>ID</th>
                    <th>Customer</th>
                    <th>Project</th>
                    <th>Phase</th>
                    <th>Owner</th>
                </tr>

                  {displayProjectList}
                
            </table>
            <Link to="/add">
                <button className="btn btn-primary">Add Project</button>
            </Link>

        </div>


    );
}

export default ListProjects;