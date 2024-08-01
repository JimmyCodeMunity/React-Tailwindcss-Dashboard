import React from "react";
import { recents } from "../constants";

const Recents = () => {
  return (
    <div className="w-full h-full p-5 space-y-4">
      <div>
        <p className="font-poppins font-bold text-xl tracking-wide">
          Recent Sales
        </p>
        <p className="text-slate-400 text-xs tracking-wide">
          You made 265 sales this month.
        </p>
      </div>

      {recents.map((recent) => {
        return (
          <div className="w-full flex justify-between items-center space-y-4 ">
            <div className="flex justify-between items-center space-x-4">
              <div>
                <div className="border border-slate-500 rounded-full h-10 w-10"></div>
              </div>
              <div>
                <p className="text-sm tracking-wide">{recent.name}</p>
                <p className="text-slate-500 text-xs tracking-wide">
                  {recent.email}
                </p>
              </div>
            </div>
            <div>
              <p className="text-lg font-normal tracking-wide text-slate-600">
                +{recent.amount}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Recents;
