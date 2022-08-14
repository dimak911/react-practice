import PropTypes from 'prop-types';

export const Button = ({ handleClick, text, type }) => (
  <button type={type} onClick={handleClick}>
    {text}
  </button>
);

Button.propTypes = {
  handleClick: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
};
