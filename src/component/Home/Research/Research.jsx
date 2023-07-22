import React from 'react';
import { Link } from 'react-router-dom';

const Research = () => {
    return (
        <div className='mt-10 mb-10'>
            <div className="overflow-x-auto">
                <table className="table table-zebra">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>College</th>
                            <th>Topic of the research</th>
                            <th>Research link</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        <tr>
                            <th>1</th>
                            <td>Williams College</td>
                            <td>Advancements in Renewable Energy Technologies</td>
                            <td><Link to='http://americanengineeringjournal.com/index.php/journal/article/view/1'><button className='btn btn-sm bg-blue-600 text-white'>see research</button></Link></td>
                        </tr>
                        {/* row 2 */}
                        <tr>
                            <th>2</th>
                            <td>Amherst College</td>
                            <td>Development of AI-driven Healthcare Diagnostics</td>
                            <td><Link to='https://dl.acm.org/doi/abs/10.1145/3428361.3428362'><button className='btn btn-sm bg-blue-600 text-white'>see research</button></Link></td>
                        </tr>
                        {/* row 3 */}
                        <tr>
                            <th>3</th>
                            <td>Wellesley College</td>
                            <td>Advancements in Quantum Computing Algorithms</td>
                            <td><Link to='https://ieeexplore.ieee.org/abstract/document/7579104'><button className='btn btn-sm bg-blue-600 text-white'>see research</button></Link></td>
                        </tr>
                        <tr>
                            <th>4</th>
                            <td>Swarthmore College</td>
                            <td>Discovering New Exoplanets with Advanced Telescopes</td>
                            <td><Link to='https://iopscience.iop.org/article/10.1086/380421/meta'><button className='btn btn-sm bg-blue-600 text-white'>see research</button></Link></td>
                        </tr>
                        <tr>
                            <th>5</th>
                            <td>Reed College</td>
                            <td>Personalized Medicine</td>
                            <td><Link to='https://europepmc.org/article/med/12596356'><button className='btn btn-sm bg-blue-600 text-white'>see research</button></Link></td>
                        </tr>
                        <tr>
                            <th>6</th>
                            <td>Trinity College Dublin</td>
                            <td>Revitalizing Traditional Crafts for Economic Sustainability</td>
                            <td><Link to='http://www.ijdesign.org/index.php/IJDesign/article/view/1077'><button className='btn btn-sm bg-blue-600 text-white'>see research</button></Link></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Research;