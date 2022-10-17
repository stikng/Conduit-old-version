import ArticlePreview from "./ArticlePreview";
import ListPagination from "./ListPagination";
import React from "react";

function listArticles(articles) {
  var i = 0;
  let sortedArticles = articles.sort();
  for (i = 0; i < sortedArticles.length; i++) {
    return <ArticlePreview article={articles[i]} key={articles[i].slug} />;
  }
}

const ArticleList = (props) => {
  if (!props.articles) {
    return <div className="article-preview">Loading...</div>;
  }

  if (props.articles.length === 0) {
    return <div className="article-preview">No articles are here... yet.</div>;
  }

  return (
    <div>
      {listArticles(props.articles)}
      <ListPagination
        pager={props.pager}
        articlesCount={props.articlesCount}
        currentPage={props.currentPage}
      />
    </div>
  );
};

export default ArticleList;
