import { categoryIds } from "../../utils.js";
import { Navigation } from "../Navigation/Navigation.js";
import { Articles } from "../Articles/Articles.js";
import React from "react";
import "./App.css";

export const App = () => {
  const [category, setCategory] = React.useState("index");
  const [articles, setArticles] = React.useState({
    items: [],
    categories: [],
    sources: [],
  });

  const onNavClick = (e) => {
    e.preventDefault();
    setCategory(e.currentTarget.dataset.href);
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
        <Articles articles={articles} />
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
