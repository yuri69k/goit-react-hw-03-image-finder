import PropTypes from 'prop-types';
import { Loading } from 'notiflix/build/notiflix-loading-aio';
import {
  ImageItem,
  ImageWrapper,
  Image,
  InfoWrapper,
  Info,
  Comments,
} from './ImageGalleryItem.styled';
import { FaRegThumbsUp, FaRegEye, FaRegComments } from 'react-icons/fa';
import { FiDownload } from 'react-icons/fi';

const ImageGalleryItem = ({
  setInfoForModal,
  id,
  webformatURL,
  tags,
  likes,
  views,
  comments,
  downloads,
  largeImageURL,
}) => {
  const handleClick = () => {
    Loading.pulse({
      svgSize: '150px',
    });
    setInfoForModal(largeImageURL, tags);
    Loading.remove();
  };
  return (
    <ImageItem key={id} onClick={handleClick}>
      <div>
        <ImageWrapper>
          <Image src={webformatURL} alt={tags} loading="lazy" />
        </ImageWrapper>

        <InfoWrapper>
          <Info>
            <b>
              <FaRegThumbsUp size={24} color="#2bb9a9" />
            </b>
            <Comments> {likes}</Comments>
          </Info>
          <Info>
            <b>
              <FaRegEye size={24} color="#2bb9a9" />
            </b>
            <Comments>{views}</Comments>
          </Info>
          <Info>
            <b>
              <FaRegComments size={24} color="#2bb9a9" />
            </b>
            <Comments>{comments}</Comments>
          </Info>
          <Info>
            <b>
              <FiDownload size={24} color="#2bb9a9" />
            </b>
            <Comments>{downloads}</Comments>
          </Info>
        </InfoWrapper>
      </div>
    </ImageItem>
  );
};

ImageGalleryItem.propTypes = {
  largeImageURL: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  webformatURL: PropTypes.string.isRequired,
  tags: PropTypes.string.isRequired,
  setInfoForModal: PropTypes.func.isRequired,
  likes: PropTypes.number.isRequired,
  views: PropTypes.number.isRequired,
  comments: PropTypes.number.isRequired,
  downloads: PropTypes.number.isRequired,
};

export default ImageGalleryItem;