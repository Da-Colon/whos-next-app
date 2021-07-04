import React, { FC } from "react";

const ErrorUI: FC<{ error: string }> = ({ error }) => {
  return (
    <div className="self-center border bg-green-100 border-green-400 rounded-lg py-2 px-4 w-min whitespace-nowrap">
      <div className="text-red-600 font-extrabold tracking-wide font-sm opacity-100">
        {error}
      </div>
    </div>
  );
};

export default ErrorUI;
