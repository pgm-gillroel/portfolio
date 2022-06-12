
import { AiFillGithub } from 'react-icons/ai';


const ProjectDetails = ({project}) => {

  return (

    <div className="project-container row mb-5">
      
      <div className="project__img col-md mb-3">
        <img  src={process.env.PUBLIC_URL + `/assets/images/${project.img}`} alt={project.title}/>
      </div>
      <div className="project__text col-md align-self-center">
        <h4>{project.title}</h4>
        <p>{project.description}</p>
        <div className="row">{project && project.skills.map((skill) => (<p className="skills col" key={skill}>{skill}</p>))}</div>
        <a className='project__link' href={project.link} target="_blank" rel="noreferrer"><AiFillGithub/></a>
      </div>
    </div>


  )
}





export default ProjectDetails;