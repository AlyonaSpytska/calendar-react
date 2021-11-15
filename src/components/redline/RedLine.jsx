import React, { useState, useEffect } from "react";

const RedLine = () => {
  const [currentTimeLine, setCurrentTimeLine] = useState(
    new Date().getMinutes()
  );

  useEffect(() => {
    const interval = setInterval(
      () => setCurrentTimeLine(new Date().getMinutes()),
      1000 * 60
    );
    return () => {
      clearInterval(interval);
    };
  }, []);


  return <div className="red-line" style={{ currentTimeLine }}></div>;
};

export default RedLine;
