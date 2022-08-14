import PropTypes from 'prop-types';
import { FilmsListItem } from 'components/FilmsListItem/FilmsListItem';

export const FilmsList = ({ movies, idToDelete, toggleStatus, openModal }) => {
  return (
    <ul>
      {movies.map(({ id, title, poster, votes, watched }) => (
        <FilmsListItem
          key={id}
          title={title}
          poster={poster}
          votes={votes}
          watched={watched}
          idToDelete={idToDelete}
          id={id}
          toggleStatus={toggleStatus}
          openModal={openModal}
        />
      ))}
    </ul>
  );
};

FilmsList.propTypes = {
  idToDelete: PropTypes.func.isRequired,
  toggleStatus: PropTypes.func.isRequired,
  openModal: PropTypes.func.isRequired,
  movies: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      votes: PropTypes.number.isRequired,
      watched: PropTypes.bool.isRequired,
      poster: PropTypes.string.isRequired,
    })
  ).isRequired,
};
