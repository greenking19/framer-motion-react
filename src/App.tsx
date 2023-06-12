import { useRef } from 'react';
import './App.css';
import Believe from './components/Believe/Believe';
import JoinUs from './components/JoinUs';

function App() {
  return (
    <div className='container 2lx h-full flex flex-col mx-auto font-dm-sans'>
      <div className='h-[480px] w-full' />

      <div
        className={`container 2lx  h-[512px] bg-[url('./assets/surface.png')] py-[80px]`}
      >
        <div className='flex flex-col h-full items-center	justify-between text-white'>
          <div className='flex flex-col items-center'>
            <div className='text-[18px]'> Every year, there are </div>
            <div className='text-[50px] leading-[50px] font-semibold'>
              100,000,00
            </div>
            <div className='text-[18px]'> end-of-use electronics,</div>
          </div>
          <div className='text-[50px] leading-[50px] font-semibold'>2000 €</div>
          <div className='flex flex-col items-center'>
            <div className='text-[18px]'>waste is generated</div>
            <div className='text-[50px] leading-[50px] font-semibold'>
              1000 KG
            </div>
            <div className='text-[18px]'>value is ignored, and eventually </div>
          </div>
        </div>
      </div>
      <Believe />
      <JoinUs />
      <div className='h-[1480px] w-full' />
    </div>
  );
}

export default App;
