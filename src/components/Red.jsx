import React from "react";
import NewsList from "./NewsList";

function Red() {
  return (
    <div className="m-3" style={{ overflowY: "scroll" }}>
      <NewsList />;
    </div>
  );
}

export default Red;
