import './App.css';
import Believe from './components/Believe/Believe';
import JoinUs from './components/JoinUs/JoinUs';
import Year from './components/Year/Year';

function App() {
  return (
    <div className='w-full h-full flex flex-col mx-auto font-dm-sans'>
      <div className='h-[480px] w-full' />
      <Year />
      <Believe />
      <JoinUs />
      <div className='h-[1480px] w-full' />
    </div>
  );
}

export default App;
