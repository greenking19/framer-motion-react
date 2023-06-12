import { motion } from 'framer-motion';
import React from 'react';
import './Believe.css';
import useIsMobile from '../../hooks/useIsMobile';

// types
import type { Variants } from 'framer-motion';

const Believe = () => {
  const [active, setActive] = React.useState('card1');
  const isMobile = useIsMobile();

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
    },
    mobile: {
      width: '100%',
      gap: 0
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
    },
    mobile: {
      width: '100%',
      gap: 0
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
    <div className='w-full lg:overflow-hidden h-[994px] flex flex-col lg:h-[796px] px-[20px]  bg-white lg:relative'>
      {/* title */}
      <div className='lg:absolute lg:left-[34px] mt-[72px] flex flex-col items-center lg:top-[229px]'>
        <div className='w-[325px] text-[16px] leading-[24px] text-center font-dm-sans text-[#1A1A1A] lg:w-[331px]'>
          We believe
        </div>
        <div className='w-[325px] text-[24px] leading-[24px] text-center font-semibold lg:w-[331px] text-[35px] leading-[35px] text-[#1A1A1A] font-poly-sans font-semibold'>
          Save planet is something everyone can do
        </div>
      </div>

      {/* card 1 */}
      <motion.div
        layout
        className='w-full mt-[24px] h-[373px] box-borde lg:h-[355px] lg:absolute lg:left-[368px] bg-[#EDE9FF] rounded-[5px] top-[130px] border border-current lg:p-[20px] lg:gap-[30px] flex flex-col lg:flex-row'
        animate={!isMobile ? (active === 'card1' ? 'hover' : 'init') : 'mobile'}
        variants={cardVariants}
        transition={{ duration: 0.6 }}
      >
        <div
          className={`w-full h-[189px] lg:h-[315px] lg:w-[330px] bg-center bg-cover bg-invana`}
        />
        <motion.div
          variants={titleVariants}
          className='mt-[24px] ml-[20px] text-[18px] lg:m-0 leading-[18px] font-poly-sans lg:absolute lg:text-[20px] lg:leading-[20px] font-semibold'
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
            <div className='font-poly-sans text-[14px] leading-[21px] lg:text-[16px] leading-[20px] lg:font-bold mt-[8px] lg:mt-[3.4px]'>
              donate the value of your product to Stichting Leergeld.
            </div>
          </div>
          <div className='flex items-center justify-center text-white mt-[32px] w-[120px] px-[8px] py-[12px] h-[36px] lg:mt-[24px] lg:h-[60px] lg:w-[161px] bg-[#3232FB] rounded-[30px]'>
            <p className='text-[14px] leading-[21px] lg:text-16px] lg:font-bold lg:leading-[24px]'>
              Know more {'->'}
            </p>
          </div>
        </motion.div>
      </motion.div>
      {/* card 2 */}
      <motion.div
        className='mt-[20px] w-full h-[373px] lg:top-[120px] lg:left-[1025px] box-borde flex flex-col lg:flex-row lg:w-[330px] lg:overflow-hidden lg:h-[355px] lg:absolute bg-[#E8FFA8] border border-current rounded-[5px] lg:p-[20px] lg:gap-[30px]'
        animate={!isMobile ? (active === 'card2' ? 'hover' : 'init') : 'mobile'}
        variants={card2Variants}
        transition={{ duration: 0.6 }}
        onHoverStart={() => setActive('card2')}
        onHoverEnd={() => setActive('card1')}
      >
        <div
          className={`w-full h-[189px] lg:h-[315px] bg-center w-[330px] bg-center bg-cover bg-surface-dm index-1`}
        />
        <motion.div
          variants={titleVariants}
          transition={{ duration: 0.6 }}
          className='mt-[24px] ml-[20px] text-[18px] lg:m-0 leading-[18px] font-poly-sans lg:absolute lg:text-[20px] lg:leading-[20px] font-semibold'
        >
          {/* <motion.div
          variants={titleVariants}
          transition={{ duration: 0.6 }}
          className='mt-[24px] ml-[20px] text-[18px] leading-[18px] lg:absolute font-poly-sans lg:text-[20px] lg:leading-[20px] font-semibold'
        > */}
          Do some good
        </motion.div>
        <motion.div
          variants={contentVariants}
          transition={{ duration: 0.6 }}
          className='mx-[20px] left-[8px] flex flex-col justify-center'
        >
          <div className='w-[330px]'>
            <div className='text-[14px] leading-[21px] font-poly-sans lg:text-[16px] lg:leading-[20px] lg:font-bold mt-[8px] lg:mt-[3.4px]'>
              donate the value of your product to Stichting Leergeld.
            </div>
          </div>
          <div className='mt-[32px] w-[120px] h-[36px] items-center flex justify-center lg:mt-[24px] text-white lg:h-[60px] lg:w-[161px] bg-[#3232FB] rounded-[30px]'>
            <p className='text-[14px] leading-[21px] lg:text-[16px] lg:font-bold lg:leading-[24px]'>
              Know more {'->'}
            </p>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Believe;
