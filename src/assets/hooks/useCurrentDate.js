import { useEffect, useState } from "react";

export const useCurrentDate = () => {

  const [currentDate, setCurrentDate] = useState(new Date().toLocaleString());

  useEffect(() => {
    setInterval(() => {
      setCurrentDate(new Date().toLocaleString());
    }, 1000)
  }, []);


  return currentDate

};