import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import * as actionCreators from '../actions/actionCreators'

import Vacation from '../components/Vacation'

class VacationList extends Component {
    render () {
      let list
      const { vacations } = this.props.places
      debugger
      console.log(vacations)
      if (vacations) {
        list =
          vacations.map((r, i) => <Vacation {...this.props} key={i} i={r.id} vacation={r} />)
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
  
  function mapStateToProps (state) {
    return {
      places: state.places,
      comments: state.comments
    }
  }
  
  function mapDispatchToProps (dispatch) {
    return { actionCreators: bindActionCreators(actionCreators, dispatch) }
  }
  
  export default withRouter(connect(mapStateToProps, mapDispatchToProps)(VacationList))