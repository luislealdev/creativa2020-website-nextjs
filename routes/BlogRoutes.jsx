import React from "react";
import { Route, Routes } from "react-router-dom";
import { Blog, Article } from "../pages";

export const BlogRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Blog />} />
      <Route path="/article/:id" element={<Article />} />
    </Routes>
  );
};
