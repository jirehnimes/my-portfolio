import * as PropTypes from 'prop-types';
import * as React from 'react';

import * as styles from './image-carousel.module.scss';

const mapImage = (images, showIndex) => images.map((image, index) => {
  const display = showIndex === index ? styles.imageAnimate : '';

  return (
    <img
      key={index}
      src={image.path}
      alt={image.name}
      className={display}
    />
  );
});

const ImageCarousel = ({images, interval = 6000}) => {
  const imagesLength = images.length;
  const [imageIndex, setImageIndex] = React.useState(0);
  const [imagesList, setImagesList] =
    React.useState(mapImage(images, imageIndex));

  React.useEffect(() => {
    const imagesInterval = setInterval(() => {
      if (imageIndex < imagesLength - 1) {
        setImageIndex(imageIndex + 1);
      } else {
        setImageIndex(0);
      }

      setImagesList(mapImage(images, imageIndex));
    }, interval);

    return (() => {
      clearInterval(imagesInterval);
    });
  });

  return (
    <div className={styles.imageCarousel}>
      {imagesList}
    </div>
  );
};

ImageCarousel.propTypes = {
  images: PropTypes.array,
  interval: PropTypes.number,
};

export default ImageCarousel;
