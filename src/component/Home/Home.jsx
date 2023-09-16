/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import './Home.css'
import Cart from '../Cart/Cart';

const Home = () => {

    // step-1 
    const [allCourse, setAllCourse] = useState([]);

    // step-7 
    const [selectedCourses, setSelectedCourses] = useState([]);


    // step-2 
    useEffect(() => {
        fetch('./course.json')
            .then(res => res.json())
            .then(data => setAllCourse(data))
    }, [])


    // step-4 
    // step-6 receive course
    const handleSelectCourse = (course) => {
    //   console.log(course.name)

    // step-8 
        setSelectedCourses([...selectedCourses,course])

    }

    // console.log(selectedCourses)



    return (
        <div className='container'>
            <div className="home-container">
                <div className="card-container">

                    {/*  step-3  */}
                    {allCourse.map(course => (
                        <div key={course.id} className="card">
                            <div >
                                <img className="card-img" src={course.image} alt="" />
                            </div>
                            <div className='card-body'>
                                <h2>{course.name}</h2>
                                <p><small>{course.desc}</small></p>
                                <div className="info">
                                    <p>$ Price: {course.price}</p>
                                    <p>Credit: {course.credit}</p>
                                </div>

                                {/* step-5  */}
                                <button onClick={()=>handleSelectCourse(course)} className='card-btn'>Select</button>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="cart">
                    {/* step-9  */}
                     <Cart selectedCourses={selectedCourses}></Cart>
                </div>


            </div>
        </div>
    );
};

export default Home;