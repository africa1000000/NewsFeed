import { categoryIds } from "../../utils.js";
import { Navigation } from "../Navigation/Navigation.js";
import { Article } from "../Article/Article.js";
import React from "react";
import "./App.css";
import { Articles } from "../Articles/Articles.js";

export const App = () => {
  const [articleId, setArticleId] = React.useState(null);
  const [category, setCategory] = React.useState("index");
  const [articles, setArticles] = React.useState({
    items: [],
    categories: [],
    sources: [],
  });

  const onNavClick = (e) => {
    e.preventDefault();
    setArticleId(null);
    setCategory(e.currentTarget.dataset.href);
  };

  const onArticleClick = (id) => {
    setArticleId(id);
  };

  React.useEffect(() => {
    fetch(
      "http://frontend.karpovcourses.net/api/v2/ru/news/" +
        categoryIds[category] || ""
    )
      .then((response) => response.json())
      .then((response) => {
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
          <Article />
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
