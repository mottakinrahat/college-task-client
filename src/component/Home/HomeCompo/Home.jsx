import React from 'react';
import ThreeCollege from '../ThreeCollege/ThreeCollege';
import ImageGallery from '../ImageGallery/ImageGallery';
import Research from '../Research/Research';
import Review from '../Review/Review';

const Home = () => {
    return (
        <div>
          <ThreeCollege></ThreeCollege>
          <ImageGallery></ImageGallery>
          <Research></Research>
          <Review></Review>
        </div>
    );
};

export default Home;