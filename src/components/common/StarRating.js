import React from 'react';
import PropTypes from 'prop-types';

const StarRating = ({ rating }) => {
  console.log(rating)
  const fullStars = Math.floor(rating);
  const fractionalStar = rating - fullStars;
  console.log(fractionalStar)

  // Define a CSS class for the star container to arrange stars horizontally
  const starContainerStyle = {
    display: 'flex',
  };

  // Define a CSS class to change the star size and color
  const starStyle = {
    width: '24px', // Adjust the width to control the star size
    height: '24px', // Adjust the height to control the star size
    fill: 'gold', // Adjust the color to your desired yellowish color
  };

  const stars = [];

  // Create full stars
  for (let i = 0; i < fullStars; i++) {
    stars.push(
      <svg
        key={i}
        className="star"
        style={starStyle}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <path d="M12 2l2.4 7.2H21l-6.1 4.8 2.3 7.2-6-4.8-6 4.8 2.3-7.2L3 9.2H9.6z" />
      </svg>
    );
  }

  // Create the fractional star with a mask and linear gradient
  if (fractionalStar > 0) {
    const maskId = `mask-${fullStars}-${fractionalStar}`;
    const maskWidth = 24 * fractionalStar;
  
    stars.push(
      <svg
        key={`half-${fullStars}-${fractionalStar}`}
        className="star"
        style={{ ...starStyle }}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <defs>
          <linearGradient id={`star-gradient-${fullStars}-${fractionalStar}`} x1="0" x2="1" y1="0" y2="0">
            <stop offset="0%" stopColor="gold" />
            <stop offset={`${fractionalStar * 100}%`} stopColor="gold" />
            <stop offset={`${fractionalStar * 100}%`} stopColor="transparent" />
          </linearGradient>
        </defs>
        <mask id={maskId}>
          <path d="M12 2l2.4 7.2H21l-6.1 4.8 2.3 7.2-6-4.8-6 4.8 2.3-7.2L3 9.2H9.6z" fill={`url(#star-gradient-${fullStars}-${fractionalStar})`} />
        </mask>
        <path d="M12 2l2.4 7.2H21l-6.1 4.8 2.3 7.2-6-4.8-6 4.8 2.3-7.2L3 9.2H9.6z" fill="gold" mask={`url(#${maskId})`} />
      </svg>
    );
  }
  

  return <div className="star-rating" style={starContainerStyle}>{stars}</div>;
};

StarRating.propTypes = {
  rating: PropTypes.number.isRequired,
};

export default StarRating;
