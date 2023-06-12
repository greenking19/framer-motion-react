import React from 'react';

const Year = () => {
  return (
    <div className="container w-full bg-cover bg-center h-[364px] lg:h-[512px]  bg-[url('./assets/surface01.png')] lg:bg-[url('./assets/surface.png')] lg:py-[80px]">
      <div className='flex flex-col w-full h-full items-center justify-center lg:justify-between text-white'>
        <div className='flex flex-col items-center'>
          <div className='text-[16px] lg:text-[18px]'>
            Every year, there are
          </div>
          <div className='text-[32px] leading-[32px] lg:text-[50px] lg:leading-[50px] font-semibold'>
            100,000,00
          </div>
          <div className='text-[16px] lg:text-[18px]'>
            end-of-use electronics,
          </div>
        </div>
        <div className='text-[32px] mt-[20px] leading-[32px] lg:text-[50px] lg:leading-[50px] font-semibold'>
          2000 €
        </div>
        <div className='flex mt-[20px] flex-col items-center'>
          <div className='text=[16px] lg:text-[18px]'>waste is generated</div>
          <div className='text-[32px] leading-[32px] lg:text-[50px] lg:leading-[50px] font-semibold'>
            1000 KG
          </div>
          <div className='text-[16px] lg:text-[18px]'>
            value is ignored, and eventually
          </div>
        </div>
      </div>
    </div>
  );
};

export default Year;
