import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import * as actionCreators from '../actions/actionCreators'

import vacation from './vacation'

class VacationList extends Component {
    render () {
      let list
      const { vacations } = this.props.places
      console.log(vacations)
      if (vacations) {
        list =
          vacations.map((r, i) => <vacation {...this.props} key={i} i={r.id} vacation={r} />)
      } else {
        list = <p>Loading...</p>
      }
      return (
        <div className='list'>
          {list}
        </div>
      )
    }
  }
  