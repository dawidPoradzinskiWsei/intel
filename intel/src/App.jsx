import './App.css';
import { Outlet } from "react-router-dom";
import SingleByte from './variable/SingleByte';
import { useEffect, useState } from 'react';

function App() {
  const [hBytes, setHBytes] = useState([]);
  const [lBytes, setLBytes] = useState([]);

  let hTab = [];
  let lTab = [];
  for(let i = 0; i < 4; i++)
  {
    let letter = 'A';
    letter = letter.charCodeAt(0);
    letter += i;
    letter = String.fromCharCode(letter);
    console.log(letter);
    hTab.push(<SingleByte id={i} firstLetter={letter} secondLetter="H" data={Math.floor(Math.random() * 255)}></SingleByte>);
    lTab.push(<SingleByte id={i} firstLetter={letter} secondLetter="L" data={Math.floor(Math.random() * 255)}></SingleByte>);
  }
  
  useEffect(()=>{
    setHBytes(hTab);
    setLBytes(lTab);
  }, []);

  return (
    <div className="flex w-screen h-screen bg-gradient-to-tr from-stone-600 to-zinc-800">

        <div className='hidden lg:flex lg:w-[25%] h-full lg:flex-col lg:justify-center lg:gap-12 lg:p-4 lg:items-center'>
          {hBytes}
        </div>

        <div className='flex w-screen px-10 lg:px-0 lg:w-[50%] h-full items-center'>
            <div className='w-full h-[50%]'>
              <Outlet/>
            </div>
        </div>

        <div className='hidden lg:flex lg:w-[25%] h-full lg:flex-col lg:justify-center lg:gap-12 lg:p-4 lg:items-center'>
          {lBytes}
        </div>

    </div>
  );
}

export default App;
