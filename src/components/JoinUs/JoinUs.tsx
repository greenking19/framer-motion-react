import { motion, useAnimate, useInView, useScroll } from 'framer-motion';
import usp0 from './../../assets/USP0.png';
import usp1 from './../../assets/USP1.png';
import usp2 from './../../assets/USP2.png';
import React, { useEffect } from 'react';
import './JoinUs.css';

interface JoinUsProps {}

const JoinUs: React.FC<JoinUsProps> = (props) => {
  const [scope, animate] = useAnimate();
  const [dashboardRef, dashboardAnimate] = useAnimate();
  const isInView = useInView(scope);
  const isDashboardInView = useInView(dashboardRef);

  const { scrollYProgress } = useScroll({
    target: scope,
    offset: ['end end', 'start start']
  });

  const list = [
    {
      imageUrl: usp0,
      title: 'Saved CO₂',
      number: '90,000g',
      subTitle: 'From Paris to New York',
      bgColor: 'bg-[#005B25]'
    },
    {
      imageUrl: usp1,
      title: 'Tree Planted',
      number: '23,500',
      subTitle: 'Driving on GAS',
      bgColor: 'bg-[#3232FB]'
    },
    {
      imageUrl: usp2,
      title: 'Donation',
      number: '€7,600',
      subTitle: 'From Paris to New York',
      bgColor: 'bg-[#FF6E40]'
    }
  ];

  useEffect(() => {
    if (isInView) {
      animate(scope.current, { marginTop: -200 }, { duration: 0.6 });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isInView]);

  useEffect(() => {
    if (isDashboardInView) {
      dashboardAnimate(
        dashboardRef.current,
        { marginTop: 40, opacity: 1 },
        { duration: 0.6 }
      );
    } else {
      dashboardAnimate(
        dashboardRef.current,
        { marginTop: 80, opacity: 0 },
        { duration: 0.6 }
      );
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isDashboardInView]);

  return (
    <div
      ref={scope}
      className='bg-[#f4f4f4] h-[526px] w-full relative flex flex-col overflow-hidden items-center'
    >
      <svg className='progress' width='75' height='75' viewBox='0 0 100 100'>
        <circle cx='50' cy='50' r='30' pathLength='1' className='bg' />
        <motion.circle
          cx='50'
          cy='50'
          r='30'
          pathLength='1'
          className='indicator'
          style={{ pathLength: scrollYProgress }}
        />
      </svg>
      <div className='z-[999] w-[216px] h-[216px] absolute right-[120px] top-[-108px] bg-center bg-cover bg-stucker-09 visible' />
      <div className='w-[211px] h-[211px] absolute left-[-73px] top-[116px] bg-center bg-cover bg-stucker-05' />
      <div className='w-[220px] h-[220px] absolute left-[359px] top-[266px] rotate-[-147deg] bg-cover bg-center bg-stucker-06' />
      <div className='w-[230px] h-[231px] absolute right-[-78px] top-[246px] rotate-[-22deg] bg-cover bg-center bg-stucker-07' />

      <div className='text-[35px] font-semibold	leading-[35px] mt-[78px] text-[#1A1A1A] font-poly-sans'>
        Come and join us!
      </div>
      <div className='text-[16px] leading-[24px] mt-[8px] font-dm-sans'>
        together with our 134,000 members, Valyuu has already
      </div>

      <div
        ref={dashboardRef}
        className='z-[999] w-[1372px] h-[180px] rounded-[10px] flex justify-between items-center box-border py-[40px] mt-[40px] px-[36px] border border-current bg-[#ffffff]'
      >
        {list.map((item, index) => (
          <div
            key={item.title}
            className='flex w-[384px] h-[112px] justify-between'
          >
            <img
              src={item.imageUrl}
              alt='usp'
              className={`w-[100px] h-[100px] rounded-[10px] ${item.bgColor}`}
            />
            <div className='flex flex-col justify-between text-[#1A1A1A]'>
              <div className='font-dm-sans text-[18px] leading-[27px] font-dm-sans'>
                {item.title}
              </div>
              <div className='text-[50px] font-semibold leading-[50px] font-poly-sans'>
                {item.number}
              </div>
              <div className='text-[18px] leading-[27px] font-dm-sans'>
                {item.subTitle}
              </div>
            </div>
            <div></div>
          </div>
        ))}
      </div>

      <div className='flex items-center p-0 gap-[52px] w-[335px] h-[31px] bottom-[80px] bg-[#f4f4f4]'>
        <span className='text-[14px] font-[dm-sans] not-italic	text-[#1A1A1A]'>
          {' '}
          Google reviews 4.8/5
        </span>
        <span className='text-[14px] font-[dm-sans] not-italic'>
          {' '}
          Trustpilot 4.8/5
        </span>
      </div>
    </div>
  );
};

export default JoinUs;
