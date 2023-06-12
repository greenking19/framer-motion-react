import { useAnimate, useInView } from 'framer-motion';
import usp0 from './../../assets/USP0.png';
import usp1 from './../../assets/USP1.png';
import usp2 from './../../assets/USP2.png';
import React, { useEffect } from 'react';
import './JoinUs.css';
import useIsMobile from '../../hooks/useIsMobile';

interface JoinUsProps {}

const JoinUs: React.FC<JoinUsProps> = (props) => {
  const [scope, animate] = useAnimate();
  const [dashboardRef, dashboardAnimate] = useAnimate();
  const isInView = useInView(scope);
  const isMobile = useIsMobile();
  const isDashboardInView = useInView(dashboardRef);

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
    if (isInView && !isMobile) {
      animate(scope.current, { marginTop: -200 }, { duration: 1.2 });
    } else {
      animate(scope.current, { marginTop: 0 }, { duration: 1.2 });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isInView, isMobile]);

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
      className='h-[956px] bg-[#f4f4f4] lg:h-[526px] w-full relative px-[20px] flex flex-col overflow-hidden items-center'
    >
      <div className='z-[999] w-[128px] h-[128px] lg:w-[216px] lg:h-[216px] absolute right-[15px] top-[-64px] rotate-[-145deg] lg:right-[120px] lg:rotate-[0] lg:top-[-108px] bg-center bg-cover bg-stucker-09 visible' />
      <div className='w-[130px] h-[130px] lg:w-[211px] lg:h-[211px] absolute left-[-60px] top-[292px] rotate-[-28.5deg] lg:rotate-[0]  lg:left-[-73px] lg:top-[116px] bg-center bg-cover bg-stucker-05' />
      <div className='lg:hidden lg:w-[220px] lg:h-[220px] absolute left-[359px] top-[266px] rotate-[-147deg] bg-cover bg-center bg-stucker-06' />
      <div className='w-[142px] h-[142px] lg:w-[230px] lg:h-[231px] absolute right-[-62px] top-[526px] lg:right-[-78px] lg:top-[246px] rotate-[-22deg] bg-cover bg-center bg-stucker-07' />

      <div className='w-full text-center mt-[72px] text-[24px] leading-[24px] lg:text-[35px] font-semibold	lg:leading-[35px] lg:mt-[78px] text-[#1A1A1A] font-poly-sans'>
        Come and join us!
      </div>
      <div className='w-full text-center text-[16px] leading-[24px] mt-[8px] font-dm-sans'>
        together with our 134,000 members, Valyuu has already
      </div>

      <div
        ref={dashboardRef}
        className='z-[999] w-full h-[447px] lg:w-[1372px] lg:items-center lg:h-[180px] rounded-[10px] flex flex-col lg:flex-row justify-between items-center box-border py-[32px] px-[20px] lg:py-[40px] lg:mt-[40px] lg:px-[36px] border border-current bg-[#ffffff]'
      >
        {list.map((item, index) => (
          <>
            <div
              key={item.title}
              className='flex w-full lg:w-[384px] lg:h-[112px] justify-between'
            >
              <img
                src={item.imageUrl}
                alt='usp'
                className={`w-[64px] h-[64px] lg:w-[100px] lg:h-[100px] rounded-[10px] ${item.bgColor}`}
              />
              <div className='flex flex-1 ml-[16px] lg:ml-[20] flex-col justify-between text-[#1A1A1A]'>
                <div className='font-dm-sans text-[16px] leading-[24px] lg:text-[18px] lg:leading-[27px] font-dm-sans'>
                  {item.title}
                </div>
                <div className='text-[32px] leading-[32px] lg:text-[50px] lg:leading-[50px] font-semibold font-poly-sans'>
                  {item.number}
                </div>
                <div className='text-[14px] leading-[21px] lg:text-[18px] lg:leading-[27px] font-dm-sans'>
                  {item.subTitle}
                </div>
              </div>
              <div></div>
            </div>
            {index !== list.length - 1 && (
              <div className='h-[0] w-full lg:w-[0] lg:h-[80px] border-[1px] border-current' />
            )}
          </>
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
