import React, { useState, useEffect } from "react";
import moment from "moment";

const useTime = () => {
  const [time, setTime] = useState("");
  useEffect(() => {
    setTime(moment().format("h:mm A"));
  }, []);
  useEffect(() => {
    setInterval(() => setTime(moment().format("h:mm A")), 60000);
  }, []);
  return {
    time,
  };
};

export default useTime;
