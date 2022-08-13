import { fetchArticlesWithQuery } from 'services/api';
import React, { Component } from 'react';
import { ArticlesWrapper } from './ArticleList.styled';
import ContentLoader from 'react-content-loader';

export const MyLoader = props => (
  <ContentLoader
    speed={2}
    width={600}
    height={368}
    viewBox="0 0 600 400"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <rect x="25" y="15" rx="5" ry="5" width="600" height="10" />
    <rect x="25" y="45" rx="5" ry="5" width="600" height="10" />
    <rect x="25" y="75" rx="5" ry="5" width="600" height="10" />
    <rect x="25" y="105" rx="5" ry="5" width="600" height="10" />
    <rect x="25" y="135" rx="5" ry="5" width="600" height="10" />
    <rect x="25" y="165" rx="5" ry="5" width="600" height="10" />
    <rect x="25" y="195" rx="5" ry="5" width="600" height="10" />
    <rect x="25" y="225" rx="5" ry="5" width="600" height="10" />
    <rect x="25" y="255" rx="5" ry="5" width="600" height="10" />
    <rect x="25" y="285" rx="5" ry="5" width="600" height="10" />
    <rect x="25" y="315" rx="5" ry="5" width="600" height="10" />
    <rect x="25" y="345" rx="5" ry="5" width="600" height="10" />
    <rect x="25" y="375" rx="5" ry="5" width="600" height="10" />
  </ContentLoader>
);

const ArticleList = ({ articles }) => (
  <ul>
    {articles.map(({ objectID, url, title }) => (
      <li key={objectID}>
        <a href={url} target="_blank" rel="noreferrer noopener">
          {title}
        </a>
      </li>
    ))}
  </ul>
);

export class App2 extends Component {
  state = {
    articles: [],
    isLoading: false,
    error: null,
  };

  async componentDidMount() {
    this.setState({ isLoading: true });

    try {
      const articles = await fetchArticlesWithQuery('react');
      this.setState({ articles });
    } catch (error) {
      this.setState({ error });
    } finally {
      this.setState({ isLoading: false });
    }
  }

  render() {
    const { articles, isLoading, error } = this.state;
    return (
      <ArticlesWrapper>
        {error && <p>Whoops, something went wrong: {error.message}</p>}
        {isLoading && <MyLoader />}
        {articles.length > 0 && <ArticleList articles={articles} />}
      </ArticlesWrapper>
    );
  }
}
