import { useState , useEffect } from 'react';
import './header.css';

function Header() {
    const [showModel,setshowModel] =useState(false);
    const [mode,setMode]= useState(localStorage.getItem("currentmode") ?? "dark"); /* ?? for null from loccalstorage as a backup value 
(local....... ) for remaining light after refresh ,or dark after refresh */ 

    useEffect(()=>{
      if( mode === "light"){
        document.body.classList.remove("dark");
        document.body.classList.add("light");
      }else{
        document.body.classList.remove("light");
        document.body.classList.add("dark");
      }
    },[mode])
  return (
    <header className=' flex'>
<button className=' menu icon-menu ' onClick={()=>{
    setshowModel(true)
}}/>
        <div/>
        <nav>

          <ul className='flex'>
            <li><a href=''>About</a></li>
            <li><a href=''>Articles</a></li>
            <li><a href=''>Projects</a></li>
            <li><a href=''>Speaking</a></li>
            <li><a href=''>Contact</a></li>
          </ul>

        </nav>
        <button onClick={()=>{
          /* send value to localstorage key,value*/ 
          localStorage.setItem("currentmode", mode === "dark"? "light" : "dark");
/* get value from localstorage ("key") */
          setMode(localStorage.getItem("currentmode"))


        }} className='iconmode flex' >
          { mode === "dark"? (<span className= "icon-moon-o" ></span>) :
           (<span className= "icon-sun" ></span>)
          }

        </button>
          
       

        {showModel && (
            <div className=' fixed'>
            
            <ul className=' model'>
                <li><button className='icon-cross' onClick={()=>{
                      setshowModel(false)
                }}/></li>
            <li><a href=''>About</a></li>
            <li><a href=''>Articles</a></li>
            <li><a href=''>Projects</a></li>
            <li><a href=''>Speaking</a></li>
            <li><a href=''>Contact</a></li>
          </ul>
           
        </div>
        )}
    </header>
  );
}

export default Header;
