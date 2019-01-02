import React from 'react'
import { Link } from 'react-router-dom'

const Home = () =>
  <div>
    <h2>Welcome to Vacay View!</h2>
    <h3>Choose an option below to discuss your favorite vacation destinations.</h3>
    <ul>
      <li><Link to='/vacations'>Vacations</Link></li>
    </ul>
  </div>

export default Home