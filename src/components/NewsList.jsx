import React from "react";
import NewsCard from "NewsCard";

function NewsList() {
  return (
    <div className="container-fluid p-0 row m-0 justify-content-center text-center">
      {postArray.map((item, index) => {
        return (
          <NewsCard
            id={item._id}
            title={item.title}
            content={item.content}
            bcolor={item.color}
            date={item.date}
            image={item.image}
            index={index}
          />
        );
      })}
    </div>
  );
}
