"use client";
import { useState, useEffect } from "react";
import classNames from "classnames";

import { getCurrentTime, getDiallines, getHourDiallines } from "@/utils";

export const Clock: React.FC = () => {
  const [hour, setHour] = useState<number>(0);
  const [min, setMin] = useState<number>(0);
  const [sec, setSec] = useState<number>(0);
  const [amOrPm, setAmOrPm] = useState<string>("");

  useEffect(() => {
    let clockId: any = null;

    clockId = setInterval(() => {
      const { hours, minutes, seconds, amOrPm } = getCurrentTime();

      setHour(hours);
      setMin(minutes);
      setSec(seconds);
      setAmOrPm(amOrPm);
    }, 1000);
    return () => clearInterval(clockId);
  }, []);

  const diallines = getDiallines();
  const hours = getHourDiallines();

  return (
    <div className=" min-h-screen flex items-start justify-end px-5 py-5">
      <span className=" font-extrabold ">
        {hour.toString().padStart(2, "0")} : {min.toString().padStart(2, "0")} :
        {sec.toString().padStart(2, "0")}
      </span>
      <div
        className={`rounded-[50%_25%] h-[560px] w-[560px] bg-slate-300 relative`}
      >
        {diallines.map((i, idx) => {
          const diallineSecStyle = classNames(
            "origin-[50%_270px] mt-[10px] ml-[-0.5px] left-1/2 w-[1px] h-[26px] z-[2] absolute",
            "after:content-[''] after:absolute after:top-0 after:right[-6px] after:rotate-[3deg] after:block after:z-[-1]",
            "after:h-[10px] after:w-[30px] after:bg-black after:-mt-[7px]",
            {
              "after:bg-blue-200": sec - 1 < i,
              "after:bg-blue-500": sec - 1 >= i,
              "bg-slate-400": sec < i && i % 5 !== 0,
              "bg-blue-500": sec >= i && i % 5 !== 0,
              "bg-transparent": i === 0 || i % 5 === 0,
            }
          );

          const numbersSecStyle = classNames("numbers-hide text-[16px]", {
            "numbers-show text-center -ml-[10px] mt-1 h-[20px] w-[20px] font-medium ":
              i === 0 || i % 5 === 0,
            "text-blue-900 font-bold": (i === 0 || i % 5 === 0) && sec >= i,
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
        before:absolute before:content-[''] before:h-[535px] before:w-[535px] before:rounded-[50%] before:border-[5px] before:border-slate-300
        before:top-[10px] before:left-[10px] before:z-10 before:block"
        ></div>

        <div
          className="absolute h-[460px] w-[460px] rounded-[50%] top-[50px] left-[50px] border-[10px] border-slate-300 z-50
        before:absolute before:content-[''] before:h-[430px] before:w-[430px] before:rounded-[50%] before:border-[5px] before:border-slate-300
        before:z-10 before:block before:top-[5px] before:left-[5px]"
        >
          {diallines.map((i, idx) => {
            const diallineMinStyle = classNames(
              "origin-[50%_215px] top-[5px] ml-[-0.4px] left-1/2 w-[0.8px] h-[15px] absolute",
              "after:content-[''] after:absolute after:top-0 after:right[-6px] after:rotate-[3deg] after:block after:z-[-1]",
              "after:h-[10px] after:w-[23px] after:bg-black after:-mt-[7px]",
              {
                "after:bg-orange-200": min - 1 < i,
                "after:bg-orange-500": min - 1 >= i,
                "bg-slate-500": min < i && i % 5 !== 0,
                "bg-orange-500": min >= i && i % 5 !== 0,
                "bg-transparent": i === 0 || i % 5 === 0,
              }
            );

            const numbersMinsStyle = classNames("numbers-hide text-[16px]", {
              "numbers-show text-center -ml-[10px] -mt-[1px] h-[20px] w-[20px] font-medium ":
                i === 0 || i % 5 === 0,
              "text-orange-900 font-bold": (i === 0 || i % 5 === 0) && min >= i,
              "text-orange-900 ": (i === 0 || i % 5 === 0) && min - 1 >= i,
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
          className="absolute h-[340px] w-[340px] rounded-[50%] top-[110px] left-[110px] z-[40] 
        before:absolute before:content-[''] before:h-[300px] before:w-[300px] before:rounded-[50%] before:border-[8px] before:border-slate-300
        before:z-10 before:block before:top-[20px] before:left-[20px]
        after:absolute after:content-[''] after:h-full after:w-full after:rounded-[50%] after:border-[10px] after:border-slate-300
        after:block after:top-[0px] after:left-[0px]
        "
        >
          {hours.map((h, idx) => {
            const diallineHourStyle = classNames(
              "origin-[50%_140px] top-[30px] ml-[-6px] left-1/2 absolute z-[-10]",
              "after:content-[''] after:absolute after:top-[-8px] after:right[-6px] after:rotate-[17deg] after:block after:z-[-10]",
              "after:h-[16px] after:w-[85px] after:-mt-[7px] after:rounded-[0_35%_35%_0]",
              {
                "after:bg-green-100": hour <= h,
                "after:bg-green-300": hour > h || h - 12 === 0,
                "text-green-100 font-medium": hour < h,
                "text-green-700 font-extrabold": hour >= h,
              }
            );

            return (
              <div
                key={idx}
                className={diallineHourStyle}
                style={{ transform: `rotate(${h * 30}deg)` }}
              >
                <div className=" -ml-[10px] text-[16px] font-medium mt-[2px] w-5 h-5">
                  {h.toString().padStart(2, "0")}
                </div>
              </div>
            );
          })}

          <div className=" absolute top-[135px] left-[135px] text-slate-800 font-bold text-4xl">
            {amOrPm}
          </div>
        </div>
      </div>
    </div>
  );
};
