import React from "react";
import NewsList from "./NewsList";

function Blue() {
  return (
    <div className="m-3" style={{ overflowY: "scroll" }}>
      <NewsList />
    </div>
  );
}

export default Blue;
