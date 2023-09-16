/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import './Cart.css'

// step-10 
const Cart = ({ selectedCourses }) => {
    // console.log(selectedCourses)
    return (
        <div className='cart-container'>
            {/* // step-11  */}   
            <h5>Total Course: {selectedCourses.length} </h5>
            <h5>Course Name:</h5>
            {selectedCourses.map((course) =>(
               <li className='cart-li'>{course.name}</li>
             ))}
             
        </div>
    );
};

export default Cart;