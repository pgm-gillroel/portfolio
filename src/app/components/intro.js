import ReactTypingEffect from 'react-typing-effect';

const Intro = () => {
  return (
    <div className="intro-container">
      <h1>Hi, I'm Gilles Roels</h1>
      <h2>      <ReactTypingEffect eraseDelay={2000} typingDelay={1000}
        text={["Programmer", "Web designer", "Front-end web developer"]}
      />
      </h2>


      
    </div>
  )
}

export default Intro;