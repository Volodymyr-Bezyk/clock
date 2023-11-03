import classNames from "classnames";
import { transform } from "next/dist/build/swc";

export default function Home() {
  const diallines = [];

  // for (let index = 0; index < 60; index += 1) {
  //   // const diallinesStyle = classNames("diallines", {
  //   //   "rotate-[]": index,
  //   // });
  //   const element = (
  //     <div className={`diallines rotate-[${6 * index}deg]`}></div>
  //   );
  //   diallines.push(element);
  // }

  for (let i = 0; i < 60; i += 1) {
    diallines.push(i);
  }
  return (
    <div className=" min-h-screen flex items-center justify-center">
      <div className=" rounded-[50%] h-[300px] w-[300px] bg-red-400 border-8 border-red-700 relative">
        {diallines.map((i, idx) => {
          const rotation = `rotate-[${6 * idx}deg]`;
          // const rotation = `rotate-[10deg]`;

          const diallineStyle = classNames(
            `${rotation} origin-[50%_150px] mt-[-8px] left-1/2 w-[2px] h-[15px] z-[2] absolute bg-slate-800 `
          );
          return (
            <div
              key={idx}
              style={{ transform: `rotate(${i * 6}deg)` }}
              className={diallineStyle}
            ></div>
          );
        })}

        {/* <div className="triangle-border  ">
          <div className=" bg-black"></div>
        </div> */}
      </div>
    </div>
  );
}
