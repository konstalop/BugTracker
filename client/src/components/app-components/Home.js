import React, { useContext, useEffect } from 'react'
import { ProjectContext } from '../../contexts/ProjectContext';
import Project from './Project'
import Spinner from './Spinner';

/**
 * Generates home page which shows all projects
 * @returns home page
 */

function Home() {

    const {projects, fetchProjects, loading} = useContext(ProjectContext)
    
    useEffect(() => {
        fetchProjects()
    }, [])

    if (projects == null) {
        return (
            <div className='home-wrapper'>
                <h1 className='home-h1'>Loading projects...</h1>
                <Spinner></Spinner>
            </div>
        )
    }

    return (
        <div className='home-wrapper'>
            <h1 className='home-h1'>Home</h1>
            <div className="projects-container">
                <h2 className='projects-h2'>My Projects</h2>
                    <table className="projects-table">
                        <tbody>
                        <tr>
                            <th className='th1'>PROJECT</th>
                            <th className='th2'>DESCRIPTION</th>
                            <th className='th3'>DATE CREATED</th>
                        </tr>
                        {
                            projects !== null && !loading ? (
                                projects.map(project => (
                                    <Project key={project._id} project={project}/>
                                ))
                            ) : (<tr></tr>)
                        }  
                        </tbody>
                    </table>
                    
            </div>
        </div>
    )
}

export default Home