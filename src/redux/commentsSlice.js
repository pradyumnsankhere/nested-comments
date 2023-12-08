// src/redux/commentsSlice.js

import { createSlice } from '@reduxjs/toolkit';



const findCommentById = (comments, commentId) => {
  for (const comment of comments) {
    if (comment.id === commentId) {
      return comment;
    }

    if (comment.replies) {
      const nestedComment = findCommentById(comment.replies, commentId);
      if (nestedComment) {
        return nestedComment;
      }
    }
  }

  return null;
};



const commentsSlice = createSlice({
  name: 'comments',
  initialState: { comments: [] },
  reducers: {
    addComment: (state, action) => {
      if (!state.comments) {
        state.comments = []; // Ensure that state.comments is an array
      }
      state.comments.push(action.payload);
    },
    addReply: (state, action) => {
      const { commentId, reply } = action.payload;
      const comment = findCommentById(state.comments, commentId);

      if (comment) {
        if (!comment.replies) {
          comment.replies = [];
        }
        comment.replies.push(reply);
      }
    },
    setComments: (state, action) => {
      state.comments = action.payload;
    },
  },
});

export const { addComment, addReply, setComments } = commentsSlice.actions;
export default commentsSlice.reducer;
