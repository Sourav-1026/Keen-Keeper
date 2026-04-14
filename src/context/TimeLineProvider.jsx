import React, { createContext, useContext, useState } from "react";

const TimeLineContext = createContext();

export const TimeLineProvider = ({ children }) => {
  const [timeLine, setTimeLine] = useState([]);

  const addActivity = (activity) => {
    setTimeLine((prev) => [activity, ...prev]);
  };

  return <TimeLineContext.Provider value={{ timeLine, addActivity }}>{children}</TimeLineContext.Provider>;
};

export const useTimeLine = () => useContext(TimeLineContext);
