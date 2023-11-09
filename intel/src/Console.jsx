import {  useRef } from "react";

const Console = () => {

    const consRef = useRef();

    const handleKeyDown = (event) => {
        if(event.key === 'Enter')
        {
            let consoleValue = event.target.value;
            if(consoleValue !== "")
            {
                let e = document.createElement('span');
                e.innerHTML = "C:\\Dayid>" + consoleValue;

                consRef.current.appendChild(e);
                CheckCommend(consoleValue);
                event.target.value = "";
            }
        }
    }

    const CheckCommend = (props) => {
        
        let length = props.indexOf(" ");

        if(length == -1){
            length = props.length;
        }

        switch(props.substring(0, length).toUpperCase()){
            case "MOV":{
                console.log("true");
                break;
            }
            default: {
                console.log("command not found");
                break;
            }
        }
    }


    return (
        <div className="text-3xl lg:text-lg p-5 text-lime-400 w-full h-full bg-gradient-to-t from-neutral-900 to-neutral-800 rounded-lg shadow-xl backdrop-blur-lg flex overflow-clip items-left justify-end flex-col gap-4">
            <div className="flex flex-col gap-4" ref={consRef}>

            </div>

            <div className="flex">
                <span>
                C:\Dayid&gt;
                </span>
                <input className="text-lime-400 bg-neutral-900 focus:outline-none w-full" onKeyDown={handleKeyDown}/>
            </div>

        </div>
    );

}

export default Console;