import classNames from "classnames";

export default function Home() {
  const diallines = [];
  for (let i = 0; i < 60; i += 1) {
    diallines.push(i);
  }

  return (
    <div className=" min-h-screen flex items-start justify-end px-5 py-5">
      <div
        className={`rounded-[50%_25%] h-[140px] w-[140px] bg-slate-300 relative`}
      >
        {diallines.map((i, idx) => {
          const diallineStyle = classNames(
            "origin-[50%_61px] mt-[9px] ml-[-0.5px] left-1/2 w-[1px] h-[6px] z-[2] absolute bg-blue-900",
            "after:content-[''] after:absolute after:top-0 after:right[-6px] after:rotate-[3deg] after:block after:z-[-1]",
            "after:h-[4.5px] after:w-[8px] after:bg-black after:rounded-[0_25%_25%_0] after:-mt-[7px] after:bg-blue-900",
            {
              "bg-transparent": i === 0 || i % 5 === 0,
            }
          );

          const numbersStyle = classNames("numbers-hide text-[5px]", {
            "numbers-show text-center -ml-[2.5px] -mt-[1px] h-[6px] w-[6px]":
              i === 0 || i % 5 === 0,
          });
          return (
            <div
              key={idx}
              style={{ transform: `rotate(${i * 6}deg)` }}
              className={diallineStyle}
            >
              <div className={numbersStyle}>
                {i.toString().padStart(2, "0")}
              </div>
            </div>
          );
        })}
        <div
          className=" relative w-full h-full rounded-[50%] border-[3px] border-amber-950 z-10
        before:absolute before:content-[''] before:h-[128px] before:w-[128px] before:rounded-[50%] before:border-2 before:border-slate-300
        before:top-[3px] before:left-[3px] before:z-10 before:block
        "
        ></div>
      </div>
    </div>
  );
}

// before:border-[2px] before:border-amber-950 before:rounded-[50%] before:block before:z-20
