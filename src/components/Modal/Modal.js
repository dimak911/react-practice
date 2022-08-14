import PropTypes from 'prop-types';
import { ModalBox } from './Modal.styed';

export const Modal = ({ imageUrl, closeModal }) => (
  <ModalBox>
    <div>
      <img src={imageUrl} alt="poster" width="200" />
      <button type="button" onClick={closeModal}>
        Click
      </button>
    </div>
  </ModalBox>
);

Modal.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  closeModal: PropTypes.func.isRequired,
};
