import React from "react";
import NewsCard from "./NewsCard";
import {newsArray} from "../example";

function NewsList() {
  return (
    <div className="container-fluid p-0 row m-0 justify-content-center text-center">
      {newsArray.map((item, index) => {
        return (
          <NewsCard id={item._id} title={item.title} content={item.content} />
        );
      })}
    </div>
  );
}

export default NewsList;
