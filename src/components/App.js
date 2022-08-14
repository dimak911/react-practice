import { Box } from './Box';
import { GlobalStyle } from './GlobalStyle';
// import { Counter } from 'components/Counter/Counter';
// import { Toggle } from 'components/Toggle/Toggle';
// import { LoginForm } from 'components/LoginForm/LoginForm';
// import { SignUpForm } from 'components/SignUpForm/SignUpForm';
// import { App2 } from './ArticleList/ArticleList';
import { Component } from 'react';
import { FilmsList } from './FilmsList/FilmsList';
import { Button } from './Button/Button';
import { getFilmsData } from 'utils/getFilms';
import data from '../data/data.json';
import { Modal } from './Modal/Modal';

export class App extends Component {
  state = {
    isShown: false,
    movies: getFilmsData(data),
    currentImage: '',
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

  render() {
    const { currentImage, isShown, movies } = this.state;

    return (
      <>
        <GlobalStyle />
        <Box>
          {isShown ? (
            <FilmsList
              movies={movies}
              idToDelete={this.deleteFilm}
              toggleStatus={this.toggleStatus}
              openModal={this.openModal}
            />
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

        {/* <Box>
          <Box p={3}>
            <Counter step={5} initialValue={10} />
          </Box>
          <Box p={3}>
            <Toggle />
          </Box>
          <Box p={3}>
            <LoginForm onSubmit={values => console.log(values)} />
          </Box>
          <Box p={3}>
            <SignUpForm onSubmit={values => console.log(values)} />
          </Box>
        </Box>
        <App2 /> */}
      </>
    );
  }
}
