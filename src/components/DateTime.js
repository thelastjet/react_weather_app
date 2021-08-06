import React from "react";

const DateTime = () => {
    const date = new Date();
    var options = { weekday: "long" };

  return (
    <div className="date-time">
      {`${new Intl.DateTimeFormat('en-US', options).format()} - ${date.toLocaleDateString()} - ${date.toLocaleTimeString()}`}
    </div>
  );
};

export default DateTime;
