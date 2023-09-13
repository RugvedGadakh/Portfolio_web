import React from "react";
import Article from "../components/articles/article"; 
const articles = [
  {
    title: "Article 1",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod...",
  },
  {
    title: "Article 2",
    content:
      "Proin a libero eu elit placerat tempor. Nulla facilisi. Morbi nec...",
  },
];

const ArticleList = () => {
  return (
    <div>
      {articles.map((article, index) => (
        <Article key={index} title={article.title} content={article.content} />
      ))}
    </div>
  );
};

export default ArticleList;
