import { createContext, useState } from "react";
import React from "react";
import {v4 as uuidv4} from "uuid";
 
export const ProjectContext = createContext();

const ProjectContextProvider = (props) => {
    


    const [projects, setProjects] = useState([
        {id:uuidv4(), name: "Create bugtracker", desc: "MERN STACK", author: "konsta", tickets: [
            {
            ticketId: uuidv4(),
            title: "Create front",
            ticketDesc: "With react",
            time:20,
            },
            {
            ticketId: uuidv4(),
            title: "figure it out",
            ticketDesc: "Yea",
            time:5,
            }
        ]},
        {id:uuidv4(), name: "Create ggggggggtracker", desc: "MERN STACK", author: "konsta", tickets: [
            {
            ticketId: uuidv4(),
            title: "Creatgsdgsde front",
            ticketDesc: "With react",
            time:20, 
            },
            {
            ticketId: uuidv4(),
            title: "figuregsdgsd it out",
            ticketDesc: "Yea",
            time:5,
            }
        ]}

    ])

    const addProject = (name, desc, author, tickets) => {
        setProjects([...projects, {id:uuidv4(), name, desc, author, tickets}])
    }


    return (
        <ProjectContext.Provider value={{projects, addProject}}>
            {props.children}
        </ProjectContext.Provider>
    )
}

export default ProjectContextProvider;


