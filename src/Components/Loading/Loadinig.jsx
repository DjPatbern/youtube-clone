import React from "react";
import "./_loading.scss";

function Loading() {
  return (
    <div className="loading">
      <div className="lds-hourglass"></div>
    </div>
  );
}

export default Loading;
