import './main.css';
import one from './../../assets/1.png';
import two from './../../assets/2.png';
import three from './../../assets/3.png';
import four from './../../assets/4.png';
import five from './../../assets/5.png';
import six from './../../assets/6.png';
import seven from './../../assets/7.png';
import eight from './../../assets/8.png';
import nine from './../../assets/9.png';
import { motion, AnimatePresence } from "framer-motion";

import { useState } from 'react';
const myproject = [
  {title:"coffee shop", category:["css"],img:one, p:"Start your day with a black coffee ,  roasted with love we will come to you when you canot come to us ,order your invigorating coffee right now", github:""}, 
  {title:"spaceX-clone", category:["css"],img:two, p:"Clone for SpaceX, founded by Elon Musk in 2002, a private aerospace manufacturer and space transportation company", github:""},
  {title:"e commerce website", category:["js"],img:three, p:"Welcome to the Harry Potter book website. Dive into the magical world of Harry Potter with detailed information about each book in the series.", github:""},
  {title:"to do list", category:["js"],img:four, p:"An intuitive interface to help you create, manage, and organize your tasks efficiently. Easily add tasks, set deadlines, and prioritize your to-do list to stay on top of your goals.", github:""},
  {title:"quiz", category:["js"],img:five, p:"A wide range of questions on various topics, from general knowledge to specialized subjects. Take quizzes, track your scores, and see how you rank against other users.", github:""},
  {title:"XO game", category:["js"],img:six, p:"The classic tic-tac-toe experience brought to life online. offers a fun and interactive way to play the timeless game.", github:""},
  {title:"productivity app", category:["api","react"],img:seven, p:"Each productive moment is a sentence, and each goal achieved a chapter. Embrace the potential within each day as a blank page waiting for your unique and inspiring narrative.", github:""},
  {title:"resturant", category:["react"],img:eight, p:"Welcome to our restaurant where delightful culinary experiences await you, now you can order your favorite meal.", github:""},
  {title:"weather app", category:["api","js"],img:nine, p:"Real-time weather updates, detailed forecasts, and radar maps to help you plan your day with confidence, along with information on temperature, humidity and wind speed.", github:""},
]




function Main() {
 
  
    const [arr,setArr]=useState(myproject);
    const [activenow,setActivenow]=useState("all");

    const filterfunction = (categorychosen) =>{
      setActivenow (categorychosen);
      const chosen = myproject.filter((item)=> {
        const bbb = item.category.filter((mitem)=>{
         return mitem === categorychosen
        })
       return bbb[0] === categorychosen     /* for using filter() on second array use bbb[0] === category chosen as it create new array not element     
       
                                               for using find() on second array use bbb === category chosen as it compare element by element not an array  */ 
      })
      setArr(chosen);
    }
  return (
    <main className=" flex">
      <section className=' flex leftsection'>
         <button onClick={()=>{setActivenow ("all");
                               setArr(myproject);
         }} 
         className={activenow === "all"? "active" : null }> all projects</button>
         <button onClick={()=> {
         
         filterfunction("css");
        } }
         className={activenow === "css"? "active" : null }>html & css</button>
         <button onClick={()=>{
                   filterfunction("js");

         }} 
         className={activenow === "js"? "active" : null }>javascript</button>
         <button onClick={()=>{       
            filterfunction("react");

         }} 
         className={activenow === "react"? "active" : null }>react js</button>
         <button onClick={()=>{    
               filterfunction("api");

         }} 
         className={activenow === "api"? "active" : null }>APIs</button>
      </section>
      
     

      <section
      className='flex rightsection'>
      <AnimatePresence>
      
       {arr.map((item)=>{
        return(
          <motion.article layout 
          initial={{ transform: "scale(0)"}}
          animate={{transform: "scale(1)" }} 
          transition={{type: "spring"}}
          key={item} className=' card'>
          <img width={266} src={item.img} alt=''></img>
          <div style={{width: "266px"}} className='box '>
            <h1 className='title'>{item.title}</h1>
            <p className='subtitle'>{item.p}</p>
            <div className='flex icons'>
              <div style={{gap: "11px"}} className='flex'>
              <div className='icon-link'></div>
              <div className='icon-github'></div>
              </div>
              <a className='link flex'>
                more 
                <span style={{alignSelf: "end"}} className='icon-arrow-right2'></span>
              </a>
              </div>  
            
          </div>

        </motion.article>
        )
       } 
        )}
         </AnimatePresence>
      </section>
     
     
    </main>
  );
}

export default Main;
