import './App.css';
import { Outlet } from "react-router-dom";
import SingleByte from './variable/SingleByte';
import { useEffect, useState } from 'react';

function App() {
  const [bytes, setBytes] = useState([]);
  const [hBytes, setHBytes] = useState([]);
  const [lBytes, setLBytes] = useState([]);


  const randNumber = () => {
    let number = "";
    for(let i = 0; i < 8; i++)
    {
      number += Math.floor(Math.random() * 2);
    }
    return number
  }


  // let hTab = [];
  // let lTab = [];
  // for(let i = 0; i < 4; i++)
  // {
  //   let letter = 'A';
  //   letter = letter.charCodeAt(0);
  //   letter += i;
  //   letter = String.fromCharCode(letter);

  //   let binary = randNumber();
  //   hTab.push(<SingleByte id={letter + "H"} binary = {binary}></SingleByte>);
  //   binary = randNumber();
  //   lTab.push(<SingleByte id={letter + "L"} binary = {binary}></SingleByte>);
  // }
    
  let tab = [];
  for(let i = 0; i < 6; i++)
  {
    let letter = 'A';
    letter = letter.charCodeAt(0);
    let seccondLetter;
    if(i < 4)
    {
      letter += i;
      seccondLetter = "H";
    }
    else
    {
      letter += (i - 4);
      seccondLetter = "L";
    }
    letter = String.fromCharCode(letter);
    let binary = randNumber();

    tab.push(<SingleByte id={letter + seccondLetter} binary = {binary} i = {i}></SingleByte>);
  }
  tab.push(<SingleByte id={"CL"} binary = {"00101010"} i = {6}></SingleByte>);
  tab.push(<SingleByte id={"DL"} binary = {"00010100"} i = {7}></SingleByte>);

  useEffect(() => {
    setBytes(tab);
  }, [])

  useEffect(() => {

    let htab = [];
    let ltab = [];
    for(let i = 0; i < 8; i++) {
      if(i < 4){
        htab.push(bytes[i]);
      }
      else{
        ltab.push(bytes[i]);
      }
    }
    setHBytes(htab);
    setLBytes(ltab);

  }, [bytes]);


  return (
    <div className="flex w-screen h-screen bg-gradient-to-tr from-stone-600 to-zinc-800">

        <div className='hidden lg:flex lg:w-[25%] h-full lg:flex-col lg:justify-center lg:gap-12 lg:p-4 lg:items-center'>
          {hBytes}
        </div>

        <div className='flex w-screen px-10 lg:px-0 lg:w-[50%] h-full items-center'>
            <div className='w-full h-[50%]'>
              <Outlet context={[bytes, setBytes]}/>
            </div>
        </div>

        <div className='hidden lg:flex lg:w-[25%] h-full lg:flex-col lg:justify-center lg:gap-12 lg:p-4 lg:items-center'>
          {lBytes}
        </div>

    </div>
  );
}

export default App;
