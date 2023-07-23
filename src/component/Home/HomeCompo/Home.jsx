import React, { useState } from 'react';
import ThreeCollege from '../ThreeCollege/ThreeCollege';
import ImageGallery from '../ImageGallery/ImageGallery';
import Research from '../Research/Research';
import Review from '../Review/Review';
import StudentReview from '../StudentReview/StudentReview';

const Home = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredColleges, setFilteredColleges] = useState([]);
  const handleSearch = async () => {
    const response = await fetch(`/collegeSearch?q=${searchQuery}`);
    const data = await response.json();
    setFilteredColleges(data);
  };
  return (
    <>
      <div>
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search college..."
        />
        <button className='btn btn-sm ' onClick={handleSearch}>Search</button>
      </div>
      <ThreeCollege></ThreeCollege>
      <ImageGallery></ImageGallery>
      <Research></Research>
      <StudentReview></StudentReview>
    </>
    );
};

export default Home;