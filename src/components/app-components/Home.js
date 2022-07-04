import React, { useContext } from 'react'
import { ProjectContext } from '../../contexts/ProjectContext';
import Project from './Project'


function Home() {
    const project = useContext(ProjectContext);

    return (
        <div className='home-wrapper'>
            <h1 className='home-h1'>{project}</h1>
            <div className="projects-container">
                <h2 className='projects-h2'>My Projects</h2>
                    <table className="projects-table">
                        <tbody>
                        <tr>
                            <th className='th1'>PROJECT</th>
                            <th className='th2'>DESCRIPTION</th>
                            <th className='th3'>CREATED BY</th>
                        </tr>

                        </tbody>
                    </table>
                    
            </div>
        </div>
    )
}

export default Home