import './App.css';


import './App.scss';
import { AboutMe, Contact, NavBar, PostDetailComponent, Skills, ToTop } from './components';
import Intro from './components/intro';




const App = () => {
  return (
    <div>
      <NavBar/>
      <div className='container'>
        <Intro/>
        <ToTop/>
        
        <AboutMe/>
        <PostDetailComponent/>
        <Skills/>
        <Contact/>

        
      
      
      
      
      </div>
    </div>

    
  );
};



export default App;
