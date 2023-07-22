import React from 'react';

import grp_1 from '../../../assets/gallery/GroupImage-1.jpg'
import grp_2 from '../../../assets/gallery/GroupImage-2.jpg'
import grp_3 from '../../../assets/gallery/GroupImage-3.jpg'
import grp_4 from '../../../assets/gallery/GroupImage-4.jpg'
import grp_5 from '../../../assets/gallery/GroupImage-5.jpg'
import grp_6 from '../../../assets/gallery/GroupImage-6.jpg'
import grp_7 from '../../../assets/gallery/GroupImage-7.jpg'
import grp_8 from '../../../assets/gallery/GroupImage-8.jpg'

const ImageGallery = () => {
    const toyImages = [
        { image: grp_1, text: 'batch 2005- William College' },
        { image: grp_2, text: 'batch 2020- Amherst College ' },
        { image: grp_3, text: 'batch 2021- Wellesley College' },
        { image: grp_4, text: 'batch 2016- Swarthmore College'  },
        { image: grp_5, text: 'batch 2018- Reed College' },
        { image: grp_6, text: 'batch 2014-  Swarthmore College' },
        { image: grp_7, text: 'batch 2018- Reed College' },
        { image: grp_8, text: 'batch 2018- Reed College' },
    ];

    return (
        <div>
        <section className="p-4  bg-gray-100" data-aos="fade-left">
            <div className="container mx-auto">
               
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {toyImages.map((item, index) => (
                        <div
                            key={index}
                            className="relative overflow-hidden h-60 rounded-lg shadow"
                        >
                            <img
                                src={item.image}
                                alt={`Toy ${index + 1}`}
                                title={item.text} // Show the text as a tooltip
                                className="object-cover object-center w-full border-4 border-white h-full transition duration-300 transform hover:scale-105"
                            />
                            <div className="overlay">
                                <p className="text-white absolute bottom-0 left-0 p-4 w-full h-full hover:bg-black hover:bg-opacity-50">
                                    {item.text}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    </div>
    );
};

export default ImageGallery;
