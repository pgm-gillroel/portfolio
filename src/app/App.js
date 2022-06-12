import './App.css';


import './App.scss';
import { AboutMe, Contact, Footer, NavBar, PostDetailComponent, Skills, ToTop } from './components';
import Intro from './components/intro';




const App = () => {
  return (
    <div className='app'>
      <header>
      <NavBar/>
      </header>
      <main>
      <div className='container'>
        <Intro/>
        <ToTop/>
        
        <AboutMe/>
        <PostDetailComponent/>
        <Skills/>
        <Contact/>
      </div>
      </main>
      <footer>
        <Footer/>
      </footer>
    </div>

    
  );
};



export default App;
