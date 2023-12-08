// src/components/CommentForm.js

import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addComment, addReply } from '../redux/commentsSlice';

const CommentForm = ({ parentId }) => {
  const [text, setText] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim() === '') return;

    const newComment = {
      id: Date.now(),
      text,
      replies: [], // Initialize replies array
    };

    if (parentId) {
      // If parentId is provided, it's a reply
      dispatch(addReply({ commentId: parentId, reply: newComment }));
    } else {
      // If no parentId, it's a top-level comment
      dispatch(addComment(newComment));
    }

    setText('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <textarea value={text} onChange={(e) => setText(e.target.value)} />
      <br />
      <button type="submit">Comment</button>
    </form>
  );
};

export default CommentForm;
