import React, { FC } from "react";

import { RecentPostItem } from "./RecentPostItem";
import { recentArticles } from '../data/recentPosts/recentArticles';


export const SideBar: FC = () => {

  return (
    <div className="col-lg-4">
      <div className="sidebar">
        <div className="sidebar-item recent-posts">
          <h3 className="sidebar-title">Posts recientes</h3>
          <div className="mt-3">
            {recentArticles.map((article) => (
              <RecentPostItem article={article} key={article.title} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

