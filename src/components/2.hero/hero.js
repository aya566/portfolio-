import './hero.css';
import developer from '../../assets/developer.png';
import Lottie from "lottie-react";
import dev from "../../../src/animation/dev.json";
function Hero() {
  return (
    <section className="hero flex">
      <div className='leftsection'>

        <div className='parentavatar'>
          <img src={developer} className='avatar'></img>
          <span className='icon-verified'></span>
        </div>
        <h1 className='title'> Frontend developer.
        </h1>
        <p className='subtitle'>I’m Aya wael, a passionate and dedicated frontend developer, I specialize in creating dynamic and responsive web applications. With a strong foundation in HTML, CSS, and JavaScript, I am adept at transforming complex designs into interactive, user-friendly experiences. My expertise extends to modern frameworks and libraries such as React, enabling me to build scalable and maintainable code.

        </p>
        <div className='icons flex '>
           <div className='icon icon-twitter '></div>
           <div className='icon icon-instagram'></div>
           <div className='icon icon-github'></div>
           <div className='icon icon-linkedin'></div>
        </div>
      
      </div>
      <div className='rightsection animation'>
      <Lottie className='lottanimation' animationData={dev} /> 
      
      </div>
    </section>
  );
}

export default Hero;
