import React from 'react'

import BarLoader from 'react-spinners/BarLoader'
// Replace this with your Loading component
// Use fancy animated SVGs if you wish.
export default (props) => 
  <div className='d-flex justify-content-center mt-5 mb-5'>
    <BarLoader color='#8E44AD' />
  </div>
