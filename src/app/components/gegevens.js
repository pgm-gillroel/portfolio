import { GrMail, GrPhone } from 'react-icons/gr';
import {FaPhone, FaGithubSquare, FaInstagramSquare, FaLinkedin, FaFacebookSquare} from 'react-icons/fa'


const Gegevens = () => {
  return(
    <div className='gegevens-container'>
      <h4 className='mb-3'>Gegevens</h4>
      <div className="gegevens row mb-5" >
        <a className="col" href="tel:0496247131"><FaPhone/></a>
        <a className="col" href="mailto:gillesroels@outlook.com"><GrMail/></a>
      </div>
      <h4 className='mb-3'>Socials</h4>
      <div className='socials-container row'>
        <a className='socials col' href='https://www.facebook.com/gilles.roels.7/' target="_blank" rel="noreferrer" ><FaFacebookSquare/></a>
        <a className='socials col' href='https://www.linkedin.com/in/gilles-roels-871286211/' target="_blank" rel="noreferrer" ><FaLinkedin/></a>
        <a className='socials col' href='https://github.com/pgm-gillroel' target="_blank" rel="noreferrer" ><FaGithubSquare/></a>
        <a className='socials col' href='https://www.instagram.com/gillesroels/' target="_blank" rel="noreferrer" ><FaInstagramSquare/></a>
        
      </div>
    </div>

  )
}





export default Gegevens;