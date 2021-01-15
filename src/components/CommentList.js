import React from 'react';
import Comment from "./Comment"
/** CommentList: shows list of comments passed down as props.
 *
 * Comments can be deleted by clicking next to them; this is handled by
 * the parent.
 *
 */

function CommentList({comments = [], deleteComment}) { //pulls comments and func from parent
  return (
    comments.map(c => ( //renders each comment
      <Comment
        key={c.id}
        id={c.id}
        text={c.text}
        deleteComment={deleteComment} 
      />
    )));
}

export default CommentList;
