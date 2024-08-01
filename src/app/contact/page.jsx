"use client"
import React, { useRef,useState } from 'react'
import { motion } from 'framer-motion'
import emailjs from '@emailjs/browser';
const Contactpage = () => {
  const text="Say Hello"

  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    setError(false);
    setSuccess(false);

    emailjs
      .sendForm(
        'service_8slxn8m',
        'xy2op6i',
        form.current,
        {
          publicKey: 'TJMnmdefFbTP0S-MJ'
        }
       
      )
      .then(
        () => {
          setSuccess(true);
          form.current.reset();
        },
        (error) => {
          console.log(error)
          setError(true);
        }
      );
  };
  return (
    <motion.div className="z-50" initial={{y:"-200vh"}} animate={{y:"0"}} transition={{duration:1}}>
    <div className='h-heightt'>
       <div className='h-full flex flex-col items-center lg:flex-row lg:justify-center lg:gap-[50px] xl:gap-[200px] '>
        {/* TEXT CONTAINER */}
        <div className='flex  h-1/3 justify-center items-center'>
        {/* <h1 className='text-6xl'>Say Hello</h1> */}
         {text.split("").map((t,index)=>{
          return <motion.span className='text-6xl' key={index} initial={{opacity:1}} animate={{opacity:0}} transition={{duration:3,repeat:Infinity,delay:index*0.1}}>
           {t}
          </motion.span>
         })}
          
        </div>


        <div className='flex'>
        <form  ref={form} onSubmit={sendEmail}className='bg-red-50 p-20 flex flex-col gap-[20px] lg:w-[500px] lg:py-[110px] lg:pb-[165px] xl:w-[600px] xl:py-[135px] xl:px-14 '>
          <span className=' font-semibold'>Dear Lama Dev</span>
          <textarea rows={6} className='bg-transparent   border-black border-b-2' name="message"/>
          <span className=' font-semibold' >
            my mail address is
          </span>
          <input name="user_email" className="bg-transparent border-black border-b-2"type="text"/>
          <span className=' font-semibold'>Regards</span>
          <button className='bg-purple-300 rounded-md p-4'>
            send
          </button>
          {success && (
            <span className="text-green-600 font-semibold">
              Your message has been sent successfully!
            </span>
          )}
          {error && (
            <span className="text-red-600 font-semibold">
              Something went wrong!
            </span>
          )}
        </form>
        </div>
       </div>
    </div>
    </motion.div>
  )
}

export default Contactpage
