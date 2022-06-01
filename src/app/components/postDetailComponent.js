import projects from '../data/projects.json'
import ProjectDetails from './project-details'

const PostDetailComponent = () => {
  return (
    
    
      <div className='project-container'>
        <h3 id='projects'>Projects</h3>
        
        {projects && projects.map((p) => (
          <div>
          

          <ProjectDetails key={p.id} project={p}/>
          </div>
          
      
))}
      </div>
  )
}


export default PostDetailComponent;