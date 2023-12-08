import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addReply } from '../redux/commentsSlice';
import ReplyForm from './ReplyForm';

const Comment = ({ comment }) => {
  const [showReplyForm, setShowReplyForm] = useState(false);
  const dispatch = useDispatch();

  const handleReply = (reply) => {
console.log(reply,"reep")

    dispatch(addReply({ commentId: comment.id, reply }));
    setShowReplyForm(false);
  };

  return (
    <div>
      <div>{comment.text}</div>
      <button onClick={() => setShowReplyForm(!showReplyForm)}>
        {showReplyForm ? 'Cancel Reply' : 'Reply'}
      </button>
      {showReplyForm && <ReplyForm onReply={handleReply} />}
      {comment.replies && comment.replies.length > 0 && (
        <div style={{ marginLeft: '20px' }}>
          {comment.replies.map((reply) => (
            <Comment key={reply.id} comment={reply} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Comment;
