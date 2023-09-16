/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import './Cart.css'

// step-10
// step-18 receive remaining
// step-23 receive totalCreditHour
const Cart = ({ selectedCourses, remaining, totalCreditHour }) => {
    // console.log(selectedCourses)
    // console.log(remaining)
    return (
        <div className='cart-container'>

            {/* step-24  */}
            <h3>Total Credit Hour : {totalCreditHour} hr</h3>

            {/* step-19 set remaining  */}
            <h3>Credit Hour Remaining: {remaining} hr</h3>

            {/* // step-11  */}
            <h5>Total Course: {selectedCourses.length} </h5>
            <h5>Course Name:</h5>
            {selectedCourses.map((course) => (
                <li className='cart-li' key={course.id}>{course.name}</li>
            ))}

        </div>
    );
};

export default Cart;