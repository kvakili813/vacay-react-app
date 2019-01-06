import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { bindActionCreators, compose } from 'redux'
import { connect } from 'react-redux'
import * as actionCreators from '../actions/actionCreators'

// Components
import Vacation from '../components/Vacation'
import Comments from '../components/Comments'
const Single = ({places, match, comments, addComment}) => {
  if (places.vacations) {
    const { id } = match.params
    const i = places.vacations.findIndex((r) => r.place_id === id)
    const vacation = places.vacations[i]
    const vacationComments = comments[id] || []
    return (
      <div>
<div className='single'>
            <Vacation comments={comments} vacation={vacation} />
            <Comments vacationComments={vacationComments} addComment={addComment}/>
            
          </div>    </div>
    )
  } else {
    return (
    <div className='single'>
      <p>Loading...</p>
    </div>
    )
  }
  
  }
// class Single extends Component {
//     render () {
//       let single
//       if (this.props.places.vacations) {
//         const { id } = this.props.match.params
//         const i = this.props.places.vacations.findIndex((r) => r.place_id === id)
//         const vacation = this.props.places.vacations[i]
//         const vacationComments = this.props.comments[id] || []
//         single =
//           <div className='single'>
//             <Vacation i={i} vacation={vacation} {...this.props} />
//             <Comments vacationComments={vacationComments} {...this.props} />
//           </div>
//           } else {
//             single = <div className='single'>
//               <p>Loading...</p>
//             </div>
//           }
//           return (
//             <div>
//               {single}
//             </div>
//           )
//         }
//       }

      function mapStateToProps (state) {
        return {
          places: state.places,
          comments: state.comments
        }
      }
      
      function mapDispatchToProps (dispatch) {
        return bindActionCreators(actionCreators, dispatch)
      }
      
      export default compose(withRouter,connect(mapStateToProps, mapDispatchToProps))(Single)
      
      