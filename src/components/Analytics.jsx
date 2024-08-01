import React from "react";
import { analytics } from "../constants";

const Analytics = () => {
  return (
    <div className="w-full flex-1 flex md:flex-row flex-col justify-between items-center gap-4">
      {analytics.map((analytic) => {
        return (
          <div className="h-32 md:w-[50%] w-full border border-slate-300 rounded-md p-4 space-y-1">
            <div className="flex justify-between items-center">
                <div><p className="text-slate-800 text-sm tracking-wide">{analytic.title}</p></div>
                <div><p>i</p></div>
            </div>

            <div>
                <h3 className="font-bold font-poppins text-[30px]">${analytic.value}</h3>
            </div>
            <div>
                <p className="text-slate-400 font-poppin text-xs">{analytic.percentage}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Analytics;
