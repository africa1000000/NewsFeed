import React from "react";
import "./SingleLineTitleArticle.css";

export const SingleLineTitleArticle = () => {
  return (
    <article className="single-line-title-article">
      <img className="single-line-title-article__image" src="" />
      <span className="article-category single-line-title-article__category">
        Мода
      </span>
      <h2 className="single-line-title-article__title">
        Заголовок в одну строку
      </h2>
      <p className="single-line-title-article__text">Текст этой новости</p>
      <span className="article-source single-line-title-article__source">
        Источник
      </span>
    </article>
  );
};
