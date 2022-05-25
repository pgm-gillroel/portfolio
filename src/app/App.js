import './App.css';


import './App.scss';
import { AboutMe, Contact, Skills } from './components';




const App = () => {
  return (
    <div className='container'>
  
      {/* <Cards/> */}
      <AboutMe/>
      <Skills/>
      <Contact/>
      
      

    
    </div>

    
  );
};



export default App;
