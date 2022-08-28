import { Box } from './Box';
import { GlobalStyle } from './GlobalStyle';
import { Component } from 'react';
import { FilmsList } from './FilmsList/FilmsList';
import { Button } from './Button/Button';
import { getFilmsData } from 'utils/getFilms';
import { Modal } from './Modal/Modal';
// import data from '../data/data.json';
import { getMovies } from 'api';

export class App extends Component {
  state = {
    isShown: false,
    movies: [],
    currentImage: '',
    page: 1,
  };

  componentDidUpdate(prevProps, prevState) {
    if (
      this.state.isShown !== prevState.isShown ||
      this.state.page !== prevState.page
    ) {
      this.fetchMovies();
    }
  }

  fetchMovies = () => {
    getMovies(this.state.page).then(data => {
      this.setState(prevState => {
        return {
          movies: [...prevState.movies, ...getFilmsData(data.data.results)],
        };
      });
    });
  };

  handleClick = () => {
    this.setState({ isShown: true });
  };

  deleteFilm = idToDelete => {
    this.setState(prevState => ({
      movies: prevState.movies.filter(({ id }) => id !== idToDelete),
    }));
  };

  toggleStatus = idToUpdate => {
    this.setState(prevState => ({
      movies: prevState.movies.map(item => {
        if (item.id !== idToUpdate) {
          return item;
        }

        return { ...item, watched: !item.watched };
      }),
    }));
  };

  openModal = imgUrl => {
    this.setState({ currentImage: imgUrl });
  };

  closeModal = () => {
    this.setState({ currentImage: '' });
  };

  handleLoadMore = () => {
    this.setState(prevState => {
      return { page: prevState.page + 1 };
    });
  };

  render() {
    const { currentImage, isShown, movies } = this.state;

    return (
      <>
        <GlobalStyle />
        <Box>
          {isShown ? (
            <>
              <FilmsList
                movies={movies}
                idToDelete={this.deleteFilm}
                toggleStatus={this.toggleStatus}
                openModal={this.openModal}
              />
              <Button
                handleClick={this.handleLoadMore}
                text="Show more films"
                type="button"
              />
            </>
          ) : (
            <Button
              handleClick={this.handleClick}
              text="Show films list"
              type="button"
            />
          )}
          {currentImage && (
            <Modal imageUrl={currentImage} closeModal={this.closeModal} />
          )}
        </Box>
      </>
    );
  }
}
