import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as actionCreators from '../actions/actionCreators'

// Components
import Restaurant from './Vacation'
import Comments from './Comments'

class Single extends Component {
    render () {
      let single
      if (this.props.places.vacations) {
        const { id } = this.props.match.params
        const i = this.props.places.vacations.findIndex((r) => r.place_id === id)
        const vacation = this.props.places.vacations[i]
        const vacationComments = this.props.comments[id] || []
        single =
          <div className='single'>
            <vacation i={i} vacation={vacation} {...this.props} />
            <Comments vacationComments={vacationComments} {...this.props} />
          </div>
          } else {
            single = <div className='single'>
              <p>Loading...</p>
            </div>
          }
          return (
            <div>
              {single}
            </div>
          )
        }
      }
      