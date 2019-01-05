import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Link, withRouter } from 'react-router-dom'
import * as actionCreators from '../actions/actionCreators'

class App extends Component {
  componentWillMount () {
    this.props.actionCreators.fetchPlaces()
  }
  render () {
    return (
      <div>
        <Link to='/'><h1 className='title'>Vacay View</h1></Link>
        {this.props.children}
      </div>
    )
  }
}

function mapStateToProps (state) {
  return {
    vacations: state.vacations,
    comments: state.comments
  }
}

function mapDispatchToProps (dispatch) {
  return { actionCreators: bindActionCreators(actionCreators, dispatch) }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App))

// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <header className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <p>
//             Edit <code>src/App.js</code> and save to reload.
//           </p>
//           <a
//             className="App-link"
//             href="https://reactjs.org"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             Learn React
//           </a>
//         </header>
//       </div>
//     );
//   }
// }

// export default App;
