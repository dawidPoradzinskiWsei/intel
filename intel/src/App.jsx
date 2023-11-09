import './App.css';
import { Outlet } from "react-router-dom";
import SingleByte from './variable/SingleByte';

function App() {
  let singleBytes0 = [];
  let singleBytes1 = [];


  for(let i = 0; i < 4; i++)
  {
    let letter = 'A';
    letter = letter.charCodeAt(0);
    letter += i;
    letter = String.fromCharCode(letter);
    console.log(letter);
    singleBytes0.push(<SingleByte key={i} firstLetter={letter} secondLetter="H"/>);
    singleBytes1.push(<SingleByte key={i} firstLetter={letter} secondLetter="L"/>);
  }

  return (
    <div className="flex w-screen h-screen bg-gradient-to-tr from-stone-600 to-zinc-800">

        <div className='hidden lg:flex lg:w-[25%] h-full lg:flex-col lg:justify-center lg:gap-12 lg:p-4 lg:items-center'>
          {singleBytes0}
        </div>

        <div className='flex w-screen px-10 lg:px-0 lg:w-[50%] h-full items-center'>
            <div className='w-full h-[50%]'>
              <Outlet/>
            </div>
        </div>

        <div className='hidden lg:flex lg:w-[25%] h-full lg:flex-col lg:justify-center lg:gap-12 lg:p-4 lg:items-center'>
          {singleBytes1}
        </div>

    </div>
  );
}

export default App;
