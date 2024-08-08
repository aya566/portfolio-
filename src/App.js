
import './App.css';
import Header from './components/1.header/header';
import Hero from './components/2.hero/hero';
import Main from './components/3.main/main';
import Contact from './components/4.contact/contact';
import Footer from './components/5.footer/footer' ;
import { useEffect, useState } from 'react';
function App() {
  const [scrollbtn,setScrollbtn]=useState(false);
useEffect(()=>{
  window.addEventListener("scroll",()=>{
    console.log(window.scrollY)
    if(window.scrollY > 100){
      setScrollbtn(true)
    }else{
      setScrollbtn(false)
    }
  })
},[]);

  return (
    <div id='up' className="border container">
      <Header/>
     
      <Hero/>
      <div className='line' />
      <Main/>
      <div className='line' />
      <Contact/>
      <div className='line' />
      <Footer/>

      
          <a style={{opacity: scrollbtn? 1 : 0, transition: "0.7s"}} href='up'>
        <button className='icon-keyboard_arrow_up scroll2top'></button>
      </a>
       

    </div>
  );
}

export default App;
