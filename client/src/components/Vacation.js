import React from 'react'
import { Link } from 'react-router-dom'

export default (props) => {
  const { vacation, comments } = props
  let show
  if (vacation) {
    show = <div>
      <div className='grid-photo-wrap'>
        <Link to={`/vacations/${vacation.place_id}`}>
          <img src={`${vacation.image_url}`} alt={vacation.name} className='grid-photo' />
        </Link>
      </div>