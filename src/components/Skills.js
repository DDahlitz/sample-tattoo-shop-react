import React, { useEffect, useState } from 'react'

  // useInView hook
import { useInView } from 'react-intersection-observer'
  //react circular
import { CircularProgressbar } from 'react-circular-progressbar'
  // react circular styles
import 'react-circular-progressbar/dist/styles.css'
// import motion 
import { motion } from 'framer-motion'
  // import fadeIn
import { fadeIn } from '../variants'

const Skills = () => {
    //inView hook
  const { ref, inView } = useInView ({
    threshold: 0.2,
  })

    //progress bar states
  const [fullBody, setFullBody] = useState(0)
  const [piercing, setPiercing] = useState(0)
  const [fullColor, setFullColor] = useState(0)
  const [blackAndGrey, setBlackAndGrey] = useState(0)


  useEffect (() => {
    if(inView) {
      setTimeout(() => {
        if (fullBody < 90) {
          setFullBody(fullBody +1)
        }
        if (piercing < 0) {
          setPiercing(piercing +1)
        }
        if (fullColor < 99) {
          setFullColor(fullColor +1)
        }
        if (blackAndGrey < 85) {
          setBlackAndGrey(blackAndGrey +1)
        }
      }, 20)
    } else {
      setFullBody(0)
      setPiercing(0)
      setFullColor(0)
      setBlackAndGrey(0)
    }
  },[inView, fullBody, piercing, fullColor, blackAndGrey])

  //circular progressbar styles
  const styles = {
    path: {
      stroke: '#111',
    },
    trail: {
      stroke: '#eee',
    },
    text: {
      fill: '#111',
      fontSize: '24px',
    },
  }

  return (
    <motion.section ref = { ref } className='section font-primary'
        variants = { fadeIn('up') }
        initial = 'hidden'
        whileInView = { 'show' }
        viewport = {{ once: false, amount: 0.1 }}
        >
      <div className = 'container mx-auto'>
        <div className = 'flex flex-col xl:flex-row justify-between items-center gap-y-12'>
            {/* circular item */}
          <div className = 'w-[150px] lg-:w-[275px] flex flex-col items-center gap-y-6'>
            <CircularProgressbar 
              strokeWidth = { 1.25 } 
              value = { fullBody } 
              styles = { styles } 
              text = {`${ fullBody }%`}/>
            {/* text */}
            <div className = 'uppercase font-light tracking-[1.2px] text-center'>
              Full Body Tattoo
            </div>
          </div>
              {/* circular item */}
          <div className = 'w-[150px] lg-:w-[275px] flex flex-col items-center gap-y-6'>
            <CircularProgressbar 
              strokeWidth = { 1.25 } 
              value = { piercing } 
              styles = { styles } 
              text = {`${ piercing }%`}/>
            {/* text */}
            <div className = 'uppercase font-light tracking-[1.2px] text-center'>
              Piercing
            </div>
          </div>
              {/* circular item */}
          <div className = 'w-[150px] lg-:w-[275px] flex flex-col items-center gap-y-6'>
            <CircularProgressbar 
              strokeWidth = { 1.25 } 
              value = { fullColor } 
              styles = { styles } 
              text = {`${ fullColor }%`}/>
            {/* text */}
            <div className = 'uppercase font-light tracking-[1.2px] text-center'>
              Full Color Tattoo
            </div>
          </div>
            {/* circular item */}
          <div className = 'w-[150px] lg-:w-[275px] flex flex-col items-center gap-y-6'>
            <CircularProgressbar 
              strokeWidth = { 1.25 } 
              value = { blackAndGrey } 
              styles = { styles } 
              text = { `${ blackAndGrey }%` }/>
            {/* text */}
            <div className = 'uppercase font-light tracking-[1.2px] text-center'>
              Black and Grey Tattoo
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  )
}

export default Skills;
