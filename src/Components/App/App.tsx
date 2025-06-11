import { categoryIds } from "../../utils";
import { Navigation } from "../Navigation/Navigation";
import { ArticleItem } from "../ArticleItem/ArticleItem";
import React from "react";
import "./App.css";
import { Articles } from "../Articles/Articles";
import { NewsAPI } from "../../types";

export const App = () => {
  const [articleId, setArticleId] = React.useState<number | null>(null);
  const [category, setCategory] = React.useState("index");
  const [articles, setArticles] = React.useState<NewsAPI>({
    items: [],
    categories: [],
    sources: [],
  });

  const onNavClick = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();

    setArticleId(null);

    const category = e.currentTarget.dataset.href;

    if (category) {
      setCategory(category);
    }
  };

  const onArticleClick = (id: number) => {
    setArticleId(id);
  };

  React.useEffect(() => {
    fetch(
      "http://frontend.karpovcourses.net/api/v2/ru/news/" +
        //@ts-ignore
        categoryIds[category] || ""
    )
      .then((response) => response.json())
      .then((response: NewsAPI) => {
        setArticles(response);
      });
  }, [category]);

  return (
    <React.Fragment>
      <header className="header">
        <div className="container">
          <Navigation
            placement="header"
            className="header__navigation"
            onNavClick={onNavClick}
            currentCategory={category}
          />
        </div>
      </header>
      <main className="main">
        {articleId !== null ? (
          <ArticleItem
            id={articleId}
            categories={articles.categories}
            sources={articles.sources}
            onArticleClick={onArticleClick}
          />
        ) : (
          <Articles articles={articles} onArticleClick={onArticleClick} />
        )}
      </main>
      <footer className="footer">
        <div className="container">
          <Navigation
            placement="footer"
            className="footer__navigation"
            onNavClick={onNavClick}
            currentCategory={category}
          />
          <div className="footer__column">
            <p className="footer__copyright">© 2025</p>
          </div>
        </div>
      </footer>
    </React.Fragment>
  );
};
