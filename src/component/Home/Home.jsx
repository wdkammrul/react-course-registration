/* eslint-disable react/no-unknown-property */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import './Home.css'
import Cart from '../Cart/Cart';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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


        //  step-12 
        const inStock = selectedCourses.find((item) => item.id == course.id);

        let count = parseInt(course.credit);

        if (inStock) {
            return toast("⚠️ Course limit reached, no more.")
        } else {

            // step-13 
            selectedCourses.forEach((item) => {
                count = count + parseInt(item.credit);
            })

            // console.log(count)

            // step-14 
            const totalHourRemaining = Math.max(20 - count, 0);
            // step-16 
            setRemaining(totalHourRemaining)


            // step-25 
            if (count > 20) {
                return toast("⛔ Not enough credit hours 😢 ")
            } else {
                // step-21 
                const totalCreditHourSum = parseInt(course.credit)
                // console.log(totalCreditHourSum)
                setTotalCreditHour(totalCreditHour + totalCreditHourSum)


                setSelectedCourses([...selectedCourses, course])
            }
        }

    }

    // console.log(selectedCourses)



    return (
        <div className='container'>

            < ToastContainer />

            <div className="home-container">
                <div className="card-container">

                    {/*  step-3  */}
                    {allCourse.map(course => (
                        <div key={course.id} className="card">
                            <div >
                                <img className="card-img" src={course.image} alt="" />
                            </div>
                            <div className='card-body'>
                                <h2 className='card-course-name'>{course.name}</h2>
                                <p className='course.desc'><small>{course.desc}</small></p>
                                <div className="info">
                                    <p className='price'><svg xmlns="http://www.w3.org/2000/svg" width="22" height="16" viewBox="0 0 24 24" fill="none">
                                        <path d="M12 1V23" stroke="#1C1B1B" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M17 5H9.5C8.57174 5 7.6815 5.36875 7.02513 6.02513C6.36875 6.6815 6 7.57174 6 8.5C6 9.42826 6.36875 10.3185 7.02513 10.9749C7.6815 11.6313 8.57174 12 9.5 12H14.5C15.4283 12 16.3185 12.3687 16.9749 13.0251C17.6313 13.6815 18 14.5717 18 15.5C18 16.4283 17.6313 17.3185 16.9749 17.9749C16.3185 18.6313 15.4283 19 14.5 19H6" stroke="#1C1B1B" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>Price: {course.price}</p>

                                    <p className='credit'><svg xmlns="http://www.w3.org/2000/svg" width="15" height="12" viewBox="0 0 20 19" fill="none">
                                        <path d="M10 3.042C8.35161 1.56336 6.2144 0.746944 4 0.750001C2.948 0.750001 1.938 0.930002 1 1.262V15.512C1.96362 15.172 2.97816 14.9989 4 15C6.305 15 8.408 15.867 10 17.292M10 3.042C11.6483 1.56328 13.7856 0.746849 16 0.750001C17.052 0.750001 18.062 0.930002 19 1.262V15.512C18.0364 15.172 17.0218 14.9989 16 15C13.7856 14.9969 11.6484 15.8134 10 17.292M10 3.042V17.292" stroke="#1C1B1B" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg> Credit: {course.credit}</p>
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