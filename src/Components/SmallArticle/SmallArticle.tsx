import React, { FC } from "react";
import "./SmallArticle.css";

interface Props {
  title: string;
  date: string;
  source: string;
  onClick: (event: React.MouseEvent<HTMLElement>) => void;
}

export const SmallArticle: FC<Props> = ({ title, date, source, onClick }) => {
  return (
    <article className="small-article" onClick={onClick}>
      <h2 className="small-article__title">{title}</h2>
      <p className="small-article__caption">
        <span className="article-date small-article__date">{source}</span>
        <span className="article-source small-article__source">
          {new Date(date).toLocaleDateString("ru-RU", {
            month: "long",
            day: "numeric",
          })}
        </span>
      </p>
    </article>
  );
};
