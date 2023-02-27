import { Button } from './Button.styled';
import PropTypes from 'prop-types';
const ButtonLoadMore = ({ incrementPage }) => (
  <Button type="button" onClick={incrementPage}>
    load more
  </Button>
);

export default ButtonLoadMore;

ButtonLoadMore.propTypes = {
  incrementPage: PropTypes.func.isRequired,
};