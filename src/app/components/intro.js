import ReactTypingEffect from 'react-typing-effect';

const Intro = () => {
  return (
    <div className="intro-container row">
      <div className='col-sm align-self-center'>
        <h1>Hi, I'm Gilles Roels</h1>
        <h2>      <ReactTypingEffect eraseDelay={2000} typingDelay={1000}
          text={["Programmer", "Web designer", "Front-end web developer"]}
        />
        </h2>
      </div>

      <div className='avatar-container col-sm'>
      <img className='avatar avatar--gilles' src= {process.env.PUBLIC_URL + `/assets/images/avatar.png`} alt="avatar Gilles Roels"/>
      </div>



      
    </div>
  )
}

export default Intro;