import React from "react";
import { MainArticle } from "../MainArticle/MainArticle.js";
import { SmallArticle } from "../SmallArticle/SmallArticle.js";
import "./Articles.css";

export const Articles = ({ articles, onArticleClick }) => {
  return (
    <section className="articles">
      <div className="container grid">
        <section className="articles__big-column">
          {articles.items.slice(0, 3).map((item) => {
            return (
              <MainArticle
                key={item.title}
                title={item.title}
                image={item.image}
                category={
                  articles.categories.find(({ id }) => item.category_id === id)
                    .name
                }
                description={item.description}
                source={
                  articles.sources.find(({ id }) => item.source_id === id).name
                }
                onClick={() => onArticleClick(item.id)}
              />
            );
          })}
        </section>
        <section className="articles__small-column">
          {articles.items.slice(3, 12).map((item) => {
            return (
              <SmallArticle
                key={item.title}
                title={item.title}
                date={new Date(item.date).toLocaleDateString("ru-RU", {
                  month: "long",
                  day: "numeric",
                })}
                source={
                  articles.sources.find(({ id }) => item.source_id === id).name
                }
                onClick={() => onArticleClick(item.id)}
              />
            );
          })}
        </section>
      </div>
    </section>
  );
};
