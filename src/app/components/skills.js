import {SiJavascript, SiReact, SiHtml5, SiCss3, SiAdobexd, SiEleventy, SiPhp, SiLaravel, SiTypescript, SiNestjs} from 'react-icons/si'

const Skills = () => {
  return (
    
    <div className='skills-container row'>
      <h3 id='skills' className='text-center mb-3'>Skills</h3>
      <div className='skill col mb-3'>
        <SiJavascript className='svg svg--javascript'/>
      </div>
      <div className='skill col mb-3'>
        <SiReact className='svg svg--react'/>
      </div>
      <div className='skill col mb-3'>
        <SiHtml5 className='svg svg--html'/>
      </div>
      <div className='skill col mb-3'>
        <SiCss3 className='svg svg--css'/>
      </div>
      <div className='skill col mb-3'>
        <SiAdobexd className='svg svg--adobeXD'/>
      </div>
      <div className='skill col mb-3'>
        <SiEleventy className='svg svg--eleventy'/>
      </div>

      <div className='skill col mb-3'>
        <SiPhp className='svg svg--php'/>
      </div>

      <div className='skill col mb-3'>
        <SiLaravel className='svg svg--laravel'/>
      </div>

      <div className='skill col mb-3'>
        <SiTypescript className='svg svg--typescript'/>
      </div>

      <div className='skill col mb-3'>
        <SiNestjs className='svg svg--nestjs'/>
      </div>


    </div>
  )
}


export default Skills;