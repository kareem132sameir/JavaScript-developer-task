/* eslint-disable react/prop-types */
import React from "react";
import ReactDOM from "react-dom";
import { useState } from "react";

const ProgressBar = (props) => {
  let progress = props.progress;
  return (
    <div className="mx-10 pt-8">
      <div className="flex justify-between mb-1">
        <span className="text-base font-medium text-blue-800 dark:text-white">
          Progress
        </span>
        <span className="text-sm font-medium text-blue-50 dark:text-white">
          {progress}%
        </span>
      </div>
      <div className="w-full border border-blue-400 bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
        <div
          className="bg-blue-700 h-2.5 rounded-full "
          style={{ width: `${progress <= 0 ? 0 : progress}%` }}
        ></div>
      </div>
    </div>
  );
};

export default ProgressBar;
