import React, { useEffect, useState } from 'react';
import ThreeCollege from '../ThreeCollege/ThreeCollege';
import ImageGallery from '../ImageGallery/ImageGallery';
import Research from '../Research/Research';
import StudentReview from '../StudentReview/StudentReview';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Slider from '../../Slider/Slider';

const Home = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredColleges, setFilteredColleges] = useState([]);
  const handleSearch = async () => {
    try {
      const response = await axios.get(`https://endgame-college-server.vercel.app/clgInfo?q=${searchQuery}`);
      setFilteredColleges(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  console.log(filteredColleges);
const{college_image,admission_date,college_name,_id}=filteredColleges;
  return (
    <>
      <div>
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search college..."
        />
        <button className='btn btn-sm' onClick={handleSearch}>Search</button>
      </div>
      <div>
        {searchQuery !== '' && ( // Only render if the searchQuery is not empty
          <div>
            {filteredColleges.map((searched) => (
              <>
                <div className="bg-white rounded-lg shadow-lg p-4 w-96">
                  <img
                    src={searched?.college_image}
                    alt="College"
                    className="w-full h-full object-cover rounded-t-lg"
                  />
                  <div className="py-4">
                    <h2 className="text-xl font-semibold mb-2">{searched?.college_name}</h2>
                    <p className="text-sm mb-2">Admission Date:{searched?.admission_date}</p>
                    <p className="text-sm mb-2">College rating:{searched?.admission_date}</p>
                    <p className="text-sm mb-2">Number of Research:3</p>

                  </div>
                  <Link to={`/collegeDetails/${searched._id}`}> <button className="bg-blue-500 w-full hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-md mt-2">
                    Details
                  </button></Link>
                </div>
              </>
            ))}
          </div>
        )}
      </div>
      <Slider></Slider>
      <ThreeCollege></ThreeCollege>
      <ImageGallery></ImageGallery>
      <Research></Research>
      <StudentReview></StudentReview>
    </>
  );
};

export default Home;