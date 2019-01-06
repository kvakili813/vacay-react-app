import React from 'react'

const Comment = ({ comment: { user, text }}) => 
    <div className='comment' key={i}>
        <p>
            <strong>{user}</strong>
            {text}
            {/*<button className='remove-comment' onClick={this.props.removeComment.bind(null, this.props.match.params.id, i}>&times;</button>*/}
        </p>
    </div>

export default Comment