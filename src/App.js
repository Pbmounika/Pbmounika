import React, { useEffect, useState } from 'react';
import './App.css'
import UserLogin from './login'
import SignUp from './signup'
import AddProject from './components/AddProject';
import ProjectList from './components/ProjectList';
import ListProjects from './components/ListProjects';
import 'bootstrap/dist/css/bootstrap.min.css'
import api from './api/projects';
import {
BrowserRouter as Router,
Routes, Route,
Link
} from 'react-router-dom'
import EditProject from './components/EditProject';



function App() {
  const [projects, setProjects] = useState([]);
  const[userdetails, setUserdetails] = useState([]);

  const LOCAL_STORAGE_KEY = "projects";

  const [id, setID] = useState(2);


  const addUserHandler = async (user) => {
    console.log(user);

    const request = {
      id: id,
      ...user
    }
    const response = await api.post("/userdetails", request);

    setID(id + 1);
    setUserdetails([...userdetails, response.data]);
  }

  const LoginHandler = async (userdetails) =>{
    console.log("In loginhandler");

  }

 /* const addProjectHandler = async (project) => {
   // console.log(project);

    const request = {
      id: id,
      ...project
    }
    const response = await api.post("/projects", request);

    setProjects([...projects, response.data]);
  }

  const updateProjectHandler = async (id) => {

    const response = await api.put(`/projects/${id}`, id);
    const newList = projects.filter((project) => {
      return project.id !== id;
    });
    setProjects(newList);
  };
*/

  const removeProjectHandler = async (id) => {

    await api.delete(`/projects/${id}`);
    const newList = projects.filter((project) => {
      return project.id !== id;
    });
    setProjects(newList);
  };

  const getProjects = async () => {
    const response = await api.get("/projects");
    return response.data;
  }
  
  useEffect(() => {
    
    const getAllProjects = async () => {
      
      const allProjects = await getProjects();
      console.log(allProjects);
      if (allProjects) { 
        
        setProjects(allProjects)
      }
    };
    getAllProjects();
  }, []);
  
  useEffect(() =>{
  },[projects]);

  return (   
    <div>
      <nav className="navbar navbar-expand-lg navbar-light fixed-top">
        <div className="container">
          <Link className="navbar-brand" to={"/login"}>Welcome</Link>

          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link className="nav-link" to={"/login"}>Login</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to={"/signup"}>Sign up</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to={"/add"}>AddProject</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to={"/projects"}>ViewProject</Link>
            </li>
            
          </ul>

        </div>
      </nav>
      

        
          <Routes>
            <Route path="/" element={< UserLogin />} />
            <Route path="/login" element={< UserLogin  LoginHandler ={LoginHandler}/>} />
            <Route path="/signup" element={< SignUp addUserHandler = {addUserHandler} />} />
            <Route path="/add" element={<AddProject  projects={projects} setProjects={setProjects} />} />
            <Route path="/edit/:id" element={<EditProject projects={projects} setProjects={setProjects} />} />
            <Route path="/projects" element={<ListProjects projects = {projects} getProjectId={removeProjectHandler}/>} />   
               
          </Routes>
          
    
</div>
  );
}

export default App;