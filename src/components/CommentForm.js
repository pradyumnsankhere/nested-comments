import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addComment, addReply } from "../redux/commentsSlice";
import {
  Box,
  Button,
  TextField,
} from "@mui/material";

const CommentForm = ({ parentId }) => {
  const [text, setText] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim() === "") return;

    const newComment = {
      id: Date.now(),
      text,
      replies: [], 
    };

    if (parentId) {
      
      dispatch(addReply({ commentId: parentId, reply: newComment }));
    } else {
      
      dispatch(addComment(newComment));
    }

    setText("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <Box sx={{ p:3,width:"40vw"}}>
        <TextField
        style={{width:"100%"}}
          id="outlined-multiline-static"
          label="Comment"
          multiline
          maxRows={10}
          color="primary"
          minRows={2}
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <div style={{paddingTop:"5px"}}>
          <Button type="submit" variant="outlined" color="primary">
            + Add Comment
          </Button>
        </div>
      </Box>
    </form>
  );
};

export default CommentForm;
