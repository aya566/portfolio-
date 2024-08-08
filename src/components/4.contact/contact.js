import './contact.css';
import Lottie from "lottie-react";
import email from "../../../src/animation/email.json";
import done from "../../../src/animation/done.json";
import { useForm, ValidationError } from '@formspree/react';





function Contact() {
  const [state, handleSubmit] = useForm("mjkbwapr");
  
  return (
    <section className='contact'>
      <h1>
        <span className='icon-envelope'></span>
        Contact us 
      </h1>
      <p>contact us for more information and get notified when i publish something new </p>

<div className='flex' style={{justifyContent:"space-between"}}>
  <form onSubmit={handleSubmit} className=''>
    <div className='flex'>
      <label htmlFor='email'>Email Address:-</label>
      <input autoComplete='off' required placeholder='email address' type='email' id='email' name='email' />   
      <ValidationError 
        prefix="Email" 
        field="email"
        errors={state.errors}
      /> 
    </div>
    <div className='flex' style={{marginTop:"24px"}}>
      <label  htmlFor='message'> your message:-</label>
      <textarea required type='message' placeholder='your message' name='message' id='message' /> 
      <ValidationError 
        prefix="Message" 
        field="message"
        errors={state.errors}
      />
    </div>
    <button  type="submit" disabled={state.submitting} className='submit'>
      {state.submitting ? "Submitting..." : "Submit"}
      </button>
    { state.succeeded && (
      <p className='flex' style={{marginTop:"2rem"}}>
        <Lottie loop="false" style={{height:"30px"}} animationData={done} /> Your message has been sent successfully</p>
    )}
  </form>
  

  <div className='animation'> <Lottie  animationData={email} /> </div>

</div>
    </section>
  );
}

export default Contact;
