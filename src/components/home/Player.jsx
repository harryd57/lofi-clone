import React, {useState} from 'react';
import ReactPlayer from 'react-player';
import Day from '../../assets/day.mp4';
import Rain from '../../assets/day-rain.mp4';
import Rainfall from '../../assets/rainfall.mp3';

const Player = () => {
  const [toggle, setToggle] = useState(false);
  let audio = new Audio(Rainfall);

  const handleToggle = () =>{
    setToggle(!toggle);
    toggle ? audio.play() : audio.pause();
    audio.loop = true;
  }

  return (
    <section className='h-screen max-w-[1280px] mx-auto'>
      <div>
        <ReactPlayer
          url={toggle ? Rain : Day}
          controls={false}
          playing={true}
          height={400}
          width={500}
          loop={true}
        />
      </div>

      <button className='ml-2 text-sm border-2 border-[#F3A592] py-2 px-6 rounded-lg'
      onClick={()=> handleToggle()}
      >
        Click me
      </button>
      <button className='ml-2 text-sm border-2 border-[#F3A592] py-2 px-6 rounded-lg'
      onClick={()=> audio.pause()}
      >
        Click me
      </button>
    </section>
  )
}

export default Player