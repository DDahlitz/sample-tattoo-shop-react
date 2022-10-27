import React, { useState } from 'react';

  // data
import { interviewData } from '../data'
  // modal video
import ModalVideo from 'react-modal-video'
  // modal video scss
import '../modalvideo.scss'
  // motion
import { motion } from 'framer-motion'
  // fadeIn
import { fadeIn } from '../variants'

const Interview = () => {
    //interview data
  const { title, btnText, btnIcon } = interviewData
  const [isOpen, setIsOpen] = useState(false)

  return (
    <motion.section variants = { fadeIn('up') }
      initial = 'hidden'
      whileInView = { 'show' }
      viewport = {{ once: false, amount: 0.1 }}
      className = 'bg-dark section bg-interview bg-no-repeat bg-cover bg-center lg:h-[812px]'>
      <div className = 'cpntainer mx-auto h-full'>
        <div className = 'flex flex-col justify-center h-full'>
          <div className = 'flex flex-col items-start max-w-[880px]'>
              {/* title */}
            <motion.h3 variants = { fadeIn('down') }
              className = 'text-white text-[40px] lg:text-[60px] leading-[1.1] font-tertiary -tracking-[1.5px] capitalize b-dark'>
              { title }
            </motion.h3>
            <motion.div variants = { fadeIn('down') }>
                {/* play btn */}
              <div onClick = {() => setIsOpen (true)} 
                className = 'flex text-white items-center gap-x-5 cursor-pointer hover:opacity-80 transition'>
                  {/* border */}
                <div className = 'w-[70px] h-[70px] lg:w-[91px] lg:h-[91px] border border-white/40 rounded-full text-dark p-[5px] lg:p-[8px]'>
                    {/* inner */}
                  <div className = 'bg-white w-full h-full rounded-full flex justify-center items-center'>
                    <div className = 'pl-1'> { btnIcon } </div>
                  </div>
                    {/* btn text */}
                </div>
                <div className = 'font-primary uppercase' > 
                  { btnText } 
                </div>
              </div>
            </motion.div>
              {/* modal video */}
            <ModalVideo 
              channel = 'youtube' 
              autoplay 
              isOpen = {isOpen} 
              videoId = 'Ec98gRROBrU' 
              onClose = {() => setIsOpen(false)} />
          </div>
        </div>
      </div>
    </motion.section>
  )
}

export default Interview;
