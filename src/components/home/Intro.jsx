import React from 'react';
import Desktop from '../../img/desktop.png';
import TypingAnimator from 'react-typing-animator';

const Intro = () => {
  const textArray = ["study", "relax", "focus", "work"];

  return (
    <section 
      className="h-screen bg-no-repeat bg-cover flex items-center justify-center"
      style={{backgroundImage: "url(" + Desktop + ")"}}
      >
      <div className='text-center tracking-wider font-semibold'>
        <h1 className='text-5xl mb-4'>Welcome to LOFI Clone</h1>
        <h1 className='text-5xl mb-4'>Your calm, digital</h1>
        <h1 className='text-5xl mb-4'>environment to</h1>

        <TypingAnimator
          textArray={textArray}
          cursorColor='#fff'
          textColor='#fff'
          fontSize='48px'
          typingSpeed={40}
          delaySpeed={1500}
          backspace
          loop
        />
      </div>
    </section>
  )
}

export default Intro