import CalculateAge from "./calculateAge";


const AboutMe = () => {
  return (
    <div className="aboutMe-container">
      <h3 className="aboutMe__title" id="about">About me</h3>
      <div className="aboutMe__text">
        <p>Hello, I am Gilles Roels from Lochristi. I am a <CalculateAge/> year old junior developer. I am passionate with writing code. In my free time I play futsal. </p>
      </div>
    </div>
  )
}


export default AboutMe;