import { motion } from 'framer-motion';
import React from 'react';
import './Believe.css';

// types
import type { Variants } from 'framer-motion';

const Believe = () => {
  const [active, setActive] = React.useState('card1');

  const cardVariants: Variants = {
    init: {
      width: '370px',
      gap: 0,
      rotate: '7deg'
    },
    hover: {
      rotate: '-7deg',
      width: '736px',
      gap: 30
    }
  };

  const card2Variants: Variants = {
    init: {
      rotate: '7deg',
      gap: 0,
      width: '370px'
    },
    hover: {
      left: 716,
      rotate: '-7deg',
      width: '736px'
    }
  };

  const titleVariants: Variants = {
    init: {
      width: 330,
      color: 'white',
      zIndex: 999,
      left: 102.5,
      top: 167.5
    },
    hover: {
      width: 330,
      color: 'black',
      left: 364.5,
      zIndex: 999,
      top: 94
    }
  };

  const contentVariants: Variants = {
    init: {
      display: 'none',
      opacity: 0
    },
    hover: {
      display: '',
      opacity: 1
    }
  };

  return (
    <div className='w-full h-[596px] bg-white relative box-content pb-[200px]'>
      <div className='absolute left-[34px] top-[50%] translate-y-[-50%]'>
        <div className='w-[331px]'>We believe</div>
        <div className='w-[331px] text-[35px] leading-[35px] font-poly-sans font-semibold'>
          Save planet is something everyone can do
        </div>
      </div>

      {/* card 1 */}
      <motion.div
        layout
        className='card1 box-borde h-[355px] absolute left-[368px] bg-[#EDE9FF] rounded-[5px] top-[130px] border border-current p-[20px] gap-[30px] flex'
        animate={active === 'card1' ? 'hover' : 'init'}
        variants={cardVariants}
        transition={{ duration: 0.6 }}
      >
        <div
          className={`h-[315px] w-[330px] bg-blue-600 bg-center bg-cover bg-invana index-1`}
        />
        <motion.div
          variants={titleVariants}
          className='font-poly-sans absolute text-[20px] leading-[20px] font-semibold'
          transition={{ duration: 0.6 }}
        >
          Sustainability
        </motion.div>
        <motion.div
          className='mx-[20px] flex flex-col justify-center'
          variants={contentVariants}
          transition={{ duration: 0.6 }}
        >
          <div className='w-[330px]'>
            <div className='font-poly-sans text-[16px] leading-[20px] font-bold mt-[3.4px]'>
              donate the value of your product to Stichting Leergeld.
            </div>
          </div>
          <div className='container flex items-center justify-center mt-[24px] text-white h-[60px] w-[161px] bg-[#3232FB] rounded-[30px]'>
            <p className='text=[16px] font-bold leading-[24px]'>
              Know more {'->'}
            </p>
          </div>
        </motion.div>
      </motion.div>
      {/* card 2 */}
      <motion.div
        className='top-[120px] left-[1025px] box-borde flex w-[330px] overflow-hidden h-[355px] absolute bg-[#E8FFA8] border border-current rounded-[5px] p-[20px] gap-[30px]'
        animate={active === 'card2' ? 'hover' : 'init'}
        variants={card2Variants}
        transition={{ duration: 0.6 }}
        onHoverStart={() => setActive('card2')}
        onHoverEnd={() => setActive('card1')}
      >
        <div
          className={`h-[315px] bg-center w-[330px] bg-center bg-cover bg-surface-dm index-1`}
        />
        <motion.div
          variants={titleVariants}
          transition={{ duration: 0.6 }}
          className='absolute font-poly-sans text-[20px] leading-[20px] font-semibold'
        >
          Do some good
        </motion.div>
        <motion.div
          variants={contentVariants}
          transition={{ duration: 0.6 }}
          className='mx-[20px] left-[8px] flex flex-col justify-center'
        >
          <div className='w-[330px]'>
            <div className='font-poly-sans text-[16px] leading-[20px] font-bold mt-[3.4px]'>
              donate the value of your product to Stichting Leergeld.
            </div>
          </div>
          <div className='container flex items-center justify-center mt-[24px] text-white h-[60px] w-[161px] bg-[#3232FB] rounded-[30px]'>
            <p className='text=[16px] font-bold leading-[24px]'>
              Know more {'->'}
            </p>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Believe;
