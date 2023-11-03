"use client";
import { useState, useEffect } from "react";
import classNames from "classnames";

function getCurrentTime(): object {
  const now = new Date();
  const currentHour = now.getHours();

  const minutes = now.getMinutes();
  const seconds = now.getSeconds();
  const hours = currentHour === 0 ? 12 : currentHour - 12;

  const amOrPm = hours >= 12 ? "PM" : "AM";

  return { hours, minutes, seconds };
}

export default function Home() {
  const [hour, setHour] = useState(0);
  const [min, setMin] = useState(0);
  const [sec, setSec] = useState(0);

  useEffect(() => {
    let intId: any = null;

    intId = setInterval(() => {
      const time = getCurrentTime();
      const { hours, minutes, seconds } = time;

      setHour(hours);
      setMin(minutes);
      setSec(seconds);
    }, 1000);
    return () => clearInterval(intId);
  }, []);

  const diallines = [];
  for (let i = 0; i < 60; i += 1) {
    diallines.push(i);
  }
  const hours = [];
  for (let i = 12; i > 0; i -= 1) {
    hours.push(i);
  }

  return (
    <div className=" min-h-screen flex items-start justify-end px-5 py-5">
      <span>
        {hour.toString().padStart(2, "0")} : {min.toString().padStart(2, "0")} :
        {sec.toString().padStart(2, "0")}
      </span>
      <div
        className={`rounded-[50%_25%] h-[140px] w-[140px] bg-slate-300 relative`}
      >
        {diallines.map((i, idx) => {
          const diallineSecStyle = classNames(
            "origin-[50%_61px] mt-[9px] ml-[-0.5px] left-1/2 w-[1px] h-[6px] z-[2] absolute",
            "after:content-[''] after:absolute after:top-0 after:right[-6px] after:rotate-[3deg] after:block after:z-[-1]",
            "after:h-[4.5px] after:w-[8px] after:bg-black after:rounded-[0_25%_25%_0] after:-mt-[7px] ",
            {
              "after:bg-blue-200": sec - 1 < i,
              "after:bg-blue-500": sec - 1 >= i,
              "bg-slate-300": sec - 1 < i && i % 5 !== 0,
              "bg-blue-500": sec >= i && i % 5 !== 0,
              "bg-transparent": i === 0 || i % 5 === 0,
            }
          );

          const numbersSecStyle = classNames("numbers-hide text-[6px]", {
            "numbers-show text-center -ml-[3.5px] -mt-[1px] h-[7px] w-[7px] font-medium ":
              i === 0 || i % 5 === 0,
            "text-blue-900": (i === 0 || i % 5 === 0) && sec >= i && i !== 0,
            "text-blue-900 ": (i === 0 || i % 5 === 0) && sec - 1 >= i,
          });
          return (
            <div
              key={idx}
              style={{ transform: `rotate(${i * 6}deg)` }}
              className={diallineSecStyle}
            >
              <div className={numbersSecStyle}>
                {i.toString().padStart(2, "0")}
              </div>
            </div>
          );
        })}
        <div
          className=" relative w-full h-full rounded-[50%] border-[3px] border-amber-950 z-10 
        before:absolute before:content-[''] before:h-[128px] before:w-[128px] before:rounded-[50%] before:border-2 before:border-slate-300
        before:top-[3px] before:left-[3px] before:z-10 before:block"
        ></div>

        <div
          className="absolute h-[108px] w-[108px] rounded-[50%] top-4 left-4 border-[3px] border-slate-300 z-50
        before:absolute before:content-[''] before:h-[98px] before:w-[98px] before:rounded-[50%] before:border-2 before:border-slate-300
        before:z-10 before:block before:top-[2px] before:left-[2px]"
        >
          {diallines.map((i, idx) => {
            const diallineMinStyle = classNames(
              "origin-[50%_45px] top-[6px] ml-[-0.4px] left-1/2 w-[0.8px] h-[5px] absolute",
              "after:content-[''] after:absolute after:top-0 after:right[-6px] after:rotate-[3deg] after:block after:z-[-1]",
              "after:h-[3px] after:w-[5.5px] after:bg-black after:rounded-[0_25%_25%_0] after:-mt-[7px]",
              {
                "after:bg-orange-200": min - 1 < i,
                "after:bg-orange-500": min - 1 >= i,
                "bg-slate-300": min - 1 < i && i % 5 !== 0,
                "bg-orange-500": min >= i && i % 5 !== 0,
                "bg-transparent": i === 0 || i % 5 === 0,
              }
            );

            const numbersMinsStyle = classNames("numbers-hide text-[4.5px]", {
              "numbers-show text-center -ml-[2.5px] -mt-[1px] h-[6px] w-[6px] font-medium ":
                i === 0 || i % 5 === 0,
              "text-orange-900":
                (i === 0 || i % 5 === 0) && min + 1 >= i && i !== 0,
              "text-orange-900 ": (i === 0 || i % 5 === 0) && min >= i,
            });

            return (
              <div
                key={idx}
                className={diallineMinStyle}
                style={{ transform: `rotate(${i * 6}deg)` }}
              >
                <div className={numbersMinsStyle}>
                  {i.toString().padStart(2, "0")}
                </div>
              </div>
            );
          })}
        </div>

        <div
          className="absolute h-[76px] w-[76px] rounded-[50%] top-8 left-8 border-[2px] border-transparent z-[40]
        before:absolute before:content-[''] before:h-[66px] before:w-[66px] before:rounded-[50%] before:border-[3px] before:border-slate-300
        before:z-10 before:block before:top-[3px] before:left-[3px]
        after:absolute after:content-[''] after:h-[76px] after:w-[76px] after:rounded-[50%] after:border-2 after:border-slate-300
        after:block after:top-[-2px] after:left-[-2px]
        "
        >
          {hours.map((h, idx) => {
            const diallineHourStyle = classNames(
              "origin-[50%_34px] top-[2px] ml-[-3px] left-1/2 absolute z-[-10]",
              "after:content-[''] after:absolute after:top-[5.5px] after:right[-6px] after:rotate-[12deg] after:block after:z-[-10]",
              "after:h-[5px] after:w-[20px] after:bg-black after:rounded-[0_25%_25%_0] after:-mt-[7px] ",
              {
                "": hour > h,
                "after:bg-green-100": hour <= h,
                "after:bg-green-700": hour > h,
                "text-green-100": hour < h,
                "text-green-700": hour >= h,
              }
            );

            return (
              <div
                key={idx}
                className={diallineHourStyle}
                style={{ transform: `rotate(${h * 30}deg)` }}
              >
                <div className=" -ml-[3.5px] text-[7px] font-medium mt-[2px]">
                  {h.toString().padStart(2, "0")}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
