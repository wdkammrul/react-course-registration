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

    // step-15 
    const [remaining, setRemaining] = useState(0)

    // step-20 
    const [totalCreditHour, setTotalCreditHour] = useState(0)

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

        //  step-12 
        const inStock = selectedCourses.find((item) => item.id == course.id);

        let count = parseInt(course.credit);  

        if (inStock) {
            return alert("Sadly, this course was pre-booked !!!")
        } else {

            // step-13 
            selectedCourses.forEach((item) => {
                count = count + parseInt(item.credit);
            })

            console.log(count)
            
            // step-14 
            const totalHourRemaining = 20 - count;
            // step-16 
            setRemaining(totalHourRemaining)

            // step-21 
            const totalCreditHourSum = parseInt(course.credit)
            console.log(totalCreditHourSum)
            setTotalCreditHour(totalCreditHour + totalCreditHourSum)

            
            setSelectedCourses([...selectedCourses, course])

        }

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
                                <button onClick={() => handleSelectCourse(course)} className='card-btn'>Select</button>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="cart">
                    {/* step-9  */}
                    <Cart 
                    selectedCourses={selectedCourses}
                    // step-17 
                    remaining={remaining}

                    // step-22 
                    totalCreditHour={totalCreditHour}
                 
                    ></Cart>
                </div>


            </div>
        </div>
    );
};

export default Home;