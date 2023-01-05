import React from "react";
// import { articles } from "../data";
import { RecentPostItem } from "./RecentPostItem";

export const SideBar = () => {
  return (
    <div className="col-lg-4">
      <div className="sidebar">
        <div className="sidebar-item recent-posts">
          <h3 className="sidebar-title">Posts recientes</h3>
          <div className="mt-3">
          {/* {articles.map((article) => ( 
            <RecentPostItem article={article} key={article.id} />
          ))} */}
          </div>
        </div>
      </div>
    </div>
  );
};
