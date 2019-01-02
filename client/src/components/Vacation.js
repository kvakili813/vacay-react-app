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

      <figcaption>
        <p>{vacation.name}</p>
        <div className='control-buttons'>
          <Link className='button' to={`/vacations/${vacation.place_id}`}>
            <span className='comment-count'>
              <span className='speech-bubble' />
              <span> {comments[vacation.place_id] ? comments[vacation.place_id].length : 0 }</span>
            </span>
          </Link>
        </div>
      </figcaption>
    </div>
    } else {
        show = <p>Loading...</p>
      }
      console.log(vacation)
      return (
        <figure className='grid-figure'>
          {show}
        </figure>
      )
    }