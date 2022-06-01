
import { useState } from 'react';
import {BiUpArrow} from 'react-icons/bi'

const ToTop = () => {

  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 50){
      setVisible(true)
    } 
    else if (scrolled <= 50){
      setVisible(false)
    }
  };

  const scrollToTop = () =>{
    window.scrollTo({
      top: 0, 
      behavior: 'smooth'
    });
  };

  window.addEventListener('scroll', toggleVisible);

  return(

    <button className='to-top__container' onClick={scrollToTop} style={{display: visible ? 'block' : 'none'}}>
      <BiUpArrow className="to-top__button"/>

    </button>

  )
}



export default ToTop;