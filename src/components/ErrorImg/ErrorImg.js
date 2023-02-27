import PropTypes from 'prop-types';
import { ErrorImg } from './ErrorImg.syled';

export const ErrorImgTost = ({ errorImg }) => {
  return <ErrorImg src={errorImg} alt="Wow dude, try one more time" />;
};

export default ErrorImgTost;

ErrorImgTost.propTypes = {
  errorImg: PropTypes.string.isRequired,
};
