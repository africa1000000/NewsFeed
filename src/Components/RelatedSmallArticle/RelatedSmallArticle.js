import React from "react";
import "./RelatedSmallArticle.css";

export const RelatedSmallArticle = () => {
  return (
    <article className="related-small-article">
      <img className="related-small-article__image" src="" />
      <div className="related-small-article__content">
        <span className="article-category related-small-article__category">
          Мода
        </span>
        <h2 className="related-small-article__title">
          Это слова-филлеры для этой новости можно только одну строку текста
        </h2>
        <span className="article-source related-small-article__source">
          Источник
        </span>
      </div>
    </article>
  );
};
