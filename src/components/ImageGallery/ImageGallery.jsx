import PropTypes from 'prop-types';
import ImageGalleryItem from './ImageGalleryItem';
import { ImageList } from './ImageGallery.styled';
const ImageGallery = ({ pictures, setInfoForModal }) => {
  return (
    <ImageList>
      {pictures.map(
        ({
          id,
          webformatURL,
          tags,
          likes,
          views,
          comments,
          downloads,
          largeImageURL,
        }) => (
          <ImageGalleryItem
            setInfoForModal={setInfoForModal}
            key={id}
            id={id}
            webformatURL={webformatURL}
            largeImageURL={largeImageURL}
            tags={tags}
            likes={likes}
            views={views}
            comments={comments}
            downloads={downloads}
          />
        )
      )}
    </ImageList>
  );
};

export default ImageGallery;

ImageGallery.propTypes = {
  pictures: PropTypes.arrayOf(
    PropTypes.shape({
      largeImageURL: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired,
      webformatURL: PropTypes.string.isRequired,
      tags: PropTypes.string.isRequired,
      likes: PropTypes.number.isRequired,
      views: PropTypes.number.isRequired,
      comments: PropTypes.number.isRequired,
      downloads: PropTypes.number.isRequired,
    })
  ).isRequired,
  setInfoForModal: PropTypes.func.isRequired,
};