import React, { useEffect, useState } from "react";

function App() {
  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [hours, setHours] = useState(0);
  const [index, setIndex] = useState(1);

  useEffect(() => {
    const updateClock = () => {
      const now = new Date();
      const setSec = now.getSeconds();
      setSeconds(setSec);
      const setMin = now.getMinutes();
      setMinutes(setMin);
      const setHour = now.getHours();
      setHours(setHour);
      document.querySelector("#seconds").style.transform = `rotate(${setSec * 6}deg)`;
      document.querySelector("#mins").style.transform = `rotate(${setMin * 6}deg)`;
      document.querySelector("#hours").style.transform = `rotate(${setHour * 30}deg)`;

      if (setSec % 3 === 0) {
        setIndex((prevIndex) => (prevIndex % 3) + 1);
        document.querySelector('body').style.backgroundImage = `url(src/assets/img${index}.jpg)`;
        if(seconds==4) setIndex(1);
      }
    };

    const intervalId = setInterval(updateClock, 1000);

    return () => clearInterval(intervalId);
  }, [index]);

  return (
    <div className="w-full h-screen grid place-items-center sm:grid-cols-2 bg-img1 bg-center bg-cover">
      <div className="relative min-w-[270px] min-h-[270px] border-2 grid place-items-center scale-90 border-white rounded-full">
        <p id="seconds" className="w-[2px] transition-all h-[110px] bg-red-800 rounded-md z-1 absolute left-1/2 bottom-1/2 origin-bottom rotate-[0deg]"></p>
        <p id="mins" className="w-[3px] h-[90px] transition-all bg-slate-600 rounded-md z-1 absolute left-1/2 bottom-1/2 origin-bottom rotate-[0deg]"></p>
        <p id="hours" className="w-[4px] h-[70px] transition-all bg-white rounded-md z-1 absolute left-1/2 bottom-1/2 origin-bottom rotate-[0deg]"></p>
        <p className="w-[7px] h-[7px] rounded-full bg-black z-100 animate-ping border-[1px] border-black left-1/2 bottom-1/2 origin-bottom"></p>
      </div>
      <div className="flex bg-slate-800 text-3xl rounded-lg text-white p-2">
        <span>{hours.length === 1 ? '0' + hours : hours} : </span>
        <span>{minutes.length === 1 ? ('0' + minutes) : minutes} : </span>
        <span>{seconds}</span>
      </div>
    </div>
  );
}

export default App;
