import React from 'react'
import { withRouter } from 'react-router-dom'


class Comments extends React.Component {
  handleSubmit = (e) => {
    const { id } = this.props.match.params
    const author = this.inputAuthor.value
    const comment = this.refs.comment.value
    this.props.addComment(id, author, comment)
    this.refs.commentForm.reset()
  }

  // renderComment (comment, i) {
  //   return (
  //     <div className='comment' key={i}>
  //       <p>
  //         <strong>{comment.user}</strong>
  //         {comment.text}
  //         {/*<button className='remove-comment' onClick={this.props.removeComment.bind(null, this.props.match.params.id, i}>&times;</button>*/}
  //       </p>
  //     </div>
  //   )
  // }
getAuthor = ref => {this.inputAuthor = ref}
  render () {
    return (
      <div className='comments'>
        {this.props.vacationComments.map((comment, index) => (
          <div className='comment' key={index}>
          <p>
            <strong>{comment.user}</strong>
            {comment.text}
            {/*<button className='remove-comment' onClick={this.props.removeComment.bind(null, this.props.match.params.id, i}>&times;</button>*/}
          </p>
        </div>
        ))}
        <form ref='commentForm' className='comment-form' >
          <input type='text' ref={this.getAuthor} placeholder='author' />
          <input type='text' ref='comment' placeholder='comment' />
          <button type='button' onClick={this.handleSubmit} />
        </form>
      </div>
    )
  }
}

export default withRouter(Comments)
