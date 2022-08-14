import PropTypes from 'prop-types';

export const FilmsListItem = ({
  id,
  title,
  votes,
  poster,
  watched,
  idToDelete,
  toggleStatus,
  openModal,
}) => {
  return (
    <li>
      <h2>{title}</h2>
      <p>Votes: {votes}</p>
      <p>
        Watched: <span onClick={() => toggleStatus(id)}>{String(watched)}</span>
      </p>
      <button type="button" onClick={() => openModal(poster)}>
        Show poster
      </button>
      <button type="button" onClick={() => idToDelete(id)}>
        Delete
      </button>
    </li>
  );
};

FilmsListItem.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  votes: PropTypes.number.isRequired,
  watched: PropTypes.bool.isRequired,
  poster: PropTypes.string.isRequired,
  idToDelete: PropTypes.func.isRequired,
  toggleStatus: PropTypes.func.isRequired,
  openModal: PropTypes.func.isRequired,
};
