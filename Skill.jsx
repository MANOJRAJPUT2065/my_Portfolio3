import React from 'react';
import DevelopImg from '../skills/developer.png';
import PostmanImg from '../skills/postman.png';
import Mongo from '../skills/mongodb.jpeg';
import Algo from '../skills/algo.png'
function Skill() {
    return (
        <div className="container mx-auto px-4 py-8 ">
            {/* About section */}
            <section id="Skill" className=''>
                <h2 className="text-2xl font-bold text-gray-800 mb-4">What I Do</h2>
                <p className="text-gray-600 mb-8">
                    I am a skilled and passionate web designer with experience in creating responsive and user-friendly websites.
                </p>

                {/* Skill Bars */}
                <div className="grid gap-6 md:grid-cols-2">
                    {/* Skill Bar 1 */}
                    <div className="flex items-center space-x-4 bg-slate-700 text-white p-4 rounded-lg shadow-md">
                        <img src={DevelopImg} alt="Skill Bar Image" className="w-16 h-16 animate-spin delay-275" />
                        <div>
                            <h3 className="text-lg font-semibold">Web Developer</h3>
                            <p>
                                Currently, I am a frontend web developer working with React. My passion is to become a full-stack web developer.
                            </p>
                        </div>
                    </div>
<br />
                    {/* Skill Bar 2 */}
                    <div className="flex items-center space-x-4 bg-slate-700 text-white p-4 rounded-lg shadow-md">
                        <img src={Algo} alt="Skill Bar Image" className="w-16 h-16  delay-150 rounded-lg" />
                        <div>
                            <h3 className="text-lg font-semibold">Problem Solver</h3>
                            <p>
                                I have foundational knowledge of data structures and algorithms (DSA). Currently, I am focusing on solving DSA problems on LeetCode, such as binary trees and linked lists.
                            </p>
                        </div>
                    </div>
<br />
                    {/* Skill Bar 3 */}
                    <div className="flex items-center space-x-4 bg-slate-700 text-white p-4 rounded-lg shadow-md">
                        <img src={PostmanImg} alt="Skill Bar Image" className="w-16 h-16  delay-300" />
                        <div>
                            <h3 className="text-lg font-semibold">PostMan</h3>
                            <p>
                               Knowldege about postmen, how to create and update the data
                            </p>
                        </div>
                    </div>
                    <br />

                    {/* Skill Bar 4 */}
                    <div className="flex items-center space-x-4 bg-slate-700 text-white p-4 rounded-lg shadow-md">
                        <img src={Mongo} alt="Skill Bar Image" className="w-16 h-16 animate-spin delay-450" />
                        <div>
                            <h3 className="text-lg font-semibold">MongoDB</h3>
                            <p>
                                I have experience working with databases, such as MongoDB, to develop efficient data storage and retrieval solutions.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Skill;
